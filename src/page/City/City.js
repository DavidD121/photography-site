import PhotoGallery from "../../components/PhotoGallery";
import { importAll } from "../../utils";

const City = () => {
  const imageObject = importAll(require.context('./../../images/city', false, /\.(JPG|jpe?g|svg)$/));
  const cityImages = Object.values(imageObject)

  return <div>
    <h1>City Photography</h1>
    <PhotoGallery images={cityImages}/>
  </div>
}

export default City;