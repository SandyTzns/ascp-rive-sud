// src/components/NewsPreview.jsx
import "../styles/NewsPreview.css";

export const NewsPreview = ({ image, alt, title, excerpt, date }) => {
  return (
    <article className="news-card">
      <img src={image} alt={alt} className="news-img" />
      <div className="news-content">
        <span className="news-date">{date}</span>
        <h3 className="news-title">{title}</h3>
        <p className="news-excerpt">{excerpt}</p>
      </div>
    </article>
  );
};
