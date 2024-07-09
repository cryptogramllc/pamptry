import React from 'react';
import RemedyCard from './RemedyCard';

const RemedyList: React.FC<any> = ({ remedies }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {remedies.map((remedy: any, index: number) => (
        <RemedyCard key={index} remedy={remedy.data} />
      ))}
    </div>
  );
};

export default RemedyList;