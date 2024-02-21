import jsPDF from "jspdf";

// Downloading
export const downloadAsCSV = (result) => {
  const lines = result.split("\n");

  const csvContent =
    "data:text/csv;charset=utf-8," +
    lines.map((line) => `"${line}"`).join("\n");

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "download.csv");
  document.body.appendChild(link);

  link.click();
  document.body.removeChild(link);
};

export const downloadAsPDF = (result) => {
  const doc = new jsPDF();

  const lines = result.split("\n");

  lines.forEach((line, index) => {
    doc.text(line, 10, 10 + 10 * index);
  });

  doc.save("download.pdf");
};
