import styled from 'styled-components';

export const SectionTitle = styled.h1`
  height: 110px;
  width: 100%;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height:28.13px;
  color: ${({success})=>success? "#247A6B":""};
`