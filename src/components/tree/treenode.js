import { Node } from "../node/node";
import './tree.css';
import { Edge } from '../edge/edge';
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Tree = (props) =>{
    console.log(props)
    let value = props.value;
    //let length=value.length;
    //let maxLevel=6;
    return(
        
        <div>
            <Container>
                <Row>
                        <Col className="center"><Node content={value[0]}></Node></Col>
                        <Row>
                        <Col className="center"><Edge className="center" edgeType='side-left'></Edge></Col>
                        <Col className="center"><Edge className="center" edgeType='side-right'></Edge></Col>
                        </Row>
                </Row>
                <Row>
                        <Col className="center"><Node content={value[1]}></Node></Col>
                        <Col className="center"><Node content={value[2]}></Node></Col>
                        <Row>
                        <Col className="center"><Edge className="center" edgeType='side-left'></Edge></Col>
                        <Col className="center"><Edge className="center" edgeType='side-right'></Edge></Col>
                        <Col className="center"><Edge className="center" edgeType='side-left'></Edge></Col>
                        <Col className="center"><Edge className="center" edgeType='side-right'></Edge></Col>
                        </Row>
                </Row>
                <Row>
                        <Col className="center"><Node content={value[3]}></Node></Col>
                        <Col className="center"><Node content={value[4]}></Node></Col>
                        <Col className="center"><Node content={value[5]}></Node></Col>
                        <Col className="center"><Node content={value[6]}></Node></Col>
                        <Row>
                        <Col className="center"><Edge className="center" edgeType='side-left'></Edge></Col>
                        <Col className="center"><Edge className="center" edgeType='side-right'></Edge></Col>
                        <Col className="center"><Edge className="center" edgeType='side-left'></Edge></Col>
                        <Col className="center"><Edge className="center" edgeType='side-right'></Edge></Col>
                        <Col className="center"><Edge className="center" edgeType='side-left'></Edge></Col>
                        <Col className="center"><Edge className="center" edgeType='side-right'></Edge></Col>
                        <Col className="center"><Edge className="center" edgeType='side-left'></Edge></Col>
                        <Col className="center"><Edge className="center" edgeType='side-right'></Edge></Col>
                        </Row>
                </Row>
                <Row>
                        <Col className="center"><Node content={value[7]}></Node></Col>
                        <Col className="center"><Node content={value[8]}></Node></Col>
                        <Col className="center"><Node content={value[9]}></Node></Col>
                        <Col className="center"><Node content={value[10]}></Node></Col>
                        <Col className="center"><Node content={value[11]}></Node></Col>
                        <Col className="center"><Node content={value[12]}></Node></Col>
                        <Col className="center"><Node content={value[13]}></Node></Col>
                        <Col className="center"><Node content={value[14]}></Node></Col>
                </Row>      
                    
            </Container>
          
        </div>
    )
        
}