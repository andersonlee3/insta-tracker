import { CSVLink } from "react-csv";
import "./ExportCSVButton.css";
import { useRef } from "react";

const convertUsernamesListToCSVFormat = (
  usernamesList,
  usernamesInCSVFormat,
) => {
  usernamesList.forEach((username) => {
    usernamesInCSVFormat.push([username]);
  });
};

const handleClick = (csvLinkRef) => {
  if (csvLinkRef.current) {
    csvLinkRef.current.link.click();
  }
};

export default function ExportCSVButton({ usernamesList }) {
  const csvLinkRef = useRef(null);
  const usernamesInCSVFormat = [["Users That Don't Follow You Back"]];

  convertUsernamesListToCSVFormat(usernamesList, usernamesInCSVFormat);

  return (
    <div>
      <button onClick={() => handleClick(csvLinkRef)}>Download as CSV</button>
      <CSVLink
        className="export-button"
        data={usernamesInCSVFormat}
        filename="not-following-back.csv"
        ref={csvLinkRef}
        style={{ display: "none" }}
      >
        Download
      </CSVLink>
    </div>
  );
}
