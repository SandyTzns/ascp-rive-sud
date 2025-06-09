// src/components/ActivityCard.jsx
import "../styles/ActivityCard.css";

export const ActivityCard = ({ image, alt, title, customClass }) => {
  return (
    <article className={`box box-activity ${customClass}`}>
      <img src={image} alt={alt} className="activity-image" />
      <div className="content content-activity">
        <div className="infos-activity">
          <h3>{title}</h3>
        </div>
      </div>
    </article>
  );
};
