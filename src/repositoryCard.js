import { Flex } from 'antd';
import React from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap';
import { Col, Row } from "antd";
import './index'
import { Link } from 'react-router-dom';

function RepositoryCard({ value }) {
    return (
        <Card
            style={{
                width: "300px",
                height: "300px",
                display: "flex",
                flexWrap: "wrap",
                float: "left",
                marginTop: '15px',
                marginBottom: "15px",
                marginRight: "2%"
            }
            }>
            <CardBody>
                <CardTitle><h5>{value.Repository}</h5></CardTitle>
                <a style={{ opacity: "0.5", fontSize: "13px" }}>{value.Description}</a>
                <Row>

                    <Col span={12}>Repository:</Col>
                    <Col span={12}>{value.Repository}</Col>
                </Row>
                <Row>
                    <Col span={12}>Description:</Col>
                    <Col span={12} className='cutoff-text'>{value.Description}</Col>
                </Row>
                <Row>
                    <Col span={12}>Contributors Url:</Col>
                    <Col span={12} className='cutoff-text'>
                        <a href={value.ContributorsUrl} target="_blank" rel="noopener noreferrer">{value.ContributorsUrl}</a>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>Languages Url:</Col>
                    <Col span={12} className='cutoff-text'><a href={value.LanguagesUrl} target="_blank" rel="noopener noreferrer">{value.LanguagesUrl}
                    </a> </Col>
                </Row>
                <Row>
                    <Col span={12}>Repo Link:</Col>
                    <Col span={12} className='cutoff-text'><a href={value.RepoLink} target="_blank" rel="noopener noreferrer">{value.RepoLink}</a></Col>
                </Row>
                <Row>
                    <Col span={12}>Git Url:</Col>
                    <Col span={12} className='cutoff-text'> <a href={value.GitUrl} target="_blank" rel="noopener noreferrer">{value.GitUrl}</a></Col>
                </Row>
            </CardBody>
        </Card>
    )
}

export default RepositoryCard