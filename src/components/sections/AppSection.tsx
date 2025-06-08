// components/AppSection.tsx
'use client';

export default function AppSection() {
  return (
    <section className="app-section app-sec-one p-0">
      <div className="container">
        <div className="app-bg">
          <div className="row">
            <div className="col-lg-6 col-md-12 d-flex">
              <div className="app-content d-flex flex-column justify-content-center">
                <div className="app-header aos" data-aos="fade-up">
                  <h3 className="display-6 text-white">Download the Doccure App today!</h3>
                  <p className="text-light">
                    To download an app related to a doctor or medical services, you can typically
                    visit the app store on your device.
                  </p>
                </div>
                <div className="google-imgs aos" data-aos="fade-up">
                  <a href="#">
                    <img src="/assets/img/icons/app-store-01.svg" alt="App Store" />
                  </a>
                  <a href="#">
                    <img src="/assets/img/icons/google-play-01.svg" alt="Google Play" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 aos" data-aos="fade-up">
              <div className="mobile-img">
                <img
                  src="/assets/img/mobile-img.png"
                  className="img-fluid"
                  alt="Mobile App Preview"
                />
              </div>
            </div>
          </div>
          <div className="app-bgs">
            <img src="/assets/img/bg/app-bg-02.png" alt="" className="app-bg-01" />
            <img src="/assets/img/bg/app-bg-03.png" alt="" className="app-bg-02" />
            <img src="/assets/img/bg/app-bg-04.png" alt="" className="app-bg-03" />
          </div>
        </div>
      </div>
      <div className="download-bg">
        <img src="/assets/img/bg/download-bg.png" alt="" />
      </div>
    </section>
  );
}
