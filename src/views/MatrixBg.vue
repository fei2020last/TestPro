<!-- 黑客帝国背景 -->
<template>
  <div class="MatrixBg">
    <canvas id="matrix" ref="canvas"
      >您的浏览器不支持this.canvas标签，请您更换浏览器</canvas
    >
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: "MatrixBg",
  props: {},
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      canvas: "",
      w: "",
      h: "",
      fontSize: 16,
      colunms: 0,
      drops: [], //给每一个文字初始化一个起始点的位置 //计算每一个文字所谓坐标 存储y轴的坐标
      str:
        "可ㄅㄆㄇㄈㄪㄉㄊㄋㄌㄍㄎ艹ㄫㄏㄐㄑㄬㄒㄓㄔㄕㄖㄗㄘㄙㄚㄛㄜㄝㄞㄟ大ㄠㄡㄢㄣㄤㄥㄦㄧㄨㄩ钅彡圭卌廾爫丷糹川忄冖辶弋刂冫灬祭豕",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    //初始化画布
    initCanvas() {
      //获取画布对象
      this.canvas = document.getElementById("matrix"); //获取画布的上下文 //getContext() 方法返回一个用于在画布上绘图的环境。
      //设置canvas的宽度和高度
      var W = window.innerWidth;
      var H = window.innerHeight;
      this.w = this.canvas.width = W;
      this.h = this.canvas.height = H;

      this.colunms = Math.floor(W / this.fontSize); //记录每列文字的y轴坐标
      //计算每一个文字所谓坐标 存储y轴的坐标
      for (var i = 0; i < this.colunms; i++) {
        this.drops.push(0);
      }

      this.draw();
      setInterval(() => {
        this.draw();
      }, 100);
    },
    //绘画的函数
    draw() {
      var context = this.canvas.getContext("2d"); //获取浏览器屏幕的宽度和高度
      context.fillStyle = "rgba(0,0,0,0.05)"; //fillRect() 方法绘制“已填色”的矩形。默认的填充颜色是黑色。
      context.fillRect(0, 0, this.w, this.h); //给字体设置样式
      context.font = "700 " + this.fontSize + "px 微软雅黑"; //给字体添加颜色
      context.fillStyle = "#00cc33"; //可以rgb,hsl, 标准色，十六进制颜色 //写入画布中
      for (var i = 0; i < this.colunms; i++) {
        var index = Math.floor(Math.random() * this.str.length); //设置文字出发时间随机 Math.floor(Math.random()*str.length)让数组里面的文字索引随机出现
        var x = i * this.fontSize;
        var y = this.drops[i] * this.fontSize; //也让y轴方向也向下掉一个文字的距离
        context.fillText(this.str[index], x, y); // //如果要改变时间，肯定就是改变每次他的起点
        if (y >= this.canvas.height && Math.random() > 0.99) {
          this.drops[i] = 0;
        }
        this.drops[i]++; //让数组里面的值每次加一，用于上面的y轴下掉
      }
    },
    //随机颜色
    color() {
      return (
        "#" +
        ((item) => {
          //这是一个神奇的色值计算公式
          return new Array(7 - item.length).join("0") + item;
        })(((Math.random() * 0x1000000) << 0).toString(16))
      );
    },
    //随机颜色
    randColor() {
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      return "rgb(" + r + "," + g + "," + b + ")";
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.initCanvas();
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeUnmount() {}, //生命周期 - 销毁之前
  unmounted() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
//@import url(); 引入公共css类

.MatrixBg {
  width: 100%;
  height: 100%;
  min-height: 600px;
  #matrix {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.8;
  }
}
</style>
