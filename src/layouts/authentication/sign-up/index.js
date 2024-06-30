import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

//  React components
import MDBox from "materialComponents/MDBox";
import MDTypography from "materialComponents/MDTypography";
import MDInput from "materialComponents/MDInput";
import MDButton from "materialComponents/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
import { useMaterialUIController } from "context";
import axios from "axios";
import { setIsAuth } from "context";

function Cover(props) {
  const [controller, dispatch] = useMaterialUIController();
  const { isAuth } = controller;
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/dashboard");
    }
  }, [isAuth]);

  const handleLoading = () => {
    setLoading(!loading);
  };

  const handleChange = (event) => {
    if (event.target.name === "firstName") {
      setFirstName(event.target.value);
    } else if (event.target.name === "lastName") {
      setLastName(event.target.value);
    } else if (event.target.name === "email") {
      setEmail(event.target.value);
    } else if (event.target.name === "password") {
      setPassword(event.target.value);
    } else if (event.target.name === "confirmPassword") {
      setConfirmPassword(event.target.value);
    }
  };

  const onRegister = async (email, password) => {
    return await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/auth/register`,
      { email, password, first_name: firstName, last_name: lastName },
      { withCredentials: true }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await onRegister(email, password);
    if (user) {
      localStorage.setItem("user", JSON.stringify(user.data))
      handleLoading();
      setIsAuth(dispatch, true)
      navigate('/dashboard')
    }
  };
  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                type="text"
                name="firstName"
                label="First Name"
                variant="standard"
                onChange={(e) => handleChange(e)}
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="text"
                name="lastName"
                label="Last Name"
                variant="standard"
                onChange={(e) => handleChange(e)}
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="email"
                name="email"
                label="Email"
                variant="standard"
                onChange={(e) => handleChange(e)}
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Password"
                name="password"
                variant="standard"
                fullWidth
                onChange={(e) => handleChange(e)}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                name="confirmPassword"
                label="Confirm Password"
                variant="standard"
                fullWidth
                onChange={(e) => handleChange(e)}
              />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Terms and Conditions
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton
                variant="gradient"
                color="info"
                fullWidth
                onClick={(e) => handleSubmit(e)}
              >
                Register
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/login"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Log In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

Cover.propTypes = {
  onRegister: PropTypes.any,
  token: PropTypes.any,
  error: PropTypes.any,
};

export default Cover;
