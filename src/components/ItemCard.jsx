import { Link } from "react-router-dom";
import styles from '../styles/ItemCard.module.css';
export default function ItemCard({ item, onMarkSold }) {
    return (
        <div className={`"styles.item-grid" ${item.sold ? "sold" : ""}`}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.category}</p>
            <p>Owner: {item.owner}</p>
            <p>Status: {item.sold ? "Sold" : item.available ? "Available" : "Borrowed"}</p>
            <Link to={`/items/${item.id}`} className="btn">View Details</Link>
            {!item.sold && (
                <button onClick={() => onMarkSold(item.id)} className="btn mark">
                    Mark as Sold
                </button>
            )}
        </div>
    );
}
