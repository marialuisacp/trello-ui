import styled from 'styled-components';

const StyledHeaderButton = styled.button`
  height: 25px;
  padding: 0;
  margin: ${props => (props.margin ? '3px 4px' : '3px 1.5px')};
  outline: none;
  background-color: ${props => (props.color ? props.color : 'rgba(255, 255, 255, 0.3)')};
  border-radius: 3px;
  border: 0px;
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  cursor: pointer;
  display: flex;
  position: relative;
  text-align: center;
  &&:hover {
    background-color: ${props => (props.hover ? props.hover : 'rgba(255, 255, 255, 0.4)')};
    cursor: pointer;
  }
`;

export default StyledHeaderButton;