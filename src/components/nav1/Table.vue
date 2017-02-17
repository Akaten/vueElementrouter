<template>
  <div>
    <div class="hightlight_box">
      <h3>未开启自动回复设置</h3>
      <p>通过编辑内容或关键词规则，快速进行自动回复设置。如具备开发能力，可更灵活地使用该功能。
        <el-button type="text" @click="open">查看详情</el-button>
      </p>
      <el-button type="success" style="width: 100px;">开启</el-button>
    </div>
  </div>
</template>
<style scoped>
  .hightlight_box{
        font-size:13px;
        background-color:#f1f2f7;
        color:#97a8be;
        padding:16px;
      }

</style>
<script>

    export default{
      methods: {
        open () {
          this.$alert(
            '该项需要有开发能力才能进行<br>开发者需要完成以下两步来进行自动回复的开发<br>1. 阅读接入指南接口文档，并在开发者中心设置回调URL和Token<br>2. 设置成功后，在接收到用户信息时，自行根据需求通过代码进行回复',
            '提示',
            {
              confirmButtonText: '确定'
            })
        }
      }
    }
</script>
