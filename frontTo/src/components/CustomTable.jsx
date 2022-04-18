import React, { useState, useMemo, useCallback } from "react";
import { sortRows, filterRows, paginateRows } from "../utils/helper";
import { Table, Button } from "react-bootstrap";
import Pagination from "./Pagination";

/**
 * CustomTable is a component that renders a table with the given rows and columns, to use it you need to pass the rows and columns as props.
 * @alert: Make sure you use the right id for the columns, otherwise the table will not render correctly.
 * @param {*} param0
 * @returns
 */
function CustomTable({ rows, columns }) {
  const [activePage, setActivePage] = useState(1);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState({ order: "asc", orderBy: "memberId" });
  const rowsPerPage = 10;

  const filteredRows = useMemo(
    () => filterRows(rows, filters),
    [rows, filters]
  );
  const sortedRows = useMemo(
    () => sortRows(filteredRows, sort),
    [filteredRows, sort]
  );
  const calculatedRows = paginateRows(sortedRows, activePage, rowsPerPage);
  const count = filteredRows.length;
  const totalPages = Math.ceil(count / rowsPerPage);

  const handleSearch = useCallback((value, accessor) => {
    setActivePage(1);
    if (value) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [accessor]: value,
      }));
    } else {
      setFilters((prevFilters) => {
        const updatedFilters = { ...prevFilters };
        delete updatedFilters[accessor];
        return updatedFilters;
      });
    }
  }, []);

  const handleSort = useCallback((accessor) => {
    setActivePage(1);
    setSort((prevSort) => ({
      order:
        prevSort.order === "asc" && prevSort.orderBy === accessor
          ? "desc"
          : "asc",
      orderBy: accessor,
    }));
  }, []);

  const clearAll = () => {
    setSort({ order: "asc", orderBy: "memberId" });
    setActivePage(1);
    setFilters({});
  };

  // React component to display the Header of the table
  const TableHeader = useCallback(() => {
    return (
      <thead>
        <tr>
          {columns.map((column) => {
            const sortIcon = () => {
              if (column.accessor === sort.orderBy) {
                if (sort.order === "asc") {
                  return "⬆️";
                }
                return "⬇️";
              } else {
                return "️↕️";
              }
            };

            return (
              <th key={column.accessor}>
                <span>{column.label}</span>
                <button onClick={() => handleSort(column.accessor)}>
                  {sortIcon()}
                </button>
              </th>
            );
          })}
          <th>Action</th>
        </tr>
        <tr>
          {columns.map((column) => {
            return (
              <th key={`${column.accessor}-search`}>
                <input
                  type="search"
                  placeholder={` Search ${column.label}`}
                  value={filters[column.accessor]}
                  onChange={(event) =>
                    handleSearch(event.target.value, column.accessor)
                  }
                />
              </th>
            );
          })}
          <th>View or Edit!</th>
        </tr>
      </thead>
    );
  }, [filters, handleSearch, handleSort, sort, columns]);

  //React component to display the rows of the table
  const TableBody = useCallback(() => {
    return (
      <tbody>
        {calculatedRows.map((row) => {
          return (
            <tr key={row.memberId}>
              {columns.map((column) => {
                return <td key={column.accessor}>{row[column.accessor]}</td>;
              })}
              <td>
                <Button variant="primary">View</Button>
                <Button variant="secondary">Edit</Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  }, [calculatedRows, columns]);
  return (
    <>
      <Table striped bordered hover responsive>
        {TableHeader()}
        {TableBody()}
      </Table>
      {count > 0 ? (
        <Pagination
          activePage={activePage}
          count={count}
          rowsPerPage={rowsPerPage}
          totalPages={totalPages}
          setActivePage={setActivePage}
        />
      ) : (
        <p>No Data Found</p>
      )}
      <div>
        <p>
          <button onClick={clearAll}>Clear filters</button>
        </p>
      </div>
    </>
  );
}

export default CustomTable;
