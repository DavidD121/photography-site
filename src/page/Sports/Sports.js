import PhotoGallery from "../../components/PhotoGallery";
import { importAll } from "../../utils";

const Sports = () => {
  const imageObject = importAll(require.context('./../../images/sports', false, /\.(JPG|jpe?g|svg)$/));
  const sportImages = Object.values(imageObject);

  return <div>
    <h1>Sport Photography</h1>
    <PhotoGallery images={sportImages}/>
  </div>
}

export default Sports;