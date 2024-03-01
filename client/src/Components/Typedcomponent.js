import React from 'react';
import Typewriter from 'typewriter-effect';

const TypingComponent = () => {
  const startTypewriter = (typewriter) => {
    typewriter
    .typeString("Highschool Dinning hall captain")
      .pauseFor(1000)
      .deleteAll()
      .typeString("Mr Murang'a County award winner")
      .pauseFor(1000)
      .deleteAll()
      .typeString("King of dance Murang'a University")
      .pauseFor(1000)
      .deleteAll()
      .typeString("Modelling Trainer Murang'a University")
      .pauseFor(1000)
      .deleteAll()
      .typeString("The 7th Cs Murang'a University")
      .start();
    //   .pauseFor(1000)
    //   .deleteAll()
    //   .typeString('Welcomes You')
    //   .start();
  };

  const onComplete = (typewriter) => {
    // Reset and start the typewriter again on completion
    typewriter.reset();
    startTypewriter(typewriter);
  };

  return (
    <div className="App">
      <Typewriter
        options={{
          loop: true, // Enable looping
          onComplete: onComplete, // Callback when typing completes
        }}
        onInit={startTypewriter}
      />
    </div>
  );
};

export default TypingComponent;