<template>
  <div id="mycald">
    <el-calendar v-model="value">
    </el-calendar>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: new Date()
      }
    }
  }
</script>
<style>
#mycald .el-calendar__title,#mycald .el-calendar-day{
  text-align: center;
}
#mycald .el-calendar__body table {
  width: 100%;
}
#mycald .el-calendar__button-group {
  display: none;
}
#mycald .is-selected span{
  color: #F37327;
}
#mycald .prev span, .next span {
  color: blue;
}
</style>