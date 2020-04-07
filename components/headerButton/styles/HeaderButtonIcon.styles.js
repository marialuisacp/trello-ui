import styled from 'styled-components';

const StyledHeaderButtonIcon = styled.span`
  color: ${props => (props.fontColor ? props.fontColor : 'rgb(255, 255, 255)')};
  cursor: pointer;
  display: block;
  font-family: trellicons;
  font-size: 16px;
  font-weight: 400;
  height: 25px;
  line-height: 24px;
  text-align: center;
  width: 25px;
  word-spacing: 0px;
  -webkit-font-smoothing: antialiased;
`;

export default StyledHeaderButtonIcon;