import styled from 'styled-components';

const StyledLabel = styled.div`
  height: 8px;
  display: block;
  margin: 6px 0px 0px 8px;
  text-shadow: none;
  width: 40px;
  border-radius: 4px;
  background-color: ${props => (props.color)};
  position: relative;
  top: 2px;
`;

export default StyledLabel;