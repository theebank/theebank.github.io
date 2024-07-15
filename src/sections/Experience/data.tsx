import { graphql, useStaticQuery } from "gatsby";
import { Experience } from "../../components/Experience/Experience";

interface ExperienceSectionQueryResult {
  allExperienceJson: {
    sections: {
      experiences: Experience[];
    }[];
  };
}

export const useLocalDataSource = (): ExperienceSectionQueryResult => {
  return useStaticQuery(graphql`
    query ExperienceSectionQuery {
      allExperienceJson {
        sections: nodes {
          experiences {
            title
            companyTitle
            bulletpoints
            companylogo {
              alt
              src {
                childImageSharp {
                  gatsbyImageData(width: 400)
                }
              }
            }
            tags
            visible
          }
        }
      }
    }
  `);
};
