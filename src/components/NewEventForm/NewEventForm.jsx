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
  const [selectedTag, setSelectedTag] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');



    const newEvent = {
      name: nameRef.current.value,
      date: dateRef.current.value,
      time: timeRef.current.value,
      details: detailsRef.current.value,
      location: locationRef.current.value,
      tag: selectedTag,
    };

    try {
      await createEventRequest(newEvent);
      navigate('/events');
    } catch (err) {
      setError('Invalid Input');
    }
  }


  return (
    <div className="form-container mt-2">
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
                <textarea type="text" id="details" className="form-control" ref={detailsRef} />
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
              <label htmlFor="tags" className="form-label">
                Category:
              </label>
              <div className="tag-checkboxes">
                <div>
                  <label>
                    <input 
                    type="checkbox" 
                    value="travel" 
                    className="form-check-input"
                    checked={selectedTag === 'travel'}
                    onChange={(e) => setSelectedTag(e.target.value)}
                    />Travel
                    </label>
                </div>
                <div>
                  <label>
                    <input 
                    type="checkbox" 
                    value="birthday" 
                    className="form-check-input"
                    checked={selectedTag === 'birthday'}
                    onChange={(e) => setSelectedTag(e.target.value)}
                    /> {' '}Birthday
                  </label>
                </div>
                <div>
                  <label>
                    <input 
                    type="checkbox" 
                    value="family"
                    className="form-check-input"
                    checked={selectedTag === 'family'}

                    onChange={(e) => setSelectedTag(e.target.value)}
                    />Family
                  </label>
                </div>
                <div>
                  <label>
                    <input
                    type="checkbox" 
                    value="business"
                    className="form-check-input"
                    checked={selectedTag === 'business'}

                    onChange={(e) => setSelectedTag(e.target.value)}
                    /> Business
                  </label>
                </div>
                <div>
                  <label>
                    <input 
                    type="checkbox" 
                    value="concert"
                    className="form-check-input"
                    checked={selectedTag === 'concert'}
 
                    onChange={(e) => setSelectedTag(e.target.value)}
                    /> Concert
                  </label>
                </div>

                <div>
                  <label>
                    <input 
                    type="checkbox" 
                    value="wedding"
                    className="form-check-input"
                    checked={selectedTag === 'wedding'}
 
                    onChange={(e) => setSelectedTag(e.target.value)}
                    /> Wedding
                  </label>
                </div>
                <div>
                  <label>
                    <input 
                    type="checkbox" 
                    value="sports"
                    className="form-check-input"                     
                    checked={selectedTag === 'sports'}

                    onChange={(e) => setSelectedTag(e.target.value)}
                    /> Sports
                  </label>
                </div>
                <div>
                  <label>
                    <input 
                    type="checkbox" 
                    value="social"
                    className="form-check-input"
                    checked={selectedTag === 'social'}
 
                    onChange={(e) => setSelectedTag(e.target.value)}
                    />Social
                  </label>
                </div>
                <div>
                  <label>
                    <input 
                    type="checkbox" 
                    value="other"
                    className="form-check-input"
                    checked={selectedTag === 'other'}
                    onChange={(e) => setSelectedTag(e.target.value)}
                    /> Other
                  </label>
                </div>
              </div>
              <br />
              <button className="btn border-warning">Add Event</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
