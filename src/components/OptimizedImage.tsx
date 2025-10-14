// src/components/OptimizedImage.tsx
import { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  lazy?: boolean;
  priority?: boolean;
}

export default function OptimizedImage({
  src,
  alt,
  className = '',
  width,
  height,
  lazy = true,
  priority = false,
}: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false);
  
  // Generate WebP version path if the image is not already WebP
  // This assumes you have WebP versions of your images with the same name but .webp extension
  const getWebPPath = (path: string) => {
    if (path.endsWith('.webp')) return path;
    
    const extension = path.split('.').pop() || '';
    if (!extension || extension === path) return `${path}.webp`;
    
    return path.replace(`.${extension}`, '.webp');
  };
  
  const webpSrc = getWebPPath(src);
  
  // Preload high priority images
  useEffect(() => {
    if (priority && typeof window !== 'undefined') {
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.as = 'image';
      preloadLink.href = webpSrc;
      preloadLink.type = 'image/webp';
      document.head.appendChild(preloadLink);
      
      return () => {
        document.head.removeChild(preloadLink);
      };
    }
  }, [webpSrc, priority]);
  
  return (
    <picture>
      {/* WebP format for browsers that support it */}
      <source srcSet={webpSrc} type="image/webp" />
      
      {/* Fallback for browsers that don't support WebP */}
      <img
        src={src}
        alt={alt}
        className={`${className} ${!loaded ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}
        width={width}
        height={height}
        loading={lazy && !priority ? 'lazy' : undefined}
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={() => setLoaded(true)}
      />
    </picture>
  );
}