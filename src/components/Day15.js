import React from 'react';
import Card from './Card';

const Day15Content = () => {
  return (
    <Card 
      content={{
        headline: "Türchen 15 – Tipps",
        img: "./assets/shopping.jpg",
        imgDesc: "Shopping",
        icon: "storefront",
        subtitle: "Versehentlich vegane Lebensmittel",
        imgAttrUrl: "https://www.freepik.com/free-vector/cheerful-customers-shopping-supermarket-with-cart-isolated-flat-illustration-cartoon-illustration_12698363.htm#query=supermarket%20illustration&position=7&from_view=search&track=ais",
        imgAttrTitle: "Image by pch.vector on Freepik"
      }}
      text={<>
        Es gibt einige Lebensmittel, die von Natur aus vegan sind oder vegan hergestellt werden, 
        obwohl dies vielleicht nicht offensichtlich ist. <b>Zum Beispiel sind Oreos und Manner
        Waffeln zwei beliebte Snacks, die vegan sind. </b>
        Auch viele Spekulatiuskeks-, Müsli-, Gummibärchen- und Schokoladensorten, Saucen wie auch Pommes sind vegan. 
        <br/>
        Es ist erfreulich zu sehen, wie viele vegane Optionen auf dem Markt verfügbar sind, die 
        köstlich schmecken und gleichzeitig tierfreundlich sind. <b>Beim Einkaufen lohnt es sich, 
        die Etiketten zu überprüfen, da es oft Überraschungen gibt und viele alltägliche Lebensmittel vegan sind.</b>
      </>}
    />
  );
}

export default Day15Content;