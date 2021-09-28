import React, { useState } from 'react';

import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from '../../../firebase';

import PrimaryButton from '../../elements/primaryButton';
import InputText from '../../elements/inputText';

const Control = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
  width: 100%;
`;

type Props = {
    setEmail: (email: string | null) => void;
};

const Login = (props: Props) => {

    const { setEmail } = props;

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    });

    const history = useHistory();

    const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, loginForm.email, loginForm.password)
            .then((userCredential) => {
                console.log(userCredential.user);
                setEmail(userCredential.user.email);
                history.push('/main');
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <Control>
                    <InputText
                        name="mail"
                        type="mail"
                        placeholder="email"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLoginForm({ ...loginForm, email: e.target.value })}
                    />
                </Control>
                <Control>
                    <InputText
                        name="password"
                        type="password"
                        placeholder="password"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLoginForm({ ...loginForm, password: e.target.value })}
                    />
                </Control>
                <Control>
                    <PrimaryButton onClick={handleSubmit}>
                        ログイン
                    </PrimaryButton>
                </Control>
            </form>
        </div >
    );

}

export default Login;