/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=115266-d=1152665201300829
*/

import PropTypes from "prop-types";
import React, { useState } from "react";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";
import { InputField } from "../InputField/InputField";
import { useNavigate } from "react-router-dom";
// import { forgotPassword } from "../../api/authService";

export const FormForgotPasswordWrapper = ({
  className,
  inputFieldDivClassName,
  buttonGroupButtonLabel = "Cancel",
  buttonGroupButtonLabel1 = "Reset Password",
  buttonGroupButtonDivClassName,
  buttonGroupButtonVariantPrimaryClassName,
}) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    /*
    try {
      await forgotPassword(email);
      setSuccess('Se um email de recuperação for encontrado, ele será enviado para sua caixa de entrada.');
    } catch (err) {
      setError('Ocorreu um erro. Tente novamente mais tarde.');
    }
    */
  };
  
  return (
    <form
      onSubmit={handleSubmit}
      className={`inline-flex flex-col min-w-80 items-start gap-[var(--size-space-600)] pt-[var(--size-space-600)] pr-[var(--size-space-600)] pb-[var(--size-space-600)] pl-[var(--size-space-600)] relative bg-color-background-default-default rounded-[var(--size-radius-200)] border border-solid border-color-border-default-default ${className}`}
    >
      <InputField
        className="!self-stretch !flex-[0_0_auto] !flex !w-full"
        divClassName={inputFieldDivClassName}
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Digite o email cadastrado"
      />
      <ButtonGroup
        align="center"
        buttonDivClassName={buttonGroupButtonDivClassName}
        buttonLabel={buttonGroupButtonLabel}
        buttonLabel1={buttonGroupButtonLabel1}
        onButtonStartClick={() => navigate('/login')} // Botão "Cancelar"
        onButtonEndClick={handleSubmit} // Botão "Reset Password"
        buttonVariantPrimaryClassName={buttonGroupButtonVariantPrimaryClassName}
        className="!self-stretch !flex-[0_0_auto] !w-full"
      />
      {error && <p className="text-red-500 text-sm w-full text-center">{error}</p>}
      {success && <p className="text-green-500 text-sm w-full text-center">{success}</p>}
    </form>
  );
};

FormForgotPasswordWrapper.propTypes = {
  buttonGroupButtonLabel: PropTypes.string,
  buttonGroupButtonLabel1: PropTypes.string,
  // Add other prop types here
};
