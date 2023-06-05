import sendRequest from "./send-request";
const BASE_URL = '/api/events';

export async function eventsIndexRequest(){
    return sendRequest(BASE_URL);
}

export async function createEventRequest(eventData){
    return sendRequest(BASE_URL, "POST", eventData)
}

export async function getEventRequest(eventId){
    return sendRequest(`${BASE_URL}/${eventId}`) 
}

export async function deleteEventRequest(eventId){
    return sendRequest(`${BASE_URL}/${eventId}`, "DELETE")
}

export async function updateEventRequest(eventId, eventData){
    return sendRequest(`${BASE_URL}/${eventId}`, "PUT", eventData)
}