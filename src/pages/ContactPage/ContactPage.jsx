import { Contacts, Form } from '../../components';

import './ContactPageStyle.css';

export const ContactPage = () => {
  return (
    <section>

      {/* contact form container */}
      <div>

          {/* lets get in touch */}
         <div>
            <div>
             Send me an email: 
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
                                         