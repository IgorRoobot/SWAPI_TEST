import { Wrapper } from "./styles";
import { Link } from "react-router-dom";

export const FallbackPage = () => {
  return (
    <Wrapper>
      <h2>Page Not Found</h2>
      <Link to="/">Go back to the main page</Link>
    </Wrapper>
  );
};
