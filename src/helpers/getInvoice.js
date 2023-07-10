import data from "@/assets/data.json";

export default function getInvoice(id) {
  const [invoice] = data.filter((inv) => inv.id === id);

  return invoice;
}
