import image from './assets/state-mgmt.png';
import { Core_Concept } from './data.js';
import { Example } from './data.js';

import { useState } from 'react';

function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function TabButton({ label, onClick, isSelected }) {
  return <li>
    <button className={isSelected ? 'active' : undefined} onClick={onClick}>{label}</button>
  </li>;
}

function App() {
  const [selectedTopic, setSelectedTopic] = useState('Button1');

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
    // console.log(selectedButton);
  }

  return (
    <div>
      <Header></Header>
      <main>
        <h2>Time to get started!</h2>

        <section id='core-concepts'>
          <h2>Core Concept</h2>
          <ul>
            {Core_Concept.map((contentItem) => <CoreConcept {...contentItem} />)}
            {/* <CoreConcept {...Core_Concept[0]} />
            <CoreConcept {...Core_Concept[1]} />
            <CoreConcept {...Core_Concept[2]} />
            <CoreConcept title={Core_Concept[3].title} description={Core_Concept[3].description} image={Core_Concept[3].image} /> */}
          </ul>
        </section>

        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'Button1'} label="Button 1" onClick={() => handleClick('Button1')} />
            <TabButton isSelected={selectedTopic === 'Button2'} label="Button 2" onClick={() => handleClick('Button2')} />
            <TabButton isSelected={selectedTopic === 'Button3'} label="Button 3" onClick={() => handleClick('Button3')} />
            <TabButton isSelected={selectedTopic === 'Button4'} label="Button 4" onClick={() => handleClick('Button4')} />
          </menu>
          <div id="tab-content">
            <h3>{Example[selectedTopic].title}</h3>
            <p>{Example[selectedTopic].description}</p>
          </div>
        </section>
      </main>
    </div>
  );
}

const update = ['Fundamental', 'Crucial', 'Core'];

function newUpdate(max) { return Math.floor(Math.random() * (max + 1)); }

function Header() {
  return (
    <header>
      <img src={image} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {update[newUpdate(2)]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

export default App;