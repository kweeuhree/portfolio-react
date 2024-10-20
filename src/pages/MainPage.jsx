import { 
  About, 
  Skills, 
  Projects, 
  Certifications, 
  Contacts, 
  Stats 
} from '../components';

const sections = [
  { component: About, key: 'about-section' },
  { component: Skills, key: 'skills-section' },
  { component: Projects, key: 'projects-section' },
  { component: Stats, key: 'stats-section' },
  { component: Certifications, key: 'certifications-section' },
  { component: Contacts, key: 'contacts-section' }
];

const MainPage = () => {
  return (
    <>
      {sections.map(({ component: Section, key }) => (
        <Section key={key} />
      ))}
    </>
  );
};

export default MainPage;