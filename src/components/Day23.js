import React from 'react';
import Card from './Card';

const Day23Content = () => {
  return (
    <Card 
      content={{
        headline: "Türchen 23 – Deine persönliche Challenge",
        img: "./assets/challenge.jpg",
        imgDesc: "Challenge",
        icon: "leaf",
        subtitle: "Veganuary",
        imgAttrUrl: "https://www.freepik.com/free-vector/personal-development-abstract-concept-vector-illustration-develop-talents-potential-personal-career-growth-human-capital-can-it-social-abilities-self-improvement-coach-abstract-metaphor_11663905.htm#query=challenge%20illustration&position=8&from_view=search&track=ais",
        imgAttrTitle: "Image by vectorjuice on Freepik"
      }}
      text={<>
        Veganuary ist eine Herausforderung, bei der Menschen dazu ermutigt werden, 
        <b> im Januar einen Monat lang die vegane Ernährung auszuprobieren</b>. 
        Es ist eine großartige Gelegenheit, den Veganismus zu erkunden und die Vorteile 
        einer pflanzlichen Ernährung und Lebensweise zu erfahren. 
        <br/>
        Während Veganuary bereitest du dich vor, indem du vegane Lebensmittel und Rezepte 
        erkundest, dich über Veganismus informierst und eine unterstützende Gemeinschaft findest. 
        Diese Herausforderung bietet die Chance, neue Geschmacksrichtungen zu entdecken und 
        positive Veränderungen sowohl für dich als auch für die Umwelt zu bewirken. 
        <br/>
        <b>Die letzten Tage des Adventskalenders</b> haben dich bestens auf diese Challenge vorbereitet 
        und <b>bieten eine Fülle an Informationen und Tipps für deinen erfolgreichen Start in den Veganuary.</b>
        <span className="block mt-4 text-center text-xl text-primary">
          Viel Spaß auf deiner Reise!
        </span>
      </>}
    />
  );
}

export default Day23Content;