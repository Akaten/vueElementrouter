<template>
  <div>
    <div class="hightlight_box">
      <el-row :gutter="20">
        <el-col :span="2">
          <i class="fa fa-info-circle fa-3x" aria-hidden="true" style="color:#20A0FF"></i>
        </el-col>
        <el-col :span="22">
          <p style="margin:0;">菜单编辑中</p>
          <p style="margin:0;">菜单未发布，请确认菜单编辑完成后点击“保存并发布”同步到手机。若停用菜单，<a href=" " style="color: #20a0ff;text-decoration: none;">请点击这里</a></p>
        </el-col>
      </el-row>
    </div>
    <div class="menu_setting_area">
      <div class="menu_preview_area">
        <div class="mobile_menu_preview">
          <div class="mobile_hd tc">黄二狗每日精选</div>
          <div class="mobile_bd">
            <ul class="pre_menu_list">
              <li class="pre_menu_item grid_item">
                <a href="#" class="pre_menu_link" title="最多添加3个一级菜单">
                  <i class="fa fa-plus"></i>
                  <span class="js_addMenuTips">添加菜单</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="menu_form_area">
        <div class="portable_editor to_left" style="display:block;">
          <div class="editor_inner">
            <div class="global_mod menu_form_hd">
              <h4 class="global_info">{{input}}</h4>
              <div class="global_extra">
                <a href="#">删除菜单</a>
              </div>
            </div>
            <div class="menu_from-bd">
              <div class="frm_control_group">
                <label class="frm_label">
                  <strong class="title js_menuTitle">菜单名称</strong>
                </label>
                <div class="frm_controls">
                  <el-input v-model="input" placeholder="菜单名称" class="js_menu_name"></el-input>
                  <p class="frm_msg fail js_titleEorTips dn" style="display: none;">字数超过上限</p>
                  <p class="frm_msg fail js_titlenoTips dn" style="display: none;">请输入菜单名称</p>
                  <p class="frm_tips js_titleNolTips">字数不超过4个汉字或8个字母</p>
                </div>
              </div>
              <div class="frm_control_group">
                <label class="frm_label">
                  <strong class="title js_menuContent">菜单内容</strong>
                </label>
                  <template>
                    <el-radio class="radio" v-model="radio" label="1">发送文字</el-radio>
                    <el-radio class="radio" v-model="radio" label="2">跳转网页</el-radio>
                  </template>
              </div>
              <div class="msg_tab">
                <el-tabs type="border-card" style="box-shadow:none;">
                  <el-tab-pane>
                    <span slot="label"><i class="fa fa-newspaper-o"></i> 图文消息</span>
                    内容1
                  </el-tab-pane>
                  <el-tab-pane>
                    <span slot="label"><i class="fa fa-file-picture-o"></i> 图片</span>
                    内容2
                  </el-tab-pane>
                  <el-tab-pane>
                    <span slot="label"><i class="fa fa-microphone"></i> 语音</span>
                    内容3
                  </el-tab-pane>
                  <el-tab-pane>
                    <span slot="label"><i class="fa fa-video-camera"></i> 视频</span>
                    内容4
                  </el-tab-pane>
                </el-tabs>
              </div>
            </div>
          </div>
          <span class="editor_arrow_wrp">
            <i class="editor_arrow editor_arrow_out"></i>
            <i class="editor_arrow editor_arrow_in"></i>
          </span>
        </div>
      </div>
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
   .menu_preview_area {
    float: left;
    margin-right: 12px;
    position: relative;
  }
  .menu_form_area {
    display: table-cell;
    vertical-align: top;
    float: none;
    width: 583px;
  }
  .menu_setting_area{
    padding:10px
  }
  .mobile_menu_preview {
    position: relative;
    width: 317px;
    height: 580px;
    background: transparent url(../../assets/bg_mobile_head_default2968da.png) no-repeat 0 0;
    background-position: 0 0;
    border: 1px solid #e7e7eb;
}
  .mobile_menu_preview .mobile_hd {
    color: #fff;
    text-align: center;
    padding-top: 30px;
    font-size: 15px;
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    margin: 0 30px;
}
.menu_preview_area .pre_menu_list {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px solid #e7e7eb;
    background: transparent url(../../assets/bg_mobile_foot_default2968da.png) no-repeat 0 0;
    background-position: 0 0;
    background-repeat: no-repeat;
    padding-left: 43px;
    margin:0;
    text-align:center;
}
.grid_line .no_extra.grid_item {
    float: none;
    width: auto;
    overflow: hidden;
}
.menu_preview_area .pre_menu_item {
    line-height: 50px;
}
.menu_preview_area .pre_menu_item .pre_menu_link {
    border: 1px solid #44b549;
    color: #44b549!important;
}
.pre_menu_item a {
    display: block;
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    color: #616161;
    text-decoration: none;
}
.portable_editor.to_left {
    padding-left: 12px;
}
.portable_editor {
    position: relative;
}
.menu_form_area .editor_inner {
    min-height: 560px;
    padding-bottom: 20px;
}
.portable_editor .editor_inner {
    padding: 0 20px 20px;
    background-color: #f4f5f9;
    border: 1px solid #e7e7eb;
    border-radius: 0;
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
}
.menu_form_hd {
    padding: 9px 0;
    border-bottom: 1px solid #e7e7eb;
}
.menu_form_hd h4 {
    font-weight: 400;
}
.global_mod .global_info {
    float: left;
    margin:0px;
}
.global_mod .global_extra {
    text-align: right;
}
.global_extra a{
  color: #459ae9;
  text-decoration: none;
}
.portable_editor .frm_control_group {
    margin-top: 30px;
    margin-bottom: 10px;
    padding-bottom: 0;
}
.frm_label {
    float: left;
    width: 5em;
    margin-top: .3em;
    margin-right: 1em;
    font-size: 14px;
}
.portable_editor .frm_label .title {
    font-weight: 400;
    font-style: normal;
}
.title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
}
.frm_controls {
    display: table-cell;
    vertical-align: top;
    float: none;
    width: auto;
}
.menu_form_area .frm_tips, .menu_form_area .frm_msg {
    width: auto;
}
.frm_tips, .frm_msg {
    padding-top: 4px;
    width: 300px;
    margin:5px 0 0;
}
.frm_tips {
    color: #8d8d8d;
}
.frm_msg.fail {
    color: #e15f63;
}
.radio{
  margin-top:3px;
}
.menu_form_area .portable_editor.to_left .editor_arrow_wrp {
    top: 545px;
}
.portable_editor.to_left .editor_arrow_wrp {
    left: 0;
    top: 20px;
}
.portable_editor .editor_arrow_wrp, .portable_editor .editor_arrow {
    position: absolute;
}
.portable_editor.to_left .editor_arrow_out {
    left: 0;
}
.portable_editor.to_left .editor_arrow {
    display: inline-block;
    width: 0;
    height: 0;
    border-width: 12px;
    border-style: dashed;
    border-color: transparent;
    border-left-width: 0;
    border-right-color: #e7e7eb;
    border-right-style: solid;
}
.portable_editor.to_left .editor_arrow_in {
    left: 1px;
    border-right-color: #f4f5f9;
}
</style>
<script>

    export default{
      data () {
        return {
          input: '',
          radio: '1'
        }
      }
    }
</script>
