<template>
  <div>
    <div class="head">
        <div class="logo"><a href="javascript:;">B.K</a></div>
        <div class="nav">
          <ul>
            <li v-for="(item , index) in navOptions" :key="index"  @click="clickEvent(index , item)" @mouseover="mouseIn(index)" @mouseout="mouseOut">
              <a href="javascript:;">{{item.title}}</a>
              <div class="border-line" 
              :class="{'nav-active' : currentIndex == index , 'nav-hoveractive' : hoverIndex == index}"> 
              </div>
            </li>
          </ul>
        </div>   
        <Search></Search> 
        <div class="arrows">
          <img src="../../assets/img/home/arrows.svg" alt="">
        </div>
    </div>

    <div class="content">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import Search from "./Search.vue"

export default {
  name: "home",
  components: {
    Search
  },
  data() { 
    return {
      navOptions: [
        {
          title: "首页",
          path: "/home"
        }, 
        {
          title: "toDoList",
          path: "/home/todolist"
        }
        ],
      currentIndex: 0,
      hoverIndex: 0
    }
  },
  methods: {
    clickEvent(index , item) {
      this.currentIndex = index 
      this.$router.push(item.path)
    },
    mouseIn(index) {
        this.hoverIndex = index
        console.log(index);
        
    },
    mouseOut() {
      this.hoverIndex = 999
    }
  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
@import url(../../assets/css/home.css);


</style>