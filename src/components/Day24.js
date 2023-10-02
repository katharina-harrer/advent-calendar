import React from 'react';
import Card from './Card';
import Heading from './SubHeading';

const Day24Content = () => {
  return (
    <Card 
      content={{
        headline: "Türchen 24 – Zusammenfassung",
        img: "../assets/christmas.jpg",
        imgDesc: "Christmas",
        icon: "star",
        subtitle: "Veganismus verstehen und umsetzen",
        imgAttrUrl: "https://www.freepik.com/free-vector/christmas-tree-decoration-scene_10806694.htm#query=christmas%20flatdesign%20illustration&position=17&from_view=search&track=ais",
        imgAttrTitle: "Image by pikisuperstar on Freepik"
      }}
      text={<>
        Heute öffnen wir das letzte Türchen und bieten dir eine Zusammenfassung der wichtigsten 
        Informationen, Tipps und Tricks für deine vegane Reise:
        <br/>
        <Heading title={'Türchen 1-4'} icon={'star'} />
        <b>Finde deine persönliche Motivation</b> – <br/> Umwelt und Ethik.
        <Heading title={'Türchen 5-9'} icon={'star'} />
        <b>Veganismus und deine Gesundheit</b> – <br/> positive Effekte auf dein Wohlbefinden.
        <Heading title={'Türchen 10-13'} icon={'star'} />
        <b>Veganismus verstehen</b> – <br/> Informationen und praktische Tipps.
        <Heading title={'Türchen 14-18'} icon={'star'} />
        <b>Kochen und Einkaufen in der veganen Welt</b> – <br/> Tipps und Tricks.
        <Heading title={'Türchen 19-23'} icon={'star'} />
        <b>Veganismus im Alltag</b> – <br/> Praktische Ratschläge und Informationen.
        <br/><br/>
        Ich hoffe, dass dieses Adventskalender-Abenteuer dir wertvolle Einsichten und Ressourcen 
        für deine Reise in den Veganismus gebracht hat. 
        <div className="mt-4 text-center text-xl text-primary">
        Frohe Feiertage und einen gesunden, nachhaltigen Start ins neue Jahr! 
        </div>
      </>}
    />
  );
}

export default Day24Content;