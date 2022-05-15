/*This source code is exported from pxCode, you can get more document from https://www.pxcode.io */

import React from "react";
import cn from "classnames";

import section1Styles from "../../pxcode/Informationsseite_section1.module.scss";
import section2Styles from "../../pxcode/Informationsseite_section2.module.scss";
import section3Styles from "../../pxcode/Informationsseite_section3.module.scss";
import styles from "../../pxcode/Informationsseite.module.scss";

function renderSection1(props) {
  return (
    <section
      className={cn(section1Styles.section1, section1Styles.section1_layout)}
    >
      <div className={cn(section1Styles.block1, section1Styles.block1_layout)}>
        <h1
          className={cn(
            section1Styles.hero_title,
            section1Styles.hero_title_layout
          )}
        >
          {"Klimaschutz kann jeder!"}
        </h1>
      </div>
    </section>
  );
}

function renderSection2(props) {
  return (
    <section
      className={cn(section2Styles.section2, section2Styles.section2_layout)}
    >
      <div className={cn(section2Styles.flex, section2Styles.flex_layout)}>
        <div
          style={{
            "--src": `url(${require("../../resources/c9f2f3c11ce1cf422f8328666d7e5ee3.png")})`,
          }}
          className={cn(section2Styles.image, section2Styles.image_layout)}
        />
        <h2
          className={cn(
            section2Styles.medium_title,
            section2Styles.medium_title_layout
          )}
        >
          {"Du möchtest die Natur schützen?"}
        </h2>
      </div>
    </section>
  );
}

function renderSection3(props) {
  return (
    <section
      className={cn(section3Styles.section3, section3Styles.section3_layout)}
    >
      <div className={cn(section3Styles.block2, section3Styles.block2_layout)}>
        <px-posize
          track-style='{"flexGrow":1}'
          x="20px 1759fr 20fr"
          y="26px minmax(0px, max-content) 26fr"
          lg-x="20px 1759fr 20fr"
          lg-y="23px minmax(0px, max-content) 23fr"
          md-x="20px 1759fr 20fr"
          md-y="19px minmax(0px, max-content) 19fr"
          sm-x="20px 1759fr 20fr"
          sm-y="16px minmax(0px, max-content) 16fr"
          xs-x="20px 1759fr 20fr"
          xs-y="15px minmax(0px, max-content) 15fr"
          xxs-x="20px 1759fr 20fr"
          xxs-y="13px minmax(0px, max-content) 13fr"
          tn-x="20px 1759fr 20fr"
          tn-y="12px minmax(0px, max-content) 12fr"
        >
          <h1 className={cn(section3Styles.big_title_box)}>
            <pre className={cn(section3Styles.big_title)}>
              {
                "Unsere Erde ist bedroht. Der menschengemachte Klimawandel bereitet uns große Probleme. Denn es geht nicht nur darum die Natur zu retten, sondern es geht darum UNS zu retten. Wir Menschen brauchen sauberes Wasser, Nahrung, Luft zum Atmen und erträgliche Außentemperaturen. All das ist gefährdet. \r\nAngesichts dieser riesigen Menschheitsaufgabe fühlen wir uns manchmal hilflos. Doch während die großen Hebel in der Politik gestellt werden müssen, können auch wir einen Unterschied machen. Du möchtest wissen, was Du konkret zum Klimaschutz beitragen kannst?\r\nDer Carbon-Tracker ist ein Tool, mit dessen Hilfe Du die klimarelevantesten Handlungen in deinem Alltag tracken kannst. Wenn du regelmäßig das Formular ausfüllst, entwickelst Du in Deinem Alltag ein stärkeres Bewusstsein dafür, welchen Einfluss Deine Handlungen auf das Klima haben. Außerdem kannst du versuchen, Dein Verhalten über einen längeren Zeitraum zu verändern und damit dein Leben klimafreundlicher gestalten. \r\nTipp: Egal wie groß Dein Enthusiasmus ist; versuche nicht alles auf einmal zu verändern, sondern über einen langen Zeitraum nach und nach Dein Verhalten anzupassen. Dann fällt es Dir viel leichter.\r Der Carbon-Tracker soll später einmal Teil einer größeren App werden, mit der europaweit Schulen ihren ökologischen Fußabdruck messen und im Anschluss daran arbeiten können, diesen zu verbessern.\r\n"
              }
            </pre>
          </h1>
        </px-posize>
      </div>
    </section>
  );
}

export default function Informationsseite(props) {
  return (
    <main
      className={`informationsseite ${cn(styles.main, styles.main_layout)}`}
    >
      {renderSection1(props)}
      {renderSection2(props)}
      {renderSection3(props)}
    </main>
  );
}

Informationsseite.inStorybook = true;
