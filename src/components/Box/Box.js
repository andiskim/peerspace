import styled from 'styled-components/native';
import { compose, space, layout, color, border, flexbox, position, typography } from 'styled-system';

export const Box = styled.View`
  ${compose(space, layout, color, flexbox, border, position, typography)}
`;
