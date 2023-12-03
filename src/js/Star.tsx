import React from 'react';

interface StarProps {
    filled: boolean;
}

const Star: React.FC<StarProps> = ({ filled }) => (
    <img
        src={filled ? './img/star-filled.png' : './img/star-outline.png'}
        className="star_img"
        alt="Estrela"
    />
);

export default Star;
