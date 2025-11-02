import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { BhikkuList } from './pages/BhikkuList';
export function App() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bhikkhu" element={<BhikkuList />} />
        <Route path="/temples" element={<Dashboard />} />
        <Route path="/dhamma-school" element={<Dashboard />} />
        <Route path="/teachers" element={<Dashboard />} />
        <Route path="/analytics" element={<Dashboard />} />
        <Route path="/admin" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>;
}