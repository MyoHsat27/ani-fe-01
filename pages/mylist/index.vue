<template>
  <div>
    <div>MyLists (Private) GENRES</div>

    <UButton
      v-for="theme in useThemeStore().themeModes"
      :key="theme.name"
      :label="theme.name"
      @click="change(theme.theme)"
    />

    <UButton @click="useThemeStore().toggleDarkMode()"
      >Toggle Dark Mode</UButton
    >
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "private-list",
});

useHead({
  title: "AnimePortal - MyLists",
  meta: [
    {
      name: "AnimePortal - MyLists",
      content: "AnimePortal - My Anime & Manga Lists",
    },
  ],
});

const change = (theme: string) => {
  useThemeStore().changeTheme(theme);
};
</script>
