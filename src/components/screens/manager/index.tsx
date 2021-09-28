import React from 'react';
import Modal from "styled-react-modal";

import PrimaryButton from "../../elements/primaryButton";
import DrugRow from "../../elements/drugEditRow"
import { MyDrug } from "../../../types"


const StyledModal = Modal.styled`
  width: 70%;
  height: 65%;
  font-size: 22px;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: 1;
  transition : all 0.3s ease-in-out;`;

const myDrugs: MyDrug[] = [
    {
        code: '123AB',
        name: 'ああああああああああ',
        amount: '15'
    },
    {
        code: '224OH',
        name: 'いいいい',
        amount: '20'
    },
    {
        code: '349LP',
        name: 'うううう',
        amount: '10'
    }
];

type Props = {
    isOpen: boolean,
    toggleModal: () => void,
};

const ManagerScreen = (props: Props) => {
    const {
        isOpen,
        toggleModal
    } = props;

    return (
        <StyledModal isOpen={isOpen} onBackgroundClick={() => (toggleModal())}>
            <DrugRow myDrugs={myDrugs} onDelete={() => (alert('delete'))} onEdit={() => (alert('edit'))} />
            <PrimaryButton onClick={() => (alert('hoge'))}>修正</PrimaryButton>
            <PrimaryButton onClick={() => (alert('hoge'))}>キャンセル</PrimaryButton>
        </StyledModal>
    );
}

export default ManagerScreen;