import { Link } from 'react-router-dom';
import { InfoCircle } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';

export default function EventsListItem({ event }) {
  const countdown = calculateCountdown(event.date);
  const [remainingTime, setRemainingTime] = useState(countdown);



  useEffect(() => {
    const timer = setInterval(() => {
      const updatedCountdown = calculateCountdown(event.date);
      setRemainingTime(updatedCountdown);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [event.date]);

  const getTagColorClass = (tag) => {
    switch (tag) {
      case 'travel':
        return 'tag-color-travel';
      case 'birthday':
        return 'tag-color-birthday';
      case 'family':
        return 'tag-color-family';
      case 'business':
        return 'tag-color-business';
      case 'concert':
        return 'tag-color-concert';
      case 'wedding':
        return 'tag-color-wedding';
      case 'sports':
        return 'tag-color-sports';
      case 'social':
        return 'tag-color-social';
      case 'other':
        return 'tag-color-other';
      default:
        return '';
    }
  };


  return (

    <div class="card h-100">
      <div className={`EventListItem ${getTagColorClass(event.tag)}`}>

        <div className="card-body">
          <div className="d-flex justify-content-between">
            <span className={`badge-warning ${getTagColorClass(event.tag)}`} >{event.tag}</span>
            <Link to={`/events/${event._id}`} className="link-no-underline">

              <InfoCircle size={30} color="lightgray" />
            </Link>
          </div>
          <br />

          <h1 className="card-title mb-4" >{event.name}</h1>
          {remainingTime && (
            <div className="countdown mb-4">
              <h2 className={`${getTagColorClass(event.tag)}`}>
                {remainingTime}
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>

  );




  function calculateCountdown(eventDate) {
    const currentDate = new Date();
    const targetDate = new Date(eventDate);
    const timeDiff = targetDate - currentDate;

    if (timeDiff > 0) {
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    return null;

  }
}
