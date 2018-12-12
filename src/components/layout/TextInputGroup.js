import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
const TextInputGroup = ({
  label,
  name,
  value,
  placeholder,
  type,
  labelFor,
  defaultValue,
  error
}) => {
  return (
    <div className="form-group mt-3">
      <label htmlFor={labelFor}>{label}</label>
      <input
        type={type}
        className={classnames('form-control form-control-lg', {
          'is-invalid': error
        })}
        placeholder={placeholder}
        name={name}
        defaultValue={defaultValue}
      />
      {error && <div className="invalid-feedback d-block"> {error} </div>}
    </div>
  );
};
TextInputGroup.propTypes = {
  label: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  labelFor: propTypes.string.isRequired,
  error: propTypes.string
};
TextInputGroup.defaultProps = {
  type: 'text'
};
export default TextInputGroup;
