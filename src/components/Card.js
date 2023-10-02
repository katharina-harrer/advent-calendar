import React, { useEffect, useState } from 'react';

const Card = ({ content, text, chart, svg }) => {

  const LazyImage = ({ src, alt }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
  
    useEffect(() => {
      const image = new Image();
      image.src = src;
      image.onload = () => {
        setImageLoaded(true);
      };
    }, [src]);
  
    return (
      <img
        src={imageLoaded ? src : ''}
        alt={alt}
        className={`object-top h-full w-full object-cover rounded-lg lg:rounded-lg ${imageLoaded ? 'block' : 'hidden'}`}
      />
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold">{content?.headline}</h2>
      <div className="relative dark:bg-bgDark-100 shadow-lg rounded-lg lg:p-8 pb-8 mt-6">
        <div className="relative overflow-hidden mb-6">
          { svg }
          { content?.img && <LazyImage src={content.img} alt={content?.imgDesc} /> }
          { chart }
          <div className="px-4 lg:px-0">
            { (content?.subtitle && content?.icon) &&
              <h1 className="my-8 text-3xl font-semibold">
                <div className="text-primary"><ion-icon name={content?.icon}/></div> 
                {content?.subtitle}
              </h1>
            }
            <div className="text-justify hyphens-auto" lang="de">
              {text}
            </div>
          </div>
        </div>
        <a 
          href={content?.imgAttrUrl} 
          target="_blank" 
          rel="noreferrer"
          className="text-gray-400 text-xs absolute lg:right-8 right-4"
        >
            {content?.imgAttrTitle} 
        </a>
      </div>
    </div>
  );
}

export default Card;