import { SvgColorProps } from '@/types';
import { Box } from '@mui/material';
import { forwardRef } from 'react';

export const SvgColor = forwardRef(({ src, sx, ...other }: SvgColorProps, ref) => (
  <Box
    component="span"
    className={`svg-color`}
    ref={ref}
    sx={{
      '&:hover': { stroke: 'red', fill: 'red' },
      width: 22,
      height: 22,
      display: 'inline-block',
      bgcolor: 'currentColor',
      mask: `url(${src}) no-repeat center / contain`,
      ...sx,
    }}
    {...other}
  />
));
