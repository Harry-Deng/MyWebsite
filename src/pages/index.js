import React, { useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import DistortionString from "@site/src/components/DistortionString";

import styles from "./index.module.scss";

export default function Index() {
  const [isAn, setIsAn] = useState(false);
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
                I am {isAn ? "an" : "a"}
                <br />
                <span className={styles.role}>
                  <DistortionString
                    contents={[
                      "Computer Security Researcher",
                      "AI Security Researcher",
                      "Android Developer",
                      "Open Source Community Supporter",
                      "Classical Bodybuilding Enthusiast",
                      "Eternal Student",
                    ]}
                    setIsAn={setIsAn}
                    charTime={60}
                    rmCharTime={30}
                  />
                </span>
              </div>
              <div className={styles.buttons}>
                <a href="/Resume.pdf">
                  <button className="button button--primary button--lg margin-right--md">
                    CV
                  </button>
                </a>
                <Link
                  className="button button--link button--lg color-primary-lightest"
                  to="/Project"
                >
                  My Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`container padding-bottom--lg ${styles.badges}`}>
        <h2 className="margin-top--lg">Skills</h2>
        <div>
          <img alt="Python" src="/img/badge/Python.svg" />
          <img alt="Pytorch" src="/img/badge/Pytorch.svg" />
          <img alt="TensorFlow" src="/img/badge/TensorFlow.svg" />
          <img alt="JAVA" src="/img/badge/JAVA.svg" />
          <img alt="Android" src="/img/badge/Android.svg" />
          <img alt="JavaFX" src="/img/badge/JavaFX.svg" />
          <img alt="C++" src="/img/badge/C++.svg" />
          <img alt="Qt" src="/img/badge/Qt.svg" />
          <img alt="C" src="/img/badge/C.svg" />
          <img alt="Arduino" src="/img/badge/Arduino.svg" />
          <img alt="LaTeX" src="/img/badge/LaTeX.svg" />
        </div>

        <h2 className="margin-top--lg">Tools</h2>
        <div>
          <img alt="GIT" src="/img/badge/GIT.svg" />
          <img alt="Overleaf" src="/img/badge/Overleaf.svg" />
          <img alt="Android_Studio" src="/img/badge/Android_Studio.svg" />
          <img alt="VSCode" src="/img/badge/VSCode.svg" />
          <img alt="Netlify" src="/img/badge/Netlify.svg" />
          <img alt="Vercel" src="/img/badge/Vercel.svg" />
          <img alt="Microsoft_Office" src="/img/badge/Microsoft_Office.svg" />
        </div>
      </div>
    </Layout>
  );
}
