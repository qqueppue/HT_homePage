import React, { useEffect } from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { companyMain, CompanyGreeting, CompanyPicture, ProductLine1_1, ProductLine1_2, ProductLine2, ProductLine3, mapSampleImg } from '../../images';
import '../../styles/Company.css';
import * as Icon from '../../icons/index';

const { kakao } = window;

const tapList = ['greeting', 'workplace', 'location', 'production'];
const tapHeight = [];

function Greetings() {
    useEffect(() => {
        // window.scrollTo(0, 0);
        // window.location.href = '/company#';

        // 탭의 위치 저장
        var tempHeight = 0;
        tapList.map((item) => {
            let element = document.getElementById(item);
            tempHeight += element.offsetHeight;
            tapHeight.push(tempHeight);
        });

        // var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        // mapOption = { 
        //   center: new kakao.maps.LatLng(36.09295754963533, 128.37547928628925), // 지도의 중심좌표
        //   level: 4 // 지도의 확대 레벨
        // };
      
        // // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        // var map = new kakao.maps.Map(mapContainer, mapOption); 
    
        // var geocoder = new kakao.maps.services.Geocoder();
        // // 주소로 좌표를 검색합니다
        // geocoder.addressSearch('경북 구미시 1공단로6길 102(공단동) 7동', function(result, status) {
        //   // 정상적으로 검색이 완료됐으면 
        //   if (status === kakao.maps.services.Status.OK) {
        //     var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
    
        //     // 결과값으로 받은 위치를 마커로 표시합니다
        //     var marker = new kakao.maps.Marker({
        //         map: map,
        //         position: coords
        //     });
    
        //     // 인포윈도우로 장소에 대한 설명을 표시합니다
        //     var infowindow = new kakao.maps.InfoWindow({
        //         content: '<div style="width:150px;text-align:center;padding:6px 0;">(주)에이치티</div>'
        //     });
        //     infowindow.open(map, marker);
    
        //     // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        //     map.setCenter(coords);

        //     // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
        //     var mapTypeControl = new kakao.maps.MapTypeControl();

        //     // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
        //     // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
        //     map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

        //     // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
        //     var zoomControl = new kakao.maps.ZoomControl();
        //     map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
        //     // 스크롤을 통해 줌인아웃 제어
        //     map.setZoomable(false);
        //   } 
        // });    
    }, []);

    document.addEventListener("scroll", () => {
        var currHeight = window.pageYOffset;
        var selectedTap = '';

        tapHeight.map((item, idx) => {
            if (currHeight >= item && currHeight < tapHeight[idx+1]) {
                selectedTap = tapList[idx];
                // console.log(`tapList: ${selectedTap} / idx: ${idx} / currHeight: ${currHeight}`);
                var selecteId = document.getElementById(selectedTap);
                console.log(selecteId)
            }
        });

        const company_navbar = document.querySelector("#company_navbar");
        console.log(company_navbar);
        if (company_navbar !== null) {
            const c_scrollY = window.scrollY;
            
            if (c_scrollY > 580) {
                company_navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
                
            } else {
                company_navbar.style.backgroundColor = 'transparent';
            }
            company_navbar.style.transition = 'all var(--animation-duration) ease-in';
            company_navbar.style.transitionDuration = '0.4s';
            company_navbar.style.transitionTimingFunction = 'ease';
        }
    });
    
    return(
        <div>
            <div className="main-container">
                <img src={companyMain}></img><label>회사소개</label>
            </div>
            
            <Nav id="company_navbar" className="navbar sticky-top company-nav">
                <Nav.Item className="nav nav-pills">
                    <Nav.Link className="nav-item" href="#greeting">인사말</Nav.Link>
                    <Nav.Link className="nav-item" href="#workplace">사업장 소개</Nav.Link>
                    <Nav.Link className="nav-item" href="#location">오시는길</Nav.Link>
                    <Nav.Link className="nav-item" href="#production">생산설비</Nav.Link>
                </Nav.Item>
            </Nav>

            <div data-spy="scroll" data-target="#company_navbar" data-offset="0" style={{ background: 'white' }}>
                <div id="greeting">
                    <div style={{ margin: '0vw 10vw' }}>
                        <div className='sub-title'>
                            <div>
                                <label>인 사 말</label>
                                <p>　　　</p>
                            </div>
                        </div>
                        <Row>
                            <Col sm={5}>
                                <img src={CompanyGreeting} style={{width: '80%', height: '100%'}}></img>
                            </Col>
                            <Col sm={7}>
                                <div className='greeting_content'>
                                    <div style={{ fontSize: '1.5rem' }}>저희 <strong style={{ color: '#0070c0' }}>에이치티(HT)</strong>는</div>
                                    <div style={{ fontSize: '1.2rem' }}>독보적인 핵심기술을 이용하여 건축 유리, 자동차 유리 등<br/> 우리 생활에 밀접한 분야에서 적용 가능한 여러 분산액들을 제조하고 있습니다.</div>
                                    <div style={{ fontSize: '1.2rem' }}>풍부한 개발 경험을 바탕으로 <br/>고객 여러분의 니즈에 충실히 따른 제품을 만드는데 온 역량을 집중 하겠습니다.</div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

                <div id="workplace">
                    <div style={{ margin: '0vw 10vw' }}>
                        <div className='sub-title'>
                            <div>
                                <label>사업장 소개</label>
                                <p>　　　</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'auto' }}>
                            <img src={CompanyPicture} style={{ height: '500px', width: 'auto'}}></img>
                        </div>
                    </div>
                </div>

                <div id="location">
                    <div style={{ margin: '0vw 10vw' }}>
                        <div className='sub-title'>
                            <div>
                                <label>오시는 길</label>
                                <p>　　　</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column'}}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'auto' }}><img style={{ width: '100%', height: '400px' }} src={mapSampleImg} /></div>
                            {/* <div id={"map"} style={{ width: '100%', height: '400px' }}></div> */}
                            <Row>
                                <Col sm={3} className='location_wrap'>
                                    <div className='location_info'>
                                        <div>
                                            <img src={Icon.geo_alt_fill} />
                                        </div>
                                        <h5>주소</h5>
                                        <p style={{ fontSize: '18px', fontWeight: 300 }}>경북 구미시 <br/>1공단로6길 102(공단동) 7동</p>
                                    </div>
                                </Col>
                                <Col sm={3} className='location_wrap'>
                                    <div className='location_info'>
                                        <div>
                                            <img src={Icon.telephone_fill} />
                                        </div>
                                        <h5>TEL.</h5>
                                        <p style={{ fontSize: '24px', fontWeight: 300 }}>010-5061-6607</p>
                                    </div>
                                </Col>
                                <Col sm={3} className='location_wrap'>
                                    <div className='location_info'>
                                        <div>
                                            <img src={Icon.file_earmark_text_fill} />
                                        </div>
                                        <h5>FAX.</h5>
                                        <p style={{ fontSize: '24px', fontWeight: 300 }}>070-7543-0246</p>
                                    </div>
                                </Col>
                                <Col sm={3} className='location_wrap'>
                                    <div className='location_info'>
                                        <div>
                                            <img src={Icon.envelope_at_fill} />
                                        </div>
                                        <h5>E-mail</h5>
                                        <p style={{ fontSize: '24px', fontWeight: 300 }}>tem1255@naver.com</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
                
                <div id="production">
                    <div className='sub-title'>
                        <div>
                            <label>생산설비</label>
                            <p>　　　</p>
                        </div>
                    </div>
                    <div style={{ margin: '0vw 10vw' }}>
                        <Row className='production_wrap'>
                            <Col sm={3}>
                                <div className='product_content'>
                                    <label>생산1실</label>
                                    <label>보유설비: 반응조 2대</label>
                                </div>
                            </Col>
                            <Col sm={9} className='product_img'>
                                <img src={ProductLine1_1} />
                                <img src={ProductLine1_2} />
                            </Col>
                        </Row>
                        <Row className='production_wrap'>
                            <Col sm={3}>
                                <div className='product_content'>
                                    <label>생산2실</label>
                                    <label>보유설비: 나노밀 6대</label>
                                </div>
                            </Col>
                            <Col sm={9} className='product_img'>
                                <img src={ProductLine2} />
                            </Col>
                        </Row>
                        <Row className='production_wrap'>
                            <Col sm={3}>
                                <div className='product_content'>
                                    <label>생산3실</label>
                                    <label>보유설비: 나노밀 1대, Kneader1대</label>
                                </div>
                            </Col>
                            <Col sm={9} className='product_img'>
                                <img src={ProductLine3} />
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Greetings;