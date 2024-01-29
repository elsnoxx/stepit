import React, { useState } from 'react';

const ZooGenerator = () => {
  const [generatedAnimals, setGeneratedAnimals] = useState([]);

  const animals = [
    "Lachtan", "Had", "Krtek", "Kráva", "Slon", "Ovce", "Krokodýl", "Žirafa", 
    "Tučňák", "Velryba", "Zebra", "Delfín", "Papoušek", "Velbloud", "Želva", 
    "Sova", "Medvěd", "Kůň", "Pes", "Kočka", "Lev", "Koza", "Nosorožec", 
    "Žralok", "Opice", "Ježek", "Slepice", "Chobotnice", "Prase", "Králík", 
    "Žába", "Klokan", "Tygr", "Fretka", "Jelen", "Jaguár", "Krokodýl", "Lasice", "Mloček",
    "Mravenečník", "Panter", "Pavouk", "Pegas", "Rak", "Ryba", "Sob", "Tetřev", "Vlk", 
    "Vosa", "Včela"
  ];

  const generateRandomAnimal = () => {
    const randomIndex = Math.floor(Math.random() * animals.length);
    return animals[randomIndex];
  };

  const handleGenerateAnimals = () => {
    const generated = [];
    for (let i = 0; i < 3; i++) {
      let randomAnimal;
      do {
        randomAnimal = generateRandomAnimal();
      } while (generated.includes(randomAnimal));
      generated.push(randomAnimal);
    }
    setGeneratedAnimals(generated);
  };

  return (
    <div className="odstavec">
      <p>
        Vaším úkolem bude vymodelovat si ZOO se zvířaty. Zvířata dostanete po kliknutí na tlačítko <strong>Generovat zvířata</strong>.
        Váš výběr mi nahlásíte, já si ho zapíši. Při opravě budu hledat vaše zvolená zvířata. Projekt ovšem není pouze o
        zvířatech, ale i o ZOO samotné. Zkuste vymodelovat i nějaké prostředí, kde se zvířata budou mít dobře.
      </p>
      <button onClick={handleGenerateAnimals}>Generovat zvířata</button>
      <div className="zvirata_body">
        <ul className="zvirata">
          {generatedAnimals.map((animal, index) => (
            <li key={index}><span>{animal}</span></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ZooGenerator;
