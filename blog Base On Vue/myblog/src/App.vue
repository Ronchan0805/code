<template>
  <div id="app">

    <div class="app_nav">
      <div class="app_nav_wrap">
        <img src="http://172.81.252.202:3000/website/photo.png">
        <h1 style="color: white;text-align: center;">Ron chan</h1>
        <p style="color: #606266;text-align: center;">Web Developer</p>
        <ul>
          <router-link tag='li' to='/index' activeClass="app_active">博客</router-link>
          <router-link tag='li' to='/share' activeClass="app_active">分享</router-link>
          <router-link tag='li' to='/about' activeClass="app_active">关于</router-link>
        </ul>
      </div>
    </div>

    <div class="app_cont">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
  export default {
    
  }
</script>

<style>
  * {
    margin: 0px;
    padding: 0px;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  ul {
    list-style: none;
  }
  img {
    display: block;
  }
  a {
    text-decoration: none;
  }
  .app_nav ul li {
    color: #909399;
    text-align: center;
  }
  .app_active {
    color: #F37327 !important;
  }
  @media all and (min-width: 640px) and (min-height: 450px) {
    .app_nav {
      width: 22%;
      height: 100%;
      position: fixed;
      left: 0px;
      top: 0px;
      background-color: #171616;
      box-sizing: border-box;
      padding: 20px 0;
    }
    .app_cont {
      width: 78%;
      margin-left: 22%;
    }
    .app_nav img {
      width: 125px;
      height: 125px;
      border-radius: 62px;
      margin-top: 10%;
      margin-left: auto;
      margin-right: auto;
      transition: 1s;
    }
    .app_nav img:hover {
      transform: rotateZ(180deg);
    }
    .app_nav h1 {
      margin: 20px auto 10px auto;
    }
    .app_nav ul {
      margin-top: 35px;
      width: 70%;
      margin-left: auto;
      margin-right: auto;
      list-style: circle;
    }
    .app_nav ul li {
      padding: 10px 0;
      border-top: 1px solid #606266;
      cursor: pointer;
    }
    .app_nav ul li:nth-child(3) {
      border-bottom: 1px solid #606266;
    }
  }
  
  @media not all and (min-width: 640px) and (min-height: 450px) {
    .app_nav {
      background-color: #171616;
      padding-top: 0.2rem;
    }
    .app_nav img {
      width: 1.0rem;
      height: 1.0rem;
      border-radius: 0.5rem;
      margin: 0 auto;
      transform: scale(0.8,0.8);
    }
    .app_nav ul {
      display: flex;
      margin-top: 0.14rem;
    }
    .app_nav ul li {
      flex: 1;
      height: 0.35rem;
      line-height: 0.35rem;
    }
  }
</style>