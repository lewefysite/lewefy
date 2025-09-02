import React from "react";
import { FormContactWrapper } from "../../../components/FormContactWrapper/FormContactWrapper";
import { useNavigate } from "react-router-dom";
// import { sendMatchRequest } from '../../../api/professionalsService';

export const FormContact = () => {
    const navigate = useNavigate();

    const handleMatchSubmit = (formData) => {
        console.log("Enviando solicitação de Match:", formData);
        // const { name, email, phone, subject } = formData;
        // const professionalId = // Obter da URL ou estado
        /* 
        try {
            await sendMatchRequest({professionalId, message: subject});
            navigate('/meus-matches');
        } catch(err) {
            // Lidar com erro
        }
        */
    };
    
  return (
    <FormContactWrapper
      buttonGroupButtonLabel="Enviar"
      buttonGroupButtonVariantPrimaryClassName="!border-none !flex-1 !flex !grow !bg-[#f7902b]"
      className="!absolute !left-1/2 !-translate-x-1/2 !top-[181px] w-[320px] h-auto"
      inputFieldDivClassName="!text-[#f7902b]"
      inputFieldDivClassNameOverride="!text-[#f7902b]"
      inputFieldDivClassName1="!text-[#f7902b]"
      inputFieldLabel="Nome"
      inputFieldLabel1="E-mail"
      inputFieldLabel2="Telefone"
      textareaFieldDivClassName="!text-[#f7902b]"
      textareaFieldDivClassNameOverride="!text-[#f7902b]"
      textareaFieldLabel="Assunto"
      visible={true} // Mostrar o campo de mensagem (Assunto)
      onSubmitForm={handleMatchSubmit}
    />
  );
};

```*Observação: Esta seção reutiliza o `FormContactWrapper` (criado originalmente para a tela de Cadastro), mostrando seu poder como componente reutilizável. Apenas mudamos as props (labels, cores, função de submit) para adaptá-lo a este novo contexto.*

---
Pronto. Seguimos para os últimos arquivos.
