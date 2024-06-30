import MDBox from "materialComponents/MDBox";
import DashboardLayout from "components/LayoutContainers/DashboardLayout";
import DashboardNavbar from "components/Navbars/DashboardNavbar";
import PropTypes from "prop-types";
import ExtractTextFromImage from "layouts/ExtractText/components/file";
import { useNavigate } from "react-router-dom";
import { useMaterialUIController } from "context";
import { useEffect } from "react";

function ExtractText({ type }) {
  const [controller, dispatch] = useMaterialUIController();
  const { isAuth } = controller;
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <ExtractTextFromImage />
      </MDBox>
    </DashboardLayout>
  );
}

ExtractText.defaultProps = {
  type: "none",
};

ExtractText.propTypes = {
  type: PropTypes.string,
};

export default ExtractText;
