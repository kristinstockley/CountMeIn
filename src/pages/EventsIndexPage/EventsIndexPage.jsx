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
						<div className="container-fluid">
							<form className="d-flex" role="search">
								<input
									className="form-control me-2"
									type="search"
									placeholder="Search"
									value={searchQuery}
									onChange={handleSearchChange}
									aria-label="Search"
								/>
								<button className="btn btn-outline-success" type="submit">
									Search
								</button>
							</form>
						</div>
					</nav>
				</div>

				<h1>Event Countdowns</h1>

				<div className="row row-cols-1 row-cols-md-2 g-4">
					<EventsList events={events} />
				</div>
			</main>
		</>
	);
}
