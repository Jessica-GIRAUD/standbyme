'use client';

import { useEffect, useRef, useState } from 'react';

export default function FullscreenVideo({ videoSrc, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const isMounted = useRef(true);

  const openFullscreen = (e) => {
    e.preventDefault();
    e.stopPropagation();
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
      console.error('Error exiting fullscreen:', err);
    } finally {
      cleanup();
    }
  };

  const cleanup = () => {
    if (!isMounted.current) return;

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.src = '';
      videoRef.current.load();
    }

    if (
      videoContainerRef.current &&
      document.body.contains(videoContainerRef.current)
    ) {
      document.body.removeChild(videoContainerRef.current);
    }

    document.body.style.overflow = 'auto';
    setIsOpen(false);
  };

  const handleFsChange = () => {
    if (!document.fullscreenElement) {
      cleanup();
    }
  };

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
      cleanup();
    };
  }, []);

  useEffect(() => {
    if (!isOpen || !isMounted.current) return;

    const videoContainer = document.createElement('div');
    videoContainer.style.position = 'fixed';
    videoContainer.style.top = '0';
    videoContainer.style.left = '0';
    videoContainer.style.width = '100vw';
    videoContainer.style.height = '100vh';
    videoContainer.style.zIndex = '10000';
    videoContainer.style.backgroundColor = 'black';
    videoContainer.style.display = 'flex';
    videoContainer.style.justifyContent = 'center';
    videoContainer.style.alignItems = 'center';

    const video = document.createElement('video');
    video.src = videoSrc;
    video.controls = true;
    video.playsInline = true; // Important pour iOS
    video.setAttribute('webkit-playsinline', 'true'); // Pour les anciennes versions d'iOS
    video.setAttribute('playsinline', 'true'); // Pour iOS 10+
    video.style.maxWidth = '100%';
    video.style.maxHeight = '100%';
    video.style.objectFit = 'contain';
    video.style.outline = 'none';

    video.addEventListener('error', (e) => {
      console.error('Video error:', e);
      cleanup();
    });

    video.addEventListener('ended', cleanup);
    videoContainer.appendChild(video);

    // Bouton de fermeture
    const closeButton = document.createElement('button');
    closeButton.textContent = '✕';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '20px';
    closeButton.style.right = '20px';
    closeButton.style.fontSize = '2rem';
    closeButton.style.background = 'rgba(0, 0, 0, 0.5)';
    closeButton.style.color = 'white';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '50%';
    closeButton.style.width = '40px';
    closeButton.style.height = '40px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.zIndex = '10001';
    closeButton.style.display = 'flex';
    closeButton.style.alignItems = 'center';
    closeButton.style.justifyContent = 'center';

    const handleCloseClick = (e) => {
      e.stopPropagation();
      closeFullscreen();
    };

    closeButton.addEventListener('click', handleCloseClick);
    videoContainer.appendChild(closeButton);

    document.body.appendChild(videoContainer);
    document.body.style.overflow = 'hidden';
    videoContainerRef.current = videoContainer;
    videoRef.current = video;

    // Gestion du plein écran
    const requestFullscreen = async () => {
      try {
        if (videoContainer.requestFullscreen) {
          await videoContainer.requestFullscreen();
        } else if (videoContainer.webkitRequestFullscreen) {
          // Safari
          await videoContainer.webkitRequestFullscreen();
        } else if (videoContainer.msRequestFullscreen) {
          // IE11
          await videoContainer.msRequestFullscreen();
        }
      } catch (err) {
        console.error('Fullscreen error:', err);
        cleanup();
      }
    };

    requestFullscreen();
    document.addEventListener('fullscreenchange', handleFsChange);
    document.addEventListener('webkitfullscreenchange', handleFsChange); // Pour Safari

    return () => {
      document.removeEventListener('fullscreenchange', handleFsChange);
      document.removeEventListener('webkitfullscreenchange', handleFsChange);
      closeButton.removeEventListener('click', handleCloseClick);
      video.removeEventListener('error', cleanup);
      video.removeEventListener('ended', cleanup);
      cleanup();
    };
  }, [isOpen, videoSrc]);

  return (
    <div onClick={openFullscreen} style={{ display: 'inline' }}>
      {children}
    </div>
  );
}
