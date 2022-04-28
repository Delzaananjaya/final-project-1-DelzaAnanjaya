function NewsLists({ children, className, type = 'default' }) {
  // For styling purpose
  const styles = {
    aside: 'flex-col lg:space-y-0',
    search: 'flex-col lg:space-y-7',
    headlines: 'flex-col',
    default:
      'md:space-y-0 md:grid md:grid-cols-2 md:gap-6 md:justify-items-center lg:flex lg:flex-wrap lg:justify-between',
  };

  const sectionStyle = `flex flex-wrap justify-between h-full space-y-7 ${styles[type]} ${className}`;

  return <section className={sectionStyle}>{children}</section>;
}

export default NewsLists;
