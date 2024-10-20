import { Card } from '../index';
import './SkillsStyle.css';
import { skillsData } from '../../models/data';

export const Skills = () => {
  
  return (
    <section className='skills-section'>
      <header>Skills</header>
      <div className='card-section'>
      {Object.values(skillsData).map((skill, index) => (
        <Card key={skill + index} data={skill} thisClass={'skill'}/>
      ))}
      </div>
    </section>
  )
}
