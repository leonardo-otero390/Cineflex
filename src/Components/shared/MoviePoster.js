import styled from "styled-components";

export const MoviePoster = styled.li`
  width: ${({footer})=>footer ? '64px': '145px'};
  height: ${({footer})=>footer ? '89px': '209px'};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  margin-left: ${({footer})=>footer ? '10px': '0'};
  margin-bottom: 11px;
img {
    width: ${({footer})=>footer ? '48px': '129px'};
  height: ${({footer})=>footer ? '72px': '193px'};
}
`