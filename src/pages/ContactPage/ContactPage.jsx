import { Contacts, Form } from '../../components';

import './ContactPageStyle.css';

export const ContactPage = () => {
  return (
    <section className='display-flex contact-page'>

      {/* contact form container */}
      <div className="contact-form-container">

          {/* lets get in touch */}
         <div className='display-flex flex-center get-in-touch'>
            <div>
              <span>Let's</span>
              <span>get</span>
              <span>in</span>
              <span>touch</span>
            </div>
          </div>

          {/* form */}
          <Form />
      </div>

      {/* contacts, or relevant links */}
      <Contacts />
    </section>
  )
}
                                         