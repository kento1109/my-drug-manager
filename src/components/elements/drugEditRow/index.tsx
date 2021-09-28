import { useState } from 'react';
import styled, { useTheme } from 'styled-components';

import { MyDrug } from '../../../types'
import InputDrug from '../inputDrug'
import { StyledTable, StyledTableHead, TableHeader, TableData } from '../../screens/table';

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

const initMyDrug: MyDrug = {
  code: '',
  name: '',
  amount: '0'
}

type Props = {
  // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  myDrugs: MyDrug[]
  onEdit: (idx: number) => void
  onDelete: (name: string) => void
}

const DrugRow = (props: Props) => {
  const {
    myDrugs,
    onEdit,
    onDelete,
  } = props;

  const [count, setCount] = useState<number>(0);
  const [stateDrug, setDrug] = useState<MyDrug>(myDrugs);

  return (
    <Control>
      <StyledTable>
        <StyledTableHead>
          <tr>
            <TableHeader>お薬コード</TableHeader>
            <TableHeader>商品名</TableHeader>
            <TableHeader>残量</TableHeader>
            <TableHeader>削除</TableHeader>
          </tr>
        </StyledTableHead>
        <tbody>
          {/* {myDrugs.map((drug, i) => (
            <tr key={i}>
              <TableData>{drug.code}</TableData>
              <TableData>{drug.name}</TableData>
              <TableData>
                <InputDrug amount={drug.amount} />
              </TableData>
              <TableData>
                <DeleteButton onClick={() => (alert('Delete'))}>削除</DeleteButton>
              </TableData>
            </tr>
          ))} */}
        </tbody>
      </StyledTable>
    </Control>
  );
};

export default DrugRow;