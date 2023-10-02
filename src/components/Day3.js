import React from 'react';
import Card from './Card';

const Day3Content = () => {
  return (
    <Card 
      content={{
        headline: "Türchen 3 – Motivation finden",
        img: "adventcalendar/assets/sustainability.jpg",
        imgDesc: "Nachhaltigkeit",
        icon: "earth",
        subtitle: "Vegan für mehr Nachhaltigkeit",
        imgAttrUrl: "https://www.freepik.com/free-vector/biodynamic-farming-abstract-concept-vector-illustration-organic-agriculture-soil-fertility-plant-growth-livestock-care-sowing-planting-calendar-seed-production-abstract-metaphor_12083039.htm#query=nature&position=10&from_view=author",
        imgAttrTitle: "Image by vectorjuice on Freepik"
      }}
      text={<>
        Sich für eine nachhaltige und umweltfreundliche Lebensweise zu entscheiden, 
        indem man vegan wird, hat entscheidende Vorteile für unseren Planeten. 
        <br/>
        Veganismus reduziert nicht nur den CO2-Fußabdruck, es <b>spart auch Wasser</b> und <b>verhindert 
        die Abholzung von Wäldern</b>. 
        Gleichzeitig wird weniger Land und Energie benötigt, was zur <b>Schonung der
        natürlichen Ressourcen</b> und zur <b>Erhaltung der Biodiversität</b> beiträgt. 
        <br/>
        Diese Entscheidung fördert aktiv den Umweltschutz und trägt zur Bewahrung unserer Erde bei.
      </>}
    />
  );
}

export default Day3Content;