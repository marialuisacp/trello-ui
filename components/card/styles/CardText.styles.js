import styled from 'styled-components';
import { styles } from '../../../styles/config';

const StyledCardText = styled.span`
  color: ${styles.colorText};
  font-family: ${styles.fontDefault};
  overflow: hidden;
  padding: 6px 8px 2px;
  position: relative;
  z-index: 10;
  text-decoration: none;
  clear: both;
  display: block;
  margin: 0 0 4px;
  word-wrap: break-word;
  font-size: ${styles.fontSizeDefault}
`;

export default StyledCardText;