import React from 'react';
import Card from './Card';

const Day1Content = () => {

  return (
    <Card 
      content={{
        headline: "Türchen 1 – Was ist Veganismus?",
        img: "../assets/earth.jpg",
        imgDesc: "Erde",
        icon: "leaf",
        subtitle: "Nur ein Ernährungstrend?",
        imgAttrUrl: "https://www.freepik.com/free-vector/race-abstract-concept-vector-illustration-racial-discrimination-human-rights-skin-color-human-diversity-genetic-code-racism-racial-equity-workplace-social-justice-abstract-metaphor_11668218.htm#page=2&query=skin&position=7&from_view=author",
        imgAttrTitle: "Image by vectorjuice on Freepik"
      }}
      text={<>
        <b>Veganismus ist weit mehr als nur eine Ernährungsweise.</b> Diese Lebensweise erstreckt sich über 
        verschiedene Lebensbereiche und basiert auf dem Prinzip des Verzichts auf tierische Produkte aus 
        ethischen, umweltfreundlichen und gesundheitlichen Gründen. 
        <br/>
        <b>Veganer lehnen nicht nur Fleisch, Milchprodukte, Eier und andere Erzeugnisse tierischen Ursprungs ab,</b> sondern 
        auch Produkte wie Leder, Wolle und Kosmetika, die an Tieren getestet wurden oder tierische Inhaltsstoffe enthalten. 
        <br/>
        <b>Ihr Ziel ist es, die Auswirkungen ihres Lebensstils auf Tiere und die Umwelt zu minimieren,</b> während sie 
        gleichzeitig gesundheitsbewusste Entscheidungen treffen, die frei von tierischen Bestandteilen sind.
      </>}
    />
  );
}

export default Day1Content;