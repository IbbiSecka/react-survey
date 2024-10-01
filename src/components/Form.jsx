import RadioButtons from "./Radiobuttons";
import Checkboxes from "./Checkboxes";

export default function Form({
  formAnswers,
  setFormAnswers,
  answersList,
  setAnswersList,
  editAnswer,
  setEditAnswer,
}) {
  const handleSubmit =(event) => {
    event.preventDefault();
    console.log("form submit answers", formAnswers);
    setFormAnswers({
      username: "",
      colour: "",
      timeSpent: "",
      review: "",
      email: "",
    });
    setAnswersList([...answersList, formAnswers]);
    console.log("updated form submit answers", formAnswers);
  }

   const handleInput = (event) => {
    const { name, value } = event.target;
    console.log("new event.target", event.target);
    setFormAnswers({
      ...formAnswers,
      [name]: value,
    });
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        <RadioButtons
          formAnswers={formAnswers}
          setFormAnswers={setFormAnswers}
        />
      </div>
      <div className="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        <Checkboxes formAnswers={formAnswers} setFormAnswers={setFormAnswers} />
      </div>
      <label>
        What else have you got to say about your rubber duck?
        <textarea
          name="review"
          cols="30"
          rows="10"
          onChange={handleInput}
          value={formAnswers.review}
        ></textarea>
      </label>
      <label>
        Put your name here (if you feel like it):
        <input
          type="text"
          name="username"
          value={formAnswers.username}
          onChange={handleInput}
        />
      </label>
      <label>
        Leave us your email pretty please??
        <input
          type="email"
          name="email"
          value={formAnswers.email}
          onChange={handleInput}
        />
      </label>
      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
}