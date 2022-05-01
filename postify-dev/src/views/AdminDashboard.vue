<template>
  <div id="GET">
    <h1> {{ $t('admin.getRequests') }} </h1>
    <p>/user {{ adminStats[0].getUserAPI }}</p>
    <p>/users {{ adminStats[0].getAllUserAPI }}</p>
    <p>/project {{ adminStats[0].getProjectAPI }}</p>
    <p>/projects {{ adminStats[0].getAllProjectsAPI }}</p>
    <p>/solution {{ adminStats[0].getSolutionAPI }}</p>
    <p>/solutions {{ adminStats[0].getAllSolutionsAPI }}</p>
  </div>
  <div id="POST">
    <h1> {{ $t('admin.postRequests') }} </h1>
    <p>/login {{ adminStats[0].loginUserAPI }}</p>
    <p>/solution {{ adminStats[0].createSolutionAPI }}</p>
    <p>/user {{ adminStats[0].createUsersAPI }}</p>
    <p>/project {{ adminStats[0].createProjectAPI }}</p>
  </div>
  <div id="PUT">
    <h1> {{ $t('admin.putRequests') }} </h1>
    <p>/solution {{ adminStats[0].updateSolutionAPI }}</p>
    <p>/project {{ adminStats[0].updateProjectAPI }}</p>
  </div>
  <div id="DELETE">
    <h1> {{ $t('admin.deleteRequests') }} </h1>
    <p>/solution {{ adminStats[0].deleteSolutionAPI }}</p>
    <p>/project {{ adminStats[0].deleteProjectAPI }}</p>
  </div>
</template>


<script>
import {getAdminStats} from "@/client/admin";

export default {
  name: "AdminDashboard",
  data() {
    return {
      adminStats: [],
    }
  },
  methods: {
    async fetchStats() {
      const res = await getAdminStats();
      console.log(res);
      this.adminStats = res;
    }
  },
  mounted: async function() {
    await this.fetchStats();
  }
}
</script>

<style scoped>

</style>