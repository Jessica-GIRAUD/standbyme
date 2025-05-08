import AnimatedText from '@/components/common/AnimatedText';
import Image from 'next/image';
import React from 'react';

export default function Service() {
  return (
    <div className="container position-relative">
      <div className="row justify-content-center">
        <div className="col-lg-6 mb-md-60 mb-sm-30">
          <h2 className="section-caption mb-xs-10">Our Team</h2>
          <h3 className="section-title mb-30">
            <AnimatedText text="We bring together the best minds to build remarkable experiences." />
          </h3>
          {/*       <div className="row">
            <div className="col-lg-10">
              <p
                className="section-descr mb-50 mb-sm-30 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                At Stand By Me, creativity and collaboration drive every project
                we craft — from bold ideas to flawless execution.
              </p>
            </div>
          </div> */}
          <ul
            className="nav nav-tabs services-tabs wow fadeInUp"
            data-wow-delay="0.55s"
            role="tablist"
          >
            <li role="presentation">
              <a
                href="#services-item-1"
                className="active"
                aria-controls="services-item-1"
                role="tab"
                aria-selected="true"
                data-bs-toggle="tab"
              >
                Nathalie <span className="number">01</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-2"
                aria-controls="services-item-2"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Jean-Baptiste <span className="number">02</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-3"
                aria-controls="services-item-3"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Candice <span className="number">03</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-4"
                aria-controls="services-item-4"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Vladimir <span className="number">04</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-5"
                aria-controls="services-item-5"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Perrine <span className="number">05</span>
              </a>
            </li>
          </ul>
        </div>
        <div
          className="col-4 d-flex wow fadeInLeft"
          data-wow-delay="0.55s"
          data-wow-offset={275}
        >
          <div className="tab-content services-content">
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item show fade active"
              id="services-item-1"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">Project Management</h4>
                  <p className="text-gray mb-0">
                    Nathalie leads each project with precision, ensuring
                    clarity, coordination, and client satisfaction.
                  </p>
                </div>
              </div>
              <Image
                width={400}
                height={800}
                className="services-image"
                src="/assets/images/team/team_1.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-2"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">General Direction</h4>
                  <p className="text-gray mb-0">
                    Jean-Baptiste drives the vision and strategy, blending
                    creativity and leadership to shape every project’s success.
                  </p>
                </div>
              </div>
              <Image
                width={400}
                height={800}
                className="services-image"
                src="/assets/images/team/team_2.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-3"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">Project Management</h4>
                  <p className="text-gray mb-0">
                    Candice brings fresh energy and precision, ensuring each
                    project runs smoothly from idea to delivery.
                  </p>
                </div>
              </div>
              <Image
                width={400}
                height={800}
                className="services-image"
                src="/assets/images/team/team_3.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-4"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">Sales Direction</h4>
                  <p className="text-gray mb-0">
                    Vladimir builds strong client relationships and drives
                    business growth with clarity and ambition.
                  </p>
                </div>
              </div>
              <Image
                width={400}
                height={800}
                className="services-image"
                src="/assets/images/team/team_4.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-5"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">Operations & Admin</h4>
                  <p className="text-gray mb-0">
                    Perrine ensures smooth day-to-day operations with precision,
                    care, and unwavering dedication.
                  </p>
                </div>
              </div>
              <Image
                width={400}
                height={800}
                className="services-image"
                src="/assets/images/team/team_5.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-6"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">Marketing</h4>
                  <p className="text-gray mb-0">
                    The core identity reflects consistent associations with the
                    brand whereas the extended identity involves the intricate
                    details of the brand that help generate a constant motif.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/services/service-6.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
          </div>
        </div>
      </div>
    </div>
  );
}
