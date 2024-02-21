import { NavLink } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for could not be found.</p>
      <NavLink to='/'>Go to home</NavLink>
    </>
  );
};
