import React from "react";

// MUI
import { Button as MUIButton } from "@mui/material";

//STYLE
import styles from "./button.module.css";

export interface IButtonProps {
  name: string;
  color: string;
  background: string;
  font: string;
}

const Button: React.FC<IButtonProps> = (props) => {
  return (
    <MUIButton
      className={styles.btn}
      id={`${props.name}-button`}
      sx={{
        background: props.background,
        color: props.color,
        fontFamily: props.font,
      }}
    >
      {props.name}
    </MUIButton>
  );
};

export default Button;
