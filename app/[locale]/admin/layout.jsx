'use client';
import ParallaxContainer from '@/components/common/ParallaxContainer';
import { infos } from '@/data/infos';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function AdminLayout({ children }) {
  const pathname = usePathname();

  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <div className="admin-layout">
            {/* Sidebar Drawer */}
            <div className="admin-sidebar bg-dark">
              <div className="admin-sidebar-header pb-20">
                <Link href={`/`} className="logo">
                  <Image
                    src="/assets/images/logo-color.png"
                    alt={infos.company}
                    width={105}
                    height={34}
                    className="light-mode-logo"
                  />
                </Link>
              </div>
              <div className="admin-sidebar-content">
                <nav className="admin-navigation">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link
                        href="/admin/dashboard"
                        className={`nav-link ${
                          pathname === '/admin/dashboard' ? 'active' : ''
                        }`}
                      >
                        <i className="fa fa-dashboard me-2"></i>
                        Dashboard
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/admin/portfolio"
                        className={`nav-link ${
                          pathname === '/admin/portfolio' ? 'active' : ''
                        }`}
                      >
                        <i className="fa fa-image me-2"></i>
                        Portfolio
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/admin/team"
                        className={`nav-link ${
                          pathname === '/admin/team' ? 'active' : ''
                        }`}
                      >
                        <i className="fa fa-users me-2"></i>
                        Équipe
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/admin/company"
                        className={`nav-link ${
                          pathname === '/admin/company' ? 'active' : ''
                        }`}
                      >
                        <i className="fa fa-building me-2"></i>
                        Informations
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* Logout Button at the bottom */}
              <div className="admin-sidebar-footer">
                <Link
                  href="/"
                  className="btn btn-mod btn-border btn-round btn-small bg-white"
                >
                  <i className="fa fa-sign-out me-2"></i>
                  Déconnexion
                </Link>
              </div>
            </div>
            {/* Main Content */}
            <main id="main" className="admin-main-content">
              <section className="page-section  p-0" id="home">
                <ParallaxContainer
                  className="page-section bg-gray-light-1 bg-light-alpha-90 parallax-5 pt-50"
                  style={{
                    backgroundImage:
                      'url(/assets/images/full-width-images/page-title-bg-5.jpg)',
                  }}
                >
                  <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-gradient-white" />
                  <div className="container position-relative">{children}</div>
                </ParallaxContainer>
              </section>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
