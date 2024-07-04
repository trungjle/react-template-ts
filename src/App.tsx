import React from "react";
import "./styles.css";
import ExpensesTable from "./ExpensesTable";

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Expenses</h1>
            </header>
            <main>
                <ExpensesTable />
            </main>
        </div>
    );
};

export default App;
