import styled from 'styled-components';

const StyledCard = styled.div`
  cursor: pointer;
  position: relative;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9, 30, 66, .25);
  margin-bottom: 8px;
  max-width: 300px;
  min-height: 20px;
  position: relative;

  &&:hover {
    background-color: #f4f5f7;
    border-bottom-color: rgba(9, 30, 66, .25);
  }

  &&:hover .icon-edit {
    opacity: 1;
  }
`;

export default StyledCard;