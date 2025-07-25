import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import styles from '../styles/ItemDetails.module.css';

const ItemDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { items } = useAppContext();
    const item = items.find(i => i.id === id);

    if (!item) return <p>Item not found</p>;

    return (
        <div className={styles.container}>
            <h1>{item.name}</h1>
            <img src={item.image} alt={item.name} />
            <p>{item.description}</p>
            <p><strong>Owner:</strong> {item.owner}</p>
            <p><strong>Status:</strong> {item.sold ? 'Sold' : item.available ? 'Available' : 'Unavailable'}</p>
            {!item.sold && item.available && <button>Request to Borrow</button>}
            <button onClick={() => navigate('/')}>Back to Catalog</button>
        </div>
    );
};

export default ItemDetails;
