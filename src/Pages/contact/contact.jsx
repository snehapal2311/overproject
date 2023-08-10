import React from 'react'
import './contact.css'

const contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-page_title-container">
        <div className="contact-page_icon-container">
          <svg width="64" height="56" viewBox="0 0 64 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5V34.5C3 36.1569 4.34315 37.5 6 37.5H8.5C10.1569 37.5 11.5 38.8431 11.5 40.5V49.1716C11.5 50.9534 13.6543 51.8457 14.9142 50.5858L27.1213 38.3787C27.6839 37.8161 28.447 37.5 29.2426 37.5H55.5C57.1569 37.5 58.5 36.1569 58.5 34.5V5C58.5 3.34315 57.1569 2 55.5 2H6C4.34315 2 3 3.34315 3 5Z" fill="#F5F5F5" stroke="black" stroke-width="3" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 12C12.5 11.1716 13.1716 10.5 14 10.5H45C45.8284 10.5 46.5 11.1716 46.5 12C46.5 12.8284 45.8284 13.5 45 13.5H14C13.1716 13.5 12.5 12.8284 12.5 12Z" fill="black" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 19C12.5 18.1716 13.1716 17.5 14 17.5H40C40.8284 17.5 41.5 18.1716 41.5 19C41.5 19.8284 40.8284 20.5 40 20.5H14C13.1716 20.5 12.5 19.8284 12.5 19Z" fill="black" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 26C12.5 25.1716 13.1716 24.5 14 24.5H37C37.8284 24.5 38.5 25.1716 38.5 26C38.5 26.8284 37.8284 27.5 37 27.5H14C13.1716 27.5 12.5 26.8284 12.5 26Z" fill="black" />
          </svg>
        </div>
        <div>
          <h1>Contact Us</h1>
          <h2>In order to resolve a complaint regarding the Site or to receive further information regarding use of the Service, please contact us at :</h2>
        </div>
      </div>
      <div className="contact-page_link-container">
        <a href="mailto:contact@over.network">
          <div class="contact-page__email-link">
            <span>contact@over.network</span>
          </div>
        </a>
        <button class="copy-button">
          <div class="undefined" style={{ display: 'flex', width: 'fit-content', height: 'fit-content' }}></div>
        </button>
      </div>
      <section className="app-section_app-footer-section">
        <footer class="page__section-content footer">
          <div class="footer__title">
            <div style={{ display: 'flex', width: 'fit-content', height: 'fit-content' }} class="undefined">
                     
            </div>
            <span class="footer__copy-right">© Over Foundation 2023. All rights reserved.</span>
            <a href="/contact">
              <button class="footer__contact-us">Contact us</button>
            </a>
          </div>
        </footer>
      </section>

    </div>

  )
}

export default contact
