import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const GroupWrapper = () => {
    const navigate = useNavigate();
    const [identifier, setIdentifier] = useState(''); // Email, CPF ou CNPJ

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Solicitando recuperação para:", identifier);
        // Chamar api/authService.js -> professionalForgotPassword(identifier)
        navigate('/nova-senha-profissional'); // Navega para o próximo passo
    }

    return (
        <div className="relative w-full flex justify-center">
            <div className="w-[582px]">
                <h2 className="font-medium text-5xl text-[#522f89]">Recuperação de senha</h2>
                <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
                    <p className="font-medium text-base text-[#00a85a]">
                        Insira o seu e-mail, CPF ou CNPJ de cadastro para continuar
                    </p>
                    <div>
                         <label htmlFor="identifier" className="font-medium text-base text-[#522f89] mb-2 block">
                            E-mail, CPF ou CNPJ
                        </label>
                        <input
                            id="identifier"
                            type="text"
                            value={identifier}
                            onChange={e => setIdentifier(e.target.value)}
                            className="w-full h-12 bg-white rounded-[10px] border border-solid border-[#522f89] px-4"
                        />
                    </div>
                    <div className="mt-4">
                        <button type="submit" className="w-[244px] h-[55px] bg-[#522f89] rounded-[5px] text-white text-base font-normal">
                           Continuar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
