import React, { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';

// import InputText from '../inputText';
import { Drug } from '../../../types'

const InputText = styled.input`
  height: 60px;
  width: 30%;
  border: 1px solid #BEBEBE;
  box-sizing: border-box;
  border-radius: 6px;
  padding-left: 16px;
  font-size: 20px;
  color: #222222;
  ::placeholder {
    color: #C1C1C1;
  }
`;

const Control = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
  width: 100%;
`;

type Props = {
    amount: string
};

const InputDrug = (props: Props) => {

    const { amount } = props;

    const [stateAmount, setAmount] = useState<string>(amount);

    const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(e.target.value);
    };

    return (
        <>
            <Control>
                <InputText
                    id="drugAmount"
                    type="number"
                    value={stateAmount}
                    placeholder="残量"
                    onChange={handleChangeAmount}
                />
            </Control>
        </>
    );
}


export default InputDrug;
