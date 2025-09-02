import React, { useState } from "react";
import { InputField } from '../../../components/InputField/InputField'; // Supondo um InputField componentizado
import { Button } from '../../../components/Button/Button'; // Supondo um Button componentizado

export const GroupWrapper = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    cpf: '',
    country: 'Brasil',
    address: '',
    city: '',
    state: 'São Paulo',
    postalCode: '',
    whatsapp: '',
    email: '',
    password: '',
    council: 'CRO',
    councilNumber: '',
    clinicName: '',
    clinicPhone: '',
    acceptTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files[0]
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting professional registration data:", formData);
    // Aqui viria a chamada para a API
  };
  
  return (
    <form onSubmit={handleSubmit} className="absolute w-[1440px] top-[416px] left-[35px] bg-white px-[100px] py-[63px]">
        <div className="flex flex-col gap-8">
            <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-[#522f89] text-4xl">
              Detalhes de Cadastro Profissional
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {/* Inputs do Formulário */}
                <InputField name="name" label="Nome" value={formData.name} onChange={handleChange} />
                <InputField name="surname" label="Sobrenome" value={formData.surname} onChange={handleChange} />
                <InputField name="cpf" label="CPF" value={formData.cpf} onChange={handleChange} />
                {/* Outros campos de texto... */}
                 <InputField name="councilNumber" label="Número do conselho e UF" value={formData.councilNumber} onChange={handleChange} />

                 {/* Campos de Upload */}
                 <div>
                    <label className="block text-base font-medium text-[#522f89]">Foto Frente Documento</label>
                    <input type="file" name="docFront" onChange={handleFileChange} className="mt-2" />
                </div>
                 <div>
                    <label className="block text-base font-medium text-[#522f89]">Foto Verso Documento</label>
                    <input type="file" name="docBack" onChange={handleFileChange} className="mt-2" />
                </div>

                {/* Termos e Condições */}
                <div className="md:col-span-2 flex flex-col gap-4 border-t pt-4">
                     <div className="flex items-start gap-2">
                        <input type="checkbox" id="terms" name="acceptTerms" checked={formData.acceptTerms} onChange={handleChange} className="mt-1" />
                        <label htmlFor="terms" className="text-[#00a85a] text-base">Li e aceito os Termos de Uso, a Política de Privacidade e autorizo o tratamento dos meus dados pessoais...</label>
                    </div>
                </div>

                <div className="md:col-span-2 flex justify-center">
                    <Button type="submit" label="Criar conta" className="!bg-[#522f89] text-white !w-[320px]" />
                </div>
            </div>
        </div>
    </form>
  );
};
