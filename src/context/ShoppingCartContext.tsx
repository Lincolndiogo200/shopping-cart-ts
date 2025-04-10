import { createContext, ReactNode, useContext } from "react";

const shoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(shoppingCartContext);
}

type ShoppingCartProviderProps = {
  children: ReactNode;
};

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  return (
    <shoppingCartContext.Provider value={{}}>
      {children}
    </shoppingCartContext.Provider>
  );
}
