import React from 'react';
import Card from './Card';

const Day7Content = () => {
  return (
    <Card 
      content={{
        headline: "Türchen 7 – Motivation finden",
        img: "./assets/skin.jpg",
        imgDesc: "Herzgesundheit",
        icon: "leaf",
        subtitle: "Vegan für deine Haut",
        imgAttrUrl: "https://www.freepik.com/free-vector/organic-cosmetics-abstract-concept-vector-illustration-organic-personal-care-cosmetics-makeup-products-natural-clean-ingredient-beauty-industry-skin-treatment-paraben-free-abstract-metaphor_11666973.htm#query=skin&position=1&from_view=author",
        imgAttrTitle: "Image by vectorjuice on Freepik"
      }}
      text={<>
        Wusstest du, dass der Konsum von Milchprodukten oft mit Akne in Verbindung 
        gebracht wird? Das liegt daran, dass Milchprodukte Hormone enthalten, die die Talgproduktion 
        erhöhen können. Dies kann die Bildung von Mitessern und Pickeln fördern. <b>Darüber hinaus 
        können Milchprodukte den Insulinspiegel erhöhen und Entzündungen im Körper 
        verstärken, was die Aknesymptome verschlimmern kann.</b>
        <br/> 
        Obwohl nicht jeder Mensch empfindlich auf Milchprodukte reagiert, können einige Menschen 
        eine Verbesserung ihrer Haut erleben, wenn sie auf diese Produkte verzichten.
      </>}
    />
  );
}

export default Day7Content;