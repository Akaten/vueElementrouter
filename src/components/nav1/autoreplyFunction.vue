<template>
  <div class="hfcontact">
    <div class="main-hd">
      <div class="tip-title">
        <el-row>
          <el-col :span="1">
            <i class="ico-lock"></i>
          </el-col>
          <el-col :span="20">
            <div class="sett-text">
              <span>已开启自动回复设置</span>
              <p>通过编辑内容或关键词规则，快速进行自动回复设置。如具备开发能力，可更灵活地使用该功能。查看详情 <a class="search">查看详情</a></p>
            </div>
          </el-col>
          <el-col :span="3">
            <a class="btn btn_warn">停用</a>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="choice-cont">
      <el-tabs v-model="activeName2" type="card" >
        <el-tab-pane label="被添加自动回复" name="first">
          <div class="input-box">
            <el-tabs type="border-card">
              <el-tab-pane>
                <span slot="label"><i class="el-icon-edit"></i> 图文消息</span>
                <div class="media-cover">
                  <a>
                                            <span>
                                                <i class="el-icon-plus"></i>
                                                <p class="title"> 从素材库中选择 </p>
                                            </span>
                  </a>
                </div>
                <div class="create-access">
                  <a>
                                            <span>
                                                <i class="el-icon-plus"></i>
                                                <p class="title"> 新建图文消息 </p>
                                            </span>
                  </a>
                </div>
              </el-tab-pane>
              <el-tab-pane label="文字">
                <span slot="label"><i class="el-icon-document"></i> 文字</span>
                <div class="text-area">
                                            <textarea>

                                            </textarea>
                </div>
                <div class="editor_toolbar">
                  <i class="el-icon-upload"></i>
                  <span>最多输入600字</span>
                </div>


              </el-tab-pane>
              <el-tab-pane label="图片"> <span slot="label"><i class="el-icon-picture"></i> 图片 </span>
                <div class="media-cover">
                  <a>
                                            <span>
                                                <i class="el-icon-plus"></i>
                                                <p class="title"> 从素材库中选择 </p>
                                            </span>
                  </a>
                </div>
                <div class="create-access">
                  <a>
                                            <span>
                                                <i class="el-icon-plus"></i>
                                                <p class="title"> 上传图片 </p>
                                            </span>
                  </a>
                </div>
              </el-tab-pane>
              <el-tab-pane label="语音"> <span slot="label"><i class="el-icon-date"></i> 语音 </span>
                <div class="media-cover">
                  <a>
                                            <span>
                                                <i class="el-icon-plus"></i>
                                                <p class="title"> 从素材库中选择 </p>
                                            </span>
                  </a>
                </div>
                <div class="create-access">
                  <a>
                                            <span>
                                                <i class="el-icon-plus"></i>
                                                <p class="title"> 新建语音 </p>
                                            </span>
                  </a>
                </div>
              </el-tab-pane>
              <el-tab-pane label="视频"> <span slot="label"><i class="el-icon-upload"></i> 视频</span>
                <div class="media-cover">
                  <a>
                                            <span>
                                                <i class="el-icon-plus"></i>
                                                <p class="title"> 从素材库中选择 </p>
                                            </span>
                  </a>
                </div>
                <div class="create-access">
                  <a>
                                            <span>
                                                <i class="el-icon-plus"></i>
                                                <p class="title"> 新建视频 </p>
                                            </span>
                  </a>
                </div>
              </el-tab-pane>


              <a class="save-btn">保存</a>
              <!--<a class="del-class">删除回复</a>-->
            </el-tabs>


          </div>

        </el-tab-pane>
        <el-tab-pane label="消息自动回复" name="second">
          <div class="input-box">
            <el-tabs type="border-card">
              <el-tab-pane>
                <span slot="label"><i class="el-icon-edit"></i> 图文消息</span>
                <div class="media-cover">
                  <a>
                                            <span>
                                                <i class="el-icon-plus"></i>
                                                <p class="title"> 从素材库中选择 </p>
                                            </span>
                  </a>
                </div>
                <div class="create-access">
                  <a>
                                            <span>
                                                <i class="el-icon-plus"></i>
                                                <p class="title"> 新建图文消息 </p>
                                            </span>
                  </a>
                </div>
              </el-tab-pane>
              <el-tab-pane label="文字">
                <span slot="label"><i class="el-icon-document"></i> 文字</span>
                <div class="text-area">
                                            <textarea>

                                            </textarea>
                </div>
                <div class="editor_toolbar">
                  <i class="el-icon-upload"></i>
                  <span>最多输入600字</span>
                </div>
              </el-tab-pane>
              <el-tab-pane label="图片"> <span slot="label"><i class="el-icon-picture"></i> 图片 </span>
                <div class="media-cover">
                  <a>
                                            <span>
                                                <i class="el-icon-plus"></i>
                                                <p class="title"> 从素材库中选择 </p>
                                            </span>
                  </a>
                </div>
                <div class="create-access">
                  <a>
                                            <span>
                                                <i class="el-icon-plus"></i>
                                                <p class="title"> 上传图片 </p>
                                            </span>
                  </a>
                </div>
              </el-tab-pane>
              <el-tab-pane label="语音"> <span slot="label"><i class="el-icon-date"></i> 语音 </span>
                <div class="media-cover">
                  <a>
                                            <span>
                                                <i class="el-icon-plus"></i>
                                                <p class="title"> 从素材库中选择 </p>
                                            </span>
                  </a>
                </div>
                <div class="create-access">
                  <a>
                                            <span>
                                                <i class="el-icon-plus"></i>
                                                <p class="title"> 新建语音 </p>
                                            </span>
                  </a>
                </div>
              </el-tab-pane>
              <el-tab-pane label="视频"> <span slot="label"><i class="el-icon-upload"></i> 视频</span>
                <div class="media-cover">
                  <a>
                                            <span>
                                                <i class="el-icon-plus"></i>
                                                <p class="title"> 从素材库中选择 </p>
                                            </span>
                  </a>
                </div>
                <div class="create-access">
                  <a>
                                            <span>
                                                <i class="el-icon-plus"></i>
                                                <p class="title"> 新建视频 </p>
                                            </span>
                  </a>
                </div>
              </el-tab-pane>
            </el-tabs>

            <a class="save-btn">保存</a>
            <!--<a class="del-class">删除回复</a>-->

          </div>


        </el-tab-pane>
        <el-tab-pane label="关键字自动回复" name="third">
          <div class="collspace-box">
            <div>
              <a class="save-btn"><i class="el-icon-plus"></i>添加规则</a>

            </div>

            <el-collapse >
              <el-collapse-item title="规则1 你好啊  关键字 友好回复" name="1">
                <div class="title-name">
                  <label class="frm_label">规则名</label>
                  <div class="frm_controls">
                                            <span class="frm_input_box">
                                                <input class="frm_input" id="Js_ruleName_418316230" value="你好啊" type="text">
                                            </span>
                    <p class="frm_tips">规则名最多60个字</p>

                  </div>

                </div>

                <div class="keywords_tap_hd" style="height: 40px">
                  <label>关键字</label>
                  <span class="add-title"><a>添加关键字</a></span>
                </div>

                <div class="keywords_tap_bd">
                  <ul class="keywords_list">
                    <li>

                      <div class="desc">
                        <strong class="title Js_keyword_val" >非常好</strong>
                      </div>
                      <div class="opr">
                        <a href="javascript:;" class="wpp-txt" >
                          未全匹配
                        </a>
                        <a href="javascript:;" class="el-icon-edit icon-color" ></a>
                        <a href="javascript:;"class="el-icon-delete icon-color" ></a>
                      </div>

                    </li>
                    <li>

                      <div class="desc">
                        <strong class="title Js_keyword_val" >非常好</strong>
                      </div>
                      <div class="opr">
                        <a href="javascript:;" class="wpp-txt" >
                          未全匹配
                        </a>
                        <a href="javascript:;" class="el-icon-edit icon-color" ></a>
                        <a href="javascript:;"class="el-icon-delete icon-color" ></a>
                      </div>

                    </li>
                    <li>

                      <div class="desc">
                        <strong class="title Js_keyword_val" >非常好</strong>
                      </div>
                      <div class="opr">
                        <a href="javascript:;" class="wpp-txt" >
                          未全匹配
                        </a>
                        <a href="javascript:;" class="el-icon-edit icon-color" ></a>
                        <a href="javascript:;"class="el-icon-delete icon-color" ></a>
                      </div>

                    </li>
                  </ul>
                </div>

                <div class="keywords_tap_hds">
                  <div class="keywords-hds" style="height: 40px">
                    <span class="hf-title">回复</span>
                    <div class="check-all">
                      <el-checkbox >回复全部</el-checkbox>
                    </div>
                  </div>

                  <div class="img-choice-box">
                    <a><i class="el-icon-document "></i></a>
                    <a style="margin-left: 20px"><i class="el-icon-picture  "></i></a>
                  </div>

                  <div class="keywords_list" style="position: relative;border-bottom: 1px solid #e7e7eb">

                    <div class="desc">
                      <strong class="title Js_keyword_val" >非常好</strong>
                    </div>
                    <div class="opr">

                      <a href="javascript:;" class="el-icon-edit icon-color" ></a>
                      <a href="javascript:;"class="el-icon-delete icon-color" ></a>
                    </div>
                  </div>

                  <div class="btn-class">
                    <a class="save-btn">保存</a>
                    <a class="del-btn">删除</a>
                  </div>
                </div>

              </el-collapse-item>
              <el-collapse-item title="反馈 Feedback" name="2">
                <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
              </el-collapse-item>

            </el-collapse>

          </div>


        </el-tab-pane>
      </el-tabs>

    </div>

  </div>
</template>
<style>
  .hfcontact .el-tabs__content{height: auto !important;}
  .btn-class{float: right}
  .btn-class .save-btn{background-color: #44b549;padding: 0 20px;display: inline-block;color: #fff;text-decoration: none;text-align: center}
  .btn-class .del-btn{cursor: pointer;border:1px solid #e7e7eb;padding: 0 20px;display: inline-block;color: #222;background:#fff;border-radius: 4px;margin-left: 20px;line-height: 30px;text-align: center;text-decoration: none }
  .btn-class .del-btn:hover{background:#e7e7eb }
  .btn-class .save-btn:hover{background-color: #2f9833;}
  /*.contect-text*/
  .keywords-hd{height: 40px;border-bottom: 1px solid #e7e7eb;}
  .img-choice-box{padding: 0px 15px;}

  .img-choice-box a{color: #B2B2B2;cursor: pointer}
  .img-choice-box a:hover{color: #878686}
  .keywords_tap_hd{clear: both}
  .keywords_tap_hds .hf-title{ float: left;}
  .keywords_tap_hds .check-all{float: right}
  .keywords_rule_item .opr {
    text-align: right;
  }
  .icon-color{color: #B2B2B2;text-decoration: none}
  .icon-color:hover{color: #878686}
  .wpp-txt{color: #459ae9;text-decoration: none}
  .keywords_list li {
    position: relative;
    line-height: 39px;

  }
  .keywords_list .desc {
    padding: 15px 0;
    margin-right: 200px;
    line-height: normal;
  }
  .keywords_list .opr {
    position: absolute;
    top: 15px;
    right: 14px;
    line-height: normal;
  }
  .keywords_list .title {
    display: block;
    font-weight: 400;
    font-style: normal;
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
  }
  .keywords_list .opr a {
    margin-left: 12px;
  }
  .icon14_common {
    width: 14px;
    height: 14px;
    vertical-align: middle;
    display: inline-block;
    line-height: 100px;
    overflow: hidden;
  }
  .keywords_list {
    padding-left: 30px;
    border-top: 1px solid #e7e7eb;
    list-style-type: none;
  }
  .keywords_list li:first-child {        border-top-width: 0;    }
  .keywords_list li {        position: relative;        line-height: 39px;        border-top: 1px solid #e7e7eb;    }
  .keywords_list .desc {        padding: 15px 0;        margin-right: 200px;        line-height: normal;    }
  .keywords_tap_hd {        *zoom: 1;        padding: 0 14px;        line-height: 39px;        border-top: 1px solid #e7e7eb;  }
  .keywords_tap_hds {        *zoom: 1;        padding: 0 14px;        line-height: 39px;        border-top: 1px solid #e7e7eb;  }
  .keywords_tap_hd label{float: left}
  .keywords_tap_hd .add-title{float: right}
  .keywords_tap_hd span a{color: #459ae9;cursor: pointer}
  .frm_label {        float: left;        width: 5em;        margin-top: .3em;       margin-right: 1em;        font-size: 14px;   }
  .frm_input {        height: 22px;        *line-height: 22px;        margin: 4px 0; border: 1px solid #e7e7eb   }
  .frm_input, .frm_textarea { border: 1px solid #e7e7eb;width: 100%;        background-color: transparent; outline: 0;    }
  .frm_tips, .frm_msg {  padding-top: 4px;      width: 300px;  }
  .frm_tips {color: #8d8d8d;  }
  .frm_controls {    display: table-cell;      vertical-align: top;      float: none;      width: auto;     *display: block;    *zoom: 1; }
  .hfcontact{height: 1305px}
  .input-box .save-btn{color:#fff;margin-top:30px;border-radius:4px;line-height: 30px; padding: 0 22px;text-align: center;cursor: pointer;background: #44B549;display: inline-block}
  .input-box .save-btn:hover{background: #2F9833;}
  .collspace-box .save-btn{color:#fff;margin:30px 0px;float: none;border-radius:4px;line-height: 30px; padding: 0 22px;text-align: center;cursor: pointer;background: #44B549;display: inline-block}
  .collspace-box .save-btn:hover{background: #2F9833;}
  .main-hd .hd-title{line-height: 75px;padding: 0px 30px;font-size: 16px;}
  .main-hd .ico-lock{background: url("../../assets/base_z.png") 0 -388px no-repeat;width: 48px;            height: 48px; vertical-align: middle;display: inline-block;}
  .main-hd .tip-title{border-top: 1px solid #e7e7eb;padding: 15px 30px;background: #f4f5f9}
  .main-hd .search{font-size: 13px;text-decoration: none;color: #459ae9;cursor: pointer}
  .main-hd p{color: #8d8d8d;font-size: 13px}
  .main-hd span{color: #222;}
  .btn {display: inline-block;overflow: visible;padding: 0 22px;height: 30px;line-height: 30px; *line-height: 28px;vertical-align: middle;            text-align: center;            text-decoration: none;            border-radius: 3px;            -moz-border-radius: 3px;            -webkit-border-radius: 3px;            font-size: 14px;            border-width: 1px;            border-style: solid;            cursor: pointer;
  }
  .main-hd .btn_warn{background-color: #f24d4d;
    background-image: -moz-linear-gradient(top,#f24d4d 0,#f24d4d 100%);            background-image: -webkit-gradient(linear,0 0,0 100%,from(#f24d4d),to(#f24d4d));            background-image: -webkit-linear-gradient(top,#f24d4d 0,#f24d4d 100%);            background-image: -o-linear-gradient(top,#f24d4d 0,#f24d4d 100%);            background-image: linear-gradient(to bottom,#f24d4d 0,#f24d4d 100%);            border-color: #f24d4d;            color: #fff;            float: right;            margin-top: 15px;        }
  .main-hd .btn_warn:hover{         background-color: #d43d3d;
    background-image: -moz-linear-gradient(top,#d43d3d 0,#d43d3d 100%);            background-image: -webkit-gradient(linear,0 0,0 100%,from(#d43d3d),to(#d43d3d));
    background-image: -webkit-linear-gradient(top,#d43d3d 0,#d43d3d 100%);            background-image: -o-linear-gradient(top,#d43d3d 0,#d43d3d 100%);
    background-image: linear-gradient(to bottom,#d43d3d 0,#d43d3d 100%);            border-color: #d43d3d;            box-shadow: none;           -moz-box-shadow: none;            -webkit-box-shadow: none;            color: #fff;        }
  .hfcontact{background: #fff;margin-top: 50px}
  .main-hd .sett-text{line-height: 24px;padding-left: 20px}

  .input-box{margin-top: 26px;}
  .el-input__inner{height: 26px;}
  .input-box .el-tabs--border-card>.el-tabs__header{background-color: #fff !important;}
  .input-box .media-cover a,.input-box .create-access a{cursor: pointer;display: inline-block}
  .input-box .media-cover span,.input-box .create-access span{display: inline-block;padding: 80px 0px;line-height: 34px;}
  .input-box .media-cover,.input-box .create-access{display: inline-block;width: 47%;padding: 15px 10px;text-align: center;border: 1px solid #d9dadc;border-style: dashed}
  .input-box .media-cover .title,.input-box .create-access .title{color: #8d8d8d}
  .input-box .media-cover:hover,.input-box .create-access:hover{border-color: #b3b3b3}
  .text-area{height: 220px;}
  .text-area textarea{width: 96%;height: 100%;padding: 0px 15px;border:none;outline: 0;resize: none;}
  .editor_toolbar{padding: 0px 20px;line-height: 36px;height: 36px;border-top: 1px solid #e7e7eb;}
  .editor_toolbar span{float: right;font-size: 14px;color: #8d8d8d;}
  .choice-cont{margin: 0px 30px}
  .el-tabs__header{margin: 0px;}
  .el-tabs--card>.el-tabs__header>.el-tabs__item.is-active{border-bottom-color: #d1dbe5;border-radius: 4px }
  .el-tabs--card>.el-tabs__header>.el-tabs__item{border: 1px solid #d1dbe5}
  .choice-cont{margin-top: 30px}

</style>
<script>

</script>
