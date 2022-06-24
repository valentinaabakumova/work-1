import Component from './Component';
import PropTypes from 'prop-types';

function ComponentList({ items }) {
  return (
    <div className="wrap">
      {
        <Component
          title={items.title}
          description={items.description}
          // roleo={roleo[0]}
        />
      }
    </div>
  );
}

// ComponentList.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     })
//   ),
// };

export default ComponentList;
