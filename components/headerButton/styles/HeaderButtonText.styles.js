import styled from 'styled-components';

const StyledHeaderButtonText = styled.span`
  color: ${props => (props.fontColor ? props.fontColor : 'rgb(255, 255, 255)')};
  overflow: hidden;
  padding: 0 8px 0 0px;
  max-width: 150px;
  font-weight: ${props => (props.light ? 'normal' : 'bold')};
  line-height: 26px;
  white-space: nowrap;
  color: rgb(255,255,255);
  height: 26px;
`;

export default StyledHeaderButtonText;