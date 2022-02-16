import BannerLeft from "./BannerLeft";
import BannerRight from "./BannerRight";

const SwiperSlideElements = ({ title, tags, details, img, bgColor }) => {
  return (
    <div className="banner-bg">
      <div className="container">
        <BannerLeft title={title} tags={tags} details={details} />
        <BannerRight img={img} alt={title} />
      </div>
    </div>
  );
};

export default SwiperSlideElements;
