function ItemsList({ list }) {
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>{answersSet[item]}</li>
      ))}
    </ul>
  );
}


export default function AnswersItem({answerItem, setFormAnswers, setEditAnswer, index }) {
   function handleEdit(event) {
     console.log("answers Item right here", answerItem);
     setFormAnswers(answerItem);
     setEditAnswer(index)
     console.log("editAnswer", index)
   }
  return (
    <li>
      <article className="answer">
        <h3>{answerItem.username || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{answerItem.colour}</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={answerItem.timeSpent} />
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{answerItem.review}</span>
        </p>
        <button id="edit-button" onClick={handleEdit}>Edit</button>
      </article>
    </li>
  );
}
