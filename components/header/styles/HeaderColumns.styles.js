import styled from 'styled-components';

const StyledHeaderColumn = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-grow: 1;
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  padding-left: 1px;
  justify-content:  ${props => (props.right ? 'flex-end' : 'normal')};
`;

export default StyledHeaderColumn;

