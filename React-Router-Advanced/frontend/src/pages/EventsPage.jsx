import { Link } from "react-router-dom";

export default function EventsPage() {
  const EVENTS = [
    { id: "e1", title: "Event 1" },
    { id: "e2", title: "Event 2" },
    { id: "e3", title: "Event 3" },
  ];
  return (
    <>
      <h1>Events Pages</h1>
      <ul>
        {EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.id}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
