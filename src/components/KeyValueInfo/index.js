import { TextField } from "@mui/material";
import MDBox from "materialComponents/MDBox";
import MDTypography from "materialComponents/MDTypography";

function KeyValueInfo(props) {
  return (
    <MDBox key={props.label} display="flex" py={1} pr={2}>
        <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
        {props.label}: &nbsp;
        </MDTypography>
        <MDTypography variant="button" fontWeight="regular" color="text">
        &nbsp;{props.value}
        </MDTypography>
    </MDBox>
  )
}

export default KeyValueInfo;
