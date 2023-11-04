import {useContext} from "react";
import {PhotoContext} from "../context/PhotoContext.js";
import Gallery from "../components/Gallery.jsx";
import {Alert} from "../components/Alert.jsx";

const Favorites = () => {

  const {favPhotos} = useContext(PhotoContext);

  return (
    <div className="container">
      <h1 className="my-4">
        Fotos favoritas{ favPhotos.length ? `: ${favPhotos.length}` : ""}
      </h1>
      {
        !favPhotos.length ?
          <Alert message="No hay fotos favoritas aun..." /> :
          <Gallery photos={favPhotos} />
      }
    </div>
  );
};
export default Favorites;
