import React from 'react';
import Card from './Card';
import Heading from './SubHeading';

const Day5Content = () => {

  return (
    <Card 
        content={{
            headline: "Türchen 5 – Motivation finden",
            img: "adventcalendar/assets/health.jpg",
            imgDesc: "Gesundheit",
            icon: "pulse",
            subtitle: "Vegan für deine Gesundheit",
            imgAttrUrl: "https://www.freepik.com/free-vector/raw-veganism-abstract-concept_12085734.htm#page=2&query=animal&position=6&from_view=author",
            imgAttrTitle: "Image by vectorjuice on Freepik"
        }}
        text={<>
            <Heading title={'Krebsrisiko verringern'} icon={'medical'} />
            Studien legen nahe, dass Veganer aufgrund verschiedener Faktoren wie ballaststoffreicher Ernährung, 
            geringem Konsum gesättigter Fettsäuren und krebserregender Stoffe aus tierischen Produkten 
            sowie einer höheren Aufnahme von Antioxidantien und Phytonährstoffen möglicherweise 
            ein <b>geringeres Risiko für bestimmte Krebsarten, insbesondere Darm-, Prostata- und Brustkrebs</b>, haben können. 
            <br/>
            Zudem enthalten Milchprodukte Hormone, die von Kühen produziert werden, um das Wachstum ihrer Kälber zu fördern. 
            Diese Hormone können das Krebsrisiko erhöhen, insbesondere bei hormonabhängigen Krebsarten wie Brustkrebs.
            Eine vegane Ernährung vermeidet eben jenen Hormonkonsum.
            <br/>
            Es ist jedoch wichtig zu beachten, dass Ernährung nur ein Faktor von vielen ist, 
            der das Krebsrisiko beeinflusst. Genetik, Lebensstil und Umwelt spielen ebenfalls eine Rolle. 
            <br/> 
            <Heading title={'Diabetes-Prävention'} icon={'ice-cream'} />
            Eine vegane Ernährung kann das Risiko für <b>Typ-2-Diabetes</b> senken, 
            da sie den Blutzuckerspiegel besser kontrollieren kann.
            <br/> 
            <Heading title={'Langfristige Gesundheit'} icon={'pulse'} />
            Veganismus kann dazu beitragen, die langfristige Gesundheit zu fördern und das Risiko 
            von altersbedingten Erkrankungen wie <b>Alzheimer oder Osteoporose</b> zu reduzieren.
            <br/> <br/>
            Seh dir die Dokumentationen <a href="https://www.youtube.com/watch?v=sFf1kC6w-ng" 
            target="_blank" rel="noreferrer" className="text-primary">"What the Health"</a> oder 
            <a href="https://www.youtube.com/watch?v=O7ijukNzlUg" target="_blank" rel="noreferrer" 
            className="text-primary"> "Forks over Knives"</a> an, um mehr über die potenziellen 
            Auswirkungen tierischer Produkte auf unsere Gesundheit.
            Wenn du an den gesundheitlichen Aspekten einer veganen Ernährung interessiert bist, 
            erfährst du hier viel über den Einfluss der Ernährung auf Krankheiten wie Krebs oder Diabetes.
      </>}
    />
  );
}

export default Day5Content;