import React from 'react';
import Card from './Card';

const Day13Content = () => {
  return (
    <Card 
      content={{
        headline: "Türchen 13 – Grundlagen",
        img: "./assets/stagesOfLife.jpg",
        imgDesc: "Lebensabschnitte",
        icon: "leaf",
        subtitle: "Ist Veganismus in jedem Lebensabschnitt empfehlenswert?",
        imgAttrUrl: "https://www.freepik.com/free-vector/family-phisician-with-husband-pregnant-wife-playing-children-family-doctor-medical-family-practice-primary-healthcare-care-concept-pinkish-coral-bluevector-vector-isolated-illustration_11666949.htm#query=pregnant&position=2&from_view=author",
        imgAttrTitle: "Image by vectorjuice on Freepik"
      }}
      text={<>
        <b>Mehrere renommierte Gesundheitsorganisationen</b>, darunter die Weltgesundheitsorganisation (WHO), 
        Amerikanische Herzgesellschaft und die British Dietetic Association (BDA), <b>haben betont, dass 
        eine gut geplante vegane Ernährung in jedem Lebensabschnitt</b>, einschließlich 
        Schwangerschaft, Stillzeit, Kindheit und Adoleszenz, <b>gesund und vernünftig sein kann</b>.
        <br/>
        Sie betonen, dass vegane Ernährungsmuster mit einer ausreichenden Versorgung aller notwendigen Nährstoffe, 
        einschließlich Protein, Vitamin B12, Eisen, Calcium und Omega-3-Fettsäuren, einhergehen können. 
        <br/>
        <b>Diese Organisationen unterstreichen die gesundheitlichen Vorteile einer pflanzlichen Ernährung</b>, 
        darunter eine niedrigere Rate von Herzkrankheiten, Typ-2-Diabetes und bestimmten Krebsarten. 
        Dennoch wird darauf hingewiesen, dass die Schlüsselkomponente für eine gesunde vegane Ernährung 
        die sorgfältige Auswahl und Vielfalt der Lebensmittel ist.
      </>}
    />
  );
}

export default Day13Content;