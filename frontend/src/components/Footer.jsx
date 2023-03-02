import React from 'react';

function Footer() {
  return (
    <footer>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '2px',
        alignItems: 'center',
      }}
      >
        <a href="https://www.linkedin.com/in/igor-brizack/">
          <img
            style={{
              width: '40px',
              height: '40px',
              marginLeft: '5px',
              marginRight: '5px',
            }}
            alt="github"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          />
        </a>
        <p style={{
          marginTop: '5px',
        }}
        >
          Desenvolvidor por Igor Brizack
        </p>
        <a href="https://github.com/IgorBrizack">
          <img
            style={{
              width: '40px',
              height: '40px',
              marginLeft: '5px',
              marginRight: '5px',
            }}
            alt="linkedin"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
