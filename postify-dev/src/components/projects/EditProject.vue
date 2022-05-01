<template>
  <div id="edit-project">
    <div class="edit-proj-body px-3">
      <div class="modal-body">
        <div class="d-flex justify-content-between">
          <h2>{{ $t('project.projectDetails') }}</h2>
        </div>
        <div class="mb-3">
          <label
              for="projName"
              class="form-label text-black-50 fs-6"
          >{{ projName }}</label
          >
          <input
              type="text"
              class="form-control"
              id="projName"
              placeholder="project name"
              v-model="pName"
          />
        </div>
        <div class="mb-3">
          <label
              for="projDesc"
              class="form-label text-black-50 fs-6"
          >{{ projDesc }}</label
          >
          <input
              type="text"
              class="form-control"
              style="text-transform: capitalize"
              id="projDesc"
              v-model="pDesc"
          />
        </div>
        <div class="mb-3">
          <label
              for="projLevel"
              class="form-label text-black-50 fs-6"
          >{{ projLevel }}</label
          >
          <input
              type="text"
              class="form-control"
              style="text-transform: capitalize"
              id="projLevel"
              v-model="pLevel"
          />
        </div>
      </div>
      <div class="modal-footer border-0 justify-content-start">
        <button
            type="button"
            class="btn flex-grow-1 btn-primary"
            @click="updateProj"
        >
          {{ $t('general.accept') }}
        </button>
        <button
            type="button"
            class="btn flex-grow-1 btn-primary"
            @click="deleteProj"
        >{{ $t('project.deleteProject') }}</button>
      </div>
    </div>
  </div>

</template>

<script>
import {deleteProject, updateProject} from "@/client/project";

export default {
  name: "EditProject",

  data() {
    return {
      pID: "",
      pName: "",
      pDesc: "",
      pLevel: ""
    }
  },

  props: {
    projID: String,
    projName: String,
    projDesc: String,
    projLevel: String,
  },

  methods: {
    async updateProj() {

      this.pID = this.projID;
      await updateProject(
          this.pID,
          this.pName,
          this.pDesc,
          this.pLevel,
      )

      this.pID = "";
      this.pName = "";
      this.pDesc = "";
      this.pLevel = "";
    },
    async deleteProj() {
      this.pID = this.projID;
      await deleteProject({ projID: this.projID });
    }
  }

}
</script>

<style scoped>
.btn {
  width: 80%;
  margin-inline: auto;
  background-color: #FDE2FF;
}
</style>