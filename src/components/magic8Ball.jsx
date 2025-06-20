import React, { useState } from "react";
import "./components/magic8Ball.css"; // Ensure this file exists and contains the necessary styles
import "./src/components/index.css";

function Magic8Ball() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const responses = [
    "Yes",
    "No",
    "My Sources say 'yes'",
    "Ask again later",
    "Outlook not certain",
    "Don't count on it",
    "It is decidedly so",
    "You might rely on it",
    "It is certain",
  ];

  const getRandomResponse = () => {
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex]; // fixed variable name
  };

  const handleAskQuestion = () => {
    const newResponse = getRandomResponse();
    setResponse(newResponse);
  };

  return (
<>
    <div className="magic-8-ball-container">
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a question"
      />
      <button onClick={handleAskQuestion}>Ask the 8 ball your question</button>
      <Response response={response} />
    </div>
    <div className="magic-8-ball">
          <img
            src="https://i.etsystatic.com/28959621/r/il/44eba0/3681305276/il_1588xN.3681305276_jw2g.jpg"
            alt="Magic 8 Ball"
            className="magic-8-ball"
          />
        </div>
      <div>
        <button onClick={handleAskQuestion}>
          Ask the 8 ball your question
        </button>
        // eslint-disable-next-line no-undef
        <Response response={`magicResponse`} />
      </div>
  </>
  );
};


export default Magic8Ball;
