import React from 'react';
import Card from './Card';

const Day6Content = () => {
  return (
    <Card 
      content={{
        headline: "Türchen 6 – Motivation finden",
        img: "../assets/heart.jpg",
        imgDesc: "Herzgesundheit",
        icon: "fitness",
        subtitle: "Vegan für dein Herz",
        imgAttrUrl: "https://www.freepik.com/free-vector/cardiology-clinic-hospital-department-healthy-heart-cardiovascular-prevention-healthcare-industry-idea-design-element-electrocardiogram-ekg-vector-isolated-concept-metaphor-illustration_11664303.htm#query=heart%20health%20illustration&position=12&from_view=search&track=ais",
        imgAttrTitle: "Image by vectorjuice on Freepik"
      }}
      text={<>
        Veganismus kann das Risiko von Herzkrankheiten reduzieren. 
        Pflanzliche Ernährungsmuster sind in der Regel fettarm und cholesterinfrei, 
        was dazu beiträgt, den Cholesterinspiegel zu senken und den Blutdruck zu regulieren.
      </>}
    />
  );
}

export default Day6Content;