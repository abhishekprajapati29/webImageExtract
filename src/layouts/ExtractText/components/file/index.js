import { useState } from "react";
import PropTypes from "prop-types";
import MDBox from "materialComponents/MDBox";

// Data
import { Grid } from "@mui/material";
import FormDND from "components/Form/FormDND";
import DefaultProjectCard from "components/Cards/ProjectCards/DefaultProjectCard";
import { extractImage } from "layouts/ExtractText/data";

function ExtractTextFromImage() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  function bytesToSize(bytes) {
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes === 0) return "0 Byte";
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round((bytes / Math.pow(1024, i)) * 100) / 100 + " " + sizes[i];
  }

  const handleImageExtract = async (image) => {
    setLoading(true)
    const formData = new FormData();
    formData.append("image", image);

    const result = await extractImage(formData);
    if (!result) return "Error while extracting the image!";
    setTimeout(() => console.log('1'), 2000)
    setFiles((prevFiles) => {
      const foundIndex = prevFiles.findIndex((item) => item.id === image.name);
      if (foundIndex === -1) return prevFiles;

      const updatedFiles = [...prevFiles];
      updatedFiles[foundIndex] = {
        ...updatedFiles[foundIndex],
        isExtracted: true,
        redirectId: result.data.id,
      };

      return updatedFiles;
    });
    
    setLoading(false)
  };

  const handleRemove = async (id) => {
    const updatedFiles = files?.filter((item) => item.id !== id)
    setFiles(updatedFiles);
  };

  return (
    <MDBox>
      <FormDND title={"Upload Images"} files={files} setFunction={setFiles} />

      <MDBox p={2}>
        <Grid container spacing={6}>
          {files?.map((item, index) => (
            <Grid key={index} item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={item.image}
                isBaseImage = {false}
                label={
                  item.image.type?.split("/").pop().toUpperCase() || "NONE"
                }
                title={
                  item.image.name.length > 30
                    ? item.image.name.slice(0, 30) + "..."
                    : item.image.name
                }
                size={bytesToSize(item.image.size)}
                action={{
                  type: "internal",
                  route: "#",
                  color: "info",
                  label: "view project",
                }}
                handleImageExtract={handleImageExtract}
                isExtracted={item.isExtracted}
                redirectId={item.redirectId}
                handleRemove={handleRemove}
                loading={loading}
              />
            </Grid>
          ))}
        </Grid>
      </MDBox>
    </MDBox>
  );
}

ExtractTextFromImage.defaultProps = {
  type: "none",
};

ExtractTextFromImage.propTypes = {
  type: PropTypes.string,
};

export default ExtractTextFromImage;
