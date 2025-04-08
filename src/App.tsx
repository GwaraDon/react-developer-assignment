import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import ProductDetail from "./components/ProductDetail/ProductDetail";

const App: React.FC = () => {
    return (
        <Router>
            <div className="min-h-screen flex flex-col">
                <header className="bg-secondary text-white px-8 py-4 shadow-md">
                    <h1 className="text-xl font-semibold">React Shop</h1>
                </header>
                <main className="flex-1 p-5 max-w-7xl mx-auto w-full">
                    <Routes>
                        <Route path="/" element={<ProductList />} />
                        <Route
                            path="/product/:id"
                            element={<ProductDetail />}
                        />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
