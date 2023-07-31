import "./Footer.sass";
function Footer() {
  return (
    <div className="footer" role="feed">
      <h4>Shortly</h4>
      <div className="footer__item features">
        <h5>Features</h5>
        <span>Link Shortening</span>
        <span>Branded Links</span>
        <span> Analytics</span>
      </div>
      <div className="footer__item resources">
        <h5>Resources</h5>
        <span>Blog</span>
        <span>Developers</span>
        <span>Support</span>
      </div>
      <div className="footer__item company">
        <h5>Company</h5>
        <span>About</span>
        <span>Our Team</span>
        <span>Careers</span>
        <span>Contact</span>
      </div>
      <div className="footer__item networks">
        <span className="net_item facebook"></span>
        <span className="net_item twitter"></span>
        <span className="net_item pinterest"></span>
        <span className="net_item instagram"></span>
      </div>
    </div>
  );
}

export default Footer;
