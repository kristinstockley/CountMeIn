import { useRef, useState } from 'react';
import { createEventRequest } from '../../utilities/events-api';
import { useNavigate } from 'react-router-dom';
import './NewEventForm.css';



export default function NewEventForm() {
  const navigate = useNavigate();
  const nameRef = useRef('');
  const dateRef = useRef('');
  const timeRef = useRef('');
  const detailsRef = useRef('');
  const locationRef = useRef('');
  const [error, setError] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');



  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    const eventDate = new Date(dateRef.current.value);
    const eventTime = timeRef.current.value;
    const eventDateTime = new Date(
      eventDate.getFullYear(),
      eventDate.getMonth(),
      eventDate.getDate(),
      eventTime.substr(0, 2),
      eventTime.substr(3, 2)
    );

    const newEvent = {
      name: nameRef.current.value,
      date: eventDateTime.toISOString(),
      details: detailsRef.current.value,
      location: locationRef.current.value,
      category: selectedCategory,
    };

    try {
      await createEventRequest(newEvent);
      navigate('/events');
    } catch (err) {
      setError('Invalid Input');
    }
  }


  return (
    <>
      <div className="NewEventForm">
        <div className="form-container-md">
          <div className="row justify-content-center">
            <div className="card border-warning shadow-sm">
              <div className="card-body">
                {error && <p>{JSON.stringify(error)}</p>}
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Event:
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      ref={nameRef}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="date" className="form-label">
                      Date:
                    </label>
                    <input
                      type="date"
                      id="date"
                      className="form-control"
                      ref={dateRef}
                      required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="time" className="form-label">
                      Time:
                    </label>
                    <input
                      type="time"
                      id="time"
                      className="form-control"
                      ref={timeRef} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="details" className="form-label">
                      Details:
                    </label>
                    <textarea
                      type="text"
                      id="details"
                      className="form-control"
                      ref={detailsRef} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="location" className="form-label">
                      Location:
                    </label>
                    <input
                      type="text"
                      id="location"
                      className="form-control"
                      ref={locationRef} />
                  </div>
                  <label className="form-label">
                    Category:
                    <div className='form-check'>
                      <div className="form-check form-check-inline">
                        <input
                          type="checkbox"
                          value="travel"
                          id="category-travel"
                          className="form-check-input"
                          onChange={(e) => setSelectedCategory(e.target.value)}
                        />
                        <label htmlFor="category-travel" className="form-check-label">
                          Travel
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          type="checkbox"
                          value="birthday"
                          id="category-birthday"
                          className="form-check-input"
                          onChange={(e) => setSelectedCategory(e.target.value)}
                        />
                        <label htmlFor="category-birthday" className="form-check-label">Birthday
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <label htmlFor="category-family" className="form-check-label">
                          <input
                            type="checkbox"
                            value="family"
                            id="category-family"
                            className="form-check-input"
                            onChange={(e) => setSelectedCategory(e.target.value)}
                          />Family
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          type="checkbox"
                          value="business"
                          id="category-business"
                          className="form-check-input"
                          onChange={(e) => setSelectedCategory(e.target.value)}
                        />
                        <label htmlFor="category-business" className="form-check-label">
                          Business
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          type="checkbox"
                          value="concert"
                          id="category-concert"
                          className="form-check-input"
                          onChange={(e) => setSelectedCategory(e.target.value)}
                        />
                        <label htmlFor="category-concert" className="form-check-label">
                          Concert
                        </label>
                      </div>

                      <div className="form-check form-check-inline">
                        <input
                          type="checkbox"
                          value="wedding"
                          id="category-wedding"
                          className="form-check-input"
                          onChange={(e) => setSelectedCategory(e.target.value)}
                        />
                        <label htmlFor="category-wedding" className="form-check-label">
                          Wedding
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          type="checkbox"
                          value="sports"
                          id="category-sports"
                          className="form-check-input"
                          onChange={(e) => setSelectedCategory(e.target.value)}
                        />
                        <label htmlFor="category-sports" className="form-check-label">
                          Sports
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <label htmlFor="category-social" className="form-check-label">
                          <input
                            type="checkbox"
                            value="social"
                            id="category-social"
                            className="form-check-input"
                            onChange={(e) => setSelectedCategory(e.target.value)}
                          />Social
                        </label>

                      </div>

                    </div>
                  </label>

                  <br />
                  <button className="btn border-warning">Add Event</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
