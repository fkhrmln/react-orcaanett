import { Carousel } from 'react-responsive-carousel';

const ResponsiveCarousel = () => {
  return (
    <Carousel
      className="bg-black rounded-lg overflow-hidden"
      autoPlay={true}
      infiniteLoop={true}
      onClickItem={(index, item) => console.log(item)}
      showArrows={false}
      showStatus={false}
      showThumbs={false}
    >
      <div>
        <img src="/src/assets/netflix-hero.jpg" alt="Netflix" />
      </div>
      <div>
        <img src="/src/assets/spotify-hero.jpg" alt="Spotify" />
      </div>
    </Carousel>
  );
};

export default ResponsiveCarousel;
