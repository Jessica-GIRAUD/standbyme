'use client';
import { useTranslations } from 'use-intl';

export default function LoginRegisterForm() {
  const t = useTranslations('login');

  return (
    <div className="container wow fadeInUp">
      {/* Nav Tabs */}
      <div className="align-center mb-40 mb-sm-30">
        <ul
          className="nav nav-tabs tpl-minimal-tabs animate"
          id="myTab-account"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <a
              href="#account-login"
              className="nav-link active"
              id="account-login-tab"
              data-bs-toggle="tab"
              role="tab"
              aria-controls="account-login"
              aria-selected="true"
            >
              {t('login')}
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              href="#account-registration"
              className="nav-link"
              id="account-registration-tab"
              data-bs-toggle="tab"
              role="tab"
              aria-controls="account-registration"
              aria-selected="false"
            >
              {t('registration')}
            </a>
          </li>
        </ul>
      </div>
      {/* End Nav Tabs */}
      {/* Tab panes */}
      <div
        className="tab-content tpl-minimal-tabs-cont section-text"
        id="myTabContent-1"
      >
        <div
          className="tab-pane fade show active"
          id="account-login"
          role="tabpanel"
          aria-labelledby="account-login-tab"
        >
          {/* Login Form */}
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="form contact-form"
              >
                <div className="mb-30">
                  {/* Name */}
                  <div className="form-group">
                    <label htmlFor="email">{t('email')}</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="input-lg round form-control"
                      placeholder={t('enterEmail')}
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      required
                      aria-required="true"
                    />
                  </div>
                  {/* Password */}
                  <div className="form-group">
                    <label htmlFor="password">{t('password')}</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="input-lg round form-control"
                      placeholder={t('enterPassword')}
                      pattern=".{5,100}"
                      required
                      aria-required="true"
                    />
                  </div>
                </div>
                <div className="row mb-30">
                  <div className="col-6">
                    {/* Inform Tip */}
                    <div className="form-tip pt-10">
                      <a href="/register">{t('goToRegistration')}</a>
                    </div>
                  </div>
                  <div className="col-6">
                    {/* Send Button */}
                    <div className="text-end">
                      <button
                        className="submit_btn btn btn-white btn-mod btn-large btn-round btn-hover-anim"
                        id="login-btn"
                      >
                        <span>{t('login')}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* End Login Form */}
        </div>
        <div
          className="tab-pane fade"
          id="account-registration"
          role="tabpanel"
          aria-labelledby="account-registration-tab"
        >
          {/* Registry Form */}
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <form className="form contact-form">
                <div className="clearfix">
                  {/* Name */}
                  <div className="form-group">
                    <label htmlFor="name">{t('username')}</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="input-lg round form-control"
                      placeholder={t('enterUsername')}
                      pattern=".{2,100}"
                      required
                      aria-required="true"
                    />
                  </div>
                  {/* Email */}
                  <div className="form-group">
                    <label htmlFor="reg_email">{t('email')}</label>
                    <input
                      type="text"
                      name="reg_email"
                      id="reg_email"
                      className="input-lg round form-control"
                      placeholder={t('enterEmail')}
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      required
                      aria-required="true"
                    />
                  </div>
                  {/* Password */}
                  <div className="form-group">
                    <label htmlFor="reg_password">{t('password')}</label>
                    <input
                      type="password"
                      name="reg_password"
                      id="reg_password"
                      className="input-lg round form-control"
                      placeholder={t('enterPassword')}
                      pattern=".{5,100}"
                      required
                      aria-required="true"
                    />
                  </div>
                  {/* Re-enter Password */}
                  <div className="form-group">
                    <label htmlFor="reg_confirm_password">
                      {t('confirmPassword')}
                    </label>
                    <input
                      type="password"
                      name="reg_confirm_password"
                      id="reg_confirm_password"
                      className="input-lg round form-control"
                      placeholder={t('enterConfirmPassword')}
                      pattern=".{5,100}"
                      required
                      aria-required="true"
                    />
                  </div>
                </div>
                {/* Send Button */}
                <div className="pt-10 mb-30">
                  <button
                    className="submit_btn btn btn-mod btn-white btn-large btn-round btn-full btn-hover-anim"
                    id="reg-btn"
                  >
                    <span>{t('signIn')}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* End Registry Form */}
        </div>
      </div>
    </div>
  );
}
