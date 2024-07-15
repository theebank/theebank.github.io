import React from "react";
import { ImageObject } from "gatsby-theme-portfolio-minimal/src/types";
import { GatsbyImage } from "gatsby-plugin-image";
import { Animation } from "gatsby-theme-portfolio-minimal";
import { useMediaQuery } from "gatsby-theme-portfolio-minimal/src/hooks/useMediaQuery";
import { Icon } from "gatsby-theme-portfolio-minimal/src/components/Icon";
import * as classes from "./style.module.css";

enum LinkType {
  external = "external",
  github = "github",
}

export interface Experience {
  title: string;
  companyTitle: string;
  bulletpoints?: string[];
  companylogo?: ImageObject & { linkTo?: string };
  tags?: string[];
  links?: {
    type: LinkType;
    url: string;
  }[];
  visible: boolean;
}

interface ExperienceProps {
  data: Experience;
  index: number;
}
export default function Experience(props: ExperienceProps): React.ReactElement {
  const isDesktopBreakpoint = useMediaQuery("(min-width: 992px)");

  return (
    <Animation
      type="fadeUp"
      className={classes.Project}
      style={{
        flexDirection:
          isDesktopBreakpoint && props.index % 2 === 0
            ? "row-reverse"
            : undefined,
      }}
    >
      <div className={classes.Details}>
        <h2 className={classes.Title}>{props.data.title}</h2>
        <h4 className={classes.Title}>{props.data.companyTitle}</h4>
        <div>
          {props.data.bulletpoints &&
            props.data.bulletpoints.length !== 0 &&
            props.data.bulletpoints.map((bulletpoint, key) => {
              return <h5 key={key}>•{bulletpoint}</h5>;
            })}
        </div>
      </div>
      {props.data.companylogo?.src && (
        <GatsbyImage
          image={props.data.companylogo.src.childImageSharp.gatsbyImageData}
          alt={
            props.data.companylogo.alt || `Project ${props.data.companyTitle}`
          }
        />
      )}
    </Animation>
  );
}
