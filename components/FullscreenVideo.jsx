'use client';

import { useEffect, useRef, useState } from 'react';

export default function FullscreenVideo({ videoSrc, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);

  const openFullscreen = (e) => {
    e.preventDefault();
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => cleanup());
    } else {
      cleanup();
    }
  };

  const cleanup = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    if (videoContainerRef.current) {
      videoContainerRef.current.remove();
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
    if (!isOpen) return;

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
    video.autoplay = true;
    video.style.maxWidth = '100%';
    video.style.maxHeight = '100%';
    video.style.objectFit = 'contain';
    video.style.outline = 'none';
    videoContainer.appendChild(video);

    // Bouton de fermeture (mobile friendly)
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
    closeButton.addEventListener('click', closeFullscreen);
    videoContainer.appendChild(closeButton);

    document.body.appendChild(videoContainer);
    videoContainerRef.current = videoContainer;
    videoRef.current = video;

    // Gestion du plein écran
    videoContainer.requestFullscreen().catch((err) => {
      console.error('Fullscreen error:', err);
      cleanup();
    });

    document.addEventListener('fullscreenchange', handleFsChange);

    return () => {
      cleanup();
      document.removeEventListener('fullscreenchange', handleFsChange);
    };
  }, [isOpen, videoSrc]);

  return (
    <div onClick={openFullscreen} style={{ display: 'inline' }}>
      {children}
    </div>
  );
}
