import Grid from "@mui/material/Grid";
import MDBox from "materialComponents/MDBox";
import DashboardLayout from "components/LayoutContainers/DashboardLayout";
import DashboardNavbar from "components/Navbars/DashboardNavbar";
import ProfileInfoCard from "components/Cards/InfoCards/ProfileInfoCard";
import Header from "layouts/profile/components/Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMaterialUIController } from "context";

function Overview() {
  const [controller] = useMaterialUIController();
  const { isAuth } = controller;
  const navigate = useNavigate();
  useEffect(() => {
    console.log(isAuth);
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth]);
  let userProfile = {};
  try {
    userProfile = JSON.parse(localStorage.getItem("user"));
  } catch {}

  const [firstName, setFirstName] = useState(userProfile?.first_name || "");
  const [fullName, setFullName] = useState(
    userProfile?.first_name + " " + userProfile?.last_name || ""
  );
  const [email, setEmail] = useState(userProfile?.email || "");

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header firstName={firstName}>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            <ProfileInfoCard
              title="profile information"
              info={{
                fullName: fullName || "Guest",
                email: email || "None",
              }}
              email={email}
              fullName={fullName}
              shadow={false}
            />
          </Grid>
        </MDBox>
      </Header>
    </DashboardLayout>
  );
}

export default Overview;
