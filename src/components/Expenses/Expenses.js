import React, { useState } from "react";

import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";

const Expenses = (props) => {
    const [filterYear, setSelectedYear] = useState("2021");

    const applyYearFilter = (selectedYear) => {
        setSelectedYear(selectedYear);
    };

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filterYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filterYear} onSelectYear={applyYearFilter} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
};

export default Expenses;
