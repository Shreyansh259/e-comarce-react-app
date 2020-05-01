import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper";

export const CartGridContainer = styled(Grid)`
    background: white;
    padding: 12px;
    height: 460px;
    overflow: auto;
`;

export const CartHeader = styled(Typography)`
  color: green;
`;

export const EmptyCartGrid = styled(Grid)`
  text-align-last: center;
  color: grey;
`;

export const CartDetails = styled(Typography)`
  font-weight: bolder;
`;


export const CardAmountGrid = styled(Grid)`
  padding: none;
`;

export const CartAmountPaper = styled(Paper)`
  margin-top: 15px;
  font-weight: bolder;
  text-align: center;
  background: green;
  color: white;
  padding: 12px;
`;

export const AmountText = styled(Typography)`
  border-radius: 7px;
`;
