import AuthPage from '../AuthPage/LoginPage';
import NewEventPage from '../NewEventPage/NewEventPage';
import EventsIndexPage from '../EventsIndexPage/EventsIndexPage';
import EventDetailPage from '../EventDetailPage/EventDetailPage';
import HomePage from '../HomePage/HomePage';
import './App.css';
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';
import SignUpPage from '../AuthPage/SignUpPage';




export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ?
        <>
          <NavBar setUser={setUser} user={user} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events/new" element={<NewEventPage />} />
            <Route path="/events" element={<EventsIndexPage />} />
            <Route path="/events/:eventId" element={<EventDetailPage />} />
            <Route path="/*" element={<Navigate to="/events" />} />

          </Routes>
        </>
        :
        <>
          <NavBar setUser={setUser} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<AuthPage setUser={setUser} />} />
            <Route path="/signup" element={<SignUpPage setUser={setUser} />} />
            <Route path="/*" element={<Navigate to="/" />} />


          </Routes>
        </>
      }
    </main>


  );
}