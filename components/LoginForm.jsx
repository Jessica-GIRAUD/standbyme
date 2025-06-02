'use client';
import { useState } from 'react';
import { useTranslations } from 'use-intl';
import { redirect, useRouter } from 'next/navigation';

export default function LoginForm() {
  const t = useTranslations('login');
  const router = useRouter();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (!email || !password) {
      setError('Veuillez entrer votre email et mot de passe.');
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log('data', data);

      if (!res.ok) {
        // Le backend doit retourner un message dans data.message
        setError(data.message || 'Erreur lors de la connexion');
        return;
      }

      router.push('/admin/dashboard');
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container wow fadeInUp">
      {/* Login Form */}
      <div className="row mt-4">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={handleLogin} className="form contact-form">
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
                  onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="btn position-absolute top-50 end-0 translate-middle-y px-3 py-2"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isLoading}
                    aria-label={showPassword ? 'hidePassword' : 'showPassword'}
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
  );
}
