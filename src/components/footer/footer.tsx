import "./footer.css";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer">
        <div className="footer-left">
          <h2>Give us your money</h2>
          <span>
            <input placeholder="Subscribe to our newsletter" />
            <button>Subscribe</button>
          </span>
        </div>
        <div className="footer-right">
          <ul>
            <h4>Home</h4>
            <h4>Service</h4>
            <h4>Buy</h4>
            <h4>Support</h4>
          </ul>
          <ul className="small-links">
            <p>Contact us</p>
            <p>Reward Program</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </ul>
        </div>
      </div>
      <div className="line"></div>
      <div className="credits">
        <p>Made by Max</p>
      </div>
    </footer>
  );
}

export default Footer;
