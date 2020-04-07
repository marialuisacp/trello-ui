import React from 'react';
import PropTypes from 'prop-types';
import Styledlabel from './styles/Label.styles';
import { colors } from './defaultLabelColors';

const Label = ({ color }) => (
  <Styledlabel color={(color && colors && colors[color] || 'red')}></Styledlabel>
);

Label.propTypes = {
  color: PropTypes.string,
};

export default Label;