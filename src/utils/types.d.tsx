export type AnyObject = { [key: string]: any };

export interface Results {
  page: number;
  total: number;
}

export interface AccordionProps {
  items: AnyObject[];
}

export interface TableProps {
  headers: string[];
  data: any[];
  type: string;
}

export interface Sort {
  column: string;
  direction: "asc" | "desc";
}
