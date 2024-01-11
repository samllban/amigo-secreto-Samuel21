import React from "react";
import './Card.module.scss';

const Card: React.FC = ({ children }) => {
    return (
        <div className="card">
            {children}
        </div>
    )
}

export default Card;
