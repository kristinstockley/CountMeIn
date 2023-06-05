import { eventsIndexRequest } from '../../utilities/events-api';
import { useEffect, useState } from 'react'
import EventsList from '../../components/EventsList/EventsList';
import './EventsIndexPage.css';


export default function EventsIndexPage(){
    const [events, setEvents] = useState([])
    useEffect(()=>{
        async function getEvents(){
            const events = await eventsIndexRequest();
            setEvents(events)
        }
        getEvents();
    }, [])
    return(
        <main className='EventsIndexPage'>
        <>
        <h1>Event Countdowns</h1>
        <EventsList events={events}></EventsList>
        </>
        </main>
    )
}