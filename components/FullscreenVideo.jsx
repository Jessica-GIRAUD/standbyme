'use client';

import { useEffect, useRef, useState } from 'react';

export default function FullscreenVideo({ videoSrc, className, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const isMounted = useRef(true);
  const errorCount = useRef(0);
  const MAX_RETRIES = 2;

  const openFullscreen = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const closeFullscreen = async () => {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      }
    } catch (err) {
      console.warn('Error exiting fullscreen:', err);
    } finally {
      cleanup();
    }
  };

  const cleanup = () => {
    if (!isMounted.current) return;

    if (videoRef.current) {
      try {
        videoRef.current.pause();
        videoRef.current.removeAttribute('src');
        videoRef.current.load();
      } catch (err) {
        console.warn('Error cleaning up video:', err);
      }
    }

    if (videoContainerRef.current && document.body.contains(videoContainerRef.current)) {
      try {
        document.body.removeChild(videoContainerRef.current);
      } catch (err) {
        console.warn('Error removing video container:', err);
      }
    }

    document.body.style.overflow = 'auto';
    setIsOpen(false);
  };

  const handleFsChange = () => {
    if (!document.fullscreenElement) {
      cleanup();
    }
  };

  const handleVideoError = (e) => {
    console.error('Video error:', e);
    errorCount.current += 1;
    
    if (errorCount.current <= MAX_RETRIES) {
      console.log(`Retrying video (${errorCount.current}/${MAX_RETRIES})...`);
      if (videoRef.current) {
        videoRef.current.src = videoSrc;
        videoRef.current.load().catch(console.error);
      }
    } else {
      console.error('Max retries reached, closing video');
      cleanup();
    }
  };

  useEffect(() => {
    isMounted.current = true;
    errorCount.current = 0;
    
    return () => {
      isMounted.current = false;
      cleanup();
    };
  }, [videoSrc]); // Reset on videoSrc change

  useEffect(() => {
    if (!isOpen || !isMounted.current) return;

    const videoContainer = document.createElement('div');
    videoContainer.className = 'fullscreen-video-container';
    Object.assign(videoContainer.style, {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 10000,
      backgroundColor: 'black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    });

    const video = document.createElement('video');
    video.preload = 'metadata';
    video.src = videoSrc;
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true;
    video.setAttribute('webkit-playsinline', 'true');
    video.setAttribute('playsinline', 'true');
    video.crossOrigin = 'anonymous';
    Object.assign(video.style, {
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit: 'contain',
      outline: 'none'
    });

    // Gestion des erreurs
    const errorHandler = (e) => {
      console.error('Video error event:', e);
      handleVideoError(e);
    };

    video.addEventListener('error', errorHandler, { once: true });
    video.addEventListener('ended', cleanup, { once: true });

    // Bouton de fermeture
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '&times;';
    closeButton.ariaLabel = 'Fermer';
    Object.assign(closeButton.style, {
      position: 'absolute',
      top: '20px',
      right: '20px',
      fontSize: '2rem',
      background: 'rgba(0, 0, 0, 0.5)',
      color: 'white',
      border: 'none',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      cursor: 'pointer',
      zIndex: 10001,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0
    });

    const handleCloseClick = (e) => {
      e?.stopPropagation();
      closeFullscreen();
    };

    closeButton.addEventListener('click', handleCloseClick, { once: true });
    videoContainer.appendChild(closeButton);
    videoContainer.appendChild(video);
    document.body.appendChild(videoContainer);
    document.body.style.overflow = 'hidden';
    
    videoContainerRef.current = videoContainer;
    videoRef.current = video;

    // Gestion du plein écran
    const requestFullscreen = async () => {
      try {
        const container = videoContainer;
        if (container.requestFullscreen) {
          await container.requestFullscreen();
        } else if (container.webkitRequestFullscreen) {
          await container.webkitRequestFullscreen();
        } else if (container.msRequestFullscreen) {
          await container.msRequestFullscreen();
        }
      } catch (err) {
        console.warn('Fullscreen error:', err);
        cleanup();
      }
    };

    requestFullscreen();

    // Gestion des événements
    const fullscreenChangeHandler = () => {
      if (!document.fullscreenElement && !document.webkitIsFullScreen) {
        cleanup();
      }
    };

    document.addEventListener('fullscreenchange', fullscreenChangeHandler);
    document.addEventListener('webkitfullscreenchange', fullscreenChangeHandler);

    // Nettoyage
    return () => {
      document.removeEventListener('fullscreenchange', fullscreenChangeHandler);
      document.removeEventListener('webkitfullscreenchange', fullscreenChangeHandler);
      closeButton.removeEventListener('click', handleCloseClick);
      video.removeEventListener('error', errorHandler);
      video.removeEventListener('ended', cleanup);
      cleanup();
    };
  }, [isOpen, videoSrc]);

  return (
    <div 
      className={className} 
      onClick={openFullscreen} 
      style={{ 
        display: 'inline-block',
        cursor: 'pointer'
      }}
    >
      {children}
    </div>
  );
}