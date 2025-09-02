import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Group = () => {
    const navigate = useNavigate();
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(newPassword !== confirmPassword){
            alert("As senhas não coincidem!");
            return;
        }
        console.log("Nova senha definida:", newPassword);
        // Chamar API para resetar a senha com um token de recuperação (obtido do link de email)
        navigate('/login-profissional');
    }

  return (
    <div className="relative w-[1247px] h-auto mx-auto">
        <div className="w-full text-center">
            <h1 className="[font-family:'Poppins',Helvetica] font-medium text-5xl text-[#522f89]">
                Nova Senha
            </h1>
        </div>

        <form onSubmit={handleSubmit} className="w-[532px] mx-auto mt-16 flex flex-col gap-6">
            <div>
                <label className="block mb-2 font-medium text-base text-[#522f89]">Nova Senha</label>
                <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full h-12 bg-white rounded-[10px] border border-solid border-[#00a85a] px-4"
                />
            </div>
             <div>
                <label className="block mb-2 font-medium text-base text-[#522f89]">Confirmar Senha</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full h-12 bg-white rounded-[10px] border border-solid border-[#00a85a] px-4"
                />
            </div>
            <div className="mt-4">
                 <button type="submit" className="w-[237px] h-[55px] bg-[#522f89] rounded-[5px] text-white font-normal text-base">
                    Trocar
                </button>
            </div>
        </form>
    </div>
  );
};
