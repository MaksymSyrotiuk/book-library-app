# Book Library App  

**Book Library App** is a modern **React + Redux** application for managing a personal library.  
Users can **add books manually**, fetch them from an **API**, or use a **built-in JSON data source**.  
Books can be **filtered by title/author**, marked as **favorites**, and removed when no longer needed.  

---

## 📂 Project Structure  

```tree
book-library-app/
│
├── api/                   # Backend API (Node.js + Express)
│   ├── data/              # JSON data source
│   ├── index.js           # API entry point
│   ├── package.json       # API dependencies
│   └── package-lock.json
│
├── frontend/              # Frontend (React + Redux)
│   ├── public/            # Static assets
│   ├── src/               # React source code
│   ├── build/             # Production build
│   ├── package.json       # Frontend dependencies
│   ├── package-lock.json
│   └── README.md
│
├── .gitignore
├── package.json           # Global dependencies (optional)
└── package-lock.json 
```

## Installation & Setup  

### 1. Requirements  
- Node.js 18+  
- npm or yarn  

---

### 2. Clone the Repository  
```bash
git clone https://github.com/MaksymSyrotiuk/book-library-app.git
cd book-library-app
```

### 3. Install Dependencies  

For **API**:  
```bash
cd api
npm install
```

For **Frontend**:  
```bash
cd frontend
npm install
```

### 4. Run the Project  

🔹 Start the **API**:  
```bash
cd api
npm start
```
Default API endpoint: [http://localhost:5000](http://localhost:5000)  


🔹 Start the **Frontend**:  
```bash
cd frontend
npm start
```
Default API endpoint: [http://localhost:3000/book-library-app](http://localhost:3000/book-library-app) 

---

## Features  

- **Add Books** – manually, from API, or via JSON data  
- **Search & Filter** – by title or author  
- **Favorites** – mark books as favorites with a dedicated view  
- 🗑**Remove Books** – delete books when no longer needed  
- **Redux State Management** – centralized app state for smooth UI  
- **Responsive UI** – works on desktop and mobile  

---

## Notes  

- API must be running for fetching data from backend.  
- You can also use the built-in JSON source if backend is not required.  
- For production, run:  
```bash
cd frontend
npm run build
```

## License

This project is open-source and available under the **MIT License**.
