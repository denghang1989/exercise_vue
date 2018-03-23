<template>
  <div class="outer-content" :style="{background:currentModuleType.backgroundColor}">
    <div class="inner-content">
      <h2 class="search-logo" :class="currentModuleType.logo">
        {{currentModuleType.text}}
      </h2>
      
      <div class="search-target">
        <form action="" class="search-form">
          <input type="text"
                 class="search-input"
                 :placeholder="currentModuleType.placeholder"
                 v-model="keyword"
                 @blur="onInputBlur()"
                 @focus="onInputFocus()">
          <input type="submit"
                 value="搜索"
                 class="search-submit"
                 :class="currentModuleType.searchIcon">
        </form>
      </div>
      
      <ul class="module-list">
        <li v-for="item in moduleTypes" :key="item.value">
          <span>{{item.text}}</span>
          <div class="out-more-module">
            <div class="inner-more-module">
              <router-link v-for="subItem in item.subTypes"
                           class="more-module-link"
                           :key="subItem.path"
                           :to="subItem.path">
                {{subItem.text}}
              </router-link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    computed: {
      currentModuleType() {
        return this.$store.state.currentModuleType
      },
      moduleTypes() {
        return this.$store.state.moduleTypes;
      }
    }
  }
</script>

<style scoped>
  .outer-content {
    width: 100%;
    min-height: 936px;
    margin-top: 40px;
    transition: background .5s ease-in;
  }
  
  .inner-content {
    width: 936px;
    margin: 0 auto;
    padding: 10px 0 5px;
  }
  
  .search-logo {
    width: 145px;
    height: 56px;
    display: inline-block;
    margin: 0 13px 0 0;
    color: transparent;
    background-position: 0 12px;
    background-repeat: no-repeat;
  }
  
  .book-logo {
    background-image: url("../../assets/book.png");
  }
  
  .search-target {
    display: inline-block;
  }
  
  .search-form {
    position: relative;
    top: 8px;
  }
  
  .search-input {
    width: 350px;
    height: 30px;
    border: none;
    padding-left: 10px;
    outline: none;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.16);
  }
  
  .search-submit {
    width: 37px;
    height: 32px;
    margin: 1px 0 0 -4px;
    vertical-align: middle;
    border: none;
    color: transparent;
    cursor: pointer;
    outline: none;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.16);
    background-repeat: no-repeat;
    background-position: 0 -40px;
  }
  
  .book-search-icon {
    background-image: url("../../assets/book_search_btn.png");
  }
  
  .movie-search-icon {
    background-image: url("../../assets/movie_search_btn.png");
  }
  
  .music-search-icon {
    background-image: url("../../assets/music_search_btn.png");
  }
  
  .city-search-icon {
    background-image: url("../../assets/city_search_btn.png");
  }
  
  .module-list {
    display: inline-block;
    position: relative;
    top: 10px;
    left: 40px;
  }
  
  .module-list li {
    display: inline-block;
    margin-left: 25px;
    padding: 2px 5px;
    cursor: pointer;
  }
  
  .module-list li:hover {
    background: #37a;
    color: white;
  }
  
  .out-more-module {
    display: none;
    position: absolute;
    margin-left: -40px;
  }
  
  .inner-more-module {
    width: 100px;
    margin-top: 10px;
    background: #fff;
    border: 1px solid #e7eaf1;
    box-shadow: 0 5px 20px rgba(0, 34, 77, .1);
  }
  
  .module-list li:hover .out-more-module {
    display: block;
  }
  
  .inner-more-module::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    margin-top: -10px;
    margin-left: calc(50% - 10px);
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid white;
  }
  
  .more-module-link {
    display: block;
    padding: 10px;
    text-align: center;
    color: #000;
  }
  
  .more-module-link:hover {
    background: #f4f8f8;
  }

</style>
