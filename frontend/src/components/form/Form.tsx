import React from "react";

import { FormControl } from "@mui/material";

import styles from "./form.module.css";
import TextField, { ITextFieldProps } from "../Input/TextField";
import Button, { IButtonProps } from "../Button/Button";

interface IFormProps {
  name: string;
  textFields: ITextFieldProps[];
  button: IButtonProps;
}

const Form: React.FC<IFormProps> = (props) => {
  return (
    <>
      <div className={styles.container}>
        <FormControl className={styles["form-container"]}>
          <TextField name="username" iconName="pet" />
          <TextField name="password" iconName="lock" />
          <Button
            name={props.button.name}
            background={props.button.background}
            color={props.button.color}
            font={props.button.font}
          />
        </FormControl>
      </div>
    </>
  );
};

export default Form;
