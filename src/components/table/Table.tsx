import { FC, useState } from "react";
import "./table.css";
import { TableProps as Props, Sort } from "../../utils/types.d";

const Table: FC<Props> = ({ headers, data, type }) => {
  const [sort, setSort] = useState<Sort>();
  const [hover, setHover] = useState<number | null>(null);

  function handleSort(column: string) {
    if (sort?.column === column) {
      setSort({
        column,
        direction: sort.direction === "asc" ? "desc" : "asc",
      });
    } else {
      setSort({
        column,
        direction: "asc",
      });
    }
  }

  function handleRowHover(row: number | null) {
    if (type === "users") setHover(row);
  }

  const sortedData = data.sort((a: any, b: any) => {
    if (sort?.column) {
      const columnA = a[sort.column];
      const columnB = b[sort.column];
      if (columnA < columnB) {
        return sort.direction === "asc" ? -1 : 1;
      } else if (columnA > columnB) {
        return sort.direction === "asc" ? 1 : -1;
      }
    }
    return 0;
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            {headers.map((header: string) => (
              <th
                className="cursor-pointer"
                key={header}
                onClick={() => handleSort(header)}
              >
                {header.toUpperCase()}
                {sort?.column === header &&
                  (sort?.direction === "asc" ? " ▲" : " ▼")}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {sortedData.map((row: any, index: number) => (
            <tr
              key={index}
              className={hover === index ? "cursor-pointer highlight" : ""}
              onMouseEnter={() => handleRowHover(index)}
              onMouseLeave={() => handleRowHover(null)}
            >
              {headers.map((header: string, index: number) => (
                <td key={index}>{row[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
