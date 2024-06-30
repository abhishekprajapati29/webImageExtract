import { useMaterialUIController } from "context";
import MDBox from "materialComponents/MDBox";
import MDButton from "materialComponents/MDButton";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [controller, dispatch] = useMaterialUIController();
  const { isAuth } = controller;
  const navigate = useNavigate();
  useEffect(() => {
    console.log(isAuth);
    if (isAuth) {
      navigate("/dashboard");
    }
  }, [isAuth]);
  return (
    <div className="container">
      <div className="text">Welcome to Image Text Extraction</div>
      <div className="buttons">
        <MDButton
          variant="gradient"
          color="info"
          fullWidth
          onClick={() => navigate("/login")}
        >
          Log In
        </MDButton>
        <MDButton
          variant="gradient"
          color="info"
          fullWidth
          onClick={() => navigate("/register")}
        >
          Register
        </MDButton>
      </div>
    </div>
  );
};

export default HomePage;
