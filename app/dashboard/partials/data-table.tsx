"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

const data: SalesLead[] = [
  {
    name: "Winford Asher",
    status: "New",
    createdOn: "2021-09-01T00:00:00Z",
    topic: "Cafe A100 for commercial use"
  },
  {
    name: "Josia Love",
    status: "New",
    createdOn: "2021-09-01T00:00:00Z",
    topic: "Upgrading service plan"
  },
  {
    name: "Harrison Curtis",
    status: "New",
    createdOn: "2021-09-01T00:00:00Z",
    topic: "Issue with throughput on EspressoMaster"
  },
  {
    name: "Jermaine Berrett",
    status: "New",
    createdOn: "2021-09-01T00:00:00Z",
    topic: "New roaster in distribution facility"
  },
  {
    name: "Gerald Stephens",
    status: "New",
    createdOn: "2021-09-01T00:00:00Z",
    topic: "Concerns on current machines"
  },
  {
    name: "Halle Griffiths",
    status: "New",
    createdOn: "2021-09-01T00:00:00Z",
    topic: "Expanding business"
  },
  {
    name: "Winford Asher",
    status: "New",
    createdOn: "2021-09-01T00:00:00Z",
    topic: "Cafe A100 for commercial use"
  },
  {
    name: "Josia Love",
    status: "New",
    createdOn: "2021-09-01T00:00:00Z",
    topic: "Upgrading service plan"
  },
  {
    name: "Harrison Curtis",
    status: "New",
    createdOn: "2021-09-01T00:00:00Z",
    topic: "Issue with throughput on EspressoMaster"
  },
  {
    name: "Jermaine Berrett",
    status: "New",
    createdOn: "2021-09-01T00:00:00Z",
    topic: "New roaster in distribution facility"
  },
  {
    name: "Gerald Stephens",
    status: "New",
    createdOn: "2021-09-01T00:00:00Z",
    topic: "Concerns on current machines"
  },
  {
    name: "Halle Griffiths",
    status: "New",
    createdOn: "2021-09-01T00:00:00Z",
    topic: "Expanding business"
  },
  {
    name: "Winford Asher",
    status: "New",
    createdOn: "2021-09-01T00:00:00Z",
    topic: "Cafe A100 for commercial use"
  },
  {
    name: "Josia Love",
    status: "New",
    createdOn: "2021-09-01T00:00:00Z",
    topic: "Upgrading service plan"
  },
  {
    name: "Harrison Curtis",
    status: "New",
    createdOn: "2021-09-01T00:00:00Z",
    topic: "Issue with throughput on EspressoMaster"
  },
  {
    name: "Jermaine Berrett",
    status: "New",
    createdOn: "2021-09-01T00:00:00Z",
    topic: "New roaster in distribution facility"
  },
  {
    name: "Gerald Stephens",
    status: "New",
    createdOn: "2021-09-01T00:00:00Z",
    topic: "Concerns on current machines"
  },
  {
    name: "Halle Griffiths",
    status: "New",
    createdOn: "2021-09-01T00:00:00Z",
    topic: "Expanding business"
  },
  {
    name: "Winford Asher",
    status: "New",
    createdOn: "2021-09-01T00:00:00Z",
    topic: "Cafe A100 for commercial use"
  },
  {
    name: "Josia Love",
    status: "New",
    createdOn: "2021-09-01T00:00:00Z",
    topic: "Upgrading service plan"
  },
  {
    name: "Harrison Curtis",
    status: "New",
    createdOn: "2021-09-01T00:00:00Z",
    topic: "Issue with throughput on EspressoMaster"
  },
  {
    name: "Jermaine Berrett",
    status: "New",
    createdOn: "2021-09-01T00:00:00Z",
    topic: "New roaster in distribution facility"
  },
  {
    name: "Gerald Stephens",
    status: "New",
    createdOn: "2021-09-01T00:00:00Z",
    topic: "Concerns on current machines"
  },
  {
    name: "Halle Griffiths",
    status: "New",
    createdOn: "2021-09-01T00:00:00Z",
    topic: "Expanding business"
  }
];

export type SalesLead = {
  name: string;
  topic: string;
  status: string;
  createdOn: string;
};

export const columns: ColumnDef<SalesLead>[] = [
  {
    id: "select",
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="border-gray-400"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="font-semibold text-sm text-black"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="text-blue-600">{row.getValue("name")}</div>
    )
  },
  {
    accessorKey: "topic",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="font-semibold text-sm text-black"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Topic
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="text-gray-600">{row.getValue("topic")}</div>
    )
  },

  {
    accessorKey: "status",
    header: () => (
      <div className="font-semibold text-sm text-black">Status reason</div>
    ),
    cell: ({ row }) => (
      <div className="text-gray-600">{row.getValue("status")}</div>
    )
  },
  {
    accessorKey: "createdOn",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="font-semibold text-sm text-black"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created on
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdOn"));
      return (
        <div className="text-gray-600">
          {format(date, "dd/MM/yyyy hh:mm aa")}
        </div>
      );
    }
  }
];

export function DataTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection
    }
  });

  return (
    <div className="w-full">
      <div className="rounded-md ">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="py-3.5">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4 pb-0">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
