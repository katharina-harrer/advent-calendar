import React from 'react';
import Card from './Card';

const Day11Content = () => {
  return (
    <Card 
      content={{
        headline: "Türchen 11 – Selbstreflexion",
        img: "adventcalendar/assets/farm.jpg",
        imgDesc: "Farm",
        icon: "storeFront",
        subtitle: "Aber ich konsumiere nur Fleisch vom Bauer meines Vertrauens!",
        imgAttrUrl: "https://www.freepik.com/free-vector/group-happy-farmers-keeping-cow-poultry-gathering-harvest-holding-crates-with-fruits-vegetables-cartoon-illustration_12699097.htm#query=animal%20farming%20illustration&position=11&from_view=search&track=ais",
        imgAttrTitle: "Image by pch.vector on Freepik"
      }}
      text={<>
        Die Schätzungen variieren, aber es wird angenommen, dass ein erheblicher Teil des in Deutschland produzierten Fleisches 
        aus Massentierhaltung stammt. Einige Schätzungen legen nahe, dass <b>über 90%</b> des in Deutschland konsumierten Fleisches 
        <b>aus industriellen Tierhaltungsanlagen</b> stammt. 
        <br />
        Der durchschnittliche Fleischkonsum pro Person in Deutschland liegt bei etwa <b>60-70 Kilogramm pro Jahr</b>. 
        Es ist wichtig, den eigenen Fleischkonsum zu hinterfragen, da Fleisch oft unbewusst in verschiedenen Gerichten, 
        wie Sandwiches, Pizzen oder Burgern, enthalten ist, und dieses Fleisch stammt in der Regel nicht von lokalen Bauernhöfen.
      </>}
    />
  );
}

export default Day11Content;