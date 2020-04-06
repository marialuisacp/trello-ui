import styled from 'styled-components';
import { styles } from '../../../styles/config';

const StyledHeader = styled.div`
  background-color: rgba(0, 0, 0, 0.15);
  background-image: none;
  box-sizing: border-box;
  color: rgb(23, 43, 77);
  display: flex;
  font-size: ${styles.fontSizeDefault};
  font-weight: 400;
  height: 32px;
  justify-content: space-between;
  line-height: 20px;
  overflow: hidden;
  padding: 0px;
  position: relative;
  text-size-adjust: 100%;
  width: 100%;
  z-index: 10;
`;

export default StyledHeader;