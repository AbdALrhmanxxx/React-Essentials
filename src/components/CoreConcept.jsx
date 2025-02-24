import React from 'react'

export default function CoreConcept({data}) {
  return (
    <li>
      <img src={data.image} alt={data.title} />
      <h3>{data.title}</h3>
      <p>{data.description}</p>
    </li>
  );
}
