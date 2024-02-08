import PhotoGallery from "../../components/PhotoGallery";
import { importAll } from "../../utils";

const Events = () => {
  const imageObject = importAll(require.context('./../../images/events', false, /\.(JPG|jpe?g|svg)$/));
  const eventImages = Object.values(imageObject)
  return <div>
    <h1>Event Photography</h1>
    <PhotoGallery images={eventImages}/>
  </div>
}

export default Events;