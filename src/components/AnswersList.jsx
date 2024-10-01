import AnswersItem from "./AnswersItem";


export default function AnswersList({answersList, setFormAnswers, editAnswer, setEditAnswer}) {
  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} setFormAnswers={setFormAnswers} setEditAnswer={setEditAnswer} key={i} index={i}/>
      ))}
    </ul>
  );
}
