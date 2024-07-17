import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonTable = ({ columns, rows }) => {
  return (
    <table className="ant-table">
      <thead className="ant-table-thead">
        <tr>
          {columns.map((col, index) => (
            <th key={index}>
              <Skeleton height={20} width={75} />
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="ant-table-tbody">
        {Array(rows)
          .fill()
          .map((_, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col, colIndex) => (
                <td key={colIndex}>
                  <Skeleton height={20} />
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default SkeletonTable;
