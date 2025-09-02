import React from 'react';
import { FooterBig as CommonFooterBig } from '../../../components/common/FooterBig'; // Importando como alias para clareza

export const FooterBig = () => {
    // Componente reutilizável, apenas sendo renderizado no local correto.
    return (
       <div className="absolute top-[640px] left-0">
           <CommonFooterBig />
       </div>
    )
}
