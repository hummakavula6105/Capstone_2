import React from 'react';

const ImagePresenter = ({image, altText}) => {
    return ( 
        <div>
           <img src={image} className="float-middle" alt={altText} />
        </div>
     );
}
 
export default ImagePresenter;