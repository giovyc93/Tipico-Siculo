
const Icon = ({ classe, img, alt }) => {
  return (
    <div className={classe}>
      <img
        src={img}
        alt={alt}
      />
    </div>
  )
}
export default Icon
