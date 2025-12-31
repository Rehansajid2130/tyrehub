import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Tyre } from '@/data/products';

export interface CartItem {
  tyre: Tyre;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (tyre: Tyre, quantity?: number) => void;
  removeFromCart: (tyreId: string) => void;
  updateQuantity: (tyreId: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (tyre: Tyre, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.tyre.id === tyre.id);
      if (existing) {
        return prev.map((item) =>
          item.tyre.id === tyre.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { tyre, quantity }];
    });
  };

  const removeFromCart = (tyreId: string) => {
    setItems((prev) => prev.filter((item) => item.tyre.id !== tyreId));
  };

  const updateQuantity = (tyreId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(tyreId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.tyre.id === tyreId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotal = () => {
    return items.reduce((total, item) => total + item.tyre.price * item.quantity, 0);
  };

  const getItemCount = () => {
    return items.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotal,
        getItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
