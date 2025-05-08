'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { teamMembers } from '@/data/team';
import Image from 'next/image';

export default function Team2() {
  return (
    <section className="page-section pt-0" id="team">
      <div className="container">
        <div
          className="row position-relative mt-n40 mb-80 mb-sm-40 wow fadeInUp"
          data-wow-delay="0.2s"
        >
          {/* Decorative Waves */}
          <div
            className="decoration-8 d-none d-sm-block"
            data-rellax-y=""
            data-rellax-speed="-0.6"
            data-rellax-percentage="-0.17"
          >
            <Image
              src="/assets/images/decoration-1.svg"
              alt=""
              width={159}
              height={74}
            />
          </div>
          {/* End Decorative Waves */}
          {/* Team item */}
          {teamMembers.map((elm, i) => (
            <div key={i} className="col-sm-6 col-lg-2 mt-40">
              <div className="team-item">
                <div className="team-item-image">
                  <Image
                    src={elm.image}
                    width={600}
                    height={800}
                    alt="Image Description"
                  />
                  <div className="team-item-detail">
                    <div className="team-social-links">
                      {elm.socials.map((elm, i) => (
                        <a
                          key={i}
                          href={elm.url}
                          target="_blank"
                          rel="noopener nofollow"
                        >
                          <div className="visually-hidden">{elm.platform}</div>
                          <i className={elm.icon} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="team-item-descr">
                  <div className="team-item-name">{elm.name}</div>
                  <div className="team-item-role">{elm.role}</div>
                </div>
              </div>
            </div>
          ))}
          {/* End Team item */}
        </div>
      </div>
    </section>
  );
}
