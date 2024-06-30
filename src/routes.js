import SignIn from "layouts/authentication/sign-in";
import Profile from "layouts/profile";
import Dashboard from "@mui/icons-material/Dashboard";
import SignUp from "layouts/authentication/sign-up";
import ExtractText from "layouts/ExtractText";
import ExtractedTextInfo from "layouts/ExtractedTextInfo";
import MainDashboard from "layouts/MainDashboard";
import AlreadyExtractedImage from "layouts/AlreadyExtractedImage";
import Login from "@mui/icons-material/Login";
import Assignment from "@mui/icons-material/Assignment";
import Person from "@mui/icons-material/Person";
import HomePage from "layouts/Homepage";

const routes = [
  {
    type: "collapse",
    name: "HomePage",
    key: "homepage",
    icon: <Dashboard fontSize="small" />,
    isAuth: false,
    isProject: false,
    route: "/",
    component: <HomePage />,
  },
  {
    type: "collapse",
    name: "Log In",
    key: "login",
    isAuth: false,
    isProject: false,
    icon: <Login fontSize="small" />,
    route: "/login",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Register",
    key: "register",
    isAuth: false,
    isProject: false,
    icon: <Assignment fontSize="small" />,
    route: "/register",
    component: <SignUp />,
  },
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Dashboard fontSize="small" />,
    isAuth: true,
    isProject: false,
    route: `/dashboard`,
    component: <MainDashboard />,
  },
  {
    type: "collapse",
    name: "Image Extract",
    key: "image_extract",
    icon: <Dashboard fontSize="small" />,
    isAuth: true,
    isProject: false,
    route: `/image_extract`,
    component: <ExtractText />,
  },
  {
    type: "collapse",
    name: "Image Extract",
    key: "image_extract/:id",
    icon: <Dashboard fontSize="small" />,
    isAuth: false,
    isProject: false,
    route: `/image_extract/:id`,
    component: <ExtractedTextInfo />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    isAuth: true,
    isProject: false,
    icon: <Person fontSize="small" />,
    route: "/profile",
    component: <Profile />,
  },
];

export default routes;
