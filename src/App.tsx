import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import IngredientInput from './components/IngredientInput';
import RemedyList from './components/RemedyList';
import BodyPartSelector from './components/BodyPartSelector';

const SearchPage: React.FC<{ onAddIngredient: (ingredient: string[], bodyPart: string) => void }> = ({ onAddIngredient }) => {
  const navigate = useNavigate();
  const [selectedBodyPart, setSelectedBodyPart] = useState<string>('');

  const handleAddIngredient = async (ingredient: string[]) => {
    onAddIngredient(ingredient, selectedBodyPart);
    navigate('/remedies');
  };

  return (
    <div className="flex flex-col min-h-screen app-background">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto p-4">
          <h3 className="text-3xl font-bold mb-4 text-center text-white">Pamptry Skin Care</h3>
          <p className='text-white mb-20 mt-10'>
            Discover the secrets to natural skin care with ingredients you already have in your kitchen. Simply enter the ingredients you have on hand, and we'll help you create effective home remedies for glowing, healthy skin. Get started by adding your ingredients below!
          </p>
          <BodyPartSelector onSelectBodyPart={setSelectedBodyPart} />
           <br />
          <IngredientInput onAddIngredient={handleAddIngredient} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

const RemedyPage: React.FC<{ remedies: object[] }> = ({ remedies }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen app-background">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto p-4">
          <button onClick={() => navigate('/')} className="mb-4 text-white">Back to Search</button>
          <RemedyList remedies={remedies} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [selectedBodyPart, setSelectedBodyPart] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [prompt, setPrompt] = useState<object[]>([]);

  const handleAddIngredient = async (ingredient: string[], bodyPart: string) => {
    setIngredients(ingredient);
    setSelectedBodyPart(bodyPart);
    setIsLoading(true);
    
    console.log(ingredient, bodyPart);
    await fetch('https://xnd3ygewb4.execute-api.us-east-1.amazonaws.com/prod/get-remedy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ingredients: ingredient, bodyPart: bodyPart })
    })
      .then(response => response.json())
      .then(data => {
        setPrompt([data]);
      })
      .catch(error => {
        console.error("Error fetching remedy:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    isLoading ? (
      <div className="flex items-center justify-center h-64">
        <p className="text-white text-2xl">Loading...</p>
      </div>
    ) : (
      <Router>
        <Routes>
          <Route path="/" element={<SearchPage onAddIngredient={handleAddIngredient} />} />
          <Route path="/remedies" element={<RemedyPage remedies={prompt} />} />
        </Routes>
      </Router>
    )
  );
};

export default App;
