// src/components/IngredientInput.tsx
import React, { useState } from 'react';

interface IngredientInputProps {
  onAddIngredient: (ingredient: string[]) => void;
}

const IngredientInput: React.FC<IngredientInputProps> = ({ onAddIngredient }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [ingredientsList, setIngredientsList] = useState<string[]>([]);
  const [showData, setShowData] = useState<boolean>(false);
  const [dataToShow, setDataToShow] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddClick = () => {
    if (inputValue.trim()) {
      setIngredientsList([...ingredientsList, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleRemoveIngredient = (index: number) => {
    const updatedIngredients = [...ingredientsList];
    updatedIngredients.splice(index, 1);
    setIngredientsList(updatedIngredients);
  };

  const handleShowData = () => {
    setShowData(true);
    onAddIngredient(ingredientsList);
    setDataToShow([...ingredientsList]); // Store ingredients to display
  };

  const handleClearData = () => {
    setShowData(false);
    setDataToShow([]);
    setIngredientsList([]);
  };

return (
    <div className="mb-4">
        <h4 className="text-xl font-bold text-white mb-2">Enter each ingredient, one at a time.</h4>
        <div className="flex flex-col sm:flex-row items-center">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter an ingredient"
                className="border rounded px-3 py-2 mb-2 sm:mb-0 sm:mr-2 w-full sm:w-4/5"
            />
            <button onClick={handleAddClick} className="text-white bg-blue-500 px-3 py-2 rounded w-full sm:w-auto sm:w-1/5">
                Add
            </button>
        </div>
        {ingredientsList.length > 0 && (
            <div className="mt-4">
                <div className="mb-2">
                    <h2 className="text-lg text-white font-bold mb-2">Entered Ingredients:</h2>
                    <ul className="list-disc list-inside">
                        {ingredientsList.map((ingredient, index) => (
                            <li key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1">
                                {ingredient}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex mt-4">
                    <button onClick={handleClearData} className="w-full bg-red-500 text-white px-3 py-2 mr-2 rounded w-1/2">
                        Clear Ingredients
                    </button>
              
                    <button onClick={handleShowData} className="w-full bg-green-500 text-white px-3 py-2 ml-2 rounded w-1/2">
                        Get Recipe
                    </button>
                </div>
            </div>
        )}
    </div>
);
};

export default IngredientInput;
