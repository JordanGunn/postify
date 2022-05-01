<template>
  <h2>{{ firstname }} {{ lastname }}</h2>
  <div id="namecontainer">
    <span class="name" id="name">{{ username }}</span>
    <span class="name" id="reputation">{{ reputation }}</span>
    <span class="name" id="datejoined">{{ date_joined }}</span>
  </div>
</template>

<script>
export default {
  name: "ProfileUserName",
  props: {
    firstname: String,
    lastname: String,
    username: String,
    date_joined: String,
    reputation: Number,
  }
}
</script>

<style scoped>
#namecontainer {
  display: flex;
  width: 100%;
}

.name {
  flex-grow: 1;
  text-align: center;
}

#name {
  text-align: left;
}
#datejoined {
  text-align: right;
}

</style>