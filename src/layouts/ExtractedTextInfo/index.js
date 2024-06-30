import Grid from "@mui/material/Grid";
import MDBox from "materialComponents/MDBox";
import DashboardLayout from "components/LayoutContainers/DashboardLayout";
import DashboardNavbar from "components/Navbars/DashboardNavbar";
import PropTypes from "prop-types";
import MDTypography from "materialComponents/MDTypography";
import Imageinfo from "./components/ImageInfo";
import ExtractedInfo from "./components/ExtractedInfo";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useMaterialUIController } from "context";
import { imageInfoById } from "./data";

function ExtractText({ type }) {
  const [controller, dispatch] = useMaterialUIController();
  const [image, setImage] = useState();
  const { isAuth } = controller;
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth]);

  useEffect(() => {
    const imageInfo = async () => {
      const id = location.pathname.split("/").pop() || null;
      if (id) {
        const result = await imageInfoById(id);
        if (result) {
          setImage(result.data);
        }
      }
    };
    imageInfo();
  }, []);

  console.log(image)
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDTypography
          px={1.5}
          variant="h6"
          fontWeight="medium"
          textTransform="capitalize"
        >
          Image Details and Extracted Text Analysis
        </MDTypography>
        <MDBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          color="dark"
          p={1.5}
          width={"100%"}
        >
          {
            image && <Grid container spacing={6}>
            <Grid key={"extractedInfo"} item xs={12} md={6} xl={8}>
              <ExtractedInfo image={image} />
            </Grid>
            <Grid key={"imageInfo"} item xs={12} md={6} xl={4}>
              <Imageinfo image={image} />
            </Grid>
          </Grid>
          }
          
        </MDBox>
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
