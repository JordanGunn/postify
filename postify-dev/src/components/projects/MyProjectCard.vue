<template>
  <i class="bi bi-hand-thumbs-up"></i>
  <div id="maincard" class="card text">
    <div id="cardheader" class="card-header">
      <!-- <p id="projecttitle"><strong>Chat program written in C.</strong></p> -->
      <p id="projecttitle"><strong>{{ projectName }}</strong></p>
      <!-- <p id="level">( level 3 )</p> -->
      <p id="level">( level {{ projectLevel }} )</p>
    </div>
    <div id="cardbody" class="card-body">
      <h5 class="card-title">Description</h5>
      <!-- <p class="card-text">
        A full implementation of a chat program with a server and client written
        in C.
      </p> -->
      <p class="card-text">
        {{ projectDesc }}
      </p>
      <p>Github link: <a href="https://github.com" class="link-primary">https://github.com</a></p>
    </div>
    <div id="cardfooter">

      <div id="cardinfofooter">
        <!-- <div class="text-muted footercontent">
          Posted on: April 2, 2022
        </div> -->
        <div class="text-muted footercontent">
          Posted on: {{ projectCreationDate }}
        </div>
        <!-- <div class="text-muted footercontent">By: Chuck123</div> -->
        <div class="text-muted footercontent">By: {{ userName }}</div>
        
      </div>
    </div>
    <div class="card text">
      <button class="btn" @click="toggleEdit">Edit Project</button>
    </div>
    <div v-if="edit">
      <EditProject
          :projID="projectID"
          :projName="projectName"
          :projDesc="projectDesc"
          :projLevel="projectLevel"
      ></EditProject>
    </div>

  </div>
</template>

<script>
    // projectUpVotes: Number,
    // projectDownVotes: Number,

import EditProject from "@/components/projects/EditProject";
    import {getAllSolutions} from "@/client/solution";

export default {
  name: "MyProjectCard",
  components: {EditProject},
  data() {
    return {
      edit: false,
    }
  },
  props: {
    userName: String,
    projectID: String,
    projectName: String,
    projectDesc: String,
    projectCreationDate: String,
    projectLevel: Number,
  },
  methods: {
    toggleEdit() {
      console.log(this.projectID);
      this.edit = !this.edit;
    },


    async toSolutions(projID) {
      await this.$router.push("/solution");
      this.solutions = await getAllSolutions({ projID: projID });
      console.log(this.solutions);
      // this.$router.go("/solution/?projID=" + projID);
    },
  },

};
</script>

<style scoped>

.btn {
  width: 80%;
  margin-inline: auto;
}

#maincard {
  border-width: 1em;
  border-color: #5d576b;
}

#projecttitle {
  font-size: 20pt;
  margin: 0;
}

#cardheader {
  border-color: #5d576b;
  border-width: 0.1em;
}

#level {
  margin: 0;
}

#cardinfofooter {
  margin-top: 1em;
}

.votebutton {
  margin: 0.5em;
  margin-left: 1em;
  margin-right: 1em;
}

#cardvote {
  display: flex;
  flex-direction: row;
}

#cardfooter {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 1em;
}

.buttoncontainer {
  display: flex;
  flex-direction: column;
  text-align: center;
}


</style>


