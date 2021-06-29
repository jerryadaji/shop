import React, {useState} from "react";
import Frame from './Frame';
import Thumbnail from './Thumbnail';

const Gallery = ({ images }) => {
  const [active, setActive] = useState(0);
  const updateActive = (value) => setActive(value);

  return (
    <div className="row">
      <div className="col-md-10 col-lg-9 order-md-2">
        <Frame background={images[active]}/>
      </div>
      <div className="col-md-2 col-lg-3 order-md-1">
        {images.map( (image, index) => 
          <Thumbnail 
            key={index} 
            background={image.url} 
            isSelected={ index === active ? "isSelected" : "" } 
            onClick={() => updateActive(index)}
          />
        )}
      </div>
    </div>
  );
};
export default Gallery;
