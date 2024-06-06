// Core packages
import Image from "next/image";

import Badges from "../../utils/badge.list.util";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";
import SectionGridBg from "../../blocks/section.grid.block";

// Career scss
import career from "../../../styles/sections/index/career.module.scss";

/**
 * Section: Career
 *
 * @returns {jsx} <Career />
 */
export default function Career() {
  /* *********************************** */

  const workingTime = (year, month, day) => {
    // Get current date
    const currentDate = new Date();
    // Set the start date to January 1, 2018
    const startDate = new Date(year, month, day);

    // Calculate the difference in years and months
    let yearsDiff = currentDate.getFullYear() - startDate.getFullYear();
    let monthsDiff = currentDate.getMonth() - startDate.getMonth();

    // Adjust for negative months difference
    if (monthsDiff < 0) {
      yearsDiff--;
      monthsDiff += 12;
    }
    return `${yearsDiff} yrs ${monthsDiff} mos`;
  };

  /* *********************************** */

  return (
    <Section classProp={`${career.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Experience"
          preTitle="Career"
          subTitle="I am current managing, designing, and developing all consumer and digital product initiatives at Infinity Health Africa"
        />
        <section className={career.area}>
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Infinity Health Africa</h3>
                <h4>Permanent Full-time</h4>
                <h4>Mar 2023 - Present · {workingTime(2023, 3, 12)}</h4>
                <h5>Lagos, Nigeria</h5>
              </span>
              <p>
                Infinity Health is a Business and Market Intelligence firm that
                was founded out of a dedication to bolstering and improving
                Africa&apos;s healthcare sector through the dissemination of
                regionally relevant, practically relevant, and ultimately
                actionable data and insights.
              </p>
              <p style={{ marginTop: -10 }}>
                Our mission is to improve the penetration of healthcare services
                in Africa by helping healthcare businesses scale with local,
                practical, and actionable insights. We are working to be the
                leading source of comprehensive, reliable, and actionable data
                and insights on the African Healthcare market.
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>

          <article className={career.companyPositions}>
            <div className={career.position}>
              <div className={career.positionContent}>
                <span className={career.positionHeader}>
                  <h3>Full Stack Developer</h3>
                  <h4>Mar 2023 - Present · {workingTime(2023, 7, 18)}</h4>
                </span>
                <p>
                  As the lead full stack developer I am responsible for all
                  software development, CI/CD, and QA. This is for the front
                  end, APIs, and the back end. Additionally I was tasked with
                  identifying and analyzing weak points in the customer journey
                  and employee workflows. Each project had to be estimated and
                  prioritized based on its workload and immediate impact to
                  efficiency or revenue. Some of these projects have been so
                  successful internally that we have planned refactoring for
                  commercialization.
                </p>
                <p>Some key projects complete during this time 👇</p>
                <ul className={career.list}>
                  <li>
                    Product attribute and settings automated testing
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Eradicated critical
                      data input errors
                    </span>
                  </li>
                  <li>
                    Inventory management reporting and automation
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Decreased
                      purchasing labour by ~80%
                    </span>
                  </li>
                  <li>
                    Website Maintenance and Updates
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Delivering superior
                      digital experiences and making a meaningful difference in
                      healthcare accessibility.
                    </span>
                  </li>
                  <li>
                    Implementing strong authentication rules
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Significantly
                      bolstered data security and user privacy.
                    </span>
                  </li>
                  <li>
                    Optimized the website for quick response time
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Maximizes user
                      engagement but also boosted search engine rankings,
                      driving increased traffic and retention.
                    </span>
                  </li>
                </ul>
                <Badges
                  list={fullStack}
                  block="stack"
                  fullContainer="fullContainer"
                />
              </div>
              <div className={career.positionAlt}></div>
            </div>

            <div className={career.position}>
              <div className={career.positionContent}>
                <span className={career.positionHeader}>
                  <h3>IT Support Specialist</h3>
                  <h4>Feb 2023 - Present · {workingTime(2023, 2, 12)}</h4>
                </span>
                <p>
                  Managing the technological infrastructure of the company,
                  ensuring seamless operations and safeguarding sensitive data.
                  My responsibilities encompassed a wide array of tasks,
                  including overseeing the company&apos;s servers and workspace,
                  creating custom email accounts, and troubleshooting issues
                  within the internal network.
                </p>
                <p style={{ marginTop: -30 }}>
                  Additionally, I took charge of managing and maintaining the
                  company&apos;s internal network, providing assistance to staff
                  members in resolving individual technical challenges, and
                  implementing safe usage guidelines for our intranet.
                </p>
                <p style={{ marginTop: -30 }}>
                  A key aspect of my role involved educating staff on
                  cybersecurity best practices, such as regularly changing
                  passwords and exercising caution when interacting with
                  suspicious links or emails, thereby fortifying our network
                  against potential threats.
                </p>
                <p style={{ marginTop: -30 }}>
                  Moreover, I undertook the management of the company&apos;s
                  central database, ensuring its integrity and accessibility to
                  support efficient business operations. In addition to these
                  core responsibilities, I remained adaptable and proactive in
                  addressing any IT-related needs that arose, contributing to a
                  cohesive and technologically resilient work environment.{" "}
                </p>
                <p style={{ marginTop: -30 }}>
                  Through my dedication to excellence and proactive approach to
                  IT support, I facilitated smooth workflows, enhanced
                  cybersecurity posture, and empowered staff with the knowledge
                  and tools necessary to navigate the digital landscape
                  securely.
                </p>
                <Badges
                  list={stack}
                  block="stack"
                  fullContainer="fullContainer"
                />
              </div>
              <div className={career.positionAlt}></div>
            </div>
          </article>

          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>INC Consulting Africa</h3>
                <h4>Contract Part-time</h4>
                <h4>Jun 2022 - Jan 2023 · 7 mos</h4>
                <h5>Port Harcourt, Nigeria</h5>
              </span>
              <p>
                INC Consulting is dedicated to helping businesses, especially
                those in the healthcare sector, stay ahead of the competition in
                this rapidly evolving digital landscape. Our goal is to increase
                the scale and penetration of healthcare innovation across Africa
                while delivering value to our clients and impact to communities.
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>

          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Turing</h3>
                <h4>Freelance Full-time</h4>
                <h4>Jan 2020 - Apr 2022 · 2 yrs 3 mos</h4>
                <h5>Remote</h5>
              </span>
              <p>
                Turing guides companies in integrating generative AI into their
                business with application development, LLM training and data
                enhancement, and on-demand talent. Together, we build the most
                customized GenAI applications, train the highest quality
                foundational models, and provide the most scalable solution to
                engineering skill gaps.
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>
        </section>
      </Container>
    </Section>
  );
}

const fullStack = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "nextjs", name: "NextJS", type: "devicon" },
  { key: "django", name: "Django", type: "devicon" },
  { key: "firebase", name: "Firebase", type: "devicon" },
  { key: "sass", name: "SASS", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "mysql", name: "MySQL", type: "devicon" },
];

const stack = [
  { key: "linux", name: "Linux", type: "devicon" },
  { key: "googlecloud", name: "Google Workspace", type: "devicon" },
  { key: "amazonwebservices", name: "AWS", type: "devicon" },
  { key: "googlecloud", name: "CloudFlare", type: "devicon" },
  { key: "azure", name: "Azure", type: "devicon" },
  { key: "namecheap", name: "NameCheap", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "mysql", name: "MySQL", type: "devicon" },
];
