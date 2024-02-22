export default defineNuxtPlugin(() => {
  if (process.client) {
    const theme = localStorage.getItem("ui-theme") ?? "";
    if (theme) {
      const uiConfig = useAppConfig().ui;
      uiConfig.primary = theme;
      uiConfig.gray = theme;
    }
  }
});
