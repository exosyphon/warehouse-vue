<template>
  <ul>
    <li v-for="warehouse in warehouses" :key="warehouse.id">
      {{warehouse.name}}
    </li>
  </ul>
</template>

<script>
import { mapSagas } from 'vuex-saga';

export default {
  name: "Warehouses",
  methods: {
      ...mapSagas({
        fetchWarehouses: "fetchWarehouses"
      })
      // fetchWarehouses: (payload) => {
      //   return this.$run(fetchWarehouses, payload);
      // }
    },
  computed: {
    warehouses() {
      return this.$store.state.warehouses;
    }
  },
  created() {
    this.fetchWarehouses().then(res => {
      this.$store.state.warehouses = res;
    });
  }
};
</script>

<style scoped>

</style>
