import React from 'react';
import Card from './Card';

const Day17Content = () => {
  return (
    <Card 
      content={{
        headline: "Türchen 17 – Tipps",
        img: "../assets/cooking.jpg",
        imgDesc: "Cooking",
        icon: "pizza",
        subtitle: "Entdecke die Vielfalt",
        imgAttrUrl: "https://www.freepik.com/free-vector/woman-standing-near-stove-kitchen-holding-spoon_20827512.htm#page=2&query=cooking%20illustration&position=13&from_view=search&track=ais",
        imgAttrTitle: "Image by pch.vector on Freepik"
      }}
      text={<>
        Entdecke die <b>Vielfalt</b> der veganen Küche, indem du neue Rezepte ausprobierst. <b>Veganismus 
        bedeutet nicht Verzicht</b>, sondern bietet die Möglichkeit, eine Fülle von 
        neuen Produkten und Gerichten zu erkunden. Es ist normal, dass nicht jedes vegane Produkt 
        deinem Geschmack entspricht.
        <br/>
        Wenn du beispielsweise Sojamilch nicht magst, probiere Alternativen wie Hafer-, Mandel- oder Haselnussmilch aus. 
        <br/>
        Die Welt der veganen Ernährung hält <b>viele spannende Geschmackserlebnisse</b> bereit, die du genießen kannst.
      </>}
    />
  );
}

export default Day17Content;