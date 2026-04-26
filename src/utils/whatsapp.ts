export const openWhatsApp = (message: string, product = false) => {
  const phone = "917567368647";

  const description = product ? `Hi, I want this design: ${message}` : message;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(description)}`;

  window.open(url, "_blank");
};
