<template>
  <div id="projects">
    <div v-if="routeName != 'CreateProject'" class="d-grid gap-2">
      <button
        id="createProjectButton"
        @click="createProject"
        class="btn-color btn-lg me-md-2"
        type="button"
      >
        Create Project
      </button>
    </div>

    <div id="myprojects" v-if="routeName === 'Projects'">

        <div
          id="projectcards"
          v-for="project in this.projects"
          :key="project.projID"
        >
          <div id="maincard" class="card text">
          <MyProjectCard
            :userName="project.userID"
            :projectID="project.projID"
            :projectName="project.projName"
            :projectDesc="project.projDesc"
            :projectCreationDate="project.projCreationDate"
            :projectLevel="project.projLevel"
          />
            <button @click="changeRoute(project.projID)"> {{ $t('project.showSolutions') }} </button>
          </div>
      </div>
    </div>

    <!-- <button @click="changeRoute">Change Route</button> -->
    <div id="solutions" v-if="routeName == 'Solution'">
      <div
        id="solutioncards"
        v-for="solution in this.solutions"
        :key="solution.solutionID"
      >
        <SolutionCard
          :userName="solution.userID"
          :projectName="solution.projID"
          :solutionDesc="solution.solDesc"
          :solGitLink="solution.solGitLink"
          :solUpVote="solution.SolUpVote"
          :solDownVote="solution.solDownVote"
          :solEditDate="solution.solEditDate"
        />
      </div>
    </div>

    <div v-if="routeName == 'CreateProject'" class="d-grid gap-2">
      <h1 id="createProjectTitle"><i>Create your project</i></h1>

      <div class="mb-3">
        <label for="userid" class="form-label">User ID</label>
        <input type="number" class="form-control" id="userid" v-model="form.userID" placeholder="1-100"/>
      </div>

      <div class="mb-3">
        <label for="projName" class="form-label">Project Name</label>
        <input
          type="text"
          class="form-control"
          placeholder="my project name"
          id="projName"
          v-model="form.projName"
        />
      </div>

      <div class="mb-3">
        <label for="projectDiff" class="form-label"
          >Project Difficulty Level</label
        >
        <input
          type="number"
          class="form-control"
          id="projectDiff"
          placeholder="1-10"
          v-model="form.projLevel"
        />
      </div>

      <div class="mb-3">
        <label for="projectDescTextarea" class="form-label"
          >Project Description</label
        >
        <textarea
          class="form-control"
          rows="10"
          id="projectDescTextarea"
          placeholder="Please contribute code to my beautiful project..."
          v-model="form.projDesc"
        ></textarea>
      </div>

      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button @click="createProjectDB" class="btn-color btn-lg me-md-2" type="button">Create Project</button>
      </div>
    </div>

  </div>
</template> 

<script>
// import { ref, computed } from "vue";
// import { useStore } from "vuex";
// import {getUser} from "@/client/user";
// import router from "@/router";
import MyProjectCard from "@/components/projects/MyProjectCard";
import SolutionCard from "@/components/projects/SolutionCard";
import { getAllProjects, createProject } from "@/client/project";
import { getAllSolutions } from "@/client/solution";

export default {
  // eslint-disable-next-line
  name: "Home",
  components: {
    MyProjectCard,
    SolutionCard,
  },

  methods: {
    async getAllProj() {
      // do res.filter for userid
      // let filtered = res.filter((proj) => {
      //   return proj.userID == userID;
      // });
      const res = await getAllProjects();
      return res;
    },

    async changeRoute(projID) {
      await this.$router.push("/solution");
      this.solutions = await getAllSolutions({ projID: projID });
      console.log(this.solutions);
      // this.$router.go("/solution/?projID=" + projID);
    },

    createProject() {
      this.$router.push("/createProject");
    },

    // userId, title, desc, level = 5
    async createProjectDB() {
      const res = await createProject(
          this.form.userID,
          this.form.projName,
          this.form.projDesc,
          this.form.projLevel,        
      );
      console.log(res);
    }
  },

  data() {
    return {
      projects: [],
      currentProjID: 0,
      solutions: [],
      form: {
        userID: Number,
        projName: null,
        projDesc: null,
        projLevel: Number,
      },
      // userName: "Chuck123",
      // projectName: "COMP4981 Chat Assignment in C",
      // projectDesc: "Super Duper awesome coding project that you would want to miss.",
      // projectCreationDate: "March 24, 2022",
      // projectLevel: 3,
      // projectUpVotes: 22,
      // projectDownVotes: 5
    };
  },

  async created() {
    const res = await this.getAllProj();
    this.projects = res;
    // console.log(this.projects);
  },

  computed: {
    routeName() {
      console.log(this.$route.name);
      return this.$route.name;
    },
  },
};
</script>

<style>

#projectcards {
  margin-bottom: 5em;
}

#solutioncards {
  margin-bottom: 5em;
}

#createProjectButton {
  margin-bottom: 2em;
}

#createProjectTitle {
  color: #8884ff;
}

.btn-color {
  background-color: #8884ff;
  font-weight: bold;
}
</style>