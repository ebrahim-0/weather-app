import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../rtk/Slices/weatherSlice";
import "./Highlight.css";
import { Col, Row } from "react-bootstrap";

function Hightlight() {
  const getWeather = useSelector((state) => state.weather);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather("tanta"));
  }, []);

  return (
    <div className="hightlights">
      <h1 style={{ color: "#E7E7EB" }} className="p-4">
        Today’s Hightlights
      </h1>

      <Row className="boxs">
        <Col className="box">
          <div className="text">Wind status</div>
          <div className="value">{getWeather[0].wind.gust} mph</div>
        </Col>
        <Col className="box">
          <div className="text">Humidity</div>
          <div className="value">{getWeather[0].main.humidity}%</div>
        </Col>

        <Col className="box">
          <div className="text">visibility</div>
          <div className="value">{getWeather[0].visibility}</div>
        </Col>
        <Col className="box">
          <div className="text">Air Pressure</div>
          <div className="value">{getWeather[0].main.pressure} mb</div>
        </Col>
      </Row>
    </div>
  );
}

export default Hightlight;
