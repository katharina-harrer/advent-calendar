import React from 'react';
import Card from './Card';

const Day10Content = () => {
  return (
    <Card 
      content={{
        headline: "Türchen 10 – Nährstoffe",
        img: "adventcalendar/assets/supplements.jpg",
        imgDesc: "Nährstoffe",
        icon: "eyedrop",
        subtitle: "Ist es nicht unnatürlich, B12 zu supplementieren?",
        imgAttrUrl: "https://www.freepik.com/free-vector/holistic-medicine-abstract-concept-vector-illustration-alternative-natural-medicine-holistic-mental-therapy-whole-body-treatment-health-practice-disease-integrative-doctor-abstract-metaphor_11667186.htm#query=health%20illustration&position=5&from_view=search&track=ais",
        imgAttrTitle: "Image by vectorjuice on Freepik"
      }}
      text={<>
        <b>Vitamin B12 wird hauptsächlich von Mikroorganismen im Boden produziert.</b>
        <br/>
        Aufgrund moderner landwirtschaftlicher Praktiken und Hygienevorschriften ist es in pflanzlichen Lebensmitteln oft nur 
        begrenzt vorhanden. 
        <br/>
        Tiere decken ihren natürlichen B12-Bedarf normalerweise, indem sie Nahrung von erdigen Böden essen. 
        In der Nutztierhaltung insbesondere in der Massentierhaltung erhalten selbst die Tiere häufig Vitamin B12 
        als Supplement, da sie in den modernen Bedingungen kaum noch Zugang zu natürlichen B12-Quellen haben.
        <br/>
        <b>Veganer hingegen supplementieren B12 direkt, ohne den Umweg über Tiere</b>, um sicherzustellen, 
        dass sie ausreichend mit diesem wichtigen Vitamin versorgt sind. Demnach ist es nich unnatürlicher. 
      </>}
    />
  );
}

export default Day10Content;