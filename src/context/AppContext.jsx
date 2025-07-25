import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockItems } from '../data/mockItems';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [items, setItems] = useState(() => {
        const saved = localStorage.getItem('items');
        return saved ? JSON.parse(saved) : mockItems;
    });

    const [requests, setRequests] = useState(() => {
        const saved = localStorage.getItem('requests');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

    useEffect(() => {
        localStorage.setItem('requests', JSON.stringify(requests));
    }, [requests]);

    return (
        <AppContext.Provider value={{ items, setItems, requests, setRequests }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
