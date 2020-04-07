import styled from 'styled-components';

const StyledTitleBoard = styled.div`
  cursor: default;
  font-size: 15px;
  font-weight: bold;
  line-height: 26px;
  color: #fff;
  margin: 2px;
  padding: 1px 12px;
  border-radius: 4px;
  height: 25px;
  &&:hover {
    background-color: hsla(0, 0%, 100%, .32);
    cursor: pointer;
  }
`;

export default StyledTitleBoard;