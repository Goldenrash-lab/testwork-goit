const Footer = () => {
  return (
    <>
      <div class="footer-tablet-container">
        <div class="footer-logo">
          <a class="footer-logo-link link" href="index.html">
            LOGO
          </a>
          <ul class="footer-contact-list">
            <li class="footer-contact-list-item">
              <a class="footer-contact-link" href="tel:+380665438912">
                Uk: +38 066 543 8912
              </a>
            </li>
            <li>Ukraine, Kyiv</li>
          </ul>
        </div>
        <div class="footer-social-navigation">
          <div class="footer-social">
            <ul class="footer-social-list">
              <li class="footer-social-list-item">
                <a
                  class="footer-social-list-link"
                  href="https://www.instagram.com/goitclub/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li class="footer-social-list-item">
                <a
                  class="footer-social-list-link"
                  href="https://www.facebook.com/goITclub/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li class="footer-social-list-item">
                <a
                  class="footer-social-list-link"
                  href="https://www.youtube.com/c/GoIT"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Youtube
                </a>
              </li>
            </ul>
          </div>
          <nav class="footer-navigation">
            <ul class="footer-navigaion-list">
              <li class="footer-navigaion-list-item">
                <a href="#about" class="footer-navigaion-list-link">
                  About us
                </a>
              </li>
              <li class="footer-navigaion-list-item">
                <a href="#courses" class="footer-navigaion-list-link">
                  Our courses
                </a>
              </li>
              <li class="footer-navigaion-list-item">
                <a href="#mentors" class="footer-navigaion-list-link">
                  Our mentors
                </a>
              </li>
              <li class="footer-navigaion-list-item">
                <a href="#reviews" class="footer-navigaion-list-link">
                  Reviews
                </a>
              </li>
              <li class="footer-navigaion-list-item">
                <a href="#footer" class="footer-navigaion-list-link">
                  Contacts
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <form class="footer-form">
          <label class="footer-label" for="email">
            <input
              class="footer-input"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              required
              title="Please enter a valid email address"
            />
          </label>
          <button class="footer-button" type="submit">
            Go
          </button>
        </form>
      </div>
      <div class="footer-copyright">
        <ul class="footer-copyright-list">
          <li class="footer-copyright-list-item">
            <a href="" class="footer-copyright-link link">
              Privacy Policy
            </a>
            <a href="" class="footer-copyright-link link">
              Public Offering Agreement
            </a>
          </li>
          <li class="footer-copyright-list-item">
            <p class="footer-copyright-link">2023 Focus Frame</p>
            <p class="footer-copyright-link">© All rights reserved</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
