import { Card } from '../index';
import './SkillsStyle.css';
import { skillsData } from '../../models/data';

export const Skills = () => {
  
  return (
    <section>
      <header>Skills</header>
      <div>
      {Object.values(skillsData).map((skill, index) => (
        <Card key={skill + index} data={skill} thisClass={'skill'}/>
      ))}
      </div>
    </section>
  )
}
