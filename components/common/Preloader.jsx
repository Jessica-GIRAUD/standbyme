import Image from 'next/image';

export default function Preloader() {
  return (
    <div className="custom-preloader">
      <div className="custom-loader">
        <div className="custom-loader-container">
          <div className="custom-loader-icon">
            <Image
              src="/assets/images/logo-white.png"
              alt="Preloader"
              width={400}
              height={400}
              style={{ height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
