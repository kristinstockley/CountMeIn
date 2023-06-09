import { useNavigate, useParams } from "react-router-dom";
import { getEventRequest, deleteEventRequest } from "../../utilities/events-api";
import { useEffect, useState } from 'react';
import EventDetail from "../../components/EventDetail/EventDetail";
import {Spinner} from "react-bootstrap";
import './EventDetailPage.css';


export default function EventDetailPage() {
  let { eventId } = useParams();
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    async function getEvent() {
      const event = await getEventRequest(eventId);
      if (event) {
        setEvent(event);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } else {
        setError('No Event Found');
        setLoading(false);
      }
    }
    getEvent();
  }, [eventId]);

  async function handleDelete(e) {
    const deleteResponse = await deleteEventRequest(event._id);
    if (deleteResponse.data === 'success') {
      navigate('/events');
    }
  }

  return (
    <>
      <main className="EventDetailPage">

        {loading ? (

          <>
          
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
      <Spinner animation="grow" variant="light" />
      <Spinner animation="grow" variant="dark" />
          </>


        ) : (
          error ? <p>{error}</p>
            :
            <div className="card">

              <EventDetail event={event} handleDelete={handleDelete} setEvent={setEvent} />
            </div>

        )}
      </main>

    </>

  );
}
