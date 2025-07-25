import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { mockMapItems } from '../data/mockMapItems';



// Optional: fix default icon not showing issue
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
const DefaultIcon = L.icon({ iconUrl, shadowUrl: iconShadow });
L.Marker.prototype.options.icon = DefaultIcon;


const categories = ["All", "Tools", "Outdoors", "Kitchen", "Fitness", "Games"];

export default function MapViewPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [showAvailableOnly, setShowAvailableOnly] = useState(false);

    const filteredItems = mockMapItems.filter((item) => {
        return (
            (selectedCategory === "All" || item.category === selectedCategory) &&
            (!showAvailableOnly || item.available)
        );
    });

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Item Map</h2>

            {/* Filters */}
            <div className="flex gap-4 mb-4">
                <select
                    className="border rounded px-2 py-1"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
                <label className="flex items-center gap-1">
                    <input
                        type="checkbox"
                        checked={showAvailableOnly}
                        onChange={(e) => setShowAvailableOnly(e.target.checked)}
                    />
                    Available Only
                </label>
            </div>

            {/* Map */}
            <MapContainer className="leaflet-container" center={[28.462, 77.04]} zoom={13} style={{ height: "500px", width: "100%" }}>
                <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {filteredItems.map((item) => (
                    <Marker key={item.itemId} position={[item.lat, item.lng]}>
                        <Popup>
                            <div>
                                <strong>{item.name}</strong>
                                <p>{item.address}</p>
                                <p>Category: {item.category}</p>
                                <Link className="text-blue-500 underline" to={`/items/${item.itemId}`}>
                                    View Details
                                </Link>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}
