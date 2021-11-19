<!-- index -->
<template>
  <div class="Test">
    <!-- 测试 Css -->
    <div class="testCss">
      <div class="fontStyle">测试 Css</div>
    </div>
    <!-- 测试 Less -->
    <div class="testLess">
      <div class="header-center">测试 Less</div>
      <a>我使用了混合特性</a>
    </div>

    <!-- 测试 Sass -->
    <div class="testSass">
      <div class="useSass">测试 Sass</div>
      <p>哈哈哈</p>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: "Test",
  props: {},
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeUnmount() {}, //生命周期 - 销毁之前
  unmounted() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style>
/* Css样式*/
.testCss {
  flex: 1;
  padding: 8px;
}
.fontStyle {
  height: 100px;
  border: 1px solid #ccc;
  color: blue;
  text-align: center;
}
</style>

<style lang="less">
//@import url(); 引入公共css类
@import url("@/assets/less/test.less");
.Test {
  height: 100%;
  display: flex;
  padding: 8%;
  .testLess {
    flex: 1;
    padding: 8px;
    a {
      margin-top: 5px;
      .borderGreen();
    }
  }
  //可以修改它的属性
  .header-center {
    font-size: @text_size_18;
  }
}
</style>
<style lang="scss">
@import url("~@/assets/sass/test.scss");
.Test {
  p {
    color: blueviolet;
  }
}
</style>

<style lang="sass">
.testSass
  flex: 1
  padding: 8px
  .useSass
    color: red   //冒号后面必须有空格
    font-weight: 600
    font-size: 22px
    background: #FFFFFF
    border: 1px black dashed
</style>
