import styled from 'styled-components';

const StyledHeaderButton = styled.button`
  height: 25px;
  padding: 0;
  margin: ${props => (props.margin ? '3px 4px' : '3px 1.5px')};
  align-items: center;
  outline: none;
  background-color: ${props => (props.color ? props.color : 'rgba(255, 255, 255, 0.3)')};
  border-radius: 3px;
  border-image-width: 1;
  border: 0px;
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  cursor: pointer;
  display: flex;
  font-stretch: 100%;
  font-style: normal;
  position: relative;
  text-align: center;
  text-shadow: none;
  white-space: nowrap;
  word-spacing: 0px;
`;

export default StyledHeaderButton;