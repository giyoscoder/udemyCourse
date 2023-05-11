import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({onAddExpense}) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDateHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData)
  };

  const startEditingHandler = () => {
    setIsEditing(true)
  }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expenses</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDateHandler} onCancel = {setIsEditing} />}
    </div>
  );
};

export default NewExpense;
