import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from "react-router-dom";
import MDBox from "materialComponents/MDBox";
import MDTypography from "materialComponents/MDTypography";
import MDButton from "materialComponents/MDButton";
import { Button } from "@mui/material";
import { useMaterialUIController } from "context";
import DeleteIcon from "@mui/icons-material/Delete";

function DefaultProjectCard({
  image,
  label,
  title,
  size,
  action,
  handleImageExtract,
  isExtracted,
  redirectId,
  handleRemove,
  isBaseImage,
  allowDelete = true,
  loading
}) {
  const navigate = useNavigate();
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "transparent !important",
        boxShadow: "none",
        overflow: "visible",
      }}
    >
      <MDBox position="relative" width="100.25%" shadow="xl" borderRadius="xl">
        <CardMedia
          height="174"
          src={
            isBaseImage
              ? `data:image/jpeg;base64,${image}`
              : window.URL.createObjectURL(image)
          }
          component="img"
          title={title}
          sx={{
            maxWidth: "100%",
            minWidth: "100%",
            margin: 0,
            boxShadow: ({ boxShadows: { md } }) => md,
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </MDBox>
      <MDBox mt={1} mx={0.5}>
        <MDTypography
          variant="button"
          fontWeight="regular"
          color="text"
          textTransform="capitalize"
        >
          {label}
        </MDTypography>

        <MDBox mb={1} lineHeight={0}>
          <MDTypography variant="h6" textTransform="capitalize">
            {title}
          </MDTypography>
        </MDBox>
        {size && (
          <MDBox mb={3} lineHeight={0}>
            <MDTypography
              variant="button"
              fontWeight="regular"
              color="text"
              textTransform="capitalize"
            >
              <span>{"Size: "}</span>
              <span>{size}</span>
            </MDTypography>
          </MDBox>
        )}

        <MDBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          {allowDelete && (
            <MDButton
              component={Button}
              onClick={() => handleRemove(image.name)}
              variant="outlined"
              size="small"
              color={darkMode ? "white" : "error"}
            >
              <DeleteIcon />
            </MDButton>
          )}
          {isExtracted ? (
            <MDButton
              component={Button}
              variant="outlined"
              size="small"
              color={darkMode ? "white" : action.color}
              onClick={() => navigate(`/image_extract/${redirectId}`)}
            >
              View
            </MDButton>
          ) : (
            <MDButton
              component={Button}
              variant="outlined"
              size="small"
              color={darkMode ? "white" : action.color}
              onClick={() => handleImageExtract(image)}
              disabled={loading}
            >
              Extract
            </MDButton>
          )}
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default DefaultProjectCard;
