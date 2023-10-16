import React, { useState } from "react";
import styled from "styled-components";

const TableContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  border-collapse: collapse;
  border-spacing: 0;
  text-align: left;
`;

const TableHead = styled.thead`
  background-color: #f3f4f6;
`;

const TableBody = styled.tbody`
  border-top: 1px solid #e5e7eb;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #e5e7eb;
`;

const TableHeader = styled.th`
  padding: 8px;
  font-weight: 500;
  text-transform: uppercase;
`;

const TableCell = styled.td`
  padding: 8px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 8px;
`;

const PaginationItem = styled.a<{ active?: boolean }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  background-color: ${(props) => (props.active ? "#f3f4f6" : "#fff")};
  color: #333;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #f3f4f6;
  }
`;

const itemsPerPage = 3; // Number of items to show per page
const paginationDisplayCount = 3; // Number of pagination numbers to display

const DataGrid: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const TableData = [
    {
      name: "John Doe",
      birthdate: "24/05/1995",
      role: "Web Developer",
      salary: "$120,000",
    },
    {
      name: "John Doe",
      birthdate: "24/05/1995",
      role: "Web Developer",
      salary: "$120,000",
    },
    {
      name: "John Doe",
      birthdate: "24/05/1995",
      role: "Web Developer",
      salary: "$120,000",
    },
    {
      name: "John Doe",
      birthdate: "24/05/1995",
      role: "Web Developer",
      salary: "$120,000",
    },
    {
      name: "John Doe",
      birthdate: "24/05/1995",
      role: "Web Developer",
      salary: "$120,000",
    },
    {
      name: "John Doe",
      birthdate: "24/05/1995",
      role: "Web Developer",
      salary: "$120,000",
    },
  ];

  const totalItems = TableData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedData = TableData.slice(startIndex, endIndex);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  // Calculate the range of pagination numbers to display
  const displayRange = Array.from(
    { length: Math.min(paginationDisplayCount, totalPages) },
    (_, i) => {
      if (currentPage <= Math.floor(paginationDisplayCount / 2)) {
        return i + 1;
      } else if (
        totalPages - currentPage <=
        Math.floor(paginationDisplayCount / 2)
      ) {
        return totalPages - paginationDisplayCount + i + 1;
      } else {
        return currentPage - Math.floor(paginationDisplayCount / 2) + i;
      }
    }
  );

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Date of Birth</TableHeader>
            <TableHeader>Role</TableHeader>
            <TableHeader>Salary</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedData.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.birthdate}</TableCell>
              <TableCell>{item.role}</TableCell>
              <TableCell>{item.salary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination>
        <PaginationItem onClick={() => handlePageClick(currentPage - 1)}>
          &#8592;
        </PaginationItem>
        {displayRange.map((page) => (
          <PaginationItem
            key={page}
            active={page === currentPage}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </PaginationItem>
        ))}
        {displayRange[displayRange.length - 1] < totalPages - 1 && (
          <span>...</span>
        )}
        {displayRange[displayRange.length - 1] < totalPages && (
          <PaginationItem onClick={() => handlePageClick(totalPages)}>
            {totalPages}
          </PaginationItem>
        )}
        <PaginationItem onClick={() => handlePageClick(currentPage + 1)}>
          &#8594;
        </PaginationItem>
      </Pagination>
    </TableContainer>
  );
};

export default DataGrid;
