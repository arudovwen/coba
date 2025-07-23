import "react-data-grid/lib/styles.css";
import { DataGrid, type Column } from "react-data-grid";
import DataBar from "./data-bar";

type Row = {
  column0: string;
  column1: string;
  column2: string;
  column3: string;
  column4: string;
  column5: string;
  column6: string;
  column7: string;
  column8: string;
  column9: string;
  column10: string;
  column11: string;
  column12: string;
  column13: string;
  column14: string;
  column15: string;
  column16: string;
};

const columns: Column<Row>[] = [
  { key: "column0", name: "..." },
  { key: "column1", name: "Column 1" },
  { key: "column2", name: "Column 2" },
  { key: "column3", name: "Column 3" },
  { key: "column4", name: "Column 4" },
  { key: "column5", name: "Column 5" },
  { key: "column6", name: "Column 6" },
  { key: "column7", name: "Column 7" },
  { key: "column8", name: "Column 8" },
  { key: "column9", name: "Column 9" },
  { key: "column10", name: "Column 10" },
  { key: "column11", name: "Column 11" },
  { key: "column12", name: "Column 12" },
  { key: "column13", name: "Column 13" },
  { key: "column14", name: "Column 14" },
  { key: "column15", name: "Column 15" },
  { key: "column16", name: "Column 16" },
];

const rows: Row[] = [
  {
    column0: "1",
    column1: "Row 1 Data 1",
    column2: "Row 1 Data 2",
    column3: "Row 1 Data 3",
    column4: "Row 1 Data 4",
    column5: "Row 1 Data 5",
    column6: "Row 1 Data 6",
    column7: "Row 1 Data 7",
    column8: "Row 1 Data 8",
    column9: "Row 1 Data 9",
    column10: "Row 1 Data 10",
    column11: "Row 1 Data 11",
    column12: "Row 1 Data 12",
    column13: "Row 1 Data 13",
    column14: "Row 1 Data 14",
    column15: "Row 1 Data 15",
    column16: "Row 1 Data 16",
  },
  {
    column0: "2",
    column1: "Row 2 Data 1",
    column2: "Row 2 Data 2",
    column3: "Row 2 Data 3",
    column4: "Row 2 Data 4",
    column5: "Row 2 Data 5",
    column6: "Row 2 Data 6",
    column7: "Row 2 Data 7",
    column8: "Row 2 Data 8",
    column9: "Row 2 Data 9",
    column10: "Row 2 Data 10",
    column11: "Row 2 Data 11",
    column12: "Row 2 Data 12",
    column13: "Row 2 Data 13",
    column14: "Row 2 Data 14",
    column15: "Row 2 Data 15",
    column16: "Row 2 Data 16",
  },
   {
    column0: "2",
    column1: "Row 2 Data 1",
    column2: "Row 2 Data 2",
    column3: "Row 2 Data 3",
    column4: "Row 2 Data 4",
    column5: "Row 2 Data 5",
    column6: "Row 2 Data 6",
    column7: "Row 2 Data 7",
    column8: "Row 2 Data 8",
    column9: "Row 2 Data 9",
    column10: "Row 2 Data 10",
    column11: "Row 2 Data 11",
    column12: "Row 2 Data 12",
    column13: "Row 2 Data 13",
    column14: "Row 2 Data 14",
    column15: "Row 2 Data 15",
    column16: "Row 2 Data 16",
  },
   {
    column0: "2",
    column1: "Row 2 Data 1",
    column2: "Row 2 Data 2",
    column3: "Row 2 Data 3",
    column4: "Row 2 Data 4",
    column5: "Row 2 Data 5",
    column6: "Row 2 Data 6",
    column7: "Row 2 Data 7",
    column8: "Row 2 Data 8",
    column9: "Row 2 Data 9",
    column10: "Row 2 Data 10",
    column11: "Row 2 Data 11",
    column12: "Row 2 Data 12",
    column13: "Row 2 Data 13",
    column14: "Row 2 Data 14",
    column15: "Row 2 Data 15",
    column16: "Row 2 Data 16",
  },
];

export default function DataGridUIndex() {
  return (
    <div>
      <div className="mb-1">
        <DataBar />
      </div>
      <DataGrid
        defaultColumnOptions={{
          minWidth: 100,
          resizable: true,
          sortable: true,
          draggable: true,
        }}
        columns={columns}
        rows={rows}
        className="rdg-light"
      />
    </div>
  );
}
