import { FaCannabis } from 'react-icons/fa';
import { FaOctopusDeploy } from 'react-icons/fa';
import { GiDinosaurRex } from 'react-icons/gi';

import ComponentList from './components/historyHome';
import Section from './components/Section';

import actions from './actions.json';

function getUser() {
  const ui = 1;

  switch (ui) {
    case 1:
      return 'super-admin';
    case 2:
      return 'admin';
    case 3:
      return 'user';
    default:
      return 'super-admin';
  }
}

export default function App() {
  switch (getUser()) {
    case 'super-admin':
      actions[0].id = '1';
      actions[1].id = '2';
      actions[2].id = '3';
      return (
        <div className="role-action">
          <Section title="Role: super-admin">
            <GiDinosaurRex />
            <div className="flex-wrap">
              <ComponentList items={actions[0]} />
              <ComponentList items={actions[1]} />
              <ComponentList items={actions[2]} />
            </div>
          </Section>
        </div>
      );

    case 'admin':
      actions[1].id = '1';
      actions[2].id = '2';
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
      actions[1].id = 1;
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
