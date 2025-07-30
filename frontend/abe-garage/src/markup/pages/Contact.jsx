import React from "react";

function Contact() {
  return (
    <section
      className="contact-section py-5"
      style={{ backgroundColor: "#fff", color: "#333" }}
    >
      <div className="container mb-4">
        <h1 className="text-center fw-bold">CONTACT US</h1>
      </div>

      <div className="auto-container container">
        <div className="contact-title text-center mb-4">
          <h2>Drop us message</h2>
          <div className="text-muted">
            Praising pain was born and I will give you a complete account of the
            system, and{" "}
          </div>
        </div>

        <div className="row clearfix">
          <div className="form-column col-lg-7">
            <div className="inner-column">
              <section className="map-section">
                <div className="contact-map mb-3">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3071.2910802067827!2d90.45905169331171!3d23.691532202989123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1577214205224!5m2!1sen!2sbd"
                    width="100%"
                    height="470"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Map"
                  ></iframe>
                </div>

                 <div className="bg-danger rounded p-4 d-flex flex-column flex-md-row align-items-center justify-content-between text-white">
              <h5 className="mb-3 mb-md-0">
                Schedule Your Appointment Today:{" "}
                <strong className="fs-4">1800 456 7890</strong>
              </h5>
              <button className="btn btn-light btn-lg px-4 fw-semibold">Contact Us</button>
            </div>
         

                
              </section>
            </div>
          </div>

          <div className="info-column col-lg-5">
            <div className="inner-column">
              {/* *** ORIGINAL "Our Address" section unchanged *** */}
              <h4>Our Address</h4>
              <div className="text">
                Completely synergize resource taxing relationships via premier
                niche markets. Professionally cultivate one-to-one customer
                service.
              </div>
              <ul>
                <li>
                  <i className="flaticon-pin"></i>
                  <span>Address:</span> 54B, Tailstoi Town 5238 MT, La city, IA
                  5224
                </li>
                <li>
                  <i className="flaticon-email"></i>
                  <span>email:</span> contact@buildtruck.com
                </li>
                <li>
                  <i className="flaticon-phone"></i>
                  <span>phone:</span> 1800 456 7890 / 1254 897 3654
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
