import Gallery from "../components/Gallery";
import {useContext} from "react";
import {PhotoContext} from "../context/PhotoContext.js";

const Home = () => {

  const {photos} = useContext(PhotoContext)

  return (
    <div className="App">
      <h1>Natural Pic</h1>
      <Gallery photos={photos} />
    </div>
  );
};
export default Home;
