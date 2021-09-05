import styled from 'styled-components'
export const OrangeButton = styled.button`
 font-size: 18px;
 text-decoration:none;
 color:white;
 width: ${({ session }) => session ? "83px" : "225px"};
    height: 42px;
    margin: ${({ session }) => session ? "0 8px 0 0" : "0 auto"};
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e8833a;
    border:none;
    border-radius: 3px;
 `