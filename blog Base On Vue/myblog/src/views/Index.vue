<template>
  <div class="index">
    <div class="index_l"></div>
    <div class="index_r">
      <div class="index_r_card">
        <mycard></mycard>
      </div>
      <div class="index_r_cldar">
        <calendar></calendar>
      </div>
    </div>
  </div>
</template>

<script>
    import mycard from '@/components/childcomponents/index/Mycard.vue'
    import calendar from '@/components/childcomponents/index/Calendar.vue'
    export default {
      components: {
        mycard,
        calendar
      }
    }
</script>

<style scoped="scoped">
.index,.index_l,.index_r{
  display: flex;
}
/*侧边栏不支持ipad(768px)竖屏*/
@media all and (min-width: 980px) {
  .index_l {
    width: 500px;
      height: 1000px;
    flex-grow: 1;
      background-color: yellow;
  }
  .index_r {
    width: 260px;
      height: 1000px;
      background-color: red;
    flex-direction: column;
    align-items: center;
  }
  .index_r_card {
    width: 250px;
  }
  .index_r_cldar {
    width: 250px;
    margin-top: 14px;
    background-color: pink;
  }
}
@media not all and (min-width: 980px) {
  .index_l {
    width: 100%;
      height: 1000px;
      background-color: yellow;
  }
  .index_r {
    display: none;
  }
}
</style>