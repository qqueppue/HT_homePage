import React, { useEffect } from 'react';
import { ProductMain, ProductImage, productExample1, productExample2 } from '../../images';
import { Col, Row, Table } from 'react-bootstrap';
import '../../styles/Product.css';

import * as Icon from '../../icons/index';

function Product() {
    return(
        <div>
            <div className="main-container">
                <img src={ProductMain}></img><label>제품소개</label>
            </div>

            <div className='first_wrap'>
                <div className='in_wrap'>
                    {/* <div className='prod-container' style={{ marginTop: '0px' }}>
                        <div className='prod-title'>
                            <img src={Icon.asterisk} />
                            <label>제품소개</label>
                        </div>
                        <label>열(IR/UV) 차단</label>
                    </div> */}

                    {/* <div className='prod-container' style={{ marginTop: '0px' }}>
                        <div className='prod-title'>
                            <img src={Icon.asterisk} />
                            <label>제품개요</label>
                        </div>
                        <label>CTO / ATO / ITO 분산액</label><br />
                        <label> -적외선(IR) 및 자외선(UV)을 차단해 주는 역할</label>
                        <Row>
                            <div style={{ width: '60%' }}>
                                <img src={ProductImage} style={{ width: '100%' }} />
                            </div>
                        </Row>
                        <Row className='example-wrap'>
                            <Col sm={6}>
                                <img src={productExample1} />
                                <label>건축용 Window</label>
                            </Col>
                            <Col sm={6}>
                                <img src={productExample2} />
                                <label>차량용 Window</label>
                            </Col>
                        </Row>
                    </div> */}
                    <div className='prod-container' style={{ marginTop: '0px' }}>
                        <div className='prod-title'>
                            <img src={Icon.asterisk} />
                            <label>제품개요</label>
                        </div>
                        <label>CTO / ATO / ITO 분산액</label><br />
                        <label> -적외선(IR) 및 자외선(UV)을 차단해 주는 역할</label>
                        <Row style={{ justifyContent: 'center', marginTop: '20px' }}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img src={ProductImage} style={{ width: 'auto', height: '350px' }} />
                            </div>
                        </Row>
                        <div className='example-wrap'>
                            <div>
                                <img src={productExample1} />
                                <label>건축용 Window</label>
                            </div>
                            <div>
                                <img src={productExample2} />
                                <label>차량용 Window</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='second_wrap'>
                <div className='in_wrap'>
                    <div className='prod-container' style={{ marginTop: '0px' }}>
                        <div className='prod-title'>
                            <img src={Icon.asterisk} />
                            <label>적외선 차단 분산액</label>
                        </div>
                        <div className='table-wrap'>
                            <Table bordered>
                                <thead>
                                    <tr>
                                        <th>구분</th>
                                        <th>차단제 종류</th>
                                        <th>차단제 고형분</th>
                                        <th>용제</th>
                                        <th>분산입도(MV)</th>
                                        <th>경화 Type</th>
                                        <th>추천 수지</th>
                                        <th>외관</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>HT-C35</td>
                                        <td>CTO</td>
                                        <td>35wt%</td>
                                        <td className="align-middle" rowSpan='2'>MIBK 등</td>
                                        <td className="align-middle" rowSpan='7'>10nm 이하</td>
                                        <td className="align-middle" rowSpan='3'>UV, IR</td>
                                        <td className="align-middle" rowSpan='3'>PUA, PU 계</td>
                                        <td className="align-middle" rowSpan='4'>남색</td>
                                    </tr>
                                    <tr>
                                        <td>HT-C28</td>
                                        <td>CTO</td>
                                        <td>28wt%</td>
                                    </tr>
                                    <tr>
                                        <td>HT-C15M</td>
                                        <td>CTO</td>
                                        <td>12wt%</td>
                                        <td>Monomer(IBOA 등)</td>
                                    </tr>
                                    <tr>
                                        <td>HT-C24AC</td>
                                        <td>CTO</td>
                                        <td>24wt%</td>
                                        <td className="align-middle" rowSpan='4'>MIBK 등</td>
                                        <td>IR</td>
                                        <td>Acrylate 계</td>
                                    </tr>
                                    <tr>
                                        <td>HT-A30</td>
                                        <td>ATO</td>
                                        <td>30wt%</td>
                                        <td>UV</td>
                                        <td>PUA</td>
                                        <td>짙은 남색</td>
                                    </tr>
                                    <tr>
                                        <td>HT-I30</td>
                                        <td>ITO</td>
                                        <td>30wt%</td>
                                        <td>UV</td>
                                        <td>PUA</td>
                                        <td>옅은 남색</td>
                                    </tr>
                                    <tr>
                                        <td>HT-T04</td>
                                        <td>TiN</td>
                                        <td>6wt%</td>
                                        <td>UV, IR</td>
                                        <td>PUA PU 계</td>
                                        <td>검정</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>

                    <div className='prod-container'>
                        <div className='prod-title'>
                            <img src={Icon.asterisk} />
                            <label>안료(color) 분산액</label>
                        </div>
                        <div className='table-wrap'>
                            <Table bordered>
                                <thead>
                                    <tr>
                                        <th>구분</th>
                                        <th>용제</th>
                                        <th>경화 Type</th>
                                        <th>추천 수지</th>
                                        <th>외관</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>HT-BLACK-03</td>
                                        <td className="align-middle" rowSpan='8'>MIBK MEK, TOL 등</td>
                                        <td className="align-middle" rowSpan='4'>UV, IR</td>
                                        <td className="align-middle" rowSpan='4'>PUA, PU 계</td>
                                        <td>검정</td>
                                    </tr>
                                    <tr>
                                        <td>HT-BLUE-03</td>
                                        <td>파랑</td>
                                    </tr>
                                    <tr>
                                        <td>HT-RED-03</td>
                                        <td>빨강</td>
                                    </tr>
                                    <tr>
                                        <td>HT-YELLOW-03</td>
                                        <td>노랑</td>
                                    </tr>
                                    <tr>
                                        <td>HT-BLACK-AC03</td>
                                        <td className="align-middle" rowSpan='4'>IR</td>
                                        <td className="align-middle" rowSpan='4'>Acrylate 계</td>
                                        <td>검정</td>
                                    </tr>
                                    <tr>
                                        <td>HT-BLUE-AC03</td>
                                        <td>파랑</td>
                                    </tr>
                                    <tr>
                                        <td>HT-RED-AC03</td>
                                        <td>빨강</td>
                                    </tr>
                                    <tr>
                                        <td>HT-YELLOW-AC03</td>
                                        <td>노랑</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>

                    <div className='prod-container'>
                        <div className='prod-title'>
                            <img src={Icon.asterisk} />
                            <label>기타 분산액</label>
                        </div>
                        <div className='table-wrap'>
                            <Table bordered>
                                <thead>
                                    <tr>
                                        <th>구분</th>
                                        <th>Powder</th>
                                        <th>Powder Size(D50)</th>
                                        <th>고형분</th>
                                        <th>용제</th>
                                        <th>용도</th>
                                        <th>외관</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>HT-SiO2-100</td>
                                        <td>SiO2</td>
                                        <td>100nm</td>
                                        <td>60wt%</td>
                                        <td className="align-middle" rowSpan='3'>MIBK, MEK, TOL 등</td>
                                        <td className="align-middle" rowSpan='2'>유동성 제어</td>
                                        <td className="align-middle" rowSpan='2'>흰색 반투명</td>
                                    </tr>
                                    <tr>
                                        <td>HT-SiO2-12</td>
                                        <td>SiO2</td>
                                        <td>12nm</td>
                                        <td>38wt%</td>
                                    </tr>
                                    <tr>
                                        <td>HT-TiO2-200</td>
                                        <td>TiO2</td>
                                        <td>200nm</td>
                                        <td>12wt%</td>
                                        <td>산란제</td>
                                        <td>흰색</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;