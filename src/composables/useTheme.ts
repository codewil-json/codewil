import { ref } from 'vue';

export type Theme = 'dark' | 'light';

const theme = ref<Theme>(
  document.documentElement.dataset.theme === 'light' ? 'light' : 'dark',
);

function setTheme(nextTheme: Theme) {
  theme.value = nextTheme;
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem('codewil-theme', nextTheme);
  const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  if (themeColor) themeColor.content = nextTheme === 'dark' ? '#0c100e' : '#f3f6ef';
}

export function useTheme() {
  function toggleTheme() {
    setTheme(theme.value === 'dark' ? 'light' : 'dark');
  }

  return { theme, toggleTheme };
}
