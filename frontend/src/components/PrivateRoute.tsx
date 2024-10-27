import { Navigate } from "react-router-dom";

interface Props {
  isAllowed: Boolean;
  children: JSX.Element;
}

const PrivateRoute = ({ isAllowed, children }: Props) => {
  if (!isAllowed) {
    return <Navigate to="/" />;
  }
  return children;
};

export default PrivateRoute;
