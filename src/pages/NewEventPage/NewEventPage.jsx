import NewEventForm from "../../components/NewEventForm/NewEventForm"
import './NewEventPage.css'

export default function NewEventPage() {
    return (
        <main className="NewEventPage">
        <h1>Create a Countdown</h1>
        <NewEventForm />
        </main>
    );
  }