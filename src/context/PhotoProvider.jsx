import {usePhotos} from "../hooks/usePhotos.js";
import {PhotoContext} from "./PhotoContext.js";

export const PhotoProvider = ({children}) => {

  const {photos, togglePhoto, favPhotos} = usePhotos()

  return (
    <PhotoContext.Provider value={{
      photos,
      favPhotos,
      togglePhoto,
    }}>
      {children}
    </PhotoContext.Provider>
  );
};