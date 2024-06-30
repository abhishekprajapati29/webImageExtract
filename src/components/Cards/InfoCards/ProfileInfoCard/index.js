import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import MDBox from "materialComponents/MDBox";
import MDTypography from "materialComponents/MDTypography";
import { capitalize } from "@mui/material";

function ProfileInfoCard({ title, info, shadow, fullName, email }) {
  const labels = [];
  const values = [];

  // Convert this form `objectKey` of the object key in to this `object key`
  Object.keys(info).forEach((el) => {
    if (el.match(/[A-Z\s]+/)) {
      const uppercaseLetter = Array.from(el).find((i) => i.match(/[A-Z]+/));
      const newElement = el.replace(
        uppercaseLetter,
        ` ${uppercaseLetter.toLowerCase()}`
      );

      labels.push(newElement);
    } else {
      labels.push(el);
    }
  });

  // Push the object values into the values array
  Object.values(info).forEach((el) => values.push(el));

  // Render the card info items
  const renderItems = labels.map((label, key) => {
    return (
      <>
        <>
          <MDBox key={label} display="flex" py={1} pr={2}>
            <MDTypography
              variant="button"
              fontWeight="bold"
              textTransform="capitalize"
            >
              {label}: &nbsp;
            </MDTypography>
            <MDTypography variant="button" fontWeight="regular" color="text">
              &nbsp;{capitalize(values[key])}
            </MDTypography>
          </MDBox>
        </>
      </>
    );
  });

  return (
    <Card sx={{ height: "100%", width: "100%", boxShadow: !shadow && "none" }}>
      <MDBox
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pt={2}
        px={2}
      >
        <MDTypography
          variant="h6"
          fontWeight="medium"
          textTransform="capitalize"
        >
          {capitalize(title)}
        </MDTypography>
      </MDBox>
      <MDBox p={2} width={"100%"}>
        <MDBox>{renderItems}</MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default props for the ProfileInfoCard
ProfileInfoCard.defaultProps = {
  shadow: true,
};

// Typechecking props for the ProfileInfoCard
ProfileInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.objectOf(PropTypes.string).isRequired,
  shadow: PropTypes.bool,
  fullName: PropTypes.string,
  email: PropTypes.string,
};

export default ProfileInfoCard;
