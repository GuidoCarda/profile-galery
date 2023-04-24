import PropTypes from "prop-types";

const ImagesGrid = ({ isLoading, images = [] }) => {
  const hasImages = !isLoading && Boolean(images.length);

  return (
    <section className="ImagesGrid">
      {hasImages &&
        images.map((src) => (
          <img key={`img-${src}`} className="ImagesGrid-img" src={src} alt="" />
        ))}
      {isLoading && <ImagesGridSkeleton />}
    </section>
  );
};

const ImagesGridSkeleton = () => {
  return [...Array(6).keys()].map((id) => (
    <div key={`img-${id}`} className="ImagesGrid-img--skeleton" />
  ));
};

ImagesGrid.propTypes = {
  images: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default ImagesGrid;
