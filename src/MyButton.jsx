import styled from "@emotion/styled";
import { Button } from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palatte.primary.main,
  textAlign: "left",
}));
const StyledButton2 = styled(Button)({});

export const MyButton = ({ varient, message }) => {
  return <StyledButton varient={varient}>{message}</StyledButton>;
};
export const MyButton2 = ({ varient, message }) => {
  return (
    <StyledButton2 varient={varient | "contained"}>{message}</StyledButton2>
  );
};
