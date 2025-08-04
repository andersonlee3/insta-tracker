import UploadButton from "./UploadButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function UploadComponent() {
  return (
    <Container>
      <Row>
        <Col>
          <UploadButton text="Upload followers_1.json"></UploadButton>
        </Col>
        <Col>
          <UploadButton text="Upload following.json"></UploadButton>
        </Col>
      </Row>
    </Container>
  );
}
