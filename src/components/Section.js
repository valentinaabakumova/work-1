import React from 'react';
import PropTypes from 'prop-types';

function Section({ title, number, children }) {
  return (
    <div>
      {title && <h2>{title}</h2>}
      {number}
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  number: PropTypes.number,
  children: PropTypes.node,
};

export default Section;
