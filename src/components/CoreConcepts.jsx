import React from 'react'
import { CORE_CONCEPTS } from '../data';
import CoreConcept from './CoreConcept';

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core concepts </h2>
      <ul>
        {CORE_CONCEPTS.map((item, index) => (
          <CoreConcept data={item} key={index} />
        ))}
      </ul>
    </section>
  );
}
