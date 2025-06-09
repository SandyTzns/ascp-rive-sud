import { HomeBanner } from "../components/HomeBanner";
import { ActivityCard } from "../components/ActivityCard";
import activities from "../data/activities.json";
import { NewsPreview } from "../components/NewsPreview";
import news from "../data/news.json";
import { EntraideCard } from "../components/EntraideCard";
import entraide from "../data/entraide.json";
import "../styles/Home.css";

export const Home = () => {
  return (
    <div>
      <HomeBanner />
      <section className="section-news">
        <div className="title">
          <h2>Dernières actualités</h2>
        </div>
        <div className="container-news">
          {news.slice(0, 3).map((item) => (
            <NewsPreview
              key={item.id}
              image={item.image}
              alt={item.alt}
              title={item.title}
              excerpt={item.excerpt}
              date={item.date}
            />
          ))}
        </div>
        <div className="see-more-news">
          <a href="/actualites">Voir plus</a>
        </div>
      </section>
      <section className="section-activity" id="section-activity">
        <div className="title">
          <h2>Dernières activités </h2>
        </div>
        <div className="container-activities">
          {activities.slice(0, 4).map((activity, index) => (
            <a href="#" key={index}>
              <ActivityCard
                image={activity.image}
                alt={activity.alt}
                title={activity.title}
                customClass={activity.class}
              />
            </a>
          ))}
        </div>
        <div className="voir-plus">
          <a href="/#">Voir plus</a>
        </div>
      </section>
      <section className="section-entraide" id="section-entraide">
        <div className="title">
          <h2>Entraide</h2>
        </div>
        <div className="entraide-container">
          {entraide.slice(0, 2).map((entry) => (
            <EntraideCard
              key={entry.id}
              image={entry.image}
              alt={entry.alt}
              title={entry.title}
              description={entry.description}
            />
          ))}
        </div>
        <div className="voir-plus">
          <a href="/entraide">Voir plus</a>
        </div>
      </section>
    </div>
  );
};
