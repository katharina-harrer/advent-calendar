import React from 'react';
import Card from './Card';
import Heading from './SubHeading';

const Day9Content = () => {
  return (
    <Card 
      content={{
        headline: "Türchen 9 – Nährstoffe",
        img: "./assets/nutrition.jpg",
        imgDesc: "Nährstoffe",
        icon: "leaf",
        subtitle: "Decke ich alle Nährstoffe mit einer veganen Ernährung ab?",
        imgAttrUrl: "https://www.freepik.com/free-vector/cardio-exercising-healthy-lifestyle-heart-disease-prevention-healthcare-cardiology-healthy-eating-workout-health-diagnostics_12085864.htm#query=health&position=41&from_view=author",
        imgAttrTitle: "Image by vectorjuice on Freepik"
      }}
      text={<>
        Wusstest du, dass du fast alle Nährstoffe durch eine vollwertige pflanzliche Ernährung decken kannst? 
        <br/>
        <Heading title={'Protein'} icon={'restaurant'} />
        Protein ist reichlich in pflanzlichen Quellen wie Tofu, Tempeh, Hülsenfrüchten sowie in Samen, Nüssen 
        und Getreide wie Quinoa, Hafer und Reis vorhanden. <b>Sogar Gemüse enthält Eiweiß</b> in unterschiedlichem Maße. 
        <br/>
        <Heading title={'Kalzium'} icon={'leaf'} />
        Für Kalzium, das <b>wichtig für starke Knochen</b> ist, kannst du auf Lebensmittel wie angereicherte Pflanzenmilch, 
        grünes Blattgemüse, Tofu und Sesamsamen zurückgreifen. 
        <br/>
        <Heading title={'Eisen'} icon={'extension-puzzle'} />
        Eisen findest du in Lebensmitteln wie Hülsenfrüchten, Nüssen und Samen, Vollkornprodukten und dunkelgrünem Gemüse.
        <br/>
        <Heading title={'Omega-3- und Omega-6-Fettsäuren'} icon={'water'} />
        Omega-3- und Omega-6-Fettsäuren sind in Leinsamen, Walnüssen, Chiasamen und Hanfsamen reichlich vorhanden. 
        <br/>
        <Heading title={'Jod'} icon={'fish'} />
        Jod, das oft mit Meeresfrüchten in Verbindung gebracht wird, kann durch jodiertes Salz oder Algenpräparate aufgenommen werden.
        <br/>
        <Heading title={'Vitamin B12'} icon={'eyedrop'} />
        Das einzige Vitamin, das <b>bei einer rein pflanzlichen Ernährung schwer zu erhalten</b> ist, ist Vitamin B12. 
        Es ist ratsam, B12-Ergänzungen oder mit B12 angereicherte Lebensmittel zu konsumieren, um sicherzustellen, dass du ausreichend 
        versorgt bist.
        <br/>
        Diese vielfältigen pflanzlichen Quellen ermöglichen es Veganern, eine ausgewogene und nährstoffreiche Ernährung zu genießen.
      </>}
    />
  );
}

export default Day9Content;