import React from "react";
import { Outlet, NavLink } from "react-router-dom";

interface LayoutProps {
  isAuthenticated: boolean;
  onSignOut: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ isAuthenticated, onSignOut }) => {
  const getLinkStyle = ({ isActive }: { isActive: boolean }) =>
    isActive ? "text-blue-600 font-bold underline" : "text-gray-600 hover:text-blue-500";

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">Akhmet's blog</h1>
        <nav className="flex justify-center space-x-6 my-4">
          <NavLink to="/" className={getLinkStyle}>Home    </NavLink>
          <NavLink to="/posts" className={getLinkStyle}>Posts    </NavLink>
          <NavLink to="/contact" className={getLinkStyle}>Contact    </NavLink>
          <NavLink to="/dashboard" className={getLinkStyle}>Dashboard</NavLink>
          {isAuthenticated && (
            <button
              onClick={onSignOut}
              className="text-sm bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200"
            >
              Sign Out
            </button>
          )}
        </nav>
      </header>

      <main className="flex-grow max-w-4xl w-full mx-auto p-6">
        <Outlet />
      </main>

      <footer className="bg-white border-t py-4 text-center text-sm text-gray-500">
        Built by Akhmet Sultan
      </footer>
    </div>
  );
};