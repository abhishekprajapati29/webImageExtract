import Card from "@mui/material/Card";
import MDBox from "materialComponents/MDBox";
import MDTypography from "materialComponents/MDTypography";

function ExtractedInfo(props) {
  return (
    <Card sx={{ height: "100%", width: "100%" }}>
      <MDBox justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <MDTypography
          variant="h6"
          fontWeight="medium"
          textTransform="capitalize"
        >
          {"Extracted Texts"}
        </MDTypography>
        <MDTypography variant="button"  fontWeight="regular" color="text">
          {props?.image?.texts}
        </MDTypography>
      </MDBox>
    </Card>
  );
}

export default ExtractedInfo;
