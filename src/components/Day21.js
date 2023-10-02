import React from 'react';
import Card from './Card';

const Day21Content = () => {
  return (
    <Card 
      content={{
        headline: "Türchen 21 – Tipps",
        img: "./assets/community.jpg",
        imgDesc: "Community",
        icon: "people-circle-outline",
        subtitle: "Gleichgesinnte treffen",
        imgAttrUrl: "https://www.freepik.com/free-vector/overpopulation-abstract-concept-illustration-world-human-overpopulation-resource-overconsumption-densely-populated-area-urban-population-growth-inhabitant-increase_12145558.htm#query=community%20illustration&position=4&from_view=search&track=ais",
        imgAttrTitle: "Image by vectorjuice on Freepik"
      }}
      text={<>
        Möchtest du Gleichgesinnte treffen und Teil einer aktiven veganen Gemeinschaft sein? In vielen Städten 
        gibt es lokale Vegan-Gruppen und Aktivisten, die sich für Tierrechte und umweltfreundliche Ernährung einsetzen. 
        Das Finden solcher Gruppen kann einfach sein, indem du in sozialen Medien nach <b>veganen Communitys in deiner Nähe</b> suchst 
        oder auf Plattformen wie Meetup stöberst.
        <br/>
        Ein weiterer Weg, um aktiv zu werden, ist die <b>Teilnahme an Demonstrationen und Veranstaltungen</b>, 
        die sich für vegane und tierfreundliche Anliegen einsetzen. Dies ist eine großartige Möglichkeit,
        sich mit Gleichgesinnten zu vernetzen, deine Überzeugungen zu teilen und einen Beitrag zur Förderung 
        des Veganismus zu leisten. 
        Diese Aktivitäten können nicht nur informativ, sondern auch inspirierend sein und dir die Möglichkeit bieten, 
        für Veränderungen einzutreten, die dir wichtig sind.
        <br/>
        Vegane Gruppen und Aktivismus bieten die Gelegenheit, deine Leidenschaft für den Veganismus zu teilen 
        und dich in einer unterstützenden Gemeinschaft zu engagieren. Es ist eine großartige Möglichkeit, 
        neue Freundschaften zu schließen und <b>gemeinsam für eine bessere Welt</b> einzustehen.
      </>}
    />
  );
}

export default Day21Content;