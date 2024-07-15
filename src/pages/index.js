import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";
import ExperienceSection from "../components/ExperienceSection";

export default function IndexPage() {
  return (
    <>
      <Seo title="Theeban Kumaresan Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        {/* <ArticlesSection
          sectionId="articles"
          heading="Latest Articles"
          sources={["Medium"]}
        /> */}
        <AboutSection sectionId="about" heading="About Me" />
        <InterestsSection sectionId="interests" heading="Interests" />
        <ExperienceSection sectionId="experience" heading="Experience" />
        <ProjectsSection sectionId="projects" heading="Projects" />
        <ContactSection sectionId="github" heading="Contact Me!" />
      </Page>
    </>
  );
}
