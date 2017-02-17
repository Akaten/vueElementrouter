<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="新建群发功能" name="first">
        <div class="hightlight_box">
          <p>为保障用户体验，微信公众平台严禁恶意营销以及诱导分享朋友圈，严禁发布色情低俗、暴力血腥、政治谣言等各类违反法律法规及相关政策规定的信息。一旦发现，我们将严厉打击和处理。</p>
        </div>
        <div class="main_pannel">
          <div class="grid_line">
            <div class="grid_item target">
              <label class="label">群发对象</label>
              <el-select v-model="value1" placeholder="请选择">
                <el-option
                  v-for="item in option1s"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="grid_item sex">
              <label class="label">性别</label>
              <el-select v-model="value2" placeholder="请选择">
                <el-option
                  v-for="item in option2s"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="grid_item area">
              <label class="label">群发地区</label>
              <el-select v-model="value3" placeholder="国家">
                <el-option
                  v-for="item in option3s"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
          <div class="msg_tab">
            <el-tabs type="border-card" style="box-shadow:none;">
              <el-tab-pane>
                <span slot="label"><i class="fa fa-newspaper-o"></i> 图文消息</span>
                内容1
              </el-tab-pane>
              <el-tab-pane>
                <span slot="label"><i class="fa fa-pencil"></i> 文字</span>
                内容2
              </el-tab-pane>
              <el-tab-pane>
                <span slot="label"><i class="fa fa-file-picture-o"></i> 图片</span>
                内容3
              </el-tab-pane>
              <el-tab-pane>
                <span slot="label"><i class="fa fa-microphone"></i> 语音</span>
                内容4
              </el-tab-pane>
              <el-tab-pane>
                <span slot="label"><i class="fa fa-video-camera"></i> 视频</span>
                内容5
              </el-tab-pane>
            </el-tabs>
          </div>
          <el-button type="primary" style="margin: 16px;width: 100px;">群发</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane label="已发送" name="second" style="height:223px;">
        <P class="empty_tips">暂无消息</P>
      </el-tab-pane>
    </el-tabs>
    <a class="main_rules" href="http://kf.qq.com/faq/120911VrYVrA131025QniAfu.html">群发消息规则说明&nbsp;<i class="fa fa-file-text-o"></i></a>
  </div>
</template>
<style scoped>
      .main_rules{
        color:#97a8be;
        font-size:13px;
        line-height:1;
        text-decoration: none;
        position: absolute;
        top: 70px;
        right:40px;
      }
      .hightlight_box{
        font-size:13px;
        background-color:#f1f2f7;
        color:#97a8be;
        padding:16px;
      }
      .hightlight_box>p{
        margin:0;
      }
      .el-select{
        display:block;
        width:116px;
      }
      .grid_line{
        padding:16px;
        height:75px;
      }
      .label{
        line-height: 30px;
        font-size:14px;
        color:#97a8be;
      }
      .grid_item{
        float:left;
        padding-right:16px;
      }
      .msg_tab{
        padding:16px;
      }
      .empty_tips {
        padding: 100px 0;
        text-align: center;
        font-size: 14px;
        color: #8d8d8d;
      }



</style>
<script>

    export default{
      data () {
        return {
          activeName: 'first',
          option1s: [
            {
              value: '选项1',
              label: '全部用户'
            },
            {
              value: '选项2',
              label: '按标签选择'
            }
          ],
          option2s: [
            {
              value: '选项1',
              label: '全部'
            },
            {
              value: '选项2',
              label: '男'
            },
            {
              value: '选项3',
              label: '女'
            }
          ],
          option3s: [
            {
              value: '选项1',
              label: '全部'
            },
            {
              value: '选项2',
              label: '中国'
            },
            {
              value: '选项3',
              label: '美国'
            },
            {
              value: '选项4',
              label: '日本'
            },
            {
              value: '选项5',
              label: '俄罗斯'
            }
          ],
          value1: '',
          value2: '',
          value3: ''
        }
      },
      methods: {
        handleClick (tab, event) {
          console.log(tab, event)
        }
      }
    }
</script>
