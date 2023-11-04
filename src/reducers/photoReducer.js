export const photoReducer = (initialState = [], action) => {
  switch (action.type) {
    case '[PHOTO] Get All':
      return action.payload;
    case '[PHOTO] Like/dislike Photo':
      return initialState.map(photo => {
        if (photo.id === action.payload) {
          return {
            ...photo,
            liked: !photo.liked
          }
        }
        return photo;
      });
    default:
      return initialState;
  }
};