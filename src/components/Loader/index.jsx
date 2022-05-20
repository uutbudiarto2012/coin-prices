import "./Loader.scss";
import { BallTriangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader">
      <div className="item">
        <BallTriangle
          heigth="80"
          width="80"
          color="#F00"
          ariaLabel="loading-indicator"
        />
      </div>
    </div>
  );
};

export default Loader;
