export const useTheme = (theme: 'dark' | 'light') => ({
  systemColor: {
    backgroundColor:
      theme === 'light' ? 'rgba(255,255,255,1)' : 'rgba(6,7,7,1)',
    primary: 'rgba(230,165,48,1)',
    secondary: 'rgba(233,173,49,1)',
    thirdColor: theme === 'light' ? 'rgba(240,240,240,1)' : 'rgba(31,31,31,1)',
    text: theme === 'light' ? 'rgba(6,6,7,1)' : 'rgba(255,255,255,1)',
    success: 'green',
    error: 'red',
    nute: 'gray',
    bottomSheetbg:
      theme === 'light' ? 'rgba(240,240,240,,1)' : 'rgba(41,41,41,1)',
  },
});
