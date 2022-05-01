<template>
  <div class="card">
    <div class="card-header">
      <h5 class="card-title"> {{ projectName }}</h5>
    </div>
    <div class="card-body">
      <p class="card-text"> {{ description }}</p>
      <div id="bottom_container">
        <div id="leftDiv" class="bottom_part">
          <a href="#" class="btn btn-primary">{{ $t("general.viewProject") }}</a>
        </div>
        <div id="rightDiv" class="bottom_part">
          <div> author: {{ author }} </div>
          <div> date : {{ date }} </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    projectName: String,
    author: String,
    date: String,
    description: String
  },

}
</script>

<style scoped>
#bottom_container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#rightDiv {
  display: flex;
  flex-direction: column;
}



</style>