import { useState } from "react";

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
        <button onClick={handleAskQuestion}>
          Ask the 8 ball your question
        </button>
        <div className="response">{response}</div>

        <div className="eight-ball-img-container">
          <img
            src="/8BallImg.jpg"
            alt="Magic 8 Ball"
            className="eight-ball"
          />
        </div>
      </div>
    </>
  );
}

export default Magic8Ball;
