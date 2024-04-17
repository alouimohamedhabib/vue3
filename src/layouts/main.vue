<template>
  <div class="container m-auto">
    <div class="bg-fuchsia-300 text-red-950">
      <slot name="header" />
    </div>

    <div class="main">
      <slot name="content" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
