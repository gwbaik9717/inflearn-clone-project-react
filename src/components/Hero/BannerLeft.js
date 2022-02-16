import BannerTag from "./BannerTag";

const BannerLeft = ({ title, tags, details }) => {
  return (
    <div className="banner-left">
      {tags.map((tag) => (
        <BannerTag key={tag} tag={tag} />
      ))}

      <h1 className="banner-title title">{title}</h1>
      <p className="banner-details">{details}</p>
    </div>
  );
};

export default BannerLeft;
