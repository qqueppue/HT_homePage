import React from 'react';
import { CompanyLogo } from "../images/index";
import { Col, Container, Row } from 'react-bootstrap';

function Footer() {
    return(
        <div className="footer-info">
            <Container className='footer-wrap'>
                <Row>
                    <Col sm={2}>
                        <img src={CompanyLogo} className="img-responsive" alt="홈페이지 로고" />
                    </Col>
                    <Col sm={7}>
                        <ul>
                            <li><strong>주식회사 에이치티</strong></li>
                            <li>대표자명: 한창덕</li>
                            <li>사업자 번호 : 719-86-03013</li>
                            
                            <div className="clearfix"></div>
                            
                            <li>대표번호 : 010-0000-0000</li>
                            <li>팩스번호 : 070-2378-2189</li>
                            <li>이메일 : <a href="mailto:tem1255@naver.com">tem1255@naver.com</a></li>
            
                            <div className="clearfix"></div>
                                            
                            <li>경북 구미시 1공단로6길 102(공단동) 7동 (주)에이치티</li>
                        </ul>
                    </Col>
                    <Col sm={3}>
                        {/* <p className="copy">©db Private Equity. All rights reserved.</p> */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;