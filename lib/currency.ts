export const currencyFormatter = (value: number) => {
  const formattedPrice = new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
  }).format(value);

  const [rupees, paisa] = formattedPrice.split(".");
  if (paisa === "00") {
    return rupees;
  }
  return formattedPrice;
};
