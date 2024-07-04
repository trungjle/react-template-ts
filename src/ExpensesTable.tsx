import React from "react";
import Table from "./components/Table";
import useExpenses from "./hooks/useExpenses";
import { Expense } from "./types/expense";

const ExpensesTable = () => {
    const { expenses, loading, error } = useExpenses();

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <Table className="expenses-table">
            <Table.Header>
                <Table.Row className="table-header">
                    <Table.Cell className="table-header-cell">Date</Table.Cell>
                    <Table.Cell className="table-header-cell">
                        Merchant
                    </Table.Cell>
                    <Table.Cell className="table-header-cell">
                        Amount
                    </Table.Cell>
                    <Table.Cell className="table-header-cell">
                        Category
                    </Table.Cell>
                    <Table.Cell className="table-header-cell">
                        Description
                    </Table.Cell>
                    <Table.Cell className="table-header-cell">
                        Status
                    </Table.Cell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {expenses.map((expense: Expense) => (
                    <Table.Row key={expense.id} className="table-row">
                        <Table.Cell className="table-cell">
                            {new Date(expense.date).toLocaleDateString(
                                "en-UK",
                                {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                }
                            )}
                        </Table.Cell>
                        <Table.Cell className="table-cell">
                            {expense.merchant}
                        </Table.Cell>
                        <Table.Cell className="table-cell">
                            £{expense.amount.toFixed(2)}
                        </Table.Cell>
                        <Table.Cell className="table-cell">
                            {expense.category}
                        </Table.Cell>
                        <Table.Cell className="table-cell">
                            {expense.description}
                        </Table.Cell>
                        <Table.Cell className="table-cell">
                            {expense.status}
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    );
};

export default ExpensesTable;
