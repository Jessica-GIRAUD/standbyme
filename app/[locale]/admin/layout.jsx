import ParallaxContainer from '@/components/common/ParallaxContainer';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Aside from '@/components/admin/Aside';
import { getSession } from '@/lib/auth';
import { getTranslations } from 'next-intl/server';

export default async function AdminLayout({ children }) {
  const t = await getTranslations('admin');

  const token = cookies().get('token')?.value;
  const session = getSession(token);

  if (!session) {
    redirect('/login');
  }

  return (
    <div className="theme-main">
      <div className="page" id="top">
        <div className="admin-layout">
          <Aside />
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
                <div className="container position-relative">
                  Welcome {session.name}  {children}
                </div>
              </ParallaxContainer>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
