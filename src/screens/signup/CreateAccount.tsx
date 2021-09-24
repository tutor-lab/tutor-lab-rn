import React, { useState } from 'react';
import { Steps, Step } from "react-step-builder";
import { LoginStackProp } from '../../types/navigation';
import CreateAccountStep1 from './CreateAccountStep1';

interface Props {
  navigation: LoginStackProp;
}

const CreateAccount = ({navigation}: Props) => {
    return (
        <Steps>
            <Step title="CreateAccountStep1" component={CreateAccountStep1}/>
        </Steps>
    );
}

export default CreateAccount;