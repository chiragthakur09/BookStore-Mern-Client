import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import PropTypes from "prop-types";

const BackButton = ({ destination = "/" }) => {
  return (
    <div className="flex">
      <Link
        to={destination}
        className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
      >
        <BsArrowLeft className="mr-2" />
      </Link>
    </div>
  );
};

BackButton.propTypes = {
  destination: PropTypes.string.isRequired,
};

export default BackButton;
