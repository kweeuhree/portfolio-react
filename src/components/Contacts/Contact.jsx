import './ContactsStyle.css';

const Contact = ({data}) => {

  return (
    <div className='link-container'>
        <a href={data.url} target='_blank'>
            <img src={data.logo} alt="Link" />
        </a>
    </div>
  );
};

export default Contact;