import React, { useState } from 'react';
import { faceSvg, hairSvg, teethAndMouthSvg, bodySkinSvg } from '../icons';

const bodyParts = [
  { name: 'Face', svg: faceSvg },
  { name: 'Hair', svg: hairSvg },
  { name: 'Teeth and Mouth', svg: teethAndMouthSvg },
  { name: 'Body Skin', svg: bodySkinSvg }
];

const BodyPartSelector: React.FC<{ onSelectBodyPart: (bodyPart: string) => void }> = ({ onSelectBodyPart }) => {
  const [selectedBodyPart, setSelectedBodyPart] = useState<string>('');

  const handleSelectBodyPart = (bodyPart: string) => {
    setSelectedBodyPart(bodyPart);
    onSelectBodyPart(bodyPart);
  };

  return (
    <div className="mb-4">
      <h4 className="text-xl font-bold text-white mb-2">Select a Body Part</h4>
      <div className="flex flex-wrap justify-center">
        {bodyParts.map(part => (
          <button
            key={part.name}
            className={`m-2 p-2 border rounded-md ${selectedBodyPart === part.name ? 'bg-blue-500 border-blue-700' : 'bg-white border-gray-300'}`}
            style={{ width: '70px', height: '70px' }}
            onClick={() => handleSelectBodyPart(part.name)}
            dangerouslySetInnerHTML={{ __html: part.svg }}
          />
        ))}
      </div>
    </div>
  );
};

export default BodyPartSelector;
