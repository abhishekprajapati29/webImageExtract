import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MDBox from "materialComponents/MDBox";
import MDTypography from "materialComponents/MDTypography";
import MDAvatar from "materialComponents/MDAvatar";
import backgroundImage from "assets/images/bg-profile.jpeg";
import Avatar1 from "assets/images/avatar.jpg";
import { capitalize } from "@mui/material";

function Header({ firstName, children }) {
  return (
    <MDBox position="relative" mb={5}>
      <MDBox
        display="flex"
        alignItems="center"
        position="relative"
        minHeight="18.75rem"
        borderRadius="xl"
        sx={{
          backgroundImage: ({
            functions: { rgba, linearGradient },
            palette: { gradients },
          }) =>
            `${linearGradient(
              rgba(gradients.info.main, 0.6),
              rgba(gradients.info.state, 0.6)
            )}, url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
          overflow: "hidden",
        }}
      />
      <Card
        sx={{
          position: "relative",
          mt: -8,
          mx: 3,
          py: 2,
          px: 2,
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <MDAvatar src={Avatar1} alt="profile-image" size="xl" shadow="sm" />
          </Grid>
          <Grid item>
            <MDTypography variant="button" color="text" fontWeight="regular">
              {capitalize(firstName) || ""}
            </MDTypography>
          </Grid>
        </Grid>
        {children}
      </Card>
    </MDBox>
  );
}

// Setting default props for the Header
Header.defaultProps = {
  children: "",
};

// Typechecking props for the Header
Header.propTypes = {
  children: PropTypes.node,
  firstName: PropTypes.string,
};

export default Header;
