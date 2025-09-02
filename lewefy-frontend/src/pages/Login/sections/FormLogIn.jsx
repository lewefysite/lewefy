import React from "react";
import { FormLogInWrapper } from "../../../components/FormLogInWrapper/FormLogInWrapper";

export const FormLogIn = () => {
  
  // A lógica de submit do formulário seria passada para o wrapper.
  const handleLoginSubmit = (formData) => {
    console.log("Formulário de Login enviado:", formData);
    // Aqui viria a chamada para a função de login do authService.
  }
  
  return (
    <FormLogInWrapper
      buttonGroupButtonLabel="Login"
      buttonGroupButtonVariantPrimaryClassName="!border-[unset] !flex-1 !flex !grow !bg-[#178bc4]"
      className="!h-[368px] !min-w-[unset] !flex !absolute !left-[394px] !w-[792px] !top-[182px]"
      inputFieldDivClassName="!text-[#168ac4]"
      inputFieldDivClassNameOverride="!text-[#168ac5]"
      textLinkDivClassName="!text-[#168ac4]"
      textLinkText="Esqueci a senha"
      onSubmitForm={handleLoginSubmit} // Passando a função para o componente
    />
  );
};
