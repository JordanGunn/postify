<template>
  <div>
<!--    <i class="bi bi-person-badge"></i>-->
    <p>{{ projectname }}</p>
  </div>
</template>

<script>
export default {
  name: "SingleProject",
  props: {
    projectname: String
  }
}
</script>

<style scoped>

</style>