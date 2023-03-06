<template>
  <div>
    <le-header></le-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeUser: {
        name: 'LOL',
        description: 'admin du site',
        role: 'premium',
      },
    };
  },
};
</script>