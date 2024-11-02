import React, { useState } from 'react';

import { Typography, Tooltip } from '@mui/material';

import { IconWithTooltip } from '../components/index';
import { icons } from '../data/icons';
import { email, contactsData } from '../data/contactsData';


const contacts = contactsData.map((contact, index) => {

  return  (
    <div key={index} className='display-flex flex-center'>
      <IconWithTooltip icon={contact.icon} link={contact.link}  placement='bottom'/>
    </div>
)
});


export const Contacts: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const copyEmail = () => {
    try {
      // Copy the text inside the text field
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (error) {
      alert(`Couldn't copy email. Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  return (
    <section>
      <div className="display-flex flex-center center-column full-width flex-gap-2vw">
        
        {/* GitHub and LinkedIn container */}
        <div className="display-flex flex-center flex-gap-2vw light-paper padding-2rem">
            {contacts}
        </div>
        
        
        {/* email container */}
        <div 
          className="display-flex flex-center light-paper padding-2rem pointer"
          onClick={copyEmail}
          >
    
          <Tooltip title={copied ? 'Copied!' : 'Click to copy my email'}>
            <div className="display-flex flex-center center-column">
              <Typography>{email}</Typography>

              <div className='height-2vh'>
                {copied ? icons.CheckCircle : 'click to copy'}
              </div>
            </div>
          </Tooltip>
        </div>
      </div>
    </section>
  );
};