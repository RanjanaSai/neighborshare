import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import styles from '../styles/AddItem.module.css';

const AddItem = () => {
  const { setItems } = useAppContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    condition: '',
    image: '',
    owner: 'Anonymous'
  });
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.description || !formData.category || !formData.condition || !formData.image) {
      setMessage('Please fill in all fields.');
      return;
    }

    const newItem = {
      ...formData,
      id: `itm${Date.now()}`,
      available: true,
      borrowedBy: null,
      sold: false
    };

    setItems((prev) => [...prev, newItem]);

    const success = Math.random() > 0.5;
    setMessage(success ? 'Item added successfully!' : 'Failed to add item. Please try again.');

    if (success) {
      setTimeout(() => navigate('/'), 1500);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="">Select Category</option>
          <option value="Tools">Tools</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Outdoors">Outdoors</option>
          <option value="Games">Games</option>
          <option value="Fitness">Fitness</option>
        </select>
        <input name="owner" placeholder="owner" value={formData.owner} onChange={handleChange} />
        <input name="condition" placeholder="Condition" value={formData.condition} onChange={handleChange} />
        <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default AddItem;
