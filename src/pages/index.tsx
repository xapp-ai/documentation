import React from "react";
import clsx from "clsx";

// import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";

import { SearchContainer, SearchWidgetConfig, SearchWidgetTheme } from "@xapp/intelligent-search-widget";


import styles from "./styles.module.css";
import SearchBar from "../theme/SearchBar";


const features = [
  {
    title: "Fast",
    imageUrl: "img/features/undraw_in_no_time_6igu.svg",
    description: (
      <>
        With OC Studio, you can have a conversational virtual agent in less than
        60 minutes.
      </>
    ),
  },
  {
    title: "No New Content",
    imageUrl: "img/features/undraw_knowledge_g5gf.svg",
    description: (
      <>
        We take your existing self-service web based support center and use it
        as initial training data for your agent.
      </>
    ),
  },
  {
    title: "Infinitely Scalable",
    imageUrl: "img/features/undraw_starry_window_ppm0.svg",
    description: (
      <>
        OC Studio provides infinite scalability with no code and low code
        methods of extension.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{"Help Center"}</h1>
          <p className="hero__subtitle">{"Everything needed"}</p>
          <SearchBar />

          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("/help/getting-started")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
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
