

const DiscoverContent = ({ classe, paragraph, title, img }) => {
  return (
    <div className={classe}>
      <div className="discoverText">
        <h2 className="discoverSubtitle">{title}</h2>
        <p className="discoverParagraph">{paragraph}</p>
      </div>
        <img
          src={img}
          alt="panino-Sfondo-mare"
          className="discoverImg1"
        />
    </div>
  )
}
export default DiscoverContent