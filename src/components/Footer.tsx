const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border bg-card">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gradient font-bold text-xl mb-4 md:mb-0">
            Krish Verma
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground">
              © {currentYear} Krish Verma
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              B.Tech IT Student • IIIT Allahabad
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;