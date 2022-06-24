import React from 'react';

const Component = ({ title, description, roleo }) => {
  // console.log(role[0]);
  let number = 1;
  return (
    <div className="wrap">
      <div className="wrap-action">
        <div className="text">
          <div className="text-number">{number}</div>
          <h3 className="text-name">{title}</h3>
        </div>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

// Component.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   // roleo: PropTypes.string.isRequired,
// };

export default Component;
