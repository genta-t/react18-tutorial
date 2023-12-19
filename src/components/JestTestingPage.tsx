import PageLinks from './items/PageLinks';
import "./../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import LoginComp from './jest/LoginComp';

const JestTestingPage = () => {
  return (
    <>
      <PageLinks link={"/testing"}/>
      <p>テストコードの練習です</p>
      <div className="Container app-container" role="parent">
        <Row>
          <Col>
            <h1>Reactでテストチュートリアル</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <LoginComp data-testid="child" />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default JestTestingPage;
