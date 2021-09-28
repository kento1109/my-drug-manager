import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ModalProvider } from "styled-react-modal";

import { collection, doc, addDoc, getDoc, getDocs, setDoc } from 'firebase/firestore/lite';
import { db } from '../../../firebase';

import DrugViewRow from "../../elements/drugViewRow"
import PrimaryButton from '../../elements/primaryButton';
import ManagerScreen from '../manager';
import { AppGlobalState } from '../../../App';
import { Drug, MyDrug } from '../../../types';


const MainScreen = styled.div`
  width: 100%;
  margin-top: 1cm;
  text-align: center;
  font-size: 24px;
  color: #444444;
`;

const mydrugs: MyDrug[] = [
  { 'code': 'abc', 'name': 'test', 'amount': '200' }
]

type Props = {
  globalState: AppGlobalState;
  setDrugs: (drug: Drug[] | null) => void;
  setMyDrugs: (myDrug: MyDrug[] | null) => void;
};

const Main = (props: Props) => {
  const { globalState, setDrugs, setMyDrugs } = props;
  const { email, myDrugs } = globalState;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const query = async () => {
    const docRef = doc(db, `users/${email}`);
    // const docRef = doc(db, `users/taro@rox.com`);
    const collectionRef = collection(docRef, 'drugs');
    const usersSnapshot = await getDocs(collectionRef);
    const usersData = usersSnapshot.docs.map(doc => doc.data());
    console.log(usersData);
    const data = usersSnapshot.docs.map(d => ({
      code: d.data().code,
      name: d.data().name,
      amount: d.data().amount
    }))

    setMyDrugs(data);

  }

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    query();
  }, []);

  return (

    <ModalProvider>
      <MainScreen>
        <h4>Hello {globalState.email}</h4>
        <DrugViewRow globalState={globalState} />

        <PrimaryButton onClick={() => (setIsOpen(true))}>お薬の管理</PrimaryButton>
        <PrimaryButton onClick={() => (alert("hoge"))}>お薬の検索</PrimaryButton>
        {/* <PrimaryButton onClick={() => (insert())}>登録</PrimaryButton> */}
        {/* <PrimaryButton onClick={() => (query())}>参照</PrimaryButton> */}

      </MainScreen>
      {/* <ManagerScreen isOpen={(isOpen)} toggleModal={toggleModal} /> */}
    </ModalProvider>
  );
}

export default Main;