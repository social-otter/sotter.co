import React from 'react';
import Modal from '.';
import SignIn from '../login/signin';


interface SignInModalProps {
    show: boolean;
}

const SignInModal: React.FC<SignInModalProps> = ({ show }) => {
    return (
        <>
            <Modal show={show}>
                <SignIn />
            </Modal>
        </>
    );
};

export default SignInModal;
