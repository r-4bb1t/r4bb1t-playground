import styled, { keyframes } from "styled-components";
import { STATIC_URL, BREAKPOINT } from "../../constant";

export const Title = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 720px;
  background-image: url(${STATIC_URL.STAR_BACKGROUND}), url(${STATIC_URL.TITLE_BACKGROUND});
  background-repeat: repeat-x;
`;

export const TokkiContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const tokkiRotate = keyframes`
  0% { transform: rotate(45deg) translate(0, 0); }
  25% { transform: rotate(-15deg) translate(-50px, -50px); }
  50% { transform: rotate(45deg) translate(0, 0); }
  75% { transform: rotate(-15deg) translate(50px, 50px); }
  100% { transform: rotate(45deg) translate(0, 0);}
`;

const upDown = keyframes`
  0% { transform: translate(0, 0); }
  50% { transform: translate(0, -20px); }
  100% { transform: translate(0, 0);}
`;

export const Tokki = styled.img`
  width: 128px;
  height: 168px;
  transform-origin: 64px 84px;
  animation: ${tokkiRotate} 15s ease-in-out infinite;
`;

const fade = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.3; }
  77% { opacity: 0.4; }
  78% { opacity: 0.7; }
  79% { opacity: 0.4; }
  80% { opacity: 0.7; }
  81% { opacity: 0.4; }
  100% { opacity: 1; }
`;

export const ReactContainer = styled.div`
  position: relative;
  float: left;
  top: 30%;
  left: 10%;
  width: 160px;
  height: 136px;
`;

export const ReactName = styled.img`
  position: relative;
  left: -80px;
  top: 160px;
  animation: ${fade} 4s ease-in-out infinite;
  visibility: hidden;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    visibility: visible;
  }
`;

export const ReactImg = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 160px;
  height: 136px;
  transform-origin: 80px 68px;
  animation: ${upDown} 3s ease-in-out infinite;
  animation-delay: 1.5s;
`;

export const ReactGif = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 160px;
  height: 136px;
  transform-origin: 80px 68px;
  animation: ${upDown} 3s ease-in-out infinite;
  animation-delay: 1.5s;
`;

export const CContainer = styled.div`
  position: relative;
  float: right;
  top: 20%;
  right: 15%;
`;

export const CName = styled.img`
  position: relative;
  left: 40px;
  top: -80px;
  animation: ${fade} 4s ease-in-out infinite;
  animation-delay: 1.5s;
  visibility: hidden;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    visibility: visible;
  }
`;

export const CImg = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 80px;
  height: 80px;
  animation: ${upDown} 3s ease-in-out infinite;
  animation-delay: 0.5s;
`;

export const UnityContainer = styled.div`
  position: relative;
  float: right;
  top: 50%;
  right: 20%;
  width: 100px;
  height: 100px;
`;

export const UnityImg1 = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100px;
  height: 100px;
  animation: ${upDown} 3s ease-in-out infinite;
`;

export const UnityImg2 = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100px;
  height: 100px;
  animation: ${upDown} 3s ease-in-out infinite;
  animation-delay: 0.2s;
`;

export const UnityName = styled.img`
  position: relative;
  left: -110px;
  top: 120px;
  animation: ${fade} 4s ease-in-out infinite;
  animation-delay: 0.5s;
  visibility: hidden;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    visibility: visible;
  }
`;
