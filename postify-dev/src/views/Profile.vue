<template>

  <div class="card">
    <div class="card-header">
      <ProfileUserName
          :firstname="firstname"
          :lastname="lastname"
          :username="username"
          :date_joined="date_joined"
          :reputation="reputation"
      />
    </div>
    <div class="card-body">
      <p class="card-text"> {{ description }}</p>
      <div id="bottom_container">
        <SingleProject
            :projectname="projectname"/>
      </div>
    </div>
  </div>

</template>

<script>
import ProfileUserName from "@/components/Profile/ProfileUserName";
import SingleProject from "@/components/Profile/SingleProject";

export default {
  //eslint-disable-next-line
  name: "Profile",
  components: {
    ProfileUserName,
    SingleProject
  },
  data() {
    return {
      firstname: "firstname",
      lastname: "lastname",
      username: "username",
      date_joined: "datejoined",
      reputation: "rep",

      projectname: "projectname"
    }
  }
}
</script>

<style scoped>

</style>