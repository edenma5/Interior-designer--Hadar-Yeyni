import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";
import { images } from "../../constants";

const Skills = () => {
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const experiencesQuery = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(experiencesQuery).then((data) => {
      const test = data.sort((a, b) => {
        const dataA = new Date(a._createdAt);
        const dataB = new Date(b._createdAt);
        return dataB - dataA;
      });

      setExperience(test);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        <span>Skills & Experience</span>
      </h2>

      <div className="app__skills-container">
        <img
          className="background-logo-pic"
          src={images.logo3}
          alt="toto_logo"
        />
        <motion.div className="app__skills-list">
          {skills.map((skill, i) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={`${skill.name}-${i}`}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="app__skills-exp">
          {experience?.map((experience, i) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app_skills-exp-works">
                {experience.works.map((work) => {
                  return (
                    <>
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="app__skills-exp-work"
                        data-tip
                        data-for={work.name}
                        key={work.name}
                      >
                        <h4 className="bold-text">{work.name}</h4>
                        <p className="p-text">{work.company}</p>
                      </motion.div>
                      <ReactTooltip
                        id={work.name}
                        effect="solid"
                        arrowColor="lightgrey"
                        textColor="#000"
                        backgroundColor="#fff"
                        place="right"
                        className="skills-tooltip"
                      >
                        {work.desc}
                      </ReactTooltip>
                    </>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "כישורים",
  "app__whitebg"
);
