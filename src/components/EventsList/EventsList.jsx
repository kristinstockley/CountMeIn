import EventsListItem from './EventsListItem/EventsListItem'

export default function EventsList({events}){
    const eventsComponents = events.map(event => <EventsListItem key={event._id} event={event}></EventsListItem>)
    return (
        <>        
                    {eventsComponents}
        </>
    )
}