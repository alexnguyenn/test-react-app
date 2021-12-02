import React, { useState } from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        setShowForm(false);
    };

    const hideFormHandler = () => {
        setShowForm(false);
    };

    const showFormHandler = () => {
        setShowForm(true);
    };

    return (
        <div className="new-expense">
            {showForm && (
                <ExpenseForm
                    onHideForm={hideFormHandler}
                    onSaveExpenseData={saveExpenseDataHandler}
                />
            )}
            {!showForm && <button onClick={showFormHandler}>Add Expense</button>}
        </div>
    );
};

export default NewExpense;
