'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useTranslations } from 'use-intl';

export default function LoginRegisterForm() {
  const t = useTranslations('login');
  const router = useRouter();

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);

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
              className={`nav-link ${activeTab === 0 ? 'active' : ''}`}
              onClick={() => setActiveTab(0)}
            >
              {t('login')}
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className={`nav-link ${activeTab === 1 ? 'active' : ''}`}
              onClick={() => setActiveTab(1)}
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
          className={`tab-pane fade ${activeTab === 0 ? 'show active' : ''}`}
        >
          {/* Login Form */}
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <form className="form contact-form">
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
                      // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      required
                      aria-required="true"
                      disabled={isLoading}
                    />
                  </div>
                  {/* Password */}
                  <div className="form-group position-relative">
                    <label htmlFor="password" className="form-label">
                      {t('password')}
                    </label>
                    <div className="position-relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        className="form-control input-lg rounded"
                        placeholder={t('enterPassword')}
                        pattern=".{5,100}"
                        required
                        aria-required="true"
                        disabled={isLoading}
                      />
                      <button
                        type="button"
                        className="btn position-absolute top-50 end-0 translate-middle-y px-3 py-2"
                        onClick={() => setShowPassword(!showPassword)}
                        disabled={isLoading}
                        aria-label={
                          showPassword ? 'hidePassword' : 'showPassword'
                        }
                      >
                        <i className={showPassword ? 'mi-eye-off' : 'mi-eye'} />
                      </button>
                    </div>

                    {error && (
                      <p className="text-danger fs-6 text-end">
                        <i className="mi-circle-information me-1" /> {error}
                      </p>
                    )}
                    {success && (
                      <p className="text-success fs-6 text-end">
                        <i className="mi-circle-information me-1" /> {success}
                      </p>
                    )}
                  </div>
                </div>
                <div className="row mb-30">
                  <div className="col-12">
                    {/* Send Button */}
                    <div className="text-end">
                      <button
                        className="submit_btn btn btn-white btn-mod btn-large btn-round btn-hover-anim"
                        id="login-btn"
                        value="Sign In"
                        type="submit"
                        disabled={isLoading}
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
          className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`}
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
                      type="email"
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
                    <label htmlFor="confirm_password">
                      {t('confirmPassword')}
                    </label>
                    <input
                      type="password"
                      name="confirm_password"
                      id="confirm_password"
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
