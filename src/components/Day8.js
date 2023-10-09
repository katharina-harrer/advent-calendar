import React from 'react';
import Card from './Card';

const Day8Content = () => {
  return (
    <Card 
      content={{
        headline: "Türchen 8 – Motivation finden",
        img: "adventcalendar/assets/fitness.jpg",
        imgDesc: "Fitness",
        icon: "barbell",
        subtitle: "Vegan für mehr Leistungsfähigkeit",
        imgAttrUrl: "https://www.freepik.com/free-vector/home-gymnastics-abstract-concept-vector-illustration-stay-active-amid-quarantine-power-training-online-exercise-program-home-workout-social-distance-fitness-livestream-abstract-metaphor_11667212.htm#query=muscle&position=1&from_view=author",
        imgAttrTitle: "Image by vectorjuice on Freepik"
      }}
      text={<>
        Selbst einige Sportler und Athleten entscheiden sich für eine vegane Ernährung, 
        um ihre <b>sportlichen Leistungen zu steigern und die Erholungszeit zu verkürzen</b>. 
        <br/>
        Eine ausgewogene vegane Ernährung kann nicht nur die Gesundheit fördern, 
        sondern auch die körperliche Leistungsfähigkeit steigern. 
        <br/>
        Wenn du ein Sportler bist und Bedenken hast, dass eine vegane Ernährung deinen
        täglichen Proteinbedarf nicht decken könnte, 
        solltest du einen Blick auf die Doku "The Game Changers" werfen, 
        um dich vom Gegenteil zu überzeugen.
      </>}
    />
  );
}

export default Day8Content;