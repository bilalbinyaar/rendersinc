import React from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.css';

const Video = () => {
  React.useEffect(() => {
    console.clear();
  }, []);
  const [isOpen, setOpen] = React.useState(false);
  return (
    <section
      className="video bg-img parallaxie"
      style={{
        backgroundImage: 'url(/assets/img/bg-vid.jpg)',
        backgroundPosition: 'bottom',
      }}
    >
      {typeof window !== 'undefined' && (
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="y-gxMQ3o7RE"
          onClose={() => setOpen(false)}
        />
      )}
      <a
        className="vid valign"
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
        href="https://www.youtube.com/watch?v=y-gxMQ3o7RE"
      >
        <div className="vid-butn">
          <span className="icon">
            <i className="pe-7s-play"></i>
          </span>
        </div>
      </a>
    </section>
  );
};

export default Video;
