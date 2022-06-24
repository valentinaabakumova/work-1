import PropTypes from 'prop-types';

const Actions = ({ id = 'не известно', role, action }) => {
  console.log(action[0]);

  return (
    <div>
      {/* <h2>{id}</h2> */}
      <p>Role: {role}</p>
      <p>Action: {action.map(item => '--' + item)}</p>
      {/* <button type="button">Добавить</button> */}
    </div>
  );
};

Actions.propTypes = {
  id: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
};

export default Actions;
