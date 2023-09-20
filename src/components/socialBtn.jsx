import React from 'react';

const SocialBtn = ({ social }) => {
  return (
    <button className={`socials ${social?.class}`}>
      <img src={social.Icon} alt='' />
    </button>
  );
};

export default SocialBtn;
