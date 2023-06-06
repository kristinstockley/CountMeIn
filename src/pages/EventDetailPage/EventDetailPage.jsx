import { useNavigate, useParams } from "react-router-dom";
import { getEventRequest, deleteEventRequest } from "../../utilities/events-api";
import { useEffect, useState } from 'react';
import EventDetail from "../../components/EventDetail/EventDetail";
import { Spinner } from "reactstrap";
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
            <Spinner
              color="primary"
              type="grow"
              style={{
                margin: '5rem .5rem 0rem 0rem',
                height: '3rem',
                width: '3rem'
              }}
            >
              Loading...
            </Spinner>
            <Spinner
              color="secondary"
              type="grow"
              style={{
                margin: '2rem .5rem 0rem 0rem',

                height: '3rem',
                width: '3rem'
              }}
            >
              Loading...
            </Spinner>
            <Spinner
              color="success"
              type="grow"
              style={{
                margin: '2rem .5rem 0rem 0rem',

                height: '3rem',
                width: '3rem'
              }}
            >
              Loading...
            </Spinner>
            <Spinner
              color="danger"
              type="grow"
              style={{
                margin: '2rem .5rem 0rem 0rem',

                height: '3rem',
                width: '3rem'
              }}
            >
              Loading...
            </Spinner>
            <Spinner
              color="warning"
              type="grow"
              style={{
                margin: '2rem .5rem 0rem 0rem',

                height: '3rem',
                width: '3rem'
              }}
            >
              Loading...
            </Spinner>
            <Spinner
              color="info"
              type="grow"
              style={{
                margin: '2rem .5rem 0rem 0rem',

                height: '3rem',
                width: '3rem'
              }}
            >
              Loading...
            </Spinner>

            <Spinner
              color="dark"
              type="grow"
              style={{
                margin: '2rem .5rem 0rem 0rem',

                height: '3rem',
                width: '3rem'
              }}
            >
              Loading...
            </Spinner>
          </>


        ) : (
          error ? <p>{error}</p> 
          : 

          <EventDetail event={event} handleDelete={handleDelete} setEvent={setEvent} />
        )}
      </main>

    </>

  );
}
