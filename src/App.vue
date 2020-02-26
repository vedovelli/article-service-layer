<script>
import { mapActions, mapState } from 'vuex';

const methods = mapActions(['fetchUsers']);

const computed = mapState(['users']);

export default {
  name: 'ServiceLayer',
  computed,
  methods,
  mounted() {
    this.fetchUsers().then(data => {
      console.log(data);
    });
  },
};
</script>

<template>
  <div>
    <h1>Service layer</h1>
  </div>
</template>
