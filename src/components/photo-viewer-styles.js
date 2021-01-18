import styled from "styled-components";

export const Wrapper = styled.div`
position: absolute;
z-index: 9;
text-align: center;
height: 100%;
width: 100%;
`;

export const BackgroundImage = styled.img`
cursor: move;
z-index: 10;
color: #fff;
top: ${props => props.top ? props.top : "0"};
left: ${props => props.left ? props.left : "0"};
height: 100%;
width: 100%;
position:relative;
`;