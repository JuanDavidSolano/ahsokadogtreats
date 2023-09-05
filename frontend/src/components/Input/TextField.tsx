import React from "react";

// MUI
import { TextField as MUITextField } from "@mui/material";

//ICONS
import PetsIcon from "@mui/icons-material/Pets";
import LockIcon from "@mui/icons-material/Lock";

//STYLE
import styles from "./textField.module.css";

export interface ITextFieldProps {
  name: string;
  iconName: IconName;
}

type IconName = "pet" | "lock";

function selectIconByName(iconName: IconName) {
  switch (iconName) {
    case "pet":
      return <PetsIcon />;
      break;
    case "lock":
      return <LockIcon />;
      break;
  }
}

const TextField: React.FC<ITextFieldProps> = (props) => {
  return (
    <div className={styles["textField-container"]}>
      {selectIconByName(props.iconName)}
      <MUITextField
        id={`${props.name}-input`}
        label={props.name}
        variant="standard"
      />
    </div>
  );
};

export default TextField;
