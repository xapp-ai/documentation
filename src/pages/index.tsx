import React from "react";
import clsx from "clsx";

// import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";

import styles from "./styles.module.css";

interface ArticleProps {
  title: string;
  imageUrl?: string;
  link: string;
  description: JSX.Element;
}

const articles: ArticleProps[] = [
  {
    title: "Installation",
    imageUrl: "img/art/dall-e-install.png",
    link: "/help/install",
    description: <>Learn how to install the chat widget</>,
  },
  {
    title: "Bookings, Leads &Contacts",
    link: "/help/leads/lead-alerts",
    imageUrl: "img/art/dall-e-lead-capture.png",
    description: <>Learn about how we handle people trying to get in touch with you.</>,
  },
  {
    title: "Live Chat",
    link: "/help/live-chat/overview",
    imageUrl: "img/art/dall-e-live-chat.png",
    description: <>Learn how our live chat works.</>,
  },
];

function Article(props: ArticleProps) {
  const { imageUrl, title, description, link } = props;

  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      <Link to={useBaseUrl(link)}>
        <div className="text--center">
          {imgUrl && <img className={styles.featureImage} src={imgUrl} alt={title} />}
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{"Help Center"}</h1>
          <p className="hero__subtitle">{"Everything you need to get up and running and customize your experience."}</p>

          <div className={styles.buttons}>
            <Link
              className={clsx("button button--outline button--secondary button--lg", styles.getStarted)}
              to={useBaseUrl("/help/getting-started")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className="container">
            <div className="row">
              <div className={styles.searchContainer}>
                <input className={"xapp-search-button"} type="text" placeholder="🔍 Search our documents" />
              </div>
            </div>
          </div>
        </section>
        {articles && articles.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                <h4>Popular Topics</h4>
              </div>
              <div className="row">
                {articles.map((props, idx) => (
                  <Article key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
