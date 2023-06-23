export type ThemeContextType = {
  isDarkMode: boolean;
  toggleMode: () => void;
};

export type NavLinkType = {
  path: string;
  icon: ({ className }: { className: string }) => JSX.Element;
  title: string;
};
