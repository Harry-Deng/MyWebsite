import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import DistortionString from "@site/src/components/DistortionString";
import DownloadButton from "@site/src/components/DownloadButton";

import styles from "./index.module.scss";

export default function Index() {
  return (
    <Layout>
      <div className={clsx("hero hero--dark", styles.banner)}>
        <div className="container">
          <div className={`${styles.col}`}>
            <div>
              <h1 className={clsx("hero__title", styles.title)}>
                <span>
                  你好<span className={styles.wave}>👋</span>, 我叫
                </span>
                <strong>邓</strong>一默
              </h1>
              <div className={styles.roleContent}>
                我是
                <span className={clsx("margin-left--sm", styles.role)}>
                  <DistortionString
                    contents={[
                      "计算机安全 研究者",
                      "Android 开发者",
                      "开源社区 支持者",
                      "古典健美 爱好者",
                      "永远的 学徒",
                    ]}
                  />
                </span>
              </div>
              <div className={styles.buttons}>
                <DownloadButton fileName="CV.pdf" fileUrl="resume_2023_11_03.pdf">
                  简历
                </DownloadButton>
                <Link
                  className="button button--link button--lg color-primary-lightest"
                  to="/portfolio"
                >
                  我正在做
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`container padding-bottom--lg ${styles.badges}`}>
        <h2 className="margin-top--lg">技能</h2>        
        <div>
          <img alt="HTML5" src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue"/>
          <img alt="CSS3" src="/img/badge/CSS3.svg"/>
          <img alt="JavaScript" src="/img/badge/JAVASCRIPT.svg"/>
          <img alt="Vue.js" src="/img/badge/VUE.svg"/>
          <img alt="Node.js" src="/img/badge/NODE.svg"/>
          <img alt="Swift" src="/img/badge/SWIFT.svg"/>
          <img alt="LaTeX" src="/img/badge/LATEX.svg"/>
        </div>
        
        <h2 className="margin-top--lg">工具</h2>
        <div>
          <img alt="VS Code" src="/img/badge/VS CODE.svg"/>
          <img alt="Vercel" src="/img/badge/VERCEL.svg"/>
          <img alt="Git" src="/img/badge/GIT.svg"/>
          <img alt="Docker" src="/img/badge/DOCKER.svg"/>
          <img alt="Quasar" src="/img/badge/QUASAR.svg"/>
          <img alt="TailwindCSS" src="/img/badge/TAILWIND CSS.svg"/>
          <img alt="Overleaf" src="/img/badge/OVERLEAF.svg"/>
          <img alt="Xcode" src="/img/badge/XCODE.svg"/>
          <img alt="Socket.io" src="/img/badge/SOCKET.IO.svg"/>
          <img alt="Axios" src="/img/badge/AXIOS.svg"/>
          <img alt="Font Awesome" src="/img/badge/FONT AWESOME.svg"/>
          <img alt="Sketch" src="/img/badge/SKETCH.svg"/>
          <img alt="Postman" src="/img/badge/POSTMAN.svg"/>
          <img alt="Sass" src="/img/badge/SASS.svg"/>
        </div>

        <h2 className="margin-top--lg">学习</h2>
        <div>
          <img alt="PostCSS" src="/img/badge/POSTCSS.svg"/>
          <img alt="UnoCSS" src="/img/badge/UNOCSS.svg"/>
          <img alt="Python" src="/img/badge/PYTHON.svg"/>
        </div>


      </div>
    </Layout>
  );
}
