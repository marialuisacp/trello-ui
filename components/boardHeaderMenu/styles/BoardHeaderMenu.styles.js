import styled from 'styled-components';
import { styles } from '../../../styles/config';

const StyledBoardHeaderMenu = styled.div`
  background-color: transparent;
  background-image: none;
  box-sizing: border-box;
  color: rgb(23, 43, 77);
  display: flex;
  font-size: ${styles.fontSizeDefault};
  font-weight: 400;
  height: 36px;
  justify-content: space-between;
  line-height: 20px;
  overflow: hidden;
  padding: 0px;
  position: relative;
  width: 100%;
  z-index: 10;
  padding-top: 2px;
`;

export default StyledBoardHeaderMenu;