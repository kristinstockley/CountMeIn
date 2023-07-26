import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EditEventForm from './EditEventForm/EditEventForm';
import { format } from 'date-fns';
import getCategoryColorClass from '../utils/getCategoryColorClass';
import Countdown from 'react-countdown';
import './EventDetail.css';
import {
  PencilSquare,
  GeoFill,
  Calendar3,
  Clock,
  XSquare,
  ArrowLeftSquare,
} from 'react-bootstrap-icons';

export default function EventDetail({ event, handleDelete, setEvent }) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [remainingTime, setRemainingTime] = useState(null);

  const formattedTime = event.time
    ? new Date(`2023-01-01T${event.time}`).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      })
    : '';

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = format(date, 'MM/dd/yyyy', { timeZone: 'UTC' });
    return formattedDate;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const calculateCountdown = () => {
      const timeDiff = new Date(event.date) - currentTime;
      if (timeDiff > 0) {
        setRemainingTime(timeDiff);
      } else {
        setRemainingTime(null);
      }
    };

    calculateCountdown();

    const interval = setInterval(() => {
      calculateCountdown();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [currentTime, event.date]);

  const renderCountdown = () => {
    if (remainingTime) {
      return (
        <Countdown
          date={Date.now() + remainingTime}
          intervalDelay={0}
          precision={0}
          renderer={({ days, hours, minutes, seconds }) => (
            <div className="countdown mb-4">
              <h2 id="countdown">
                {days}days {hours}h {minutes}m {seconds}s
              </h2>
            </div>
          )}
        />
      );
    } else {
      return null;
    }
  };

  const [editFormIsOpen, setEditFormIsOpen] = useState(false);

  function toggleEditForm() {
    setEditFormIsOpen((prevState) => !prevState);
  }

  return (
    <div className="EventDetail">
      {!editFormIsOpen && (
        <main>
          <div className="d-flex align-items-center">
            <Link to="/events" className="me-2">
              <ArrowLeftSquare size={30} color="white" />
            </Link>
            <h3>Back to Events</h3>
          </div>
          <h1 className="eventName">{event.name}</h1>
          <h2>{renderCountdown()}</h2>



          <div className={`card ${getCategoryColorClass(event.category)}`}>
            <div className="card-body">
              <p className="card-text">{event.details}</p>
              <div className="d-flex justify-content-center align-items-center mb-3">
                {event.date && (
                  <div className="d-flex align-items-center me-5">
                    <Calendar3 className="icon me-2" color='teal'size={30} />
                    <p className="card-text mb-0">
                      {formatDate(event.date)}
                    </p>
                  </div>
                )}
                {event.time && (
                  <div className="d-flex align-items-center">
                    <Clock className="icon me-2" color='teal' size={30} />
                    <p className="card-text mb-0">{formattedTime}</p>
                  </div>
                )}
              </div>
              <div className='d-flex justify-content-center'>
                {event.location && (
                  <div className="d-flex align-items-center mb-3">
                    <GeoFill className="icon me-2" color='teal' size={30} />
                    <p className="card-text mb-0">{event.location}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="card-footer">
              <Link to="#" onClick={toggleEditForm} className="btn btn-outline-light">
                <PencilSquare className="me-2" size={30} color="white" />
                Edit
              </Link>&nbsp;&nbsp;

              <Link to="#" onClick={handleDelete} className="btn btn-outline-light me-2">
                <XSquare className="me-2" color="red" size={30} />
                Delete
              </Link>
            </div>
          </div>

        </main>
      )}

      {editFormIsOpen && (
        <EditEventForm
          event={event}
          setEvent={setEvent}
          setEditFormIsOpen={setEditFormIsOpen}
        />
      )}
    </div>
  );
}
