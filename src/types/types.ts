type ISODateString = "YYYY-MM-DD";
type EmailString = `${string}@${string}.${string}`;
type Address = {
  street: string;
  city: string;
  postCode: string;
  country: string;
};
type LineItem = {
  name: string;
  quantity: number;
  price: number;
  total: number;
};

export type InvoiceStatusType = "paid" | "pending" | "draft";
export type InvoiceIDType = string;

export type InvoiceType = {
  id: InvoiceIDType;
  createdAt: ISODateString;
  paymentDue: ISODateString;
  description: string;
  paymentTerms: 1 | 7 | 30;
  clientName: string;
  clientEmail: EmailString;
  status: InvoiceStatusType;
  senderAddress: Address;
  clientAddress: Address;
  items: LineItem[];
  total: number;
};
