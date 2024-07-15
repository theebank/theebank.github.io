import React from "react";
import { Animation } from "gatsby-theme-portfolio-minimal";
import { Section } from "gatsby-theme-portfolio-minimal";
import { Slider } from "gatsby-theme-portfolio-minimal/src/components/Slider";
import {
  Button,
  ButtonType,
} from "gatsby-theme-portfolio-minimal/src/components/Button";
import { Project } from "gatsby-theme-portfolio-minimal/src/components/Project";
import { PageSection } from "gatsby-theme-portfolio-minimal/src/types";
import { useLocalDataSource } from "../sections/Experience/data";
import * as classes from "../../src/components/style.module.css";
import Experience from "./Experience/Experience";

export default function ExperienceSection(
  props: PageSection
): React.ReactElement {
  const response = useLocalDataSource();
  const data = response.allExperienceJson.sections[0];

  return (
    <Animation type="fadeIn">
      <Section anchor={props.sectionId} heading={props.heading}>
        <Slider additionalClasses={[classes.Projects]}>
          {data.experiences.map((project, key) => {
            return project.visible ? (
              <Experience key={key} index={key} data={project} />
            ) : null;
          })}
        </Slider>
        {/* {data.button !== undefined && data.button.visible !== false && (
          <Animation className={classes.MoreProjects} type="fadeIn">
            <Button
              type={ButtonType.LINK}
              externalLink={true}
              url={data.button.url}
              label={data.button.label}
            />
          </Animation>
        )} */}
      </Section>
    </Animation>
  );
}
