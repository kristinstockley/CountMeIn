import { eventsIndexRequest } from '../../utilities/events-api';
import { useEffect, useState } from 'react';
import EventsList from '../../components/EventsList/EventsList';
import './EventsIndexPage.css';

export default function EventsIndexPage() {
	const [events, setEvents] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');

	useEffect(() => {
		async function getEvents() {
			const filteredEvents = await eventsIndexRequest(searchQuery);
			setEvents(filteredEvents);
		}

		getEvents();
	}, [searchQuery]);

	const handleSearchChange = (event) => {
		setSearchQuery(event.target.value);
	};
	return (
		<>
			<main className="EventsIndexPage">
				<div className="container">
					<nav className="navbar bg-body-tertiary-dark">
						<div className="container justify-center">
							<form className="d-flex" role="search">
								<input
									className="form-control me-2"
									type="search"
									placeholder="Search"
									value={searchQuery}
									onChange={handleSearchChange}
									aria-label="Search"
								/>
								<button className="btn btn-outline-primary m-2" type="submit">
									Search
								</button>
							</form>
						</div>
					</nav>
				</div>
				<br />


				<h1>Event Countdowns</h1>


					<EventsList events={events} />
			</main>
		</>
	);
}
