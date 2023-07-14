import { createGlobalStyle } from 'styled-components';
import styled from '@emotion/styled';
export const AppGlobal = styled.div`

div:nth-child(1) {
  display:grid;
  margin:0;
  padding:0;
  --orange-dark:#FD5602;
  box-sizing:border-box;
  background:var(--orange-dark);
  min-height:100px;
  text-align:center;
  border:2px solid black;
}
div:nth-child(2) {
  margin:0;
  padding:0;
  box-sizinh:border-box;
  display:grid;
  min-height:calc(100vh - 150px);
  background:#FEDEBE;
  grid-template-cols:12.5% 73% 12.5%;
}

div:nth-child(3) {
  margin:0;
  padding:0;
  box-sizinh:border-box;
  display:grid;
  min-height:30px;
  background:#FD5602;
}


`;
