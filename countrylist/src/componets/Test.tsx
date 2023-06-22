import React from 'react';

interface myData {
  name: string;
  country: string;
  age: number;
}

function Test({ name, country, age }: myData): JSX.Element {
  return (
    <div className="className">
      <h4>{name}</h4>
      <h4>{country}</h4>
      <h4>{age}</h4>
    </div>
  );
}

export default Test;
