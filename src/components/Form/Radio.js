import PropTypes, { string } from "prop-types";
import MDBox from "materialComponents/MDBox";
import MDRadio from "materialComponents/MDRadio";
import { forwardRef } from "react";

const FormRadio = forwardRef(({ title, labels, defaultValue, setFunction, ...rest }, ref) => {
  return (
    <MDBox mb={2} {...rest} ref={ref}>
      <MDRadio
        title={title}
        labels={labels}
        defaultValue={defaultValue}
        handleChange={(val) => setFunction(val)}
      />
    </MDBox>
  );
});

FormRadio.defaultProps = {
  title: "",
  labels: [],
  defaultValue: "",
};

FormRadio.propTypes = {
  title: PropTypes.string,
  labels: PropTypes.any,
  defaultValue: PropTypes.string,
  setFunction: PropTypes.func, // assuming setFunction is a function
};

export default FormRadio;
