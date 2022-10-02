import { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import useLocalStorage from 'hooks/useLocalStorage';
import { darkTheme, lightTheme, MaterialUISwitch } from 'utils/customSwitch';

export default function ThemeSwitch({ className }) {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('theme-type', theme);
  }, [theme]);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <MaterialUISwitch
        sx={{ m: 1 }}
        checked={theme === 'dark'}
        onChange={() => {
          theme === 'dark' ? setTheme('light') : setTheme('dark');
        }}
        className={className}
      />
    </ThemeProvider>
  );
}
