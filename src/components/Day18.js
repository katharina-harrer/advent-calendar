import React from 'react';
import Card from './Card';

const Day18Content = () => {
  return (
    <Card 
      content={{
        headline: "Türchen 18 – Tipps",
        img: "../assets/gingerbread.jpg",
        imgDesc: "Gingerbread Man",
        icon: "accessibility",
        subtitle: "Entdecke die veganen Weihnachtsleckereien",
        imgAttrUrl: "https://www.freepik.com/free-vector/gingerbread-man-cookies-concept-illustration_10592491.htm#query=christmas%20gingerbread%20cooking%20illustration&position=37&from_view=search&track=ais",
        imgAttrTitle: "Image by storyset on Freepik"
      }}
      text={<>
        Verwöhne dich während der Weihnachtszeit mit veganen Leckereien wie Plätzchen, 
        Klöße mit Soße und vielem mehr. <b>Es gibt unzählige vegane Rezepte für traditionelle Festtagsgerichte, 
        die genauso köstlich sind wie ihre nicht-veganen Varianten.</b> Du kannst festliche Klassiker in veganer Form zubereiten 
        und dabei die Tiere und die Umwelt schonen. 
        <br/>
        Entdecke die Freude am veganen Kochen und Backen während der besinnlichen Weihnachtszeit.
        <br/>
        Hier habe ich dir einige Rezepte verlinkt:
        <ul>
          <li>
            <a href="https://www.zuckerjagdwurst.com/de/rezepte/plaetzchen-3-klassiker-in-vegan" target="_blank" rel="noreferrer" className="text-primary">
              Vanillekipferl, Husarenkrapfen, Schneebälle, Ausstecher, Florentiner, Spitzbuben, Schokoladenbrot, Zimtsterne, Lebkuchen
            </a>
          </li>
          <li>
            <a href="https://www.eat-this.org/vegane-bratensauce/" target="_blank" rel="noreferrer" className="text-primary">
              Bratensoße
            </a>
          </li>
          <li>
            <a href="https://www.zuckerjagdwurst.com/de/rezepte/vegane-kartoffelklossee-pilzgulasch-rotkraut" target="_blank" rel="noreferrer" className="text-primary">
              Kartoffelklöße mit Pilzgulasch und Rotkraut
            </a>
          </li>
        </ul>
      </>}
    />
  );
}

export default Day18Content;