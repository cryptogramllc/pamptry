import React from 'react';

interface Remedy {
  name: string;
  ingredients: string;
  instructions: string;
}

interface RemedyCardProps {
  remedy: Remedy;
}

const RemedyCard: React.FC<RemedyCardProps> = ({ remedy }) => {
  const { name, ingredients, instructions } = remedy;
  console.log("🚀 ~ remedy:", remedy)

  // Replace all instances of '- ' with <br /> followed by '- '
  const formattedIngredients = ingredients.replace(/- /g, '<br />- ');

  // Replace all instances of numbered items with <br /> followed by the numbered item
  const formattedInstructions = instructions.replace(/(\d+\.)/g, '<br />$1');

  return (
    <div className="text-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <br /> <br />
      <p className="mb-2"><strong>Ingredients:</strong><span dangerouslySetInnerHTML={{ __html: formattedIngredients }} /></p>
      <br />
      <p><strong>Instructions:</strong><span dangerouslySetInnerHTML={{ __html: formattedInstructions }} /></p>
    </div>
  );
};

export default RemedyCard;
