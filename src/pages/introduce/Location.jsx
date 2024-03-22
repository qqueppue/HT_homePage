import React, { useEffect } from 'react';

const { kakao } = window;

function Location() {
    useEffect(() => {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = { 
          center: new kakao.maps.LatLng(36.09295754963533, 128.37547928628925), // 지도의 중심좌표
          level: 3 // 지도의 확대 레벨
        };
      
        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        var map = new kakao.maps.Map(mapContainer, mapOption); 
    
        var geocoder = new kakao.maps.services.Geocoder();
        // 주소로 좌표를 검색합니다
        geocoder.addressSearch('경북 구미시 1공단로6길 102(공단동) 7동', function(result, status) {
          // 정상적으로 검색이 완료됐으면 
          if (status === kakao.maps.services.Status.OK) {
            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
    
            // 결과값으로 받은 위치를 마커로 표시합니다
            var marker = new kakao.maps.Marker({
                map: map,
                position: coords
            });
    
            // 인포윈도우로 장소에 대한 설명을 표시합니다
            var infowindow = new kakao.maps.InfoWindow({
                content: '<div style="width:150px;text-align:center;padding:6px 0;">(주)에이치티</div>'
            });
            infowindow.open(map, marker);
    
            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
          } 
        });    
    }, [])

    return(
        <div>
            <div id={"map"} style={{ width: '100%', height: '500px' }}></div>
        </div>
    )
}

export default Location;