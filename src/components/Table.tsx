import React, { HTMLAttributes, ReactNode } from "react";

interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
    children: ReactNode;
}

interface TableSectionProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode;
}

interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
    children: ReactNode;
}

interface TableCellProps extends HTMLAttributes<HTMLTableCellElement> {
    children: ReactNode;
    header?: boolean;
}

const Table = ({ children, ...htmlAttributes }: TableProps) => {
    return <table {...htmlAttributes}>{children}</table>;
};

const TableSection = ({ children, ...htmlAttributes }: TableSectionProps) => {
    return <section {...htmlAttributes}>{children}</section>;
};

const TableHeader = ({ children, ...htmlAttributes }: TableSectionProps) => {
    return <thead {...htmlAttributes}>{children}</thead>;
};

const TableBody = ({ children, ...htmlAttributes }: TableSectionProps) => {
    return <tbody {...htmlAttributes}>{children}</tbody>;
};

const TableRow = ({ children, ...htmlAttributes }: TableRowProps) => {
    return <tr {...htmlAttributes}>{children}</tr>;
};

const TableCell = ({
    header,
    children,
    ...htmlAttributes
}: TableCellProps & { header?: boolean }) => {
    const CellComponent = header ? "th" : "td";
    return <CellComponent {...htmlAttributes}>{children}</CellComponent>;
};

Table.Section = TableSection;
Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Cell = TableCell;

export default Table;
