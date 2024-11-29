import React from "react";

const LoginModal = () => {
  return (
    <>
      <div
        className="modal login-modal"
        id="user-login"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
        
            <div className="modal-body">
              <div className="login-registration-form">
                <div className="form-title">
                  <h2>Sign in to continue</h2>
                  <p>Enter your Email and Password.</p>
                </div>
                <form>
                  <div className="form-inner mb-3">
                    <input type="text" placeholder="User name or Email *" />
                  </div>
                  <div className="form-inner mb-10">
                    <input type="password" placeholder="Password *" />
                  </div>
                  <a href="#" className="login-btn mb-25">
                    Sign In
                  </a>
                  <div className="divider">
                    <span>or</span>
                  </div>
                  <a href="#" className="google-login-btn">
                    <div className="icon">
                      <img src="/assets/img/home1/icon/google-icon.svg" alt="" />
                    </div>
                    Sign in with Google
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
