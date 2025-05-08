'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { teamMembers } from '@/data/team';
import Image from 'next/image';

export default function Team3() {
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
          {/* Team Carousel */}
          <div className="col-md-12 relative">
            <div>
              <Swiper
                spaceBetween={0}
                slidesPerView={5}
                breakpoints={{
                  500: {
                    slidesPerView: 2, // When window width is <= 480px
                  },
                  0: {
                    slidesPerView: 1,
                  },
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                loop={true}
                modules={[Navigation]}
                navigation={{
                  prevEl: '.snbp1',
                  nextEl: '.snbn1',
                }}
                watchSlidesProgress
                resizeObserver
                className="team-carousel owl-carousel owl-theme overflow-hidden position-static"
                style={{
                  opacity: 1,
                  display: 'block',
                }}
              >
                {/* Team item */}
                {teamMembers.map((member, index) => (
                  <SwiperSlide className="owl-item" key={index}>
                    <div className="team-carousel-item">
                      <div className="team-item">
                        <div className="team-item-image">
                          <Image
                            width={600}
                            height={800}
                            src={member.image}
                            className="wow scaleOutIn"
                            alt="Image Description"
                          />
                          <div className="team-item-detail">
                            <div className="team-social-links">
                              {member.socials.map((social, socialIndex) => (
                                <a
                                  href={social.url}
                                  target="_blank"
                                  rel="noopener nofollow"
                                  key={socialIndex}
                                >
                                  <div className="visually-hidden">
                                    {social.platform}
                                  </div>
                                  <i className={social.icon} />
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="team-item-descr">
                          <div className="team-item-name">{member.name}</div>
                          <div className="team-item-role">{member.role}</div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
               
                {/* End Team item */}
              </Swiper>
            </div>
          </div>
          {/* End Team Carousel */}
        </div>
      </div>
    </section>
  );
}
