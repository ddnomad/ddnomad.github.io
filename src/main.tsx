import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import { HomeView } from "@/views";

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
                    <Route path="/" element={<HomeView />} />
                </Routes>
            </BrowserRouter>
        </StrictMode>
    );
}


main();
