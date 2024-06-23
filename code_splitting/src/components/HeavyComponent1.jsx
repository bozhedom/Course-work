import React from 'react';

const HeavyComponent1 = () => {
  const data = [];

  for (let i = 0; i < 10000; i++) {
    data.push({
      id: i,
      title: `Title ${i}`,
      description: `Description ${i}`,
    });
  }

  return (
    <div>
      <h1>Heavy Component 1</h1>
      <div className="container">
        {data.map((item) => (
          <div key={item.id} className="cardStyle">
            <h3 className="titleStyle">{item.title}</h3>
            <p className="descriptionStyle">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeavyComponent1;
