import React from "react";
import { FormContactWrapper } from "../../../components/FormContactWrapper/FormContactWrapper";
import { useNavigate } from 'react-router-dom';
// import { register } from "../../../api/authService"; // Futura integração

export const FormContact = () => {
    const navigate = useNavigate();

    const handleRegisterSubmit = async (formData) => {
        console.log("Dados de Cadastro:", formData);
        // const { name, email, password } = formData;
        /*
        try {
            // Faltaria um campo para "sobrenome" e "confirmar senha" no backend.
            // Adaptaríamos o `register` para receber os dados necessários.
            await register(name, email, password);
            navigate('/meupainel');
        } catch(err) {
            console.error(err);
            // set error state
        }
        */
    };

  return (
    <FormContactWrapper
      buttonGroupButtonLabel="Cadastrar"
      buttonGroupButtonVariantPrimaryClassName="!border-[unset] !flex-1 !flex !grow !bg-[#f7902b]"
      className="!h-auto !absolute !left-[560px] !top-[180px] !w-[320px]"
      inputFieldDivClassName="!text-[#f7902b]"
      inputFieldDivClassName1="!text-[#f7902b]"
      inputFieldDivClassNameOverride="!text-[#f7902b]"
      inputFieldLabel="Usuário" // O ideal seria dividir em "Nome"
      inputFieldLabel1="E-mail"
      inputFieldLabel2="Senha" // Faltaria o campo "Confirmar Senha"
      visible={false} // Não mostra o campo de mensagem
      onSubmitForm={handleRegisterSubmit}
    />
  );
};
