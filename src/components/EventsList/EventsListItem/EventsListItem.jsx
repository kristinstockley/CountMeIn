import { Link } from 'react-router-dom';
import { InfoCircle } from 'react-bootstrap-icons';
import { useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import './EventsListItem.css';
import getCategoryColorClass from '../../utils/getCategoryColorClass';
import { calculateCountdown } from '../../utils/calculateCountdown';


export default function EventsListItem({ event }) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
    return date.toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const remainingTime = calculateCountdown(event.date);




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

  if (new Date(event.date) <= currentTime) {
    return null;
  }


  return (
    <main className="EventListItem">
      


<div className="card">
      <div className={`events-list-item ${getCategoryColorClass(event.category)}`}>
        <div className="badge-container">
          <span className={`badge-warning ${getCategoryColorClass(event.category)}`}>
            {event.category}
          </span>
        </div>
        <div className="info-icon-container">
          <Link to={`/events/${event._id}`}>
            <InfoCircle />
          </Link>
        </div>
        <div className="events-list-item-info">
          <div className="events-list-item-info-name">{event.name}</div>
          <div className="events-list-item-info-date">{formatDate(event.date)}</div>
          <div className="events-list-item-info-location">{event.location}</div>
        </div>
        <div className='countdown'>{renderCountdown()}
        </div>
      </div>
      </div>
    </main>
  );
}

