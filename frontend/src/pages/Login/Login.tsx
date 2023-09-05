import { IButtonProps } from "../../components/Button/Button";
import { ITextFieldProps } from "../../components/Input/TextField";
import Form from "../../components/form/Form";
import ahsokaLogo from "./../../assets/Logo.png";

import "./login.css";

const LoginFormTextFields: ITextFieldProps[] = [
  { name: "username", iconName: "pet" },
  { name: "password", iconName: "lock" },
];

const LoginFormButton: IButtonProps = {
  name: "Login",
  color: "#ffffff",
  background: "#45b6fb",
  font: `"ADLaM Display", cursive`,
};

const Login = () => {
  return (
    <>
      <div className="container">
        <div>
          <img src={ahsokaLogo} className="logo react" alt="React logo" />
        </div>
        <Form
          name="login"
          textFields={LoginFormTextFields}
          button={LoginFormButton}
        />
      </div>
    </>
  );
};

export default Login;
