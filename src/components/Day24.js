import React from 'react';
import Card from './Card';
import Heading from './SubHeading';

const Day24Content = () => {

  return (
    <Card 
      content={{
        headline: "Türchen 24 – Zusammenfassung",
        img: "./assets/christmas.jpg",
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
        Zum Schluss möchte ich dir noch einige Empfehlungen für YouTube-Kanäle mitgeben, 
        die spielerisch Wissen vermitteln, neue vegane Produkte testen und Rezepte teilen:
        <ul className="list-disc list-inside text-primary">
          <li><a href="https://www.youtube.com/@Yammibean" target="_blank" rel="noreferrer">Yammibean</a></li>
          <li><a href="https://www.youtube.com/@NikoRittenau" target="_blank" rel="noreferrer">Niko Rittenau</a></li>
          <li><a href="https://www.youtube.com/@Aljosha_" target="_blank" rel="noreferrer">Aljosha</a></li>
          <li><a href="https://www.youtube.com/@DerArtgenosse" target="_blank" rel="noreferrer">Der Artgenosse</a></li>
          <li><a href="https://www.youtube.com/@JANAklar" target="_blank" rel="noreferrer">JANAklar</a></li>
          <li><a href="https://www.youtube.com/@SebastianCopienChefkoch" target="_blank" rel="noreferrer">Sebastian Copien</a></li>
          <li><a href="https://www.youtube.com/@PhilippSteuer" target="_blank" rel="noreferrer">Philipp Steuer</a></li>
          <li><a href="https://www.youtube.com/@kupferfuchs" target="_blank" rel="noreferrer">Kupferfuchs</a></li>
          <li><a href="https://www.youtube.com/@FranciAlexa" target="_blank" rel="noreferrer">Franci Alexa</a></li>
          <li><a href="https://www.youtube.com/@yummypilgrim" target="_blank" rel="noreferrer">yummypilgrim</a></li>
        </ul><br/>
        Ich hoffe, dass dieses Adventskalender-Abenteuer dir wertvolle Einsichten und Ressourcen 
        für deine Reise in den Veganismus gebracht hat.
        <span className="block mt-4 text-center text-xl text-primary">
        Frohe Feiertage und einen gesunden, nachhaltigen Start ins neue Jahr! 
        </span>
      </>}
    />
  );
}

export default Day24Content;