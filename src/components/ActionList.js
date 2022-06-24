import Actions from './Actions';
import PropTypes from 'prop-types';

function ActionList({ items }) {
  return (
    <ul>
      {
        <li key={items.id}>
          <Actions role={items.role} action={items.action} />
        </li>
      }
    </ul>
  );
}

ActionList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default ActionList;
