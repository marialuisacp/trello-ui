import styled from 'styled-components';
import { styles } from '../../../styles/config';

const StyledCardText = styled.p`
  color: ${styles.colorText};
  font-family: ${styles.fontDefault};
  padding: 6px 8px 2px;
  position: relative;
  z-index: 10;
  text-decoration: none;
  clear: both;
  display: block;
  margin: 0 0 4px;
  font-size: ${styles.fontSizeDefault};
  line-height: 16px;
  white-space: normal;
`;

export default StyledCardText;