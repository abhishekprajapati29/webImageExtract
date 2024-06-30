import MDBox from "materialComponents/MDBox";
import PropTypes from "prop-types";
import ExtractedImage from "layouts/AlreadyExtractedImage/components/ExtractedImage";
import MDTypography from "materialComponents/MDTypography";

function AlreadyExtractedImage(props) {
  return (
    <>
      
      <MDBox my={2}>
        <MDTypography
          px={1.5}
          variant="h6"
          fontWeight="medium"
          textTransform="capitalize"
        >
          Extracted Images Lists
        </MDTypography>
      </MDBox>
      <MDBox py={3}>
        <ExtractedImage imageList={props.imageList} />
      </MDBox>
    </>
  );
}

AlreadyExtractedImage.defaultProps = {
  type: "none",
};

AlreadyExtractedImage.propTypes = {
  type: PropTypes.string,
};

export default AlreadyExtractedImage;
