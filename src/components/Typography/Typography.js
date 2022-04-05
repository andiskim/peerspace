import styled from 'styled-components/native';
import {
  typography,
  space,
  textStyle,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  layout,
  letterSpacing,
  lineHeight,
  textAlign,
} from 'styled-system';

export const Typography = styled.Text`
  ${props => props.underline && 'text-decoration: underline'}
  ${props =>
    props.underline &&
    `text-decoration-color: ${props.theme.colors[props.color.split('.')[0]][props.color.split('.')[1]]}`}
  ${typography}
  ${space}
  ${textStyle}
  ${color}
  ${fontFamily}
  ${fontSize}
  ${layout}
  ${fontWeight}
  ${letterSpacing}
  ${lineHeight}
  ${textAlign}
`;
