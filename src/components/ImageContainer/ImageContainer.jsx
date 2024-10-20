export const ImageContainer = ({thisClass, src, alt}) => {
  return (
    <div className={thisClass}>
        <img src={src} alt={alt} />
    </div>
  )
}

