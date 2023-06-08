import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { SiMaterialUi } from 'react-icons/si';


const skills = [
  { name: 'HTML', icon: faHtml5 },
  { name: 'CSS', icon: faCss3 },
  { name: 'JavaScript', icon: faJs },
  { name: 'React', icon: faReact },
  { name: 'Material UI', icon: SiMaterialUi },
];

const Skills = () => {
  return (
    <div>
      <h1>Skills</h1>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            <FontAwesomeIcon icon={skill.icon} />
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
