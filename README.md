1. Neighborhood Resource Sharing App

A React.js web application that enables residents of a neighborhood to lend and borrow household items such as tools, books, and appliances — all to promote sustainability and community bonding.

---

2.  Live Demo

  
 `https://neighborshare.vercel.app`

---

3. Tech Stack

Frontend: React.js (with functional components and hooks)
Routing: React Router
Styling: Plain CSS (responsive and mobile-friendly)
Map: React Leaflet (with mock geolocation data)
Data Management: React State + Context + `localStorage` for persistence
Deployment: Vercel 

---

4. Setup Instructions

1. **Clone the repository**

>
git clone https://github.com/yourusername/neighborhood-sharing-app.git
cd neighborhood-sharing-app

2.**Install dependencies**

>npm install

3.**Start the development server**
>npm start

4. **Open http://localhost:3000 in your browser.**

<!-- Features -->
**Core Pages**
 *  Home (/) — Item catalog with search, filter, sort, and mark-as-sold

* Item Details (/items/:id) — Full item view with request option (mocked)

* Add Item (/add-item) — Form with validation and submit feedback

* 404 Page (*) — Custom error page with navigation

**Bonus Features Implemented**

* Map View (/map) — Interactive map with item pins from mock geo-data

* localStorage Persistence — Items and statuses (sold/borrowed) saved locally

* My Requests (in progress) — Data array created for future status handling

**Mock Data**
* All data is mocked in frontend:

* Item list (tools, appliances, etc.)

* Geolocation for map pins

* User lending/borrowing status (no authentication)



**Project Structure**

src/
├── components/         # Reusable UI components
├── context/            # App-wide state and item management
├── data/               # Mock item and map data
├── pages/              # Each route/page (Home, Map, AddItem, etc.)
├── styles/             # css files for componenets and pages
├── App.js              # Main app layout and routes
└── index.js            # React root entry point


**Known Issues**
* No real backend — items and map data is  simulated.

* "My Requests" page structure exists but functionality is not yet implemented.

**Future Improvements**


* Add mock or real user login

* Improve "My Requests" logic (e.g. cancel request, status change)

* Profile view with editable status

* Notifications (mock or real)

* Full responsive nav menu

* using Tailwind  

**Author**
Ranjana
Ranjanasai(GitHub)

