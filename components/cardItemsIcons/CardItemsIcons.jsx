import React from 'react';
import StyledCardItemsIcons from './styles/CardItemsIcons.styles';
import StyledValues from './styles/Values.styles';
import PropTypes from 'prop-types';
import HeaderButton from '../headerButton/HeaderButton';

const CardItemsIcons = ({ icons }) => (
  <StyledCardItemsIcons>
    {icons && icons.map((icon, key) =>
      <div key={key} style={{ display: 'flex' }}>
        <HeaderButton
          icon={icon.icon}
          fontColor='rgb(107, 119, 140)'
          color='transparent'
          hover='rgba(0, 0, 0, .05)'
        >
        </HeaderButton>
        {icon.value && <StyledValues> {icon.value} </StyledValues>}
      </div>
    )}
  </StyledCardItemsIcons>
);

CardItemsIcons.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.object),
};

export default CardItemsIcons;

