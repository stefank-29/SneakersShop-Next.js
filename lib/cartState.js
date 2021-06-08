import { useContext, createContext, useState } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

//* provider
function CartStateProvider({ children }) {
    const [items, setItems] = useState(
        typeof window !== 'undefined' && localStorage.getItem('items') !== null
            ? [...JSON.parse(localStorage.getItem('items'))]
            : []
    );

    if (typeof window !== 'undefined') {
        // console.log([...JSON.parse(localStorage.getItem('items'))]);
    }

    function addToCart(item) {
        setItems([...items, item]);
        const forLocal = [...items, item];
        if (typeof window !== 'undefined') {
            localStorage.setItem('items', JSON.stringify(forLocal));
        }
    }

    return (
        <LocalStateProvider value={{ items, addToCart }}>
            {children}
        </LocalStateProvider>
    );
}

// custom hook for accessing the cart local state
function useCart() {
    // we use consumer to access local state
    //* consumer
    const all = useContext(LocalStateContext);
    return all;
}

export { CartStateProvider, useCart };
