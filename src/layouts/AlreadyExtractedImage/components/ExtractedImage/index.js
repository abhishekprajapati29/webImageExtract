import PropTypes from "prop-types";
//  React components
import MDBox from "materialComponents/MDBox";
import { Button, Grid, Link, TextField } from "@mui/material";
import DefaultProjectCard from "components/Cards/ProjectCards/DefaultProjectCard";
import moment from "moment";
import { useEffect, useState } from "react";
import { getImageListInfo } from "layouts/AlreadyExtractedImage/data";

function AlreadyExtractedImage(props) {
  return (
    <MDBox p={2}>
      <Grid container spacing={6}>
        {props.imageList?.map((item, index) => (
          <Grid key={item} item xs={12} md={6} xl={3}>
            <DefaultProjectCard
              image={item.image}
              isBaseImage = {true}
              label={item.type?.split("/").pop().toUpperCase() || "NONE"}
              title={
                item.name.length > 30
                  ? item.name.slice(0, 30) + "..."
                  : item.name
              }
              // size={bytesToSize(item.image.size)}
              action={{
                type: "internal",
                route: "#",
                color: "info",
                label: "view project",
              }}
              isExtracted={true}
              redirectId={item.id}
              allowDelete={false}
            />
          </Grid>
        ))}
      </Grid>
    </MDBox>
  );
}

AlreadyExtractedImage.defaultProps = {
  type: "none",
};

AlreadyExtractedImage.propTypes = {
  type: PropTypes.string,
};

export default AlreadyExtractedImage;
