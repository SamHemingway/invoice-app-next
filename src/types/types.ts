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

export type InvoiceType = {
  id: string;
  createdAt: ISODateString;
  paymentDue: ISODateString;
  description: string;
  paymentTerms: 1 | 7 | 30;
  clientName: string;
  clientEmail: EmailString;
  status: "paid" | "pending" | "draft";
  senderAddress: Address;
  clientAddress: Address;
  items: LineItem[];
  total: number;
};
