import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  label: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};

const FormElement = (props) => {
  return (
    <>
      <div className="form-element">{props.children}</div>
    </>
  );
};

FormElement.propTypes = propTypes;
// #endregion

export default FormElement;
