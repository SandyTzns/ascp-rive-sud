// src/components/EntraideCard.jsx
import "../styles/EntraideCard.css";

export const EntraideCard = ({ image, alt, title, description }) => {
  return (
    <article className="entraide-card">
      <img src={image} alt={alt} />
      <div className="entraide-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
};
