import React from 'react';
import Card from './Card';

const Day16Content = () => {
  return (
    <Card 
      content={{
        headline: "Türchen 16 – Tipps",
        img: "./assets/wine.jpg",
        imgDesc: "Wine",
        icon: "wine",
        subtitle: "Vorsicht bei vermeintlich veganen Lebensmitteln",
        imgAttrUrl: "https://www.freepik.com/free-vector/mulled-wine-concept-illustration_19465215.htm#query=wine%20juice%20illustration&position=0&from_view=search&track=ais",
        imgAttrTitle: "Image by storyset on Freepik"
      }}
      text={<>
        Es gibt einige <b>Lebensmittel, von denen man auf den ersten Blick nicht 
        erwarten würde, dass sie nicht immer vegan sind</b>. Dazu gehören zum Beispiel Wein, Chips und Saft. 
        Während diese Produkte grundsätzlich aus pflanzlichen Zutaten hergestellt werden können, 
        gibt es bestimmte Herstellungsprozesse und Zutaten, die sie möglicherweise nicht vegan machen. 
        Beispielsweise werden manche <b>Weine mit tierischen Klärungsmitteln geklärt</b>, und einige Chips 
        können Aromen oder Würzungen enthalten, die tierischen Ursprungs sind. 
        Auch bei Säften kann es vorkommen, dass sie mit Gelatine oder anderen tierischen Produkten geklärt werden. 
        Daher ist es <b>immer ratsam, die Zutatenliste zu überprüfen</b> oder sich nach veganen Alternativen umzusehen, 
        um sicherzustellen, dass diese Lebensmittel tatsächlich vegan sind.
      </>}
    />
  );
}

export default Day16Content;