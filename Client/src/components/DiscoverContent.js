

const DiscoverContent = ({ classe, paragraph, title, img }) => {
  return (
    <div className={classe}>
      <div className="discoverText">
        <h2 className="discoverSubtitle">{title}</h2>
        <p className="discoverParagraph">{paragraph}</p>
      </div>
      <div className="carouselSmall">
        <img
          src={img}
          alt="panino-Sfondo-mare"
          className="carousel__img1"
        />
      </div>
    </div>
  )
}
export default DiscoverContent