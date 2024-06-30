import { CardMedia, TextField } from "@mui/material";
import MDBox from "materialComponents/MDBox";
import MDTypography from "materialComponents/MDTypography";
import KeyValueInfo from "components/KeyValueInfo";
import homeDecor1 from "assets/images/home-decor-1.jpg";

function Imageinfo(props) {
  return (
    <>
    <CardMedia
        height="250"
        // src={window.URL.createObjectURL(image)}
        src={`data:image/jpeg;base64,${props?.image?.image}`}
        component="img"
        title={'demo'}
        sx={{
        maxWidth: "100%",
        minWidth: "100%",
        margin: 0,
        boxShadow: ({ boxShadows: { md } }) => md,
        objectFit: "cover",
        objectPosition: "center",
        }}
    />
    <MDBox p={2} >
        <KeyValueInfo label={"Name"} value={props.image.name} />
        <KeyValueInfo label={"Type"} value={props.image.type} />
        <KeyValueInfo label={"Size"} value={props.image.size} />
        <KeyValueInfo label={"Word Count"} value={props.image.word_count} />
    </MDBox>
    </>
  );
}

export default Imageinfo;
