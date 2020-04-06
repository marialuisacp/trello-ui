import React from 'react';
import StyledNote from './Note.styles';

const Note = ({ text }) => (
  <StyledNote> {text} </StyledNote>
);

export default Note;