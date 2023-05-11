import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

function ExpenseList({ items }) {

  if (items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
  }

  return <ul className='expenses-list'>{items.map((item) => (
    <ExpenseItem items={item} key={item.id} />
  ))}</ul>;
}

export default ExpenseList;
