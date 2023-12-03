import React from 'react';
import Star from '../js/Star';

interface AvaliacaoProps {
    isRated: number;
    texto: string;
}

const Avaliacao: React.FC<AvaliacaoProps> = ({ isRated, texto }) => (
    <div className="estrelas">
        {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} filled={index < (isRated ? 5 : 0)} />
        ))}
        <div className="text-estrelas">{texto}</div>
    </div>
);

export default Avaliacao;
