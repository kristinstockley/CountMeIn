import { eventsIndexRequest } from '../../utilities/events-api';
import { useEffect, useState } from 'react'
import EventsList from '../../components/EventsList/EventsList';
import './EventsIndexPage.css';


export default function EventsIndexPage() {
    const [events, setEvents] = useState([])
    useEffect(() => {
        async function getEvents() {
            const events = await eventsIndexRequest();
            setEvents(events)
        }
        getEvents();
    }, [])
    return (
        <main className='EventsIndexPage'>
            <h1>Event Countdowns</h1>
            <div className="container px-1 py-3">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <EventsList events={events}></EventsList>
                </div></div>
        </main>
    )
}