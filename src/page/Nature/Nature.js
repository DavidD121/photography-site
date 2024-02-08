import PhotoGallery from "../../components/PhotoGallery";
import { importAll } from "../../utils";

const Nature = () => {
  const imageObject = importAll(require.context('./../../images/nature', false, /\.(JPG|jpe?g|svg)$/));
  const natureImages = Object.values(imageObject);

  return <div>
    <h1>Nature and Animal Photography</h1>
    <PhotoGallery images={natureImages}/>
  </div>
}

export default Nature;