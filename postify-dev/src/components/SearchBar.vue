<template>
  <div id="search-bar" class ="d-flex flex-column">
    <div class="input-group">
      <input
          type="text"
          class="form-control"
          :placeholder="$t('Home.search')"
          v-model="searchResult"
      >
      <div class="input-group-append">
        <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            @click="onClickbutton">
          {{ $t("Home.search") }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      searchResult: "",
    }
  },
  methods: {
    onClickbutton() {
      //TODO where we send the API to blah for search
      console.log(this.searchResult);
      // this.searchResult = event.target.value.trim();
    }
  }
}
</script>

<style scoped>
  #search-bar {
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: row;
    justify-content: right;
    margin-inline: 15%;
  }

  .search {
    display: flex;
    flex-direction: row;
    justify-content: right;
    height: 100%;
    width: 100%;
  }

  #button-addon2 {
    color: white;
    background-color: #7c7cbb;
  }
</style>