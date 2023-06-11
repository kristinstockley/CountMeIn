import { useState, useEffect, useRef } from 'react';
import { updateEventRequest } from '../../../utilities/events-api';
import './EditEventForm.css';


export default function EditEventForm({ event, setEvent, setEditFormIsOpen }) {
  const nameRef = useRef(event.name);
  const dateRef = useRef('');
  const timeRef = useRef(event.time);
  const detailsRef = useRef(event.details);
  const locationRef = useRef(event.location);
  const [selectedCategory, setSelectedCategory] = useState(event.category || '');
  const [error, setError] = useState('');


  useEffect(() => {
    dateRef.current.value = event.date ? event.date.slice(0, 10) : '';
  }, [event.date]);

  async function handleSubmit(e) {
    e.preventDefault();
    const updatedEvent = {
      name: nameRef.current.value,
      date: new Date(dateRef.current.value + 'T' + timeRef.current.value).toISOString(),
      details: detailsRef.current.value,
      location: locationRef.current.value,
      category: selectedCategory,
    };

    try {
      const newEvent = await updateEventRequest(event._id, updatedEvent);
      setEvent(newEvent);
      setEditFormIsOpen(false);
    } catch (err) {
      setError('Invalid Input');
    }
  }

  const handleCategoryClick = (e) => {
    const { value } = e.target;
    setSelectedCategory(value);
  };


  return (
    <>

      {error && <p>{JSON.stringify(error)}</p>}
      <div className='EditEventForm'>

      </div>
      <div className="form-container-md">
        <div className="row justify-content-center">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <h1>Edit Event</h1>

              <div className="row mb-4">
                <label htmlFor="name" className="col-sm-2 col-form-label col-form-label-lg">
                  Event
                </label>
                <div className="col">
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    ref={nameRef}
                    defaultValue={event.name}
                  />
                </div>
              </div>
              <div className="row mb-4">
                <label htmlFor="date" className="col-sm-2 col-form-label col-form-label-lg">
                  Date
                </label>
                <div className="col">
                  <input
                    type="date"
                    id="date"
                    className="form-control"
                    ref={dateRef}
                    defaultValue={event.date ? event.date.slice(0, 10) : ''}
                  />
                </div></div>
              <div className="row mb-4">
                <label htmlFor="time" className="col-sm-2 col-form-label col-form-label-lg">
                  Time
                </label>
                <div className="col">
                  <input
                    type="time"
                    id="time"
                    className="form-control"
                    ref={timeRef}
                    defaultValue={event.time}
                  />
                </div>
              </div>
              <div className="row mb-4">
                <label htmlFor="details" className="col-sm-2 col-form-label col-form-label-lg">
                  Details
                </label>
                <div className="col">

                  <textarea
                    type="text"
                    id="details"
                    className="form-control"
                    ref={detailsRef}
                    defaultValue={event.details}
                  />
                </div> </div>
              <div className="row g-2">
                <label htmlFor="location" className="col-sm-2 col-form-label col-form-label-lg">
                  Location
                </label>
                <div className="col">
                  <input
                    type="text"
                    id="location"
                    className="form-control"
                    ref={locationRef}
                    defaultValue={event.location}
                  />
                </div></div>
              <br />
              <div className="row mb-3">

                <label htmlFor="category" className="form-label">Category</label>
                <div className="form-check">
                  <div className="form-check form-check-inline">
                    <input
                      type="checkbox"
                      id="category-travel"
                      value="travel"
                      className="form-check-input"
                      onClick={handleCategoryClick}
                      checked={selectedCategory === 'travel'}
                    />
                    <label htmlFor="category-travel" className="form-check-label">Travel</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="checkbox"
                      id="category-birthday"
                      value="birthday"
                      className="form-check-input"
                      onClick={handleCategoryClick}
                      checked={selectedCategory === 'birthday'}
                    />
                    <label htmlFor="category-birthday" className="form-check-label">Birthday</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="checkbox"
                      id="category-family"
                      value="family"
                      className="form-check-input"

                      onClick={handleCategoryClick}
                      checked={selectedCategory === 'family'}
                    />
                    <label htmlFor="category-family" className="form-check-label">Family</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="checkbox"
                      id="category-business"
                      value="business"
                      className="form-check-input"

                      onClick={handleCategoryClick}
                      checked={selectedCategory === 'business'}
                    />
                    <label htmlFor="category-business" className="form-check-label">Business</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="checkbox"
                      id="category-concert"
                      value="concert"
                      className="form-check-input"
                      onClick={handleCategoryClick}
                      checked={selectedCategory === 'concert'}
                    />
                    <label htmlFor="category-concert" className="form-check-label">Concert</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="checkbox"
                      id="category-wedding"
                      value="wedding"
                      className="form-check-input"
                      onClick={handleCategoryClick}
                      checked={selectedCategory === 'wedding'}
                    />
                    <label htmlFor="category-wedding" className="form-check-label">Wedding</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="checkbox"
                      id="category-sports"
                      value="sports"
                      className="form-check-input"
                      onClick={handleCategoryClick}
                      checked={selectedCategory === 'sports'}
                    />
                    <label htmlFor="category-sports" className="form-check-label">Sports</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="checkbox"
                      id="category-social"
                      value="social"
                      className="form-check-input"
                      onClick={handleCategoryClick}
                      checked={selectedCategory === 'social'}
                    />

                    <label htmlFor="category-social" className="form-check-label">Social</label>
                  </div>
                  <br />
                  <button className="btn btn-outline-success btn-lg">Update Event</button>



                </div>

              </div>



            </form>

          </div>

        </div>
      </div>
    </>
  );
}
