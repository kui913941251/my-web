<template>
  <div class="search" @mouseover="mouseInner" @mouseout.capture.stop="mouseOuter">
    <input type="text" class="ipt" placeholder="搜索" v-model="iptText" @focus="changeHoldTrue" @blur="changeHoldFalse">
    <div class="imgbox" ><img src="../../assets/img/home/Search.svg" alt="" ></div>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      searchHold: false,
      iptText: "",
      targetElem: ""
    }
  },
  methods: {
    mouseInner(event) {
      this.targetElem = event.currentTarget
      event.currentTarget.style.width = "300px"
    },
    mouseOuter(event) {
      if (!this.searchHold){
        event.currentTarget.style.width = "60px"
      } 
      console.log(this.iptText);
      
    },
    changeHoldTrue() {
      this.searchHold = true
    },
    changeHoldFalse(event) {
      console.log(event);
      this.targetElem.style.width = "60px"
      this.searchHold = false
    }
  }
}
</script>

<style scoped>
/* @import url(); 引入css类 */

  .search{
    position: absolute;
    right: 400px;
    width: 60px;
    height: 60px;
    background-color: #353b48;
    border-radius: 30px;
    overflow: hidden;
    transition: all .3s;
    line-height: 60px
  }
  .search:hover{
    /* width: 300px; */
    /* right: 250px; */
  }
  .imgbox{
    position:absolute;
    top: 50% ;
    right: 0;
    transform: translate(0 , -50%);
    width: 60px;
    height: 60px;
    background-color: #353b48;
    border-radius: 50%;
  }
  .search img{
    position:absolute;
    display: block;
    left: 50%;
    top: 50% ;
    transform: translate(-50% , -50%);
    width: 30px; 
  }

  .ipt{
    margin-left: 20px;
    outline: none;
    background-color: #f5f6fa;
    border: none;
    height: 30px;
    border-radius: 15px;
    padding-left: 20px;
  }

</style>