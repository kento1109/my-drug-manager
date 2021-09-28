import { useState } from 'react';
import styled from 'styled-components';

import { MyDrug } from '../../../types'
import { StyledTable, StyledTableHead, TableHeader, TableData } from '../../screens/table';
import { AppGlobalState } from '../../../App';


const Control = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
  width: 100%;
`;

const DeleteButton = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const CountButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  width: 18%;
`;

type Props = {
    globalState: AppGlobalState;
}

const DrugViewRow = (props: Props) => {
    const { globalState } = props;
    const { myDrugs } = globalState;

    return (
        <Control>
            <StyledTable>
                <StyledTableHead>
                    <tr>
                        <TableHeader>お薬コード</TableHeader>
                        <TableHeader>商品名</TableHeader>
                        <TableHeader>残量</TableHeader>
                    </tr>
                </StyledTableHead>
                <tbody>
                    {myDrugs.map((drug, i) => (
                        <tr key={i}>
                            <TableData>{drug.code}</TableData>
                            <TableData>{drug.name}</TableData>
                            <TableData>{drug.amount}</TableData>
                        </tr>
                    ))}
                </tbody>
            </StyledTable>
        </Control>
    );
};

export default DrugViewRow;