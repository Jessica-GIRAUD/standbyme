'use client';
import { infos } from '@/data/infos';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

const Aside = () => {
  const pathname = usePathname();
  const router = useRouter();
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

  const handleLogout = async () => {
    await fetch('/api/logout', {
      method: 'POST',
    });
    router.push('/');
  };

  return (
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
      <div className="admin-sidebar-content"></div>
      {/* Logout Button at the bottom */}
      <div className="admin-sidebar-footer">
        <button
          onClick={handleLogout}
          className="btn btn-mod btn-border btn-round btn-small bg-white w-100"
        >
          <i className="mi-log-out me-2" />
          {t('logout')}
        </button>
      </div>
    </div>
  );
};

export default Aside;
