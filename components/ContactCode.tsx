import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'iamnumcodes.com',
    href: 'https://iamnumcodes.vercel.app',
  },
  {
    social: 'email',
    link: 'iamnumcodes@gmail.com',
    href: 'mailto:iamnumcodes@gmail.com',
  },
  {
    social: 'github',
    link: 'numcodes',
    href: 'https://github.com/numcodes',
  },
  {
    social: 'linkedin',
    link: 'Ugochukwu Nweze',
    href: 'https://www.linkedin.com/in/ugochukwu-nweze-08812a2b8',
  },
  {
    social: 'twitter',
    link: 'Num Codes',
    href: 'https://x.com/CodesNum80638',
  },
  {
    social: 'telegram',
    link: 'iamnitinr',
    href: '#',
  },
  {
    social: 'youtube',
    link: 'numcodes',
    href: 'youtube.com/@numcodes',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
