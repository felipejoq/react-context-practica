const PHOTO_URL = "/photos.json";

export const getPhotos = async () => {
  const response = await fetch(PHOTO_URL);
  const {photos} = await response.json();
  return photos;
}