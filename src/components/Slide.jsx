// import { useRef } from "react"

export const Slide = (proyecto) => {
  console.log(proyecto.imagesSlider);
  //    const listRef = useRef()
  return (
    <div className="slider-container">
      {proyecto.imagesSlider.map((img, index) => (
  <div className='tec-info' key={index}>
    {img.id}
  </div>
))}
      soy un slider
    </div>
  );
};
