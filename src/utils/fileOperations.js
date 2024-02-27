import jsPDF from "jspdf";

// Downloading
export const downloadAsCSV = (result) => {
  const lines = result.split("\n");

  // Properly escape quotes by doubling them and wrap lines in quotes
  const csvContent =
    "data:text/csv;charset=utf-8," +
    lines.map((line) => '"' + line.replace(/"/g, '""') + '"').join("\n");

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
  let yOffset = 10; // Initial y-offset for the first line
  const lineHeight = 10; // Define the line height
  const margin = 10; // Top margin and left margin
  const maxLineHeight = doc.internal.pageSize.height - margin; // Maximum y-offset before adding a new page

  lines.forEach((line, index) => {
    // Check if the current line's y-offset exceeds the page height and add a new page
    if (yOffset > maxLineHeight) {
      doc.addPage();
      yOffset = 10; // Reset y-offset for the new page
    }

    doc.text(line, margin, yOffset);
    yOffset += lineHeight; // Increase y-offset for the next line
  });

  doc.save("download.pdf");
};

