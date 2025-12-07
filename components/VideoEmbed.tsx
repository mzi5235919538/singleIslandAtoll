'use client';

interface VideoEmbedProps {
  videoId: string;
  title: string;
  provider: 'youtube' | 'netflix';
  className?: string;
  autoplay?: boolean;
}

export default function VideoEmbed({
  videoId,
  title,
  provider,
  className = '',
  autoplay = false,
}: VideoEmbedProps) {
  const embedUrl =
    provider === 'youtube'
      ? `https://www.youtube.com/embed/${videoId}?${autoplay ? 'autoplay=1' : ''}&modestbranding=1&rel=0`
      : `https://www.netflix.com/embed/${videoId}`;

  return (
    <div
      className={`relative w-full bg-black overflow-hidden rounded-lg shadow-lg ${className}`}
      style={{ paddingBottom: '56.25%' }}
    >
      <iframe
        src={embedUrl}
        title={title}
        className="absolute top-0 left-0 w-full h-full border-0"
        allow={
          provider === 'youtube'
            ? 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            : 'fullscreen'
        }
        allowFullScreen
      />
    </div>
  );
}
