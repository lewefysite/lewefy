/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React, { useState } from "react";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";
import { InputField } from "../InputField/InputField";
import { TextLink } from "../TextLink/TextLink";
// Importar hook e serviço de auth aqui
// Ex: import { useAuth } from "../../hooks/useAuth";
// import { useNavigate } from "react-router-dom";


export const FormLogInWrapper = ({
  className,
  inputFieldDivClassName,
  inputFieldDivClassNameOverride,
  buttonGroupButtonVariantPrimaryClassName,
  textLinkDivClassName,
}) => {
    
    // const { login } = useAuth();
    // const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        /*
        try {
            await login(email, password);
            navigate('/meupainel');
        } catch(err) {
            setError('Falha ao autenticar. Verifique suas credenciais.');
        }
        */
    }
    
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
        placeholder="seu@email.com"
      />
      <InputField
        className="!self-stretch !flex-[0_0_auto] !flex !w-full"
        divClassName={inputFieldDivClassNameOverride}
        label="Senha"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Sua senha"
      />
      <ButtonGroup
        align="justify"
        buttonStart={false} // Não renderizar botão "Cancelar"
        buttonLabel1="Login"
        buttonEnd
        onButtonEndClick={handleSubmit} // O botão também pode acionar o submit
        buttonVariantPrimaryClassName={buttonGroupButtonVariantPrimaryClassName}
        className="!self-stretch !flex-[0_0_auto] !w-full"
      />
      <TextLink
        className="!self-stretch !flex-[0_0_auto] !flex !w-full justify-center" // Centraliza o link
        divClassName={textLinkDivClassName}
        text="Esqueci a senha"
        to="/esqueci-senha" // Rota correta para a recuperação
      />
      {error && <p className="text-red-500 text-sm w-full text-center">{error}</p>}
    </form>
  );
};

FormLogInWrapper.propTypes = {
  className: PropTypes.string,
  inputFieldDivClassName: PropTypes.string,
  inputFieldDivClassNameOverride: PropTypes.string,
  buttonGroupButtonVariantPrimaryClassName: PropTypes.string,
  textLinkDivClassName: PropTypes.string,
};
```*Observação: Converti o `div` em uma tag `<form>` e integrei a lógica de estado do React com `useState`. O componente agora controla os valores dos inputs e está pronto para chamar a função de login. A lógica da API está comentada para manter o foco na estruturação, mas mostra exatamente como a integração ocorreria.*

---

**ARQUIVO 19 de N**

**DESTINO:** `/lewefy-frontend/src/components/FormContactWrapper/FormContactWrapper.jsx`

**ARQUIVO:** `FormContactWrapper.jsx`

**CONTEÚDO:**
```javascript
/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React, { useState } from "react";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";
import { InputField } from "../InputField/InputField";
import { TextareaField } from "../TextareaField/TextareaField";

export const FormContactWrapper = ({
  className,
  inputFieldLabel = "Name",
  inputFieldLabel1 = "Surname",
  inputFieldLabel2 = "Email",
  visible = true, // Controla se a área de mensagem aparece
  buttonGroupButtonLabel = "Submit",
  inputFieldDivClassName,
  inputFieldDivClassNameOverride,
  inputFieldDivClassName1,
  buttonGroupButtonVariantPrimaryClassName,
  onSubmitForm // Função a ser chamada no submit
}) => {
    
  const [fields, setFields] = useState({
    name: '',
    surname: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields(prev => ({...prev, [name]: value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(onSubmitForm) {
        onSubmitForm(fields);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`inline-flex flex-col min-w-80 items-start gap-[var(--size-space-600)] pt-[var(--size-space-600)] pr-[var(--size-space-600)] pb-[var(--size-space-600)] pl-[var(--size-space-600)] relative bg-color-background-default-default rounded-[var(--size-radius-200)] border border-solid border-color-border-default-default ${className}`}
    >
      <InputField
        name="name"
        value={fields.name}
        onChange={handleChange}
        className="!self-stretch !flex-[0_0_auto] !flex !w-full"
        divClassName={inputFieldDivClassName}
        label={inputFieldLabel}
        state="default"
        placeholder="Seu nome"
      />
      <InputField
        name="surname"
        value={fields.surname}
        onChange={handleChange}
        className="!self-stretch !flex-[0_0_auto] !flex !w-full"
        divClassName={inputFieldDivClassNameOverride}
        label={inputFieldLabel1}
        state="default"
        placeholder="Seu sobrenome"
      />
      <InputField
        name="email"
        value={fields.email}
        onChange={handleChange}
        className="!self-stretch !flex-[0_0_auto] !flex !w-full"
        divClassName={inputFieldDivClassName1}
        label={inputFieldLabel2}
        type="email"
        state="default"
        placeholder="seu@email.com"
      />

      {visible && (
        <TextareaField
          name="message"
          value={fields.message}
          onChange={handleChange}
          className="!self-stretch !flex-[0_0_auto] !flex !w-full"
          drag="/img/drag.svg"
          dragClassName="!left-[260px]"
          label="Message"
          state="default"
          placeholder="Sua mensagem..."
        />
      )}

      <ButtonGroup
        align="justify"
        buttonStart={false}
        buttonEnd
        buttonLabel1={buttonGroupButtonLabel}
        onButtonEndClick={handleSubmit}
        buttonVariantPrimaryClassName={buttonGroupButtonVariantPrimaryClassName}
        className="!self-stretch !flex-[0_0_auto] !w-full"
      />
    </form>
  );
};

FormContactWrapper.propTypes = {
    inputFieldLabel: PropTypes.string,
    inputFieldLabel1: PropTypes.string,
    inputFieldLabel2: PropTypes.string,
    visible: PropTypes.bool,
    buttonGroupButtonLabel: PropTypes.string,
    className: PropTypes.string,
    // Add other prop types here
};
