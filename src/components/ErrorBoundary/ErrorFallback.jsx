import { ImageContainer } from "../index";
import errorFallbackImage from "../../assets/images/error.png";

const errorUI = {
    src: errorFallbackImage,
    alt: 'Error!',
}

export function ErrorFallback({ errorInfo }) {
    return (
      <div role="alert">
        <h2>Oops! Something went wrong.</h2>
        <p>{errorInfo}</p>
        {/* ImageContainer takes thisClass props */}
        <ImageContainer  src={errorUI.src} alt={errorUI.alt} /> 
        <button onClick={() => window.location.reload()}>Reload</button>
      </div>
    );
  }
  