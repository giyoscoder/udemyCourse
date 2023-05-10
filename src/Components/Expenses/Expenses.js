import {useState} from 'react';
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses({ items }) {
  const [filteredYear, setFilterYear] = useState('2019')

  const filterChangeHandler = (selectedYear) =>{
    setFilterYear(selectedYear)
  }
  
  const filteredExpenses = items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })


  return (
    <div className="expenses">
      <ExpensesFilter select={filteredYear}  onChangeFilter = {filterChangeHandler} />

      {filteredExpenses.map((item) => <ExpenseItem items={item} key={item.id}/>)}

    </div>
  );
}

export default Expenses;
