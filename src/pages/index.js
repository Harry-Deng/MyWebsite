import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import DistortionString from "@site/src/components/DistortionString";

import styles from "./index.module.scss";

export default function Index() {
  return (
    <Layout>
      <div className={clsx("hero hero--dark", styles.banner)}>
        <div className="container">
          <div className={styles.col}>
            <div className={styles.avatar}>
              <img src="/img/Qavatar.png" />
            </div>
            <div className={styles.description}>
              <h1 className={clsx("hero__title", styles.title)}>
                <span>
                  Hi, there<span className={styles.wave}>👋</span>, I'm
                </span>
                <strong>DENG</strong> Yimo
              </h1>
              <div className={styles.roleContent}>
                I am a/an
                <span className={clsx("margin-left--sm", styles.role)}>
                  <DistortionString
                    contents={[
                      "Computer Security Researcher",
                      "Android Developer",
                      "Open Source Community Supporter",
                      "Classical Bodybuilding Enthusiast",
                      "Eternal Apprentice"
                    ]}
                  />
                </span>
              </div>
              <div className={styles.buttons}>
                <a href="/resume_2023_11_03.pdf">
                  <button className="button button--primary button--lg margin-right--md">
                    CV
                  </button>
                </a>
                <Link
                  className="button button--link button--lg color-primary-lightest"
                  to="/portfolio"
                >
                  I am working on
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`container padding-bottom--lg ${styles.badges}`}>
        <h2 className="margin-top--lg">技能</h2>
        <div>
          <img alt="Python" src="/img/badge/Python.svg"/>
          <img alt="Pytorch" src="/img/badge/Pytorch.svg"/>
          <img alt="TensorFlow" src="/img/badge/TensorFlow.svg"/>
          <img alt="JAVA" src="/img/badge/JAVA.svg"/>
          <img alt="JavaFX" src="/img/badge/JavaFX.svg"/>
          <img alt="Android" src="/img/badge/Android.svg"/>
          <img alt="C++" src="/img/badge/C++.svg"/>
          <img alt="Qt" src="/img/badge/Qt.svg"/>
          <img alt="C" src="/img/badge/C.svg"/>
          <img alt="Arduino" src="/img/badge/Arduino.svg"/>
          <img alt="LaTeX" src="/img/badge/LaTeX.svg"/>
        </div>

        <h2 className="margin-top--lg">工具</h2>
        <div>
          <img alt="Microsoft_Office" src="/img/badge/Microsoft_Office.svg"/>
          <img alt="Overleaf" src="/img/badge/Overleaf.svg"/>
          <img alt="VSCode" src="/img/badge/VSCode.svg"/>
        </div>

      </div>
    </Layout>
  );
}
