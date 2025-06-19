import React, { useState } from 'react';
import qdata from './qdata.js';
import SingleQuestion from './Question';

function App() {
  const [questions, setQuestions] = useState(qdata);

  const Nothing = () => {
    if (!questions) {
    setQuestions("")
    }
    
  }
  Nothing()
  return (
    <main>
      <div className='container '>
        <h3 style={{ color: 'grey' }}>Frequently Asked Questions</h3>
        <section className='info'>
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
