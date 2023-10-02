import React from 'react';
import Card from './Card';

const Day4Content = () => {
  return (
     <Card 
        content={{
          headline: "Türchen 4 – Motivation finden",
          img: "../assets/farmAnimals.jpg",
          imgDesc: "Tiere",
          icon: "paw",
          subtitle: "Vegan für die Tiere",
          imgAttrUrl: "https://www.freepik.com/free-vector/farm-animal-composition_26763927.htm#page=2&query=farm%20animals%20illustration&position=3&from_view=search&track=ais",
          imgAttrTitle: "Image by macrovector on Freepik"
        }}
        text={<>
          Respekt und die Liebe zu Tieren können eine treibende Kraft sein, vegan zu werden. 
          Viele Menschen möchten kein Tierleid unterstützen und entscheiden sich daher für eine 
          vegane Lebensweise, um Tiere vor Ausbeutung und Schlachtung zu schützen. 
          <br/>
          Auf Streaming-Plattformen wie Netflix und Co. findest du zahlreiche 
          gut produzierte Dokumentationen und Filme, die die Auswirkungen unseres rücksichtslosen 
          Umgangs mit Tieren aufdecken. Ebenso gibt es empfehlenswerte Filme, die gängige Missverständnisse 
          im Zusammenhang mit veganer Ernährung und Lebensweise genauer unter die Lupe nehmen.
          Auch wenn viele Dokus nichts für schwache Nerven sind, zeigen sie die Realität für Milliarden Tiere auf. <b>Einige 
          hervorragende Dokus und Filme über Veganismus sind Earthlings, Cowspiracy, Dominion, Rotten, Explained, Okja und Blackfish.</b>
          <br/>
          <a href="https://www.peta.de/themen/vegan-doku/" target="_blank" rel="noreferrer" className="text-primary">Hier</a> findest 
          du weitere Dokuempfehlungen.
        </>}
      />
  );
}

export default Day4Content;