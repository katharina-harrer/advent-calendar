import React from 'react';
import Card from './Card';

const Day22Content = () => {
  return (
    <Card 
      content={{
        headline: "Türchen 22 – Nachsichtig sein",
        img: "./assets/selflove.jpg",
        imgDesc: "Selflove ",
        icon: "heart",
        subtitle: "Niemand ist perfekt",
        imgAttrUrl: "https://www.freepik.com/free-vector/self-image-abstract-concept-vector-illustration-positive-self-image-personal-portrait-social-role-mental-picture-personality-trait-individual-psychology-perception-abstract-metaphor_12469762.htm#query=selflove%20illustration&position=43&from_view=search&track=ais",
        imgAttrTitle: "Image by vectorjuice on Freepik"
      }}
      text={<>
      Wenn du dich für den Veganismus entscheidest oder deine Ernährung und Lebensweise umstellst, 
      ist es wichtig, nicht zu streng mit dir selbst zu sein. 
      Der Weg zu einer bewussteren und achtsameren Lebensweise kann Zeit in Anspruch nehmen, und es ist normal, 
      dass es Herausforderungen gibt. Das Wichtigste ist, dass du dein Bestes gibst und dir selbst gegenüber 
      geduldig und nachsichtig bist.
      <br/>
      <b>Niemand ist perfekt, und es ist völlig normal, gelegentlich Fehler zu machen oder Rückschläge zu erleben.</b> 
      Der Übergang zum Veganismus kann mit einer Lernkurve verbunden sein, und es ist in Ordnung, aus Fehlern zu lernen. 
      Was zählt, ist deine Absicht, dich für eine ethischere und nachhaltigere Lebensweise einzusetzen.
      <br/>
      <b>Sei stolz auf deine Fortschritte</b>, selbst wenn sie klein erscheinen, und feiere deine Erfolge auf diesem Weg. 
      Das Wichtigste ist, dass du dich engagierst und daran arbeitest, positive Veränderungen in deinem Leben und für die 
      Welt herbeizuführen. <b>Mit Geduld und Selbstliebe kannst du erfolgreich eine vegane Lebensweise erreichen.</b>
      </>}
    />
  );
}

export default Day22Content;