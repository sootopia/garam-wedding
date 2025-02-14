/** @jsxImportSource @emotion/react */
import * as S from './LocationSection.styles';
import BaseHeader from '../common/BaseHeader';
import BaseButton from '../common/BaseButton';
import { useEffect, useRef } from 'react';

const coordsX: number = 128.613742;
const coordsY: number = 35.8789887;

const LocationSection = () => {
  const { naver } = window;

  let map: naver.maps.Map;

  const mapRef = useRef<HTMLDivElement | null>(null);
  const markerRef = useRef<null | naver.maps.Marker>(null);

  // 네이버 지도 초기화
  useEffect(() => {
    if (!mapRef.current || !naver) return;

    const position = new naver.maps.LatLng(coordsY, coordsX);
    const mapOptions: naver.maps.MapOptions = {
      center: position,
      zoom: 16,
    };

    map = new naver.maps.Map(mapRef.current, mapOptions);

    markerRef.current = new naver.maps.Marker({
      position: position,
      map,
      icon: {
        url: '/static/images/location_marker.png', // 256x256 크기의 원본 이미지
        size: new naver.maps.Size(32, 32),
        scaledSize: new naver.maps.Size(32, 32),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(22, 22),
      },
    });
  }, []);

  // 카카오 지도 초기화
  useEffect(() => {
    if (!window.Kakao) {
      const script = document.createElement('script');
      script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js';
      script.async = true;
      script.onload = () => {
        if (!window.Kakao.isInitialized()) {
          window.Kakao.init(import.meta.env.VITE_KAKAO_API_KEY);
        }
      };
      document.head.appendChild(script);
    } else {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(import.meta.env.VITE_KAKAO_API_KEY);
      }
    }
  });

  const isMobileDevice = (): boolean => {
    if (typeof navigator === 'undefined') return false;

    const userAgent = navigator.userAgent.toLowerCase();

    const isMobile = /iphone|ipod|android|blackberry|opera mini|windows phone|iemobile|mobile/.test(
      userAgent,
    );

    const isIPad =
      /ipad/.test(userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    return isMobile || isIPad;
  };

  const handleNavigation = (appName: string) => {
    if (!appName) return;

    const destName = '대구신성교회';

    if (!appName) {
      alert('유효한 접근이 아닙니다.');
      return;
    }

    switch (appName) {
      case 'tmap': // 티맵
        alert('앱이 설치되어 있지 않을 경우 길 안내가 시작되지 않을 수 있습니다.');

        if (isMobileDevice()) {
          location.href = `tmap://?rGoName=${destName}&rGoX=${coordsX}&rGoY=${coordsY}`;
        } else {
          location.href =
            'https://map.naver.com/p/directions/-/14317207.2961065,4283984.6787597,%EB%8C%80%EA%B5%AC%EC%8B%A0%EC%84%B1%EA%B5%90%ED%9A%8C,16044497,PLACE_POI/-/car?c=14.00,0,0,0,dh';
        }

        break;

      case 'naver': // 네이버 지도
        alert('앱이 설치되어 있지 않을 경우 길 안내가 시작되지 않을 수 있습니다.');

        if (isMobileDevice()) {
          location.href = `nmap://navigation?dlat=${coordsY}&dlng=${coordsX}&dname=${destName}&appname=com.nhn.android.nmap;`;
        } else {
          location.href =
            'https://map.naver.com/p/directions/-/14317207.2961065,4283984.6787597,%EB%8C%80%EA%B5%AC%EC%8B%A0%EC%84%B1%EA%B5%90%ED%9A%8C,16044497,PLACE_POI/-/car?c=14.00,0,0,0,dh';
        }

        break;

      case 'kakao': // 카카오내비
        alert('앱이 설치되어 있지 않을 경우 길 안내가 시작되지 않을 수 있습니다.');

        if (isMobileDevice()) {
          if (window.Kakao && window.Kakao.Navi) {
            window.Kakao.Navi.start({
              name: destName,
              x: coordsX,
              y: coordsY,
              coordType: 'wgs84',
            });
          }
        } else {
          location.href =
            'https://map.kakao.com/?map_type=TYPE_MAP&target=car&rt=,,864334,664546&rt1=&rt2=%EB%8C%80%EA%B5%AC%EC%8B%A0%EC%84%B1%EA%B5%90%ED%9A%8C&rtIds=,11006146';
        }

        break;
    }
  };

  return (
    <section css={S.locationSection}>
      <div className="container">
        {/* 상단 영역 */}
        <BaseHeader title="오시는 길" engTitle="LOCATION" />
        <div css={S.locationHeader} className="mb-6">
          <h3 data-aos="fade-up">대구신성교회 2층 본당</h3>
          <p data-aos="fade-up" data-aos-delay="100">
            대구 동구 송라로25길 22-2
          </p>
        </div>
        {/* 상단 영역 */}
      </div>

      {/* 지도 엘리먼트 */}
      <div id="map" ref={mapRef} style={{ width: '100%', height: '250px' }}></div>
      {/* 지도 엘리먼트 */}

      <div className="container mt-10">
        <div css={S.infoGroup} data-aos="fade-up">
          <h4>내비게이션 안내</h4>
          <p className="mb-5">원하시는 앱을 터치하시면 길 안내가 시작돼요.</p>
          <div className="grid grid-cols-3 gap-[6px]">
            <BaseButton variant="default" size="sm" bold onClick={() => handleNavigation('tmap')}>
              <img src="/static/images/button_icon_tmap.svg" alt="" />
              티맵
            </BaseButton>
            <BaseButton variant="default" size="sm" bold onClick={() => handleNavigation('naver')}>
              <img src="/static/images/button_icon_naver.svg" alt="" />
              네이버 지도
            </BaseButton>
            <BaseButton variant="default" size="sm" bold onClick={() => handleNavigation('kakao')}>
              <img src="/static/images/button_icon_kakao.svg" alt="" />
              카카오내비
            </BaseButton>
          </div>
        </div>

        <hr className="my-[30px] border-[#e9e9e9] border-dashed" />

        <div css={S.infoGroup} data-aos="fade-up">
          <h4>지하철</h4>
          <ul>
            <li className="pl-4">
              <span className="absolute block top-[3px] left-0 w-2 h-2 rounded-full bg-[#ce3245]"></span>
              1호선 신천역 1번 출구에서 도보 10분
            </li>
            <li className="pl-4">
              <span className="absolute block top-[3px] left-0 w-2 h-2 rounded-full bg-[#ce3245]"></span>
              1호선 칠성시장역 4번 출구에서 도보 18분
            </li>
          </ul>
        </div>

        <hr className="my-[30px] border-[#e9e9e9] border-dashed" />

        <div css={S.infoGroup} data-aos="fade-up" data-aos-delay="100">
          <h4>버스</h4>
          <h5>동신초등학교건너(20936) 하차</h5>
          <ul>
            <li className="pl-4">
              <span className="absolute block top-[3px] left-0 w-2 h-2 rounded-full bg-[#7182f5]"></span>
              간선 : 410-1, 650
            </li>
            <li className="pl-4">
              <span className="absolute block top-[3px] left-0 w-2 h-2 rounded-full bg-[#5fb73d]"></span>
              지선 : 동구2(북구청방면)
            </li>
          </ul>

          <h5 className="mt-6">동신초등학교앞(20935) 하차</h5>
          <ul>
            <li className="pl-4">
              <span className="absolute block top-[3px] left-0 w-2 h-2 rounded-full bg-[#7182f5]"></span>
              간선 : 410
            </li>
            <li className="pl-4">
              <span className="absolute block top-[3px] left-0 w-2 h-2 rounded-full bg-[#5fb73d]"></span>
              지선 : 동구2(시청방면)
            </li>
          </ul>

          <h5 className="mt-6">강남약국앞2(20475) 하차</h5>
          <ul>
            <li className="pl-4 !leading-6">
              <span className="absolute block top-[8px] left-0 w-2 h-2 rounded-full bg-[#7182f5]"></span>
              간선 : 618(대곡-동호(금강동도착)), <br />
              618((대곡-동호(금강동출발))
            </li>
            <li className="pl-4 !leading-6">
              <span className="absolute block top-[8px] left-0 w-2 h-2 rounded-full bg-[#5fb73d]"></span>
              지선 : 동구3(K2관사방면(둔산경유)), 동구3(K2관사방면), <br />
              동구3(둔산방면), 동구3(부동방면), 동구3(옻골방면)
            </li>
          </ul>
        </div>

        <hr className="my-[30px] border-[#e9e9e9] border-dashed" />

        <div css={S.infoGroup} data-aos="fade-up" data-aos-delay="200">
          <h4>자가용</h4>
          <p className="!leading-6">
            명칭검색 : &quot;대구신성교회&quot; <br />
            주소검색 : 대구 동구 송라로25길 22-2
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
