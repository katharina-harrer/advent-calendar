import React from 'react';
import Card from './Card';
import Heading from './SubHeading';

const Day20Content = () => {
  return (
    <Card 
      content={{
        headline: "Türchen 20 – Tipps",
        img: "../assets/restaurant.jpg",
        imgDesc: "restaurant",
        icon: "restaurant",
        subtitle: "Vegane Restaurants ausfindig machen",
        imgAttrUrl: "https://www.freepik.com/free-vector/flat-design-people-with-hot-drinks_18300326.htm#query=restaurant%20illustration&position=2&from_view=search&track=ais",
        imgAttrTitle: "Image by Freepik"
      }}
      text={<>
        Die Verfügbarkeit von Apps hat das Finden veganer Restaurants und Cafés einfacher gemacht. 
        Zwei beliebte Apps für die vegane Gemeinschaft sind <a href="https://www.vanilla-bean.com/" 
        target="_blank" rel="noreferrer" className="text-primary">Vanilla Bean</a> und <a href='https://www.happycow.net/' 
        target="_blank" rel="noreferrer" className="text-primary">HappyCow</a>. 
        <br/><br/>
        <Heading title={'Vanilla Bean'} icon={'navigate-circle'} />
        Vanilla Bean bietet eine umfassende Liste von veganen und vegetarischen Restaurants in vielen Ländern. 
        Die App ermöglicht es den Benutzern, nach Standorten zu suchen, Bewertungen zu lesen und Menüs einzusehen, 
        um das perfekte vegane Restaurant zu finden.
        <br/><br/>
        <Heading title={'HappyCow'} icon={'navigate-circle'} />
        HappyCow ist eine weitere bekannte App, die eine große Datenbank von veganen, vegetarischen und 
        vegan-freundlichen Restaurants weltweit bietet. Die App bietet Informationen zu den Öffnungszeiten, 
        Preisen und Bewertungen von Restaurants und hilft Veganern dabei, unterwegs köstliche pflanzliche Mahlzeiten zu finden.
        <br/><br/>
        <b>Diese Apps sind großartige Werkzeuge, um die Suche nach veganen Restaurants zu erleichtern</b> und dazu beizutragen,
        dass sich Veganer auch unterwegs für gesunde und ethische Ernährung entscheiden können.
      </>}
    />
  );
}

export default Day20Content;