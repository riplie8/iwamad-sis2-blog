import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { PostsList } from "./pages/PostsList";
import { PostDetail } from "./pages/PostDetail";
import { Contact } from "./pages/Contact";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";

export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route
          element={
            <Layout
              isAuthenticated={isAuthenticated}
              onSignOut={() => setIsAuthenticated(false)}
            />
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostsList />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/dashboard"
            element={
              isAuthenticated ? (
                <Dashboard />
              ) : (
                <Login onSignIn={() => setIsAuthenticated(true)} />
              )
            }
          />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;