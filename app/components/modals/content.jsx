import React from 'react';

export default class Content extends React.Component {

  render() {
    return (
      <div className="modal-content">
        <div className="lightbox-signup-container">
          <form className="signup-form form" data-success-event="close:lightbox">
            <ol className="fields">
              <li className="field field-email field-with-placeholder">
                <label htmlFor="id_signup_email">Email address</label>
                <input name="email" id="id_lightbox_signup_email" required type="email" placeholder="Email address" />
              </li>
              <li className="field field-zip field-with-placeholder">
              <label htmlFor="id_signup_zip">ZIP code</label>
                <input name="zip" id="id_lightbox_signup_zip" required type="text" pattern="[0-9]+" placeholder="ZIP code" />
              </li>
              <li className="buttons">
                <button className="btn btn-red submit-button" type="submit">Join Us</button>
              </li>
            </ol>
            <input type="hidden" name="formGroup" value="Lightbox" />
            <input type="hidden" name="formSlug" value="/" />
          </form>
          <p className="lightbox-donate-promo">
            <a href="/donate/">
              Or just go ahead and <span>donate!</span>
            </a>
          </p>
          <p className="lightbox-signup-confirmation">Thanks for joining the campaign!</p>
        </div>
      </div>
    );
  }
}
