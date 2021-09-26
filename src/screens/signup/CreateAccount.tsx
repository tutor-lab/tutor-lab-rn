import React, { useState } from 'react';
import { Steps, Step } from "react-step-builder";
import { LoginStackProp } from '../../types/navigation';
import CreateAccountStep1 from './CreateAccountStep1';

const CreateAccount = () => {
    return (
        <Steps>
            <Step title="CreateAccountStep1" component={CreateAccountStep1}/>
        </Steps>
    );
}

export default CreateAccount;