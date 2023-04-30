import { useTable, useSortBy } from "react-table";
import { useRouter } from "next/navigation";

import styles from "./Table.module.css";

export default function Table({ columns, data }) {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable(
            { columns, data, initialState: { sortBy: [{ id: "distance" }] } },
            useSortBy
        );

    const router = useRouter();

    return (
        <table {...getTableProps()}>
            <thead>
            {headerGroups.map((headerGroup) => {
                const { key, ...restHeaderGroupProps } =
                    headerGroup.getHeaderGroupProps();
                return (
                    <tr key={key} {...restHeaderGroupProps}>
                        {headerGroup.headers.map((column) => {
                            const { key, ...restColumn } = column.getHeaderProps(
                                column.getSortByToggleProps()
                            );
                            return (
                                <th key={key} {...restColumn}>
                                    {column.render("Header")}
                                    <span>
                      {column.isSorted
                          ? column.isSortedDesc
                              ? " 🔽"
                              : " 🔼"
                          : ""}
                    </span>
                                </th>
                            );
                        })}
                    </tr>
                );
            })}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
                prepareRow(row);
                const { key, ...restRowProps } = row.getRowProps();
                return (
                    <tr
                        key={key}
                        {...restRowProps}
                        className={styles.clickable}
                        onClick={() => router.push(`/study/${row.original.id}`)}
                    >
                        {row.cells.map((cell) => {
                            const { key, ...restCellProps } = cell.getCellProps();
                            return (
                                <td key={key} {...restCellProps}>
                                    {cell.render("Cell")}
                                </td>
                            );
                        })}
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}
