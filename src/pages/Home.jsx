import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import ItemCard from '../components/ItemCard';
import styles from '../styles/Home.module.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const { items, setItems } = useAppContext();
    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState('');
    const navigate = useNavigate();

    const filtered = items
        .filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => {
            if (!sortBy) return 0;
            return a[sortBy].localeCompare(b[sortBy]);
        });




    const handleMarkSold = (id) => {
        const updated = items.map(item =>
            item.id === id ? { ...item, sold: true, available: false } : item
        );
        setItems(updated);
    };

    const handleViewDetails = (id) => navigate(`/items/${id}`);

    return (


        <div className={styles.container}>
            <h1 style={{ color: 'green' }}> Catalog</h1>
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search" />
            <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                <option value="">Sort</option>
                <option value="name">Name</option>
                <option value="category">Category</option>
                <option value="owner">Owner</option>
            </select>
            <div className={styles.grid}>
                {filtered.map(item => (
                    <ItemCard key={item.id} item={item} onMarkSold={handleMarkSold} onViewDetails={handleViewDetails} />
                ))}
            </div>
        </div >
    );
};

export default Home;