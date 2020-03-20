import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hospital from './components/Hospital';
import { Repository, MockRepository } from './repository';
import { Hospital as HospitalProps } from './types';
import styled from 'styled-components';
import { FormattedMessage } from "react-intl";

type AppProps = {
  className?: string
}

const repository : Repository = new MockRepository();
const exampleHospital : HospitalProps = repository.getHospitalById(1234);

const App = ({ className } : AppProps) => (
  <div className={className}>
    <FormattedMessage
      id="app.greeting"
      description="Greeting to welcome the user to the app"
      defaultMessage="Hello, {name}!"
      values={{
        name: 'Alex',
      }}>
      {(txt) =>
        <p>{txt}</p>
      }
    </FormattedMessage>
    <Hospital {...exampleHospital} />
  </div>
);

const StyledApp = styled(App)`
  text-align: center;
`;

export default StyledApp;
