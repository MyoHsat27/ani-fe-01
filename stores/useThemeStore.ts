export const useThemeStore = defineStore("themes", {
  state: () => ({
    currentTheme: process.client
      ? localStorage.getItem("theme")
      : useAppConfig().ui.primary,
    themeModes: [
      { name: "Teal", theme: "themeTeal" },
      { name: "Warm", theme: "themeWarm" },
      { name: "Love", theme: "themeLove" },
    ],
  }),
  actions: {
    toggleDarkMode() {
      useColorMode().preference = this.isDarkMode() ? "light" : "dark";
    },
    isDarkMode() {
      return useColorMode().value === "dark";
    },
    changeTheme(theme: string) {
      const config = useAppConfig();
      config.ui.primary = theme;
      config.ui.gray = theme;
      if (process.client) {
        localStorage.setItem("ui-theme", theme);
      }
      this.currentTheme = theme;
    },
  },
});
