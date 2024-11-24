// Card.js
import React from "react";
interface CardProps {
  title: string;
  icon: string;
  description: string;
}

const Card = ({ title, icon, description }: CardProps) => {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <button className="card-button">اقرأ المزيد</button>
    </div>
  );
};

export default Card;
