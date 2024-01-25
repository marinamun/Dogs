import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <h1>Welcome to the dog website!</h1>
      <Link to="/dogs">
        <h3>Click here to have a look at the dogs</h3>
      </Link>
    </>
  );
};
export default Homepage;
