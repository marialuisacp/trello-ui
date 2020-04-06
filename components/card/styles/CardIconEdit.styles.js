import styled from 'styled-components';

const StyledIconEdit = styled.span`
  height: 25px;
  padding: 0;
  opacity: 0;
  margin: ${props => (props.margin ? '3px 4px' : '3px 1.5px')};
  align-items: center;
  outline: none;
  background-color: transparent;
  font-family: trellicons;
  border-radius: 3px;
  border-image-width: 1;
  border: 0px;
  box-sizing: border-box;
  color: rgb(107, 119, 140);
  cursor: pointer;
  display: flex;
  font-stretch: 100%;
  font-style: normal;
  position: relative;
  text-align: center;
  text-shadow: none;
  white-space: nowrap;
  word-spacing: 0px;
  &&:hover {
    background-color: rgba(255, 255, 255, 0.4);
    cursor: pointer;
  }
`;

export default StyledIconEdit;