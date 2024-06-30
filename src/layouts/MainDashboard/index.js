import Grid from "@mui/material/Grid";
import MDBox from "materialComponents/MDBox";
import DashboardLayout from "components/LayoutContainers/DashboardLayout";
import DashboardNavbar from "components/Navbars/DashboardNavbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMaterialUIController } from "context";
import AlreadyExtractedImage from "layouts/AlreadyExtractedImage";
import ComplexStatisticsCard from "components/Cards/StatisticsCards/ComplexStatisticsCard";
import { getImageListInfo } from "layouts/AlreadyExtractedImage/data";
import { Leaderboard, PersonAdd, Store, Weekend } from "@mui/icons-material";

function MainDashboard() {
  const [controller, dispatch] = useMaterialUIController();
  const { isAuth } = controller;
  const navigate = useNavigate();
  const [imageList, setImageList] = useState([]);
  const [count, setCount] = useState({});
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth]);

  useEffect(() => {
    const getImageList = async () => {
      const result = await getImageListInfo();
      if (result) {
        setImageList(result.data.image_list);
        setCount(result.data.counts);
      }
    };

    getImageList();
  }, []);
  console.log(imageList);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon={<Weekend fontSize="medium" color="inherit" />}
                title="Today Count"
                count={count.today}
                percentage={{
                  color: "success",
                  amount: count.today,
                  label: "added today",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon={<Leaderboard fontSize="medium" color="inherit" />}
                title="Yesterday Count"
                count={count.yesterday}
                percentage={{
                  color: "success",
                  amount: count.yesterday,
                  label: "added yesterday",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon={<Store fontSize="medium" color="inherit" />}
                title="Last week"
                count={count.last_week}
                percentage={{
                  color: "success",
                  amount: count.last_week,
                  label: "added last week",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon={<PersonAdd fontSize="medium" color="inherit" />}
                title="Last Month"
                count={count.last_month}
                percentage={{
                  color: "success",
                  amount: count.last_month,
                  label: "added last month",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <AlreadyExtractedImage imageList={imageList} />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default MainDashboard;
