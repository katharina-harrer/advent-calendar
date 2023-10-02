import React from 'react';

const Card = ({ content, text, chart }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold">{content?.headline}</h2>
      <div className="relative dark:bg-bgDark-100 shadow-lg rounded-lg lg:p-8 pb-8 mt-6">
        <div className="relative overflow-hidden mb-6">
          { content?.img && <img src={content?.img} alt={content?.imgDesc} className="object-top h-full w-full object-cover rounded-lg lg:rounded-lg"/> }
          { chart }
          <div className="px-4 lg:px-0">
            { (content?.subtitle && content?.icon) &&
              <h1 className="my-8 text-3xl font-semibold">
                <div className="text-primary"><ion-icon name={content?.icon}/></div> 
                {content?.subtitle}
              </h1>
            }
            <p className="text-justify hyphens-auto" lang="de">
                {text}
            </p>
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