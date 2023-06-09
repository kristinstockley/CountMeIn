import { useState } from 'react';
import { Link } from 'react-router-dom';
import EditEventForm from './EditEventForm/EditEventForm';
import './EventDetail.css';
import {
  PencilSquare,
  GeoFill,
  Calendar3,
  Clock,
  XSquare,
  ArrowLeftSquareFill,
} from 'react-bootstrap-icons';

export default function EventDetail({ event, handleDelete, setEvent }) {
  const [editFormIsOpen, setEditFormIsOpen] = useState(false);

  function toggleEditForm() {
    setEditFormIsOpen((prevState) => !prevState);
  }

  const formattedTime = event.time
    ? new Date(`2023-01-01T${event.time}`).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })
    : '';

  const getCategoryColorClass = (category) => {
    switch (category) {
      case 'travel':
        return 'category-color-travel';
      case 'birthday':
        return 'category-color-birthday';
      case 'family':
        return 'category-color-family';
      case 'business':
        return 'category-color-business';
      case 'concert':
        return 'category-color-concert';
      case 'wedding':
        return 'category-color-wedding';
      case 'sports':
        return 'category-color-sports';
      case 'social':
        return 'category-color-social';
      case 'other':
        return 'category-color-other';
      default:
        return '';
    }
  };

  return (

    <div className="EventDetail">
      {!editFormIsOpen && (

        <main>
          <h1>{event.name}</h1>

          <div className="d-flex align-items-center">
            <Link to="/events" className="me-2">
              <ArrowLeftSquareFill size={30} color="gold" />
            </Link>
            <h3>Back to Events</h3>
          </div>

          <div className={`card ${getCategoryColorClass(event.category)}`}>


            <h5 className="card-title">{event.name}</h5>
            <p className="card-text">{event.details}</p>
            <br />
            <ul className="d-flex justify-content-center">
              {event.date && (
                <li className="d-flex align-items-center me-5">
                  <Calendar3 className="me-2" size={30} />
                  <h4 className="card-text">
                    {new Date(event.date).toLocaleDateString()}
                  </h4>
                </li>
              )}
              {event.time && (
                <li className="d-flex align-items-center me-5">
                  <Clock className="me-2" size={40} />
                  <h4 className="card-text">{formattedTime}</h4>
                </li>
              )}
              {event.location && (
                <li className="d-flex align-items-center me-5">
                  <GeoFill className="me-2" size={30} />
                  <h4 className="card-text">{event.location}</h4>
                </li>
              )}
            </ul>
            <div className="edit">
              <ul className="justify-content-center d-flex">
                <li className="d-flex align-items-center me-5">
                  <Link to="#" onClick={toggleEditForm}>
                    <PencilSquare className="me-3" size={30} color="white" />
                  </Link>
                  <h5 className="card-text">Edit</h5>
                </li>
                <li className="d-flex align-items-center me-5">
                  <Link to="#" onClick={handleDelete}>
                    <XSquare className="me-3" color="red" size={30} />
                  </Link>
                  <h5 className="card-text">Delete</h5>
                </li>
              </ul>
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
