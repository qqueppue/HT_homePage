import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

import { CusomerMain } from '../../images';
import '../../styles/Customer.css';
import * as Icon from '../../icons/index';

const input_list = ['name_label', 'email_label', 'title_label', 'content_label', 'checkpers_label'];

function Customer() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [checkpers, setCheckpers] = useState(false);

    const handleInput = (event) => {
        var checkedInput = event.target.name;
        handleChangeIcon(checkedInput);
    }

    const handleChangeIcon = (name) => {
        var checkName = name + "_label";
        input_list.map((item) => {
            const checked_label = document.querySelector("." + item);
            if (item === checkName) checked_label.style.filter = "invert(26%) sepia(90%) saturate(1735%) hue-rotate(185deg) brightness(94%) contrast(106%)";
            else checked_label.style.filter = "invert(87%) sepia(0%) saturate(0%) hue-rotate(256deg) brightness(88%) contrast(90%)";
        });
    }

    const checkFomr = () => {
        if (name == "") {
            handleChangeIcon("name");
            alert("성함을 입력해주세요.");
            return false;

        } else if (email == "") {
            handleChangeIcon("email");
            alert("이메일 주소를 입력해주세요.");
            return false;
            
        } else if (title == "") {
            handleChangeIcon("title");
            alert("문의 제목을 입력해주세요.");
            return false;

        } else if (content == "") {
            handleChangeIcon("content");
            alert("문의 내용을 입력해주세요.");
            return false;

        } else if (checkpers == false) {
            handleChangeIcon("checkpers");
            alert("개인정보 처리방침에 동의해주세요.");
            return false;

        } else {
            const inquiry_form = document.forms['inquiry_form'];
            inquiry_form.action = '/api/sendMail';
            // inquiry_form.submit();

            var check_submit = window.confirm('제작 및 견적 문의를 접수하시겠습니까?');
            return check_submit;
        }
    };

    const result_submit = (evt) => {
        console.log("evt");
        console.log(evt.target.results);

        var iframe1 = document.querySelector("iframe").results;
        console.log("iframe1");
        console.log(iframe1);

        var iframe2 = document.getElementsByTagName('iframe')[0].contentWindow.document.querySelector("pre");
        if (iframe2 == true) {
            console.log('1');
        } else if (iframe2 == false) {
            console.log('2');
        } else if (iframe2 == 'true') {
            console.log('3');
        } else if (iframe2 == 'false') {
            console.log('4');
        } else {
            console.log('5');
        }
        console.log("iframe2");
        console.log(iframe2);
        
        var temp1 = evt.target.contentDocument.body;
        console.log('temp1');
        console.log(temp1);
    };

    return(
        <div>
            <div className="main-container">
                <img src={CusomerMain}></img><label>고객센터</label>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', background: 'white' }}>
                <Form name="inquiry_form" method='post' target='blankifm' onSubmit={checkFomr} style={{ margin: '10vw', width: '1000px' }}>
                    <Row><label className='customer_title'>제작 및 견적 문의</label></Row>
                    <Form.Group className="mb-3">
                        <Row className="align-items-center">
                            <Col sm={3} className="my-1 index-list">
                                <Form.Label><img className='icon name_label' src={Icon.asterisk} /><label>성함</label></Form.Label>
                            </Col>
                            <Col sm={9} className="my-1">
                                <Form.Control type="text" id='name' name='name' value={name} onChange={(evt) => { setName(evt.target.value); }} onClick={handleInput} />
                            </Col>
                        </Row>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Row className="align-items-center">
                            <Col sm={3} className="my-1 index-list">
                                <Form.Label><img className='icon email_label' src={Icon.asterisk} /><label>이메일 주소</label></Form.Label>
                            </Col>
                            <Col sm={9} className="my-1">
                                <Form.Control type="email" id='email' name='email' value={email} onChange={(evt) => { setEmail(evt.target.value); }} onClick={handleInput} />
                            </Col>
                        </Row>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Row className="align-items-center">
                            <Col sm={3} className="my-1 index-list">
                                <Form.Label><img className='icon title_label' src={Icon.asterisk} /><label>문의 제목</label></Form.Label>
                            </Col>
                            <Col sm={9} className="my-1">
                                <Form.Control type="text" id='title' name='title' value={title} onChange={(evt) => { setTitle(evt.target.value); }} onClick={handleInput} />
                            </Col>
                        </Row>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Row className="align-items-center index-list">
                            <Col sm={3} className="my-1">
                                <Form.Label><img className='icon content_label' src={Icon.asterisk} /><label>문의 내용</label></Form.Label>
                            </Col>
                            <Col sm={9} className="my-1">
                                <Form.Control as="textarea" id='content' name='content' value={content} onChange={(evt) => { setContent(evt.target.value); }} onClick={handleInput} />
                            </Col>
                        </Row>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Row className="align-items-center">
                            <Col sm={12} className="my-1 index-list">
                                <Form.Label><img className='icon checkpers_label' src={Icon.asterisk} /><label>개인정보 처리 방침</label></Form.Label>
                            </Col>
                            <div className="scroll-box">
								(주)에이치티는 기업/단체 및 개인의 정보 수집 및 이용 등 처리에 있어 아래의 사항을 관계법령에 따라 고지하고 안내해 드립니다. <br/>
								<br/>
								1. 정보 수집의 이용 목적 : 상담 접수 및 진행<br/>
								2. 수집/이용 항목 : 이름, 휴대전화, 이메일, 상담 내용<br/>
								3. 보유 및 이용 기간 : 상담 종료 후 6개월, 정보제공자의 삭제 요청 시 즉시<br/>
								4. 개인 정보처리 담당 : 전화 010-5061-6607 / 이메일 tem1255@naver.com
							</div>
                            <Col sm={12} className="my-1">
                                <Form.Check reverse type="checkbox" id='checkpers' name='checkpers' label="개인정보 처리 방침에 동의합니다." checked={checkpers} onChange={(evt) => { setCheckpers(!checkpers) }} onClick={handleInput} />
                            </Col>
                        </Row>
                    </Form.Group>

                    <Col className="my-1" style={{ display: 'flex', justifyContent: 'center' }}>
                        {/* <Button variant="primary" onClick={checkFomr}> */}
                        <Button variant="primary" type='submit'>
                            접수
                        </Button>
                    </Col>
                </Form>
            </div>
            <iframe name='blankifm' style={{ display: 'none' }} onLoad={(evt) => { result_submit(evt); }}></iframe>
        </div>
    );
}

export default Customer;