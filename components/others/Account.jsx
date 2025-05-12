'use client';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'use-intl';

export default function Account() {
  const t = useTranslations('login');
  const router = useRouter();

  return (
    <div className="container wow fadeInUp">
      {/* Tab Content */}
      <div
        className="tab-content tpl-minimal-tabs-cont section-text"
        id="myTabContent-1"
      >
        {/* Login Tab */}
        <div
          className="tab-pane fade show active"
          id="account-login"
          role="tabpanel"
          aria-labelledby="account-login-tab"
        >
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  router.push('/admin/dashboard');
                }}
                className="form contact-form"
              >
                <div className="mb-30">
                  {/* Username */}
                  <div className="form-group">
                    <label htmlFor="username">{t('username')}</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="input-lg round form-control"
                      placeholder={t('enterUsername')}
                      pattern=".{3,100}"
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
                    <div className="form-tip pt-10">
                      <a href="#">{t('forgetPassword')}</a>
                    </div>
                  </div>
                  <div className="col-6">
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
                <div className="form-tip bg-gray-light-1 round p-3 form-tip-2">
                  <i className="icon-info size-16" />
                  {t('fieldsRequiredInfo')} <a href="#">{t('terms')}</a>{' '}
                  {t('privacy') && 'et '}
                  <a href="#">{t('privacy')}</a>.
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
