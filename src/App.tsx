import React, { useState, useReducer, useCallback } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import PrimaryButton from './components/elements/primaryButton';
import Main from './components/screens/main';
import Login from './components/screens/login';
import { Drug, MyDrug } from './types';

import { collection, doc, addDoc, getDoc, getDocs } from 'firebase/firestore/lite';
import { db } from './firebase';


export type AppGlobalState = {
  email: string;
  drugs: Drug[];
  myDrugs: MyDrug[]
};

type Action<Payload> = {
  type: string;
  payload: Payload;
};

const reducer = (state: AppGlobalState, action: Action<any>) => {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_DRUGS":
      return { ...state, drugs: action.payload };
    case "SET_MYDRUGS":
      return { ...state, myDrugs: action.payload };
    default:
      return state;
  }
};

const initialState: AppGlobalState = {
  email: "",
  drugs: [],
  myDrugs: []
};

function App() {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [globalState, dispatch] = useReducer(reducer, initialState);

  // db.collection('users').doc('alovelace').set(data);
  // const insert = () => {
  //   const collectionRef = collection(db, 'drugs');
  //   addDoc(collectionRef, data);
  // }

  // const query = async () => {
  //   const docRef = doc(db, 'drugs/Vq9UzWHy2FegpObRm6NV');
  //   const drugSnapshot = await getDoc(docRef);
  //   const drugData = drugSnapshot.data();
  //   console.log(drugData);
  // }
  // const query = async () => {
  //   const collectionRef = collection(db, 'cities');
  //   const citySnapshot = await getDocs(collectionRef);
  //   const cityList = citySnapshot.docs.map(doc => doc.data());
  //   setCities(cityList);
  // }

  // const toggleModal = () => {
  //   setIsOpen(!isOpen);
  // }

  // if (stateCities != undefined) {
  //   console.log('stateCities is not undefined !!')
  //   console.log(stateCities[0]);
  // }

  const handleSetEmail = useCallback(
    (email: string | null) =>
      dispatch({
        type: "SET_EMAIL",
        payload: email,
      }),
    []
  );

  const handleSetDrugs = useCallback(
    (drugs: Drug[] | null) =>
      dispatch({
        type: "SET_DRUGS",
        payload: drugs,
      }),
    []
  );

  const handleSetMyDrugs = useCallback(
    (myDrugs: string | null) =>
      dispatch({
        type: "SET_MYDRUGS",
        payload: myDrugs,
      }),
    []
  );

  // handleSetDrugs([{ 'code': 'init', 'name': 'init', 'amount': 'init' }]);

  return (
    <Router>
      <Switch>
        <Route exact path='/' >
          <Login setEmail={handleSetEmail} />
        </Route>
        <Route path='/main' >
          <Main globalState={globalState} setDrugs={handleSetDrugs} setMyDrugs={handleSetMyDrugs} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
