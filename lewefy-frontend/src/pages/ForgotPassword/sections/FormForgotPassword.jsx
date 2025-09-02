import React from "react";
import { FormForgotPasswordWrapper } from "../../../components/FormForgotPasswordWrapper/FormForgotPasswordWrapper";
// import { forgotPassword } from "../../../api/authService";

export const FormForgotPassword = () => {
    
    const handleForgotPasswordSubmit = async (formData) => {
        console.log("Solicitação de nova senha para o email:", formData.email);
        // try {
        //     await forgotPassword(formData.email);
        //     // Lógica para exibir mensagem de sucesso na tela.
        // } catch(error) {
        //     // Lógica para exibir mensagem de erro.
        // }
    }
    
  return (
    <FormForgotPasswordWrapper
      buttonGroupButtonDivClassName="!text-[#7aca5b]"
      buttonGroupButtonLabel="Cancelar"
      buttonGroupButtonLabel1="Mudar a senha"
      buttonGroupButtonVariantPrimaryClassName="!border-[unset] !flex-[0_0_auto] !bg-[#7aca5b]"
      className="!h-[193px] !min-w-[unset] !flex !absolute !left-[505px] !w-[500px] !top-[199px]"
      inputFieldDivClassName="!text-[#7aca5b]"
      onSubmitForm={handleForgotPasswordSubmit}
    />
  );
};
