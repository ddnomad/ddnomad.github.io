import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';

import "normalize.css";

import "@/styles/main.scss";


function main() {
    const root = document.getElementById("root");
    
    if (!root) {
        throw new Error("Root element not found");
    }
    
    createRoot(root).render(
        <StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<h1>Hello, world!</h1>} />
                </Routes>
            </BrowserRouter>
        </StrictMode>
    );
}


main();
