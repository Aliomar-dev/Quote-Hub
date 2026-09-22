const Section = ({ children, id, className = '', dark = false }) => {
  return (
    <section
      id={id}
      className={`py-20 px-4 md:px-8 lg:px-16 ${dark ? 'bg-black/50' : ''} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;
