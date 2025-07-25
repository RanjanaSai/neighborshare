import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddItem from './pages/AddItem';
import ItemDetails from './pages/ItemDetails';
import MyRequests from './pages/MyRequests';
import MapView from './pages/MapView';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-item" element={<AddItem />} />
        <Route path="/items/:id" element={<ItemDetails />} />
        <Route path="/my-requests" element={<MyRequests />} />
        <Route path="/map" element={<MapView />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
