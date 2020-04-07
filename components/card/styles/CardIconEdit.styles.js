import styled from 'styled-components';

const StyledIconEdit = styled.span`
  height: 25px;
  padding: 0;
  opacity: 0;
  margin: ${props => (props.margin ? '3px 4px' : '3px 1.5px')};
  background-color: transparent;
  font-family: trellicons;
  border-radius: 3px;
  box-sizing: border-box;
  color: rgb(107, 119, 140);
  cursor: pointer;
  text-align: center;
  position: absolute;
  right: 8px;
  top: 4px;
  &&:hover {
    background-color: rgba(255, 255, 255, 0.4);
    cursor: pointer;
  }
`;

export default StyledIconEdit;