import React from 'react';
import Card from './Card';

const Welcome = () => {
  return (
    <Card 
      content={{
        headline: "Herzlich willkommen zum Start unseres Adventskalenders!",
        img: "../assets/decorating.svg",
        imgDesc: "Decoration",
      }}
      text={<>
        Bist du offen für die vegane Lebensweise, aber es fehlt noch der entscheidende Anstoß, um Veränderungen anzugehen? 
        Du bist dir unsicher, wo du am besten beginnen sollst, um deine Gewohnheiten nachhaltiger zu gestalten? 
        <br/><br/>
        Dann könnte dieser digitale Adventskalender genau das Richtige für dich sein! <b>Jeden Tag bis zum 24. Dezember 
        erwarten dich spannende Überraschungen und Inhalte rund um Veganismus und Nachhaltigkeit.</b>
        <div className="mt-4 text-center text-xl text-primary">Lass uns gemeinsam diese festliche Reise beginnen!</div>
      </>}
    />
  );
}

export default Welcome;