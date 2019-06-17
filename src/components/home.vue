<template>
  <el-container class="container">
    <el-header class="header">
      <el-row>
        <el-col :span="3">
          <div class="grid-content bg-purple">
            <img
              src="@/assets/logo.png"
              alt="图片加载失败"
            >
          </div>
        </el-col>
        <el-col
          :span="19"
          class="middle"
        >
          <h3>电商管理平台</h3>
        </el-col>
        <el-col :span="1">
          <a
            href="#"
            @click.prevent='handleLoginout()'
            class="loginout"
          >退出</a>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside
        width="200px"
        class="aside"
      >
        <el-menu
          default-active="1"
          unique-opened
          router
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="user">
              <i class="el-icon-s-tools"></i>
              用户列表
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item index="1-3">
              <i class="el-icon-s-tools"></i>
              角色管理
            </el-menu-item>
            <el-menu-item index="1-3">
              <i class="el-icon-s-tools"></i>
              权限列表
            </el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item index="1-3">
              <i class="el-icon-s-tools"></i>
              商品列表
            </el-menu-item>
            <el-menu-item index="1-3">
              <i class="el-icon-s-tools"></i>
              分类参数
            </el-menu-item>
            <el-menu-item index="1-3">
              <i class="el-icon-s-tools"></i>
              商品分类
            </el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item index="1-3">
              <i class="el-icon-s-tools"></i>
              订单列表
            </el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据统计</span>
            </template>
            <el-menu-item index="1-3">
              <i class="el-icon-s-tools"></i>
              数据报表
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  beforeCreate() {
    if (!sessionStorage.getItem("token")) {
      this.$message.warning("请先登陆");
      this.$router.push({
        name: "login"
      });
    }
  },
  methods: {
    handleLoginout() {
      localStorage.clear();
      this.$router.push({ name: "login" });
      this.$message.success("退出成功");
    }
  }
};
</script>

<style>
.container {
  height: 100%;
}

.header {
  background-color: #b3c0d1;
  padding: 0;
}

.header .middle {
  line-height: 30px;
  color: #fff;
  text-align: center;
}

.header .loginout {
  line-height: 60px;
  text-decoration: none;
}

.aside {
  /* background-color: #d3dce6; */
}
.aside .menu {
  height: 100%;
}

.main {
  background-color: #e9eef3;
  height: 100%;
}
</style>
