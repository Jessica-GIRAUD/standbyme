'use client';
import ParallaxContainer from '@/components/common/ParallaxContainer';
import { infos } from '@/data/infos';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const t = useTranslations('admin');

  const menuItems = [
    {
      title: 'dashboard',
      href: '/admin/dashboard',
      icon: 'mi-grid',
    },
    {
      title: 'portfolio',
      href: '/admin/portfolio',
      icon: 'mi-comment',
    },
    {
      title: 'team',
      href: '/admin/team',
      icon: 'mi-users',
    },
    {
      title: 'companyInfo',
      href: '/admin/company',
      icon: 'mi-home',
    },
  ];

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
                    {menuItems.map((item, index) => {
                      return (
                        <li className="nav-item" key={index}>
                          <Link
                            href={item.href}
                            className={`nav-link ${
                              pathname === item.href ? 'active' : ''
                            }`}
                          >
                            <i className={`${item.icon} me-2`}></i>
                            {t(item.title)}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
              {/* Logout Button at the bottom */}
              <div className="admin-sidebar-footer">
                <Link
                  href="/"
                  className="btn btn-mod btn-border btn-round btn-small bg-white w-100"
                >
                  <i className="mi-log-out me-2" />
                  {t('logout')}
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
