import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import MDBox from "materialComponents/MDBox";
import MDTypography from "materialComponents/MDTypography";
import MDInput from "materialComponents/MDInput";
import MDButton from "materialComponents/MDButton";
import BasicLayout from "layouts/authentication/components/BasicLayout";
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useMaterialUIController } from "context";
import { setIsAuth } from "context";

function Basic(props) {
  const [controller, dispatch] = useMaterialUIController();
  const {
    isAuth,
  } = controller;
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const [loading, setLoading] = React.useState(false);
  const handleLoading = () => {
    setLoading(!loading);
  };
  
  useEffect(() => {
    if(isAuth) {
      navigate('/dashboard')
    }
  }, [isAuth])

  const onLogin = async (email, password) => {
    return await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/login`, {email, password}, { withCredentials: true });
  };

  const handleChange = (event, type) => {
    if (type === "email") {
      setEmail(event.target.value);
    } else if (type === "password") {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await onLogin(email, password);
    if (user) {
      localStorage.setItem("user", JSON.stringify(user.data))
      handleLoading();
      setIsAuth(dispatch, true)
      navigate('/dashboard')
    }
  };

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Log In
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Unlock your Skills
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                type="email"
                label="Email"
                fullWidth
                onChange={(event) => handleChange(event, "email")}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Password"
                fullWidth
                onChange={(event) => handleChange(event, "password")}
              />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton
                variant="gradient"
                color="info"
                fullWidth
                onClick={(event) => handleSubmit(event)}
              >
                Log In
              </MDButton>
            </MDBox>
            <MDBox display="flex" justifyContent="center">
              <MDTypography variant="button" fontWeight="regular" color="error">
                {props.error}
              </MDTypography>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/register"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Register
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

Basic.propTypes = {
  onLogin: PropTypes.any,
  token: PropTypes.any,
  error: PropTypes.any,
};

export default Basic;
