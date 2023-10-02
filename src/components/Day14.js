import React from 'react';
import Card from './Card';

const Day14Content = () => {
  return (
    <Card 
      content={{
        headline: "Türchen 14 – Wo fange ich an?",
        img: "../assets/meal.jpg",
        imgDesc: "Meal",
        icon: "fast-food",
        subtitle: "Veganisiere deine Lieblingsgerichte",
        imgAttrUrl: "https://www.freepik.com/free-vector/cook-hat-holding-delicious-desserts-traditional-carrot-cupcakes-vegetable-muffins-delicious-bakery-products-chef-cartoon-character_12146494.htm#query=meal&position=23&from_view=author",
        imgAttrTitle: "Image by vectorjuice on Freepik"
      }}
      text={<>
        Denke darüber nach, welche Gerichte du im täglichen Leben am liebsten genießt, 
        und versuche, sie in vegane Varianten umzuwandeln. 
        <br/>
        Klassiker wie Lasagne, Bolognese, Waffeln, Aufläufe oder Schnitzel mit Kartoffelsalat 
        lassen sich problemlos vegan zubereiten, und <b>es gibt viele pflanzliche Ersatzprodukte, 
        die dir dabei helfen können.</b>
        <br/>
        Dabei können dir auch vegane Blogs wie 
        <a href="https://www.zuckerjagdwurst.com/de" target="_blank" rel="noreferrer" className="text-primary"> Zucker & Jagdwurst</a>, 
        <a href="https://biancazapatka.com/de/" target="_blank" rel="noreferrer" className="text-primary"> Bianca Zapatka</a> oder 
        <a href="https://www.eat-this.org/" target="_blank" rel="noreferrer" className="text-primary"> Eat this!</a> helfen.
      </>}
    />
  );
}

export default Day14Content;