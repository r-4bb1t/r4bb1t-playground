import React from "react";
import * as S from "./styles";
import { STATIC_URL } from "../../constant";

function Title({}) {
  return (
    <>
      <S.Title>
        <S.ReactContainer>
          <S.ReactImg src={STATIC_URL.REACT_IMG} />
          <S.ReactGif src={STATIC_URL.REACT_GIF} />
          <S.ReactName src={STATIC_URL.REACT_NAME} />
        </S.ReactContainer>
        <S.CContainer>
          <S.CName src={STATIC_URL.C_NAME} />
          <S.CImg src={STATIC_URL.C_IMG} />
        </S.CContainer>
        <S.UnityContainer>
          <S.UnityName src={STATIC_URL.UNITY_NAME} />
          <S.UnityImg2 src={STATIC_URL.UNITY_IMG2} />
          <S.UnityImg1 src={STATIC_URL.UNITY_IMG1} />
        </S.UnityContainer>
        <S.TokkiContainer>
          <S.Tokki src={STATIC_URL.TOKKI_IMG} />
        </S.TokkiContainer>
      </S.Title>
    </>
  );
}

export default Title;
