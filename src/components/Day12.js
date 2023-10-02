import React from 'react';
import Card from './Card';
import Heading from './SubHeading';

const Day12Content = () => {
  return (
    <Card 
      content={{
        headline: "Türchen 12 – Deine persönliche Challenge",
        img: "../assets/dailyDozen.jpg",
        imgDesc: "Vegetables",
        icon: "nutrition",
        subtitle: "Die Daily Dozen",
        imgAttrUrl: "https://www.freepik.com/free-vector/harvesting-abstract-concept-vector-illustration-collecting-crops-vegetables-crop-rotation-sustainable-gardening-growing-season-gestation-period-homegrown-food-abstract-metaphor_12469183.htm#query=vegetables&position=5&from_view=author",
        imgAttrTitle: "Image by vectorjuice on Freepik"
      }}
      text={<>
        Die "Daily Dozen" oder "Die täglichen Zwölf" sind eine <b>praktische Orientierungshilfe 
        für eine gesunde vegane Ernährung</b>. Sie wurden von Dr. Michael Greger 
        zusammengestellt und basieren auf umfangreicher wissenschaftlicher Forschung. 
        Diese Liste enthält verschiedene Lebensmittelgruppen, von Obst und Gemüse bis 
        zu Hülsenfrüchten und Gewürzen, die täglich verzehrt werden sollten, um eine 
        optimale Gesundheit zu unterstützen. 
        <br/>
        <Heading title={'Die Daily Dozen'} icon={'leaf'} />
        <ul>
          <li>Beeren (z.B., Blaubeeren, Himbeeren)</li>
          <li>Andere Früchte (z.B., Äpfel, Bananen)</li>
          <li>Gemüse (z.B., Brokkoli, Karotten)</li>
          <li>Blattgemüse (z.B., Spinat, Grünkohl)</li>
          <li>Hülsenfrüchte (z.B., Bohnen, Linsen)</li>
          <li>Vollkorngetreide (z.B., Haferflocken, Reis)</li>
          <li>Gewürze (z.B., Kurkuma, Knoblauch)</li>
          <li>Nüsse (z.B., Walnüsse, Mandeln)</li>
          <li>Samen (z.B., Leinsamen, Chiasamen)</li>
          <li>Kräuter und Gewürze (z.B., Basilikum, Oregano)</li>
          <li>Getränke (z.B., grüner Tee, Wasser)</li>
          <li>Bewegung (mindestens 30 Minuten moderate körperliche Aktivität pro Tag)</li>
        </ul>
        <br/>
        Durch die Integration der "Daily Dozen" in deine Ernährung kannst du sicherstellen, 
        dass du eine breite Palette von Nährstoffen aufnimmst und deinen Körper mit den 
        notwendigen Bausteinen versorgst, <b>um gesund und vital zu bleiben</b>.
        Eine kostengünstige vegane Ernährung ist also möglich, insbesondere wenn du auf vollwertige 
        Lebensmittel setzt und stark verarbeitetete Lebensmittel eher eine Ausnahme sind.
        <div className="mt-4 text-center text-xl text-primary">
        Jetzt bist du gefragt, Challenge dich selbst und versuche die "Daily Dozen" in deinen Alltag zu integrieren.
        </div>
      </>}
    />
  );
}

export default Day12Content;