const Component = ({ id = 'не известно', role, action }) => {
  return (
    <div>
      {/* <h2>{id}</h2> */}
      <p>Role: {role}</p>
      <p>Action: {action.map(item => '--' + item)}</p>
      {/* <button type="button">Добавить</button> */}
    </div>
  );
};

// Component.propTypes = {
//   id: PropTypes.string.isRequired,
//   role: PropTypes.string.isRequired,
//   action: PropTypes.string.isRequired,
// };

export default Component;

// Component.tsx

// props: {
//   items: [
//     { title: 'import', description: 'desctiption text', role: ['admin'] },
//     { title: 'delete', description: 'desctiption text', role: ['admin'] },
//     { title: 'save', description: 'desctiption text', role: ['role1'] },
//   ];
// }

// {items.map((item, i) => (<div  key={i}>
//   <div>
//       <div>{i+1}</div>
//   <div>
//     <div>
//       <div>{item.title}</div>
//       <div>{item.desctiption}</div>
//     </div>
//   <div>
// </div>
// ))}
