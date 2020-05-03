<template>
  <vx-card title="Users List" subtitle="List data users account">
    <div>
      <vs-table stripe :data="users.data.data">
        <template slot="thead">
          <vs-th>Email</vs-th>
          <vs-th>Username</vs-th>
          <vs-th>Created at</vs-th>
        </template>
        <template slot-scope="{data}">
          <vs-tr :key="indextr" v-for="(tr,indextr) in data">
            <vs-td :data="data[indextr].email">{{data[indextr].email}}</vs-td>
            <vs-td :data="data[indextr].username">{{data[indextr].username}}</vs-td>
            <vs-td :data="data[indextr].created_at">{{data[indextr].created_at}}</vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </div>
  </vx-card>
</template>
<script>
import moduleUsers from "./../../store/users/moduleUsers";

export default {
  data() {
    return {
      isMounted: false
    };
  },
  computed: {
    currentPage() {
      if (this.isMounted) {
        return this.$refs.table.currentx;
      }
    },
    users() {
      // console.log(this.$store.state.users)
      return this.$store.state.users.users;
    },
    queriedItems() {
      return this.$refs.table
        ? this.$refs.table.queriedResults.length
        : this.users.length;
    }
  },
  methods: {},
  created() {
    if (!moduleUsers.isRegistered) {
      this.$store.registerModule("users", moduleUsers);
      moduleUsers.isRegistered = true;
    }
    this.$store.dispatch("users/fetchDataListItems");
  },
  mounted() {
    this.isMounted = true;
  }
};
</script>