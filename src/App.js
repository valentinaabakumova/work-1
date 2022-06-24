import { FaCannabis } from 'react-icons/fa';
import { FaOctopusDeploy } from 'react-icons/fa';
import { GiDinosaurRex } from 'react-icons/gi';

import ComponentList from './components/historyHome';
import Section from './components/Section';

import actions from './actions.json';

function getUser() {
  const r = 1;
  let ROLE;

  switch (r) {
    case 1:
      return (ROLE = 'super-admin');
    case 2:
      return (ROLE = 'admin');
    case 3:
      return (ROLE = 'user');
    default:
      return (ROLE = 'super-admin');
  }
}

export default function App() {
  switch (getUser()) {
    case 'super-admin':
      return (
        <div className="role-action">
          {/* <Section title="Role: super-admin">
            <GiDinosaurRex /> */}
          <div className="flex-wrap">
            <ComponentList items={actions[0]} />
            <ComponentList items={actions[1]} />
            <ComponentList items={actions[2]} />
          </div>
          {/* </Section> */}
        </div>
      );

    case 'admin':
      return (
        <div>
          <Section title="Role: admin">
            <FaOctopusDeploy />
            <div className="flex-wrap">
              <ComponentList items={actions[1]} />
              <ComponentList items={actions[2]} />
            </div>
          </Section>
        </div>
      );

    case 'user':
      return (
        <div>
          <Section title="Role: user">
            <FaCannabis />
            <ComponentList items={actions[1]} />
          </Section>
        </div>
      );
    default:
      return (
        <div>
          <Section title="Please register"></Section>
        </div>
      );
  }
}
