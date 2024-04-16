import EventForm from "../components/EventForm";
import { useRouteLoaderData } from "react-router-dom";
export default function EditEventPage() {
  const data = useRouteLoaderData("event-detail");
 
  return <EventForm method="patch" event={data.event} />;
}
