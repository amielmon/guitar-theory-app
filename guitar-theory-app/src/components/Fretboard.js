import React, { Component } from 'react'
import { Row, Col } from 'antd'

const String = () => (
    <div
        style={{
            color: "black",
            backgroundColor: "black",
            height: 1,
        }}
    />
);

const Circle = () => (
    <div
        style={{
            width: 20,
            height: 20,
            borderRadius: 20/2,
            backgroundColor: "black"
        }} 
    />
);

const FretLine = () => (
    <div
        style={{
            color: "black",
            backgroundColor: "black",
            height: 20,
            width: 1
        }}
    />
);

const Fret = () => (
    <div>
        <Col span={1} className="bg-white">
            <String />
            {/* <Circle /> */}
            <FretLine />
        </Col>
    </div> 
);

const StringFret = ({ note }) => (
    <Row>
        <Col span={1}> 
            <div className="white"> {note} </div>
        </Col>
        <Fret />
        <Fret />
        <Fret />
        <Fret />
        <Fret />
        <Fret />
        <Fret />
        <Fret />
        <Fret />
        <Fret />
        <Fret />
        <Fret />
        <Col span={1}> 
            <FretLine />
        </Col>
    </Row>
);

const FretNums = () => (
    <Row>
        <Col span={1} />
        <Col span={1}> 
            <div className="white"> 1 </div>
        </Col>
        <Col span={1}> 
            <div className="white"> 2 </div>
        </Col>
        <Col span={1}> 
            <div className="white"> 3 </div>
        </Col>
        <Col span={1}> 
            <div className="white"> 4 </div>
        </Col>
        <Col span={1}> 
            <div className="white"> 5 </div>
        </Col>
        <Col span={1}> 
            <div className="white"> 6 </div>
        </Col>
        <Col span={1}> 
            <div className="white"> 7 </div>
        </Col>
        <Col span={1}> 
            <div className="white"> 8 </div>
        </Col>
        <Col span={1}> 
            <div className="white"> 9 </div>
        </Col>
        <Col span={1}> 
            <div className="white"> 10 </div>
        </Col>
        <Col span={1}> 
            <div className="white"> 11 </div>
        </Col>
        <Col span={1}> 
            <div className="white"> 12 </div>
        </Col>
    </Row>
)

class FretBoard extends Component {

    render() {
        return (
            <div>
                <StringFret note={"E"} />
                <StringFret note={"B"} />
                <StringFret note={"G"} />
                <StringFret note={"D"} />
                <StringFret note={"A"} />
                <StringFret note={"E"} />
                <FretNums />
            </div>
        )
    }
}

export default FretBoard;