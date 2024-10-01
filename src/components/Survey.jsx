import { useState } from "react";
import Form from "./Form";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [formAnswers, setFormAnswers] = useState({
    username: "",
    colour: "",
    timeSpent: [],
    review: "",
    email: ""
  });
  const [answersList, setAnswersList] = useState([]);
  const [editAnswer, setEditAnswer] = useState('')

  console.log("answersList", answersList)

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList
          answersList={answersList}
          setFormAnswers={setFormAnswers}
          editAnswer={editAnswer}
          setEditAnswer={setEditAnswer}
        />
      </section>
      <section className="survey__form">
        <Form
          formAnswers={formAnswers}
          setFormAnswers={setFormAnswers}
          answersList={answersList}
          setAnswersList={setAnswersList}
          editAnswer={editAnswer}
          setEditAnswer={setEditAnswer}
        />
      </section>
  
    </main>
  );
}

export default Survey;
