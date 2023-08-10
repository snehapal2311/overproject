import React from 'react'
import './mobile.css'

function mobile() {
  return (
    <div className="mobile-page" style={{ width: '100' }}>
      <section className="mobile-page__hero-section">
        <div className="page__section-content hero-section-content">
          <div className="hero-section-content__title-container">
            <div className="hero-section-content__catchphrase">
              Earn to Learn,
              <br />Learn to Run.</div>
            <div className="hero-section-content__description">
              Your journey with Over Protocol starts here.</div>
          </div><div className="hero-section-content__button-container">
            <a className="download-button" href="https://itunes.apple.com/app/id6447250892">
              <div className="download-button__logo-container"><div>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.7046 18.295C24.6766 15.1366 27.2474 13.6 27.365 13.5285C25.909 11.3697 23.6524 11.0747 22.8593 11.0512C20.964 10.8483 19.1255 12.2046 18.16 12.2046C17.1752 12.2046 15.6884 11.0708 14.086 11.1041C12.024 11.1364 10.0949 12.3506 9.0369 14.236C6.85344 18.0803 8.48188 23.7297 10.5738 26.8372C11.6202 28.36 12.843 30.0582 14.4435 29.9985C16.0093 29.9338 16.5942 28.9842 18.4838 28.9842C20.356 28.9842 20.9052 29.9985 22.5375 29.9602C24.218 29.9338 25.276 28.4315 26.2858 26.896C27.4951 25.1526 27.9807 23.4338 28 23.3456C27.9615 23.3319 24.7373 22.0795 24.7046 18.295ZM21.6212 9.00701C22.4633 7.93592 23.0395 6.47874 22.8796 5C21.6607 5.05488 20.1363 5.85745 19.2585 6.90502C18.4818 7.82813 17.7881 9.34117 17.9673 10.7641C19.3365 10.8679 20.7424 10.0614 21.6212 9.00701Z" fill="white" />
                </svg>
              </div>
              </div>
              <h1>App Store</h1>
            </a>
            <a className="download-button" href="https://play.google.com/store/apps/details?id=com.superblock.overmobile">
              <div className="download-button__logo-container">
                <div>
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5033 12.631L12.1016 6.6714C11.6881 6.42964 11.218 6.30144 10.7391 6.29981C10.1605 6.29866 9.5975 6.48672 9.13578 6.83531C8.87372 7.03316 8.65246 7.27656 8.48134 7.55186L18.052 17.025L22.5033 12.631ZM8.09375 8.99736V26.8553L17.1268 17.9383L8.09375 8.99736ZM8.46267 28.3178C8.5495 28.461 8.6499 28.5962 8.76278 28.7214C9.03296 29.0209 9.36758 29.2553 9.74145 29.4068C10.1153 29.5583 10.5187 29.623 10.9212 29.5961C11.3237 29.5691 11.7148 29.4512 12.0651 29.2512L22.533 23.2894L18.0508 18.8529L8.46267 28.3178ZM23.7123 22.6276L27.8329 20.2748C28.1345 20.118 28.4021 19.9033 28.6204 19.6428C28.8387 19.3823 29.0033 19.0813 29.1049 18.7569C29.2064 18.4326 29.2429 18.0914 29.2122 17.753C29.1815 17.4145 29.0842 17.0855 28.9259 16.7847C28.6789 16.3195 28.2982 15.9388 27.8329 15.6918H27.8475L23.6743 13.3017L18.976 17.9396L23.7123 22.6276Z" fill="white" />
                  </svg>
                </div>
              </div>
              <h1>Google Play</h1>
            </a>
          </div>
        </div>
      </section>
      <section className="mobile-page__stat-section">
        <div className="page__section-content stat-section-content">
          <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2504_60793)">
              <path d="M22.5112 43.0026C29.3665 43.0026 34.9238 33.5986 34.9238 21.9981C34.9238 10.3977 29.3665 0.993652 22.5112 0.993652C15.6559 0.993652 10.0986 10.3977 10.0986 21.9981C10.0986 33.5986 15.6559 43.0026 22.5112 43.0026Z" stroke="black" stroke-width="1.9899" />
              <path d="M22.4971 0.993652V43.0026" stroke="black" stroke-width="1.9899" />
              <path d="M38.6634 8.59033C36.0522 9.9302 29.9608 12.2274 22.4943 12.2274C15.0277 12.2274 8.93639 9.9302 6.3252 8.59033" stroke="black" stroke-width="1.9899" stroke-linecap="round" />
              <path d="M38.6634 35.4066C36.0522 34.0668 29.9608 31.7695 22.4943 31.7695C15.0277 31.7695 8.93639 34.0668 6.3252 35.4066" stroke="black" stroke-width="1.9899" stroke-linecap="round" />
              <path d="M42.4885 22.9937C42.3846 25.1074 41.9512 27.1326 41.2393 29.0253C41.8915 29.2331 42.5216 29.4453 43.1252 29.662C43.9057 27.5704 44.3745 25.3285 44.4784 22.9937H42.4863H42.4885Z" fill="black" />
              <path d="M22.5036 42.0084C13.9426 42.0084 6.62198 36.6047 3.76978 29.0276C3.11753 29.2354 2.48739 29.4477 1.88379 29.6644C5.00131 38.0264 13.0693 43.9983 22.5058 43.9983C31.9424 43.9983 40.0104 38.0242 43.1279 29.6622C42.5221 29.4477 41.8919 29.2354 41.2419 29.0254C38.3897 36.6025 31.0691 42.0084 22.5081 42.0084H22.5036Z" fill="black" />
              <path d="M3.76184 14.9712C3.1096 14.7634 2.47946 14.5512 1.87585 14.3345C1.09537 16.4283 0.624425 18.6702 0.520508 21.0051H2.51262C2.61654 18.8913 3.0499 16.8639 3.76405 14.9712H3.76184Z" fill="black" />
              <path d="M22.5019 1.99039C31.063 1.99039 38.3858 7.39628 41.2358 14.9734C41.888 14.7655 42.5182 14.5533 43.1218 14.3366C40.0065 5.97461 31.9385 0.000488281 22.5019 0.000488281C13.0654 0.000488281 4.99961 5.9724 1.87988 14.3344C2.4857 14.5489 3.11584 14.7633 3.76587 14.9712C6.62028 7.39407 13.9409 1.99039 22.5019 1.99039Z" fill="black" />
              <path d="M42.49 21.0034H2.51944C2.50396 21.3329 2.49512 21.6645 2.49512 21.9984H42.5143C42.5143 21.6645 42.5055 21.3329 42.49 21.0034Z" fill="black" />
              <path d="M2.49512 21.9995C2.49512 22.3334 2.50396 22.665 2.51944 22.9945H42.49C42.5055 22.665 42.5143 22.3334 42.5143 21.9995H2.49512Z" fill="black" />
              <path d="M42.5116 21.9984C42.5116 22.3322 42.5028 22.6639 42.4873 22.9933H44.4794C44.4949 22.6639 44.5037 22.3322 44.5037 21.9984C44.5037 21.6645 44.4949 21.3329 44.4794 21.0034H42.4873C42.5028 21.3329 42.5116 21.6645 42.5116 21.9984Z" fill="black" />
              <path d="M2.48698 21.9984C2.48698 21.6645 2.49582 21.3329 2.5113 21.0034H0.521391C0.505914 21.3329 0.49707 21.6645 0.49707 21.9984C0.49707 22.3322 0.505914 22.6639 0.521391 22.9933H2.51351C2.49803 22.6639 2.48919 22.3322 2.48919 21.9984H2.48698Z" fill="black" />
            </g>
            <defs>
              <clipPath id="clip0_2504_60793">
                <rect width="43.999" height="43.9989" fill="white" transform="translate(0.5 0.000488281)" />
              </clipPath>
            </defs>
          </svg>

          <div className="stat-section-content__stat-container">
            <div className="stat-section-content__stat">
              <span>686,670</span>
            </div>
            <div className="stat-section-content__description">Already joined</div>
          </div>
        </div>
      </section>
      <section className="mobile-page_mobile-feature-section">
        <div className="page-section-content_mobile-section-content">
          <div class="mobile-feature-section-content__mobile-feature-container">
            <div class="mobile-feature-section-content__image-container">
              <picture>
                <source media="(min-width: 1080px)" />
                <img loading="lazy" src="https://www.over.network/images/mobile/DailyRewards.png" alt="Daily Rewards" />
              </picture>
            </div>
            <div class="mobile-feature-section-content__description-container">
              <div>One bite</div>
              <div>Earn <br class="mobile-feature-section-content__br" />
                Daily Rewards</div>
              <div>Enjoy a free lunch and <br />
                explore the Over Protocol</div>
            </div>
          </div>
        </div>
        <div class="mobile-feature-section-content__mobile-feature-container">
          <div class="mobile-feature-section-content__description-container">
            <div>Your opportunity</div>
            <div>Complete <br class="mobile-feature-section-content__br" /> Missions</div>
            <div>Learn and contribute to the Over Protocol to maximize your opportunity</div>
          </div>
          <div class="mobile-feature-section-content__image-container">
            <picture>
              <source media="(min-width: 1080px)" />
              <img loading="lazy" src="https://www.over.network/images/mobile/DailyRewards.png" alt="Complete Missions" />

            </picture>
          </div>
        </div>
      </section >
      <section class="mobile-page__enjoy-section">
        <div class="page__section-content enjoy-section-content">
          <div class="enjoy-section-content__friends-container">
            <div class="enjoy-section-content__card mint">
              <img alt="character" loading="lazy" width="60" height="60" decoding="async" data-nimg="1"
                src="https://www.over.network/_next/image?url=%2Fimages%2Fcharacter%2Fclover.png&w=64&q=75"
                style={{ color: 'transparent' }} />
              <div>Eric</div>
            </div>
            <div class="enjoy-section-content__card blue">
              <img alt="character" loading="lazy" width="60" height="60" decoding="async" data-nimg="1"
                src="https://www.over.network/_next/image?url=%2Fimages%2Fcharacter%2Fclover.png&w=64&q=75"
                style={{ color: 'transparent' }} />
              <div>Tony</div>
            </div>
            <div class="enjoy-section-content__card purple">
              <img alt="character" loading="lazy" width="60" height="60" decoding="async" data-nimg="1"
                src="https://www.over.network/_next/image?url=%2Fimages%2Fcharacter%2Fjewel.png&w=64&q=75"
                style={{ color: 'transparent' }} />
              <div>David</div>
            </div>
            <div class="enjoy-section-content__card gray left-tilted">
              <img alt="character" loading="lazy" width="60" height="60" decoding="async" data-nimg="1"
                src="https://www.over.network/_next/image?url=%2Fimages%2Fcharacter%2Fmountain.png&w=64&q=75"
                style={{ color: 'transparent' }} />
              <div>Bel</div>
            </div>
            <div class="enjoy-section-content__card yellow">
              <img alt="character" loading="lazy" width="60" height="60" decoding="async" data-nimg="1"
                src="https://www.over.network/_next/image?url=%2Fimages%2Fcharacter%2Fmandu.png&w=64&q=75"
                style={{ color: 'transparent' }} />
              <div>Jin</div>
            </div>
            <div class="enjoy-section-content__description-container">
              <div>Together</div>
              <div>Enjoy with <br />Your Friends</div>
            </div>
            <div class="enjoy-section-content__card sky-blue">
              <img alt="character" loading="lazy" width="60" height="60" decoding="async" data-nimg="1"
                src="https://www.over.network/_next/image?url=%2Fimages%2Fcharacter%2Fblock.png&w=64&q=75"
                style={{ color: 'transparent' }} />
              <div>Jennie</div>
            </div>
            <div class="enjoy-section-content__card salmon right-tilted">
              <img alt="character" loading="lazy" width="60" height="60" decoding="async" data-nimg="1"
                src="https://www.over.network/_next/image?url=%2Fimages%2Fcharacter%2Fcherry.png&w=64&q=75"
                style={{ color: 'transparent' }} />
              <div>Sun</div>
            </div>
            <div class="enjoy-section-content__card apricot">
              <img alt="character" loading="lazy" width="60" height="60" decoding="async" data-nimg="1"
                src="https://www.over.network/_next/image?url=%2Fimages%2Fcharacter%2Flightning.png&w=64&q=75"
                style={{ color: 'transparent' }} />
              <div>Stefan</div>
            </div>
            <div class="enjoy-section-content__card orange">
              <img alt="character" loading="lazy" width="60" height="60" decoding="async" data-nimg="1"
                src="https://www.over.network/_next/image?url=%2Fimages%2Fcharacter%2Frabbit.png&w=64&q=75"
                style={{ color: 'transparent' }} />
              <div>Soogi</div>
            </div>
            <div class="enjoy-section-content__card gray">
              <img alt="character" loading="lazy" width="60" height="60" decoding="async" data-nimg="1" srcset="/_next/image?url=%2Fimages%2Fcharacter%2Flumpy.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2Fimages%2Fcharacter%2Flumpy.png&amp;w=128&amp;q=75 2x"
                src="/_next/image?url=%2Fimages%2Fcharacter%2Flumpy.png&amp;w=128&amp;q=75"
                style={{ color: 'transparent' }} />
              <div>Oliver</div>
            </div>
          </div>
        </div>
      </section>
      <section class="mobile-page__join-section">
        <div class="page__section-content join-section-content">
          <div class="join-section-content__title">Join the <br class="join-section-content__br" />
            Next Lifestyle</div>
          <div class="join-section-content__description">
            With Over, we all are Supernormals</div>
          <div class="join-section-content__link-container">
            <div>More about Over protocol</div><a href="/">
              <div class="undefined" style={{ display: 'flex', width: 'fit-content', height: 'fit-content' }}>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section class="mobile-page__download-section">
        <div class="page__section-content download-section-content">
          <div class="download-section-content__description-container">
            <div>Earn and Learn</div>
            <div>Download the Over Wallet</div>
          </div>
          <div class="download-section-content__button-container">
            <a class="download-button" href="https://itunes.apple.com/app/id6447250892">
              <div class="download-button__logo-container"><div>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.7046 18.295C24.6766 15.1366 27.2474 13.6 27.365 13.5285C25.909 11.3697 23.6524 11.0747 22.8593 11.0512C20.964 10.8483 19.1255 12.2046 18.16 12.2046C17.1752 12.2046 15.6884 11.0708 14.086 11.1041C12.024 11.1364 10.0949 12.3506 9.0369 14.236C6.85344 18.0803 8.48188 23.7297 10.5738 26.8372C11.6202 28.36 12.843 30.0582 14.4435 29.9985C16.0093 29.9338 16.5942 28.9842 18.4838 28.9842C20.356 28.9842 20.9052 29.9985 22.5375 29.9602C24.218 29.9338 25.276 28.4315 26.2858 26.896C27.4951 25.1526 27.9807 23.4338 28 23.3456C27.9615 23.3319 24.7373 22.0795 24.7046 18.295ZM21.6212 9.00701C22.4633 7.93592 23.0395 6.47874 22.8796 5C21.6607 5.05488 20.1363 5.85745 19.2585 6.90502C18.4818 7.82813 17.7881 9.34117 17.9673 10.7641C19.3365 10.8679 20.7424 10.0614 21.6212 9.00701Z" fill="white" />
                </svg>
              </div>
              </div>
              <h1>App Store</h1>
            </a>
            <a class="download-button" href="https://play.google.com/store/apps/details?id=com.superblock.overmobile">
              <div class="download-button__logo-container"><div>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5033 12.631L12.1016 6.6714C11.6881 6.42964 11.218 6.30144 10.7391 6.29981C10.1605 6.29866 9.5975 6.48672 9.13578 6.83531C8.87372 7.03316 8.65246 7.27656 8.48134 7.55186L18.052 17.025L22.5033 12.631ZM8.09375 8.99736V26.8553L17.1268 17.9383L8.09375 8.99736ZM8.46267 28.3178C8.5495 28.461 8.6499 28.5962 8.76278 28.7214C9.03296 29.0209 9.36758 29.2553 9.74145 29.4068C10.1153 29.5583 10.5187 29.623 10.9212 29.5961C11.3237 29.5691 11.7148 29.4512 12.0651 29.2512L22.533 23.2894L18.0508 18.8529L8.46267 28.3178ZM23.7123 22.6276L27.8329 20.2748C28.1345 20.118 28.4021 19.9033 28.6204 19.6428C28.8387 19.3823 29.0033 19.0813 29.1049 18.7569C29.2064 18.4326 29.2429 18.0914 29.2122 17.753C29.1815 17.4145 29.0842 17.0855 28.9259 16.7847C28.6789 16.3195 28.2982 15.9388 27.8329 15.6918H27.8475L23.6743 13.3017L18.976 17.9396L23.7123 22.6276Z" fill="white" />
                </svg>
              </div>
              </div>
              <h1>Google Play</h1>
            </a>
          </div>
        </div>
      </section>
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

export default mobile

