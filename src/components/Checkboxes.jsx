export default function Checkboxes({ formAnswers, setFormAnswers }) {
  const handleInput = (event) => {
    const { name, value, type, checked } = event.target;
    console.log("event", event.target);
    console.log("event checked?", event.target.checked);

    formAnswers.timeSpent.includes(value)
      ? console.log("already includes")
      : setFormAnswers({
          ...formAnswers,
          [name]: [...formAnswers.timeSpent, value],
        });
  }

  return (
    <ul>
      <li>
        <label>
          <input
            name="timeSpent"
            type="checkbox"
            value="swimming"
            onChange={handleInput}
            checked={formAnswers.timeSpent.includes("swimming")}
          />
          Swimming
        </label>
      </li>
      <li>
        <label>
          <input
            name="timeSpent"
            type="checkbox"
            value="bathing"
            onChange={handleInput}
            checked={formAnswers.timeSpent.includes("bathing")}
          />
          Bathing
        </label>
      </li>
      <li>
        <label>
          <input
            name="timeSpent"
            type="checkbox"
            value="chatting"
            onChange={handleInput}
            checked={formAnswers.timeSpent.includes("chatting")}
          />
          Chatting
        </label>
      </li>
      <li>
        <label>
          <input
            name="timeSpent"
            type="checkbox"
            value="noTime"
            onChange={handleInput}
            checked={formAnswers.timeSpent.includes("noTime")}
          />
          I don't like to spend time with it
        </label>
      </li>
    </ul>
  );
}