import UploadButton from "./UploadButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import "./UploadComponent.css";
import { useState } from "react";

export default function UploadComponent() {
  const [followersFile, setFollowersFile] = useState(null);
  const [followingFile, setFollowingFile] = useState(null);
  const [results, setResults] = useState(null);

  const handleFollowersFile = (file) => {
    setFollowersFile(file);
  };

  const handleFollowingFile = (file) => {
    setFollowingFile(file);
  };

  const extractFollowingUsernames = (data) => {
    const usernames = new Set();

    data.relationships_following.forEach((user) => {
      usernames.add(user.string_list_data[0].value);
    });

    return usernames;
  };

  const extractFollowerUsernames = (data) => {
    const usernames = new Set();

    data.forEach((user) => {
      usernames.add(user.string_list_data[0].value);
    });

    return usernames;
  };

  const compareFiles = async () => {
    if (!followersFile || !followingFile) {
      alert("File(s) not uploaded");
      return;
    }

    try {
      const followersData = JSON.parse(await followersFile.text());
      const followingData = JSON.parse(await followingFile.text());

      const followersSet = extractFollowerUsernames(followersData);
      const followingSet = extractFollowingUsernames(followingData);

      const notFollowingBack = [];
      for (const user of followingSet) {
        if (!followersSet.has(user)) notFollowingBack.push(user);
      }

      setResults(notFollowingBack);
    } catch (error) {
      console.error("Error processing files: ", error);
    }
  };

  return (
    <Container>
      <Row className="upload-row" md={6}>
        <Col>
          <UploadButton
            text="Upload followers_1.json"
            onFileSelect={handleFollowersFile}
          ></UploadButton>
          {followersFile && <p>✓ {followersFile.name} uploaded successfully</p>}
        </Col>
        <Col>
          <UploadButton
            text="Upload following.json"
            onFileSelect={handleFollowingFile}
          ></UploadButton>
          {followingFile && <p>✓ {followingFile.name} uploaded successfully</p>}
        </Col>
      </Row>
      <Row className="compare-row">
        <Col>
          <button
            onClick={compareFiles}
            disabled={!followersFile || !followingFile}
          >
            Compare
          </button>
        </Col>
      </Row>
      {results && (
        <Row className="results-row">
          <Col md={6}>
            <h2>People that don't follow you back:</h2>
            <ListGroup>
              {results.map((username, index) => (
                <ListGroup.Item key={index}>@{username}</ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      )}
    </Container>
  );
}
