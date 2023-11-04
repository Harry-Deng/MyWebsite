import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import DistortionString from "@site/src/components/DistortionString";

import styles from "./index.module.scss";

export default function Project() {

  return (
    <Layout>
      <div className={clsx("hero hero--dark", styles.banner)}>
        <div className="container">
          <div className={`${styles.col}`}>
            <div>
              <h1 className={clsx("hero__title", styles.title)}>
                <span>
                  Welcome to
                </span>
                <strong>My</strong> Projects
              </h1>
              <div className={styles.roleContent}>
                Here is 
                <div className={styles.role}>
                  <DistortionString
                    contents={[
                      "Privacy Protection in Sparse Crowd Sensing",
                      "Multi-party Games in the Cloud Service Market",
                      "Security Issues in Multimodal Large Models",
                      "Desktop-Level Encrypted Communication Software",
                      "Within Local Area Network Attack Software",
                      "Schedule Management Android Application",
                      "IDS for Covert Attacks on the CAN Bus",
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container margin-bottom--md">
        <div className="row">
          <div className="col col--4">
            <div className={`${styles.card}`}>
              <div className="card">
                <div className="card__image">
                  <Link to="https://github.com/Harry-Deng/NEUHermit">
                    <img
                      src="/img/Application Demonstration.png"
                      alt="Application Demonstration"
                      title="Go To GitHub Repository"
                    />
                  </Link>
                </div>
                <div className="card__body">
                  <Link to="https://github.com/Harry-Deng/NEUHermit">
                    <h4>NEU Hermit / 东百隐士</h4>
                  </Link>
                  <small>
                  An Android application amalgamates
                  multiple functionalities including a calendar, 
                  To-do tasks, moments, and class schedules.
                  </small>
                </div>
                <div className="card__footer">
                  <div className="button-group button-group--block">
                    {/* <Link
                      className="button button--secondary"
                      to="https://math.dar-xs.com"
                    >
                      前往站点
                    </Link> */}
                    <Link
                      className="button button--secondary"
                      to="https://github.com/Harry-Deng/NEUHermit"
                    >
                      GitHub Repository
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </Layout>
  );
}
