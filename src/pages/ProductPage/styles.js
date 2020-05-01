import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

export const MainContent = styled(Grid)`
  width: 100%;
  justify-content: space-between;
`;

export const SearchSection = styled.div`
  margin-bottom: 12px;
`;

export const SearchInput = styled(TextField)`
  justify-content: center;
  background-color: white;
`;

export const SortSelect = styled(Select)`
  .MuiSelect-select {
    background-color: white;
  }
`;

export const ProductGrid = styled(Grid)`
  height: 50%;
`;
