import React, { useState, useEffect, useRef } from 'react';
import { updateEventRequest } from '../../../utilities/events-api';
import './EditEventForm.css';


export default function EditEventForm({ event, setEvent, setEditFormIsOpen }) {
  const nameRef = useRef(event.name);
  const dateRef = useRef('');
  const timeRef = useRef(event.time);
  const detailsRef = useRef(event.details);
  const locationRef = useRef(event.location);
  const [selectedTag, setSelectedTag] = useState(event.tag || '');
  const [error, setError] = useState('');

  useEffect(() => {
    dateRef.current.value = event.date ? event.date.slice(0, 10) : '';
  }, [event.date]);

  async function handleSubmit(e) {
    e.preventDefault();
    const updatedEvent = {
      name: nameRef.current.value,
      date: dateRef.current.value,
      time: timeRef.current.value,
      details: detailsRef.current.value,
      location: locationRef.current.value,
      tag: selectedTag,
    };

    try {
      const newEvent = await updateEventRequest(event._id, updatedEvent);
      setEvent(newEvent);
      setEditFormIsOpen(false);
    } catch (err) {
      setError('Invalid Input');
    }
  }

  const handleTagClick = (e) => {
    const { value } = e.target;
    setSelectedTag(value);
  };


  return (
    <>
      {error && <p>{JSON.stringify(error)}</p>}
      <h1>Edit Event</h1>

      <div className="form-container-md mt-4">
        <div className="row justify-content-center">
          <div className="card h-100 border-primary shadow-sm">
            <div className="card-body">
              <form className="event-detail" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Event Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    ref={nameRef}
                    defaultValue={event.name}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="date" className="form-label">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="form-control"
                    ref={dateRef}
                    defaultValue={event.date ? event.date.slice(0, 10) : ''}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="time" className="form-label">
                    Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    className="form-control"
                    ref={timeRef}
                    defaultValue={event.time}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="details" className="form-label">
                    Details
                  </label>
                  <textarea
                    type="text"
                    id="details"
                    className="form-control"
                    ref={detailsRef}
                    defaultValue={event.details}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="location" className="form-label">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    className="form-control"
                    ref={locationRef}
                    defaultValue={event.location}
                  />
                </div>
                <label className="form-label">Category</label>


                  <div className="form-check">
                    <div>
                      <input
                        type="checkbox"
                        id="tag-travel"
                        value="travel"
                        className="form-check-input"
                        onClick={handleTagClick}
                        checked={selectedTag === 'travel'}
                      />
                      <label htmlFor="tag-travel" className="form-check-label">Travel</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="tag-birthday"
                        value="birthday"
                        className="form-check-input"
                        onClick={handleTagClick}
                        checked={selectedTag === 'birthday'}
                      />
                      <label htmlFor="tag-birthday" className="form-check-label">Birthday</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="tag-family"
                        value="family"
                        className="form-check-input"

                        onClick={handleTagClick}
                        checked={selectedTag === 'family'}
                      />
                      <label htmlFor="tag-family" className="form-check-label">Family</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="tag-business"
                        value="business"
                        className="form-check-input"

                        onClick={handleTagClick}
                        checked={selectedTag === 'business'}
                      />
                      <label htmlFor="tag-business" className="form-check-label">Business</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="tag-concert"
                        value="concert"
                        className="form-check-input"
                        onClick={handleTagClick}
                        checked={selectedTag === 'concert'}
                      />
                      <label htmlFor="tag-concert" className="form-check-label">Concert</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="tag-wedding"
                        value="wedding"
                        className="form-check-input"

                        onClick={handleTagClick}
                        checked={selectedTag === 'wedding'}
                      />
                      <label htmlFor="tag-wedding" className="form-check-label">Wedding</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="tag-sports"
                        value="sports"
                        className="form-check-input"

                        onClick={handleTagClick}
                        checked={selectedTag === 'sports'}
                      />
                      <label htmlFor="tag-sports" className="form-check-label">Sports</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="tag-social"
                        value="social"
                        className="form-check-input"
                        onClick={handleTagClick}
                        checked={selectedTag === 'social'}
                      />
                      <label htmlFor="tag-social" className="form-check-label">Social</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="tag-other"
                        value="other"
                        className="form-check-input"
                        onClick={handleTagClick}
                        checked={selectedTag === 'other'}
                      />
                      <label htmlFor="tag-other" className="form-check-label">Other</label>
                    </div>
                    </div>
                    <br />
                    <button className="btn btn-outline-primary shadow-sm">Update Event</button>

              </form>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
