// import PaintingList from './components/PaintingList';
// import { FaCannabis } from 'react-icons/fa';
// import { FaOctopusDeploy } from 'react-icons/fa';
// import { GiDinosaurRex } from 'react-icons/gi';

import ActionList from './components/ActionList';
import Description from './components/Description';
import Section from './components/Section';
// import paintings from './paintings.json';
import roles from './roles.json';

const ROLE = 'admin';

export default function App() {
  switch (ROLE) {
    case 'super-admin':
      return (
        <div>
          <Description />
          {/* not important */}
          <Section title="Role: super-admin">
            {/* <GiDinosaurRex /> */}
            <ActionList items={roles[0]} />
          </Section>
        </div>
      );

    case 'admin':
      return (
        <div>
          <Section title="Role: admin">
            {/* <FaOctopusDeploy /> */}
            <ActionList items={roles[1]} />
            <div className="wrap">
              <div className="wrap-action">
                <div className="text">
                  <div className="text-number">1</div>
                  <h3 className="text-name">Import</h3>
                </div>
                <p className="description">
                  Add products to the library using the Import CSV function in
                  the top right corner.
                </p>
              </div>

              <div className="wrap-action">
                <div className="text">
                  <div className="text-number">2</div>
                  <h3 className="text-name">Search</h3>
                </div>
                <p className="description">
                  Each product variant is identified by four attributes you can
                  use to filter the variant list in the left sidebar.
                </p>
              </div>
            </div>
          </Section>
        </div>
      );

    case 'user':
      return (
        <div>
          <Section title="Role: user">
            {/* <FaCannabis /> */}
            <ActionList items={roles[2]} />
            <div className="wrap">
              <div className="wrap-action">
                <div className="text">
                  <div className="text-number">1</div>
                  <h3 className="text-name">Search</h3>
                </div>
                <p className="description">
                  Each product variant is identified by four attributes you can
                  use to filter the variant list in the left sidebar.
                </p>
              </div>
            </div>
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
