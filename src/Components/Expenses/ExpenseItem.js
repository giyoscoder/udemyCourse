import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem({ items }) {
  return (
    <>
      <div className="expense-item">
        <ExpenseDate date={items.date} />
        <div className="expense-item__description">
          <h2>{items.title}</h2>
          <div className="expense-item__price">${items.amount}</div>
        </div>
      </div>
    </>
  );
}

export default ExpenseItem;
