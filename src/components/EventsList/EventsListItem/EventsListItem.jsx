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

      default:
        return '';
    }
  }

  return (

    <div className="row row-cols-1 row-cols-m-2">
      <div className={`col ${getCategoryColorClass(event.category)}`}>

        <div className="card">
          <div className="d-flex justify-content-between">
            <span className={`badge-warning ${getCategoryColorClass(event.category)}`} >{event.category}</span>
            <Link to={`/events/${event._id}`} className="link-no-underline">

              <InfoCircle size={30} color="lightgray" />
            </Link>
          </div>
          <br />

          <h1 className="card-title mb-4" >{event.name}</h1>
          {remainingTime && (
            <div className="countdown mb-4">
              <h2 className={`${getCategoryColorClass(event.category)}`}>
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
