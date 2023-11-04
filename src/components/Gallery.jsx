import {useContext} from "react";
import {PhotoContext} from "../context/PhotoContext.js";
import {Card} from "./Card.jsx";

const Gallery = ({photos}) => {

  return (
    <div className="d-flex flex-wrap gap-2 w-100 justify-content-center my-4">
      {
        photos.map(photo => (
          <Card key={photo.id} photo={photo} />
        ))
      }
    </div>
  );
};
export default Gallery;
