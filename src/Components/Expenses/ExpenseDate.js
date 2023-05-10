import "./ExpenseData.css";

function ExpenseDate({ date }) {
  return (
    <>
      <div className="expense-date">
        <div className="expense-date__month">
          {date.toLocaleString("en-US", { month: "long" })}
        </div>
        <div className="expense-data__year">{date.getFullYear()}</div>
        <div className="expense-data__day">
          {date.toLocaleString("en-US", { day: "2-digit" })}
        </div>
      </div>
    </>
  );
}

export default ExpenseDate;