import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Header from './components/Header';
import Footer from './components/Footer'; 
import Eventdetails from './pages/Eventdetails';
import Upcoming from './pages/Upcoming';
import Event from './pages/Event';
import Profile from './pages/profile'; 
import UserManagement from './UserManagement'; 
import './App.css'; 

const sections = [
  { title: 'Home', url: '/home' },
  { title: 'Events', url: '/event' },
  { title: 'Upcoming', url: '/upcoming' }, 
];

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header title="MOSAIC" sections={sections} />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/event" element={<Event />} />
            <Route path="/event/:id" element={<Eventdetails />} /> 
            <Route path="/upcoming" element={<Upcoming />} />
            <Route path="/profile" element={<Profile />} /> 
            <Route path="/users" element={<UserManagement />} /> 
          </Routes>
        </main>
        <Footer title="Mosaic" description="For support or inquiries, please reach out to our team." />
      </div>
    </Router>
  );
};

export default App;
