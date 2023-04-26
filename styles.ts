import { styled } from '@stitches/react';

export const TestGradient = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100px',
  fontSize: '100px',
  fontWeight: 'bold',

  // backgroundColor: '$header$desktopMenuLinkColor',
  color: '$header$desktopMenuLinkColor',
  border: 'solid 1px hotpink',

  backgroundColor: 'hotpink',
  // backgroundImage:
  //   'linear-gradient(to right, transparent 0,  pink 0, red 2.5%, blue 2.5%, transparent 5%, transparent 100%)',
  backgroundImage:
    'linear-gradient(to right, pink, transparent, pink 5%, orange 10%, yellow 15%, lightgreen 20%, lightblue 25%, purple 30%, violet 35%, magenta 40%, blue 50%, pink 100%)',
  backgroundSize: '200% 100%',
  // backgroundPosition: '10%', double the last color
  transition: 'background-position 1.33s ease, border-color 0.15s linear',
  textDecoration: 'none',
  '-webkit-text-fill-color': 'transparent',
  // backgroundClip: 'text',
  overflow: 'hidden',

  '&:hover': {
    borderColor: 'red',
    backgroundPosition: '-100% 0',
    color: '$header$desktopMenuLinkColor',
  },
});
