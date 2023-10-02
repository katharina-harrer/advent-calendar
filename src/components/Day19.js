import React from 'react';
import Card from './Card';

const Day19Content = () => {
  return (
    <Card 
      content={{
        headline: "Türchen 19 – Tipps",
        img: "adventcalendar/assets/snacks.jpg",
        imgDesc: "Snacks",
        icon: "nutrition",
        subtitle: "Snacks für unterwegs vorbereiten",
        imgAttrUrl: "https://www.freepik.com/free-vector/lunch-box-composition-flat-icons-with-backpack-paper-bag-fruits-water-bottle-doodle-people-vector-illustration_59542326.htm#query=snacks%20apple%20energybar%20nuts%20banana%20illustration&position=32&from_view=search&track=ais",
        imgAttrTitle: "Image by macrovector_official on Freepik"
      }}
      text={<>
        Selbst wenn du dich für eine gesunde vegane Ernährung entschieden hast, 
        kann es vorkommen, dass du unterwegs bist und keine veganen Optionen in 
        der Nähe findest. Aus diesem Grund ist es ratsam, <b>immer einige Notfallsnacks 
        bei dir zu haben.</b> Diese kleinen, einfachen Mahlzeiten können den Hunger stillen 
        und sicherstellen, dass du immer eine gesunde Option zur Hand hast.
        <br/>
        Einige praktische Notfallsnacks können sein Nüsse und Samen, frisches Obst, Gemüsesticks mit Hummus, 
        Energieriegel, getrocknete Früchte und Vollkorn-Cracker. Indem du solche Notfallsnacks bereithältst, 
        bist du in der Lage, dich auch dann gesund zu ernähren, wenn du keine veganen Restaurants oder 
        Lebensmittelgeschäfte in deiner Nähe findest. <b>Es ist eine einfache Möglichkeit, sicherzustellen, 
        dass du deiner veganen Ernährung treu bleibst, selbst wenn du unterwegs bist.</b>
      </>}
    />
  );
}

export default Day19Content;