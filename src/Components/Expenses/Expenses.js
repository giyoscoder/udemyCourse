import {useState} from 'react';
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import ExpensesChart from './ExpensesChart';

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
      < ExpensesChart expenses={filterChangeHandler} />
      <ExpenseList items={filteredExpenses} />
   </div>
  );
}

export default Expenses;
