<template>
  <nav class="nav-bar" @click="opnes">
    <div class="nav-bar-scroll">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
          v-for="item in $route.matched"
          v-if="
            item.hasOwnProperty('meta') && item.meta.hasOwnProperty('title')
          "
          :key="item.path"
          :to="{ path: item.path }"
        >
          {{ item.meta.title }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      nav: []
    };
  },
  components: {},
  created() {},
  methods: {
    opnes() {
      console.log(this.$route.matched);
    }
  },
  mounted: function() {}
};
</script>
<style lang="scss" scoped="">
@import "../../assets/css/variables.scss";
.nav-bar {
  margin-top: 50px;
  height: 38px;
  width: 100%;
  z-index: 8;
  background: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  transition: all 0.2s;
  .nav-bar-scroll {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 10px;
    height: 100%;
  }
}
</style>
