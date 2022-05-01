<template>
  <div>
    <ProjectCard
        :project-name="project"
        :author="authorName"
        :date="date"
        :description="description"
    />

    <button @click="deleteSol">DELETE SOLUTION</button>
    <button @click="goToAdmin">Admin Dashboard</button>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

import router from "@/router";
import ProjectCard from "@/components/projects/ProjectCard";
import {deleteSolution} from "@/client/solution";

export default {
  // eslint-disable-next-line
  name: "Home",
  components: {
    ProjectCard
  },
  data () {
    return {
      project: "COMP4981 Chat Assignment in C",
      authorName: "Mr.Test",
      date: "March 24, 2022",
      description: "Super Duper awesome coding project that you would want to miss."
    };
  },


  setup() {
    const message = ref("Not logged in...");
    const store = useStore();
    const auth = computed(() => store.state.authenticated);

    //TODO Save this code for pop up to log in.
    if (!store.state.authenticated) { router.push("/") }
    return { message, auth };
  },

  methods: {
    async deleteSol() {
      const res = await deleteSolution({ solutionID: 10 });
      console.log(res);
    },
    async goToAdmin() {
      await router.push("adminDashboard")
    }
  },
};
</script>

<style>

</style>