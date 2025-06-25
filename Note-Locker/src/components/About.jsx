import React from "react";

const About = () => {
  return (
    <>
      <div className="container my-5">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h1 className="mb-3">About NoteLocker</h1>
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978"
            alt="Note taking"
            className="img-fluid rounded shadow"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
          <p className="mt-3 fs-5 text-muted">
            NoteLocker is your personal cloud-based notebook where you can store, edit, and manage your ideas anytime, anywhere.
          </p>
        </div>

        {/* Take Notes */}
        <div className="row align-items-center my-5">
          <div className="col-md-6">
            <h3>🧠 Take and Organize Notes</h3>
            <p>
              Easily create and manage your notes. Use titles, descriptions, and tags to stay organized and productive.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://cdn.pixabay.com/photo/2017/03/27/13/17/notebook-2178656_1280.jpg"
              alt="Take notes"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "250px" }}
            />
          </div>
        </div>

        {/* Secure Access */}
        <div className="row align-items-center my-5">
          <div className="col-md-6 order-md-2">
            <h3>🔐 Secure Access</h3>
            <p>
              Your notes are protected using modern authentication. Only you can view and edit your private data.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9"
              alt="Secure access"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "250px" }}
            />
          </div>
        </div>

        {/* Mobile Responsive */}
        <div className="row align-items-center my-5">
          <div className="col-md-6">
            <h3>📱 Access Anywhere</h3>
            <p>
              NoteLocker works on all screen sizes—from mobile phones to desktops—giving you a seamless experience.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://fs.npstatic.com/userfiles/7715851/image/shutterstock-Verizon-Business-BongkarnGraphic-w810h462.jpg"
              alt="Mobile responsive"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "250px" }}
            />
          </div>
        </div>

        {/* Footer Credits */}
        <div className="text-center mt-5">
          <h5 className="text-muted">
         
          </h5>
        </div>
      </div>

      {/* Footer Section */}
        <footer>
      
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5 className="text-uppercase mb-4">ABOUT</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Features</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Download</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Help & Support</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Release Notes (App)</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Release Notes (Web)</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Security</a></li>
              </ul>
            </div>
            <div className="col-md-6">
              <h5 className="text-uppercase mb-4">LEGAL & PRIVACY</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Terms of Service</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-4 pt-3 border-top border-secondary">
            <p className="mb-0">© {new Date().getFullYear()} Notebooker. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </>
  );
};

export default About;
