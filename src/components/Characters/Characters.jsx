import { useNavigate } from "react-router-dom";
import MySvgImage from "../../assets/logo.svg";

export const Characters = () => {
  const navigate = useNavigate();
  return (
    <>
      <button type="button" onClick={() => navigate("/")}>
        <img src={MySvgImage} alt="logo" />
      </button>
    </>
  );
};
