<style>
  p{margin: 0px !important;padding: 10px 0px !important;}
  .mass-content{margin-top: 20px;margin-bottom: 150px;background: #fff;}
  .main-hd .hd-title{padding: 0px 30px;font-size: 16px !important;line-height: 75px;}
  .main-hd{border: 1px solid #e7e7eb}
  .main-hd .el-tabs__item{padding: 0px 30px !important;}
  .main-hd .line-height-box{position: relative; padding: 9px 30px;background-color: #f4f5f9; margin-bottom: 20px; line-height: 1.6; *zoom: 1;}
  .main-hd .line-height-box p{color: #8d8d8d;overflow: hidden;font-size: 14px;}
  .choice-box{padding: 0px 30px;margin-top: 30px;}
  .choice-box .select-small{display: inline-block;width: 116px;}
  .choice-box .select-small span{display: inline-block;margin-bottom: 10px;font-size: 14px}
  .choice-box .sex,.choice-box .area{padding-left: 10px;}
  .input-box{margin-top: 26px;}
  .el-input__inner{height: 26px;}
  .input-box .el-tabs--border-card>.el-tabs__header{background-color: #fff !important;}
  .input-box .media-cover a,.input-box .create-access a{cursor: pointer;display: inline-block}
  .input-box .media-cover span,.input-box .create-access span{display: inline-block;padding: 80px 0px;line-height: 34px;}
  .input-box .media-cover,.input-box .create-access{display: inline-block;width: 47%;padding: 15px 10px;text-align: center;border: 1px solid #d9dadc;border-style: dashed}
  .input-box .media-cover .title,.input-box .create-access .title{color: #8d8d8d}
  .input-box .media-cover:hover,.input-box .create-access:hover{border-color: #b3b3b3}
  .text-area{height: 192px;}
  .text-area textarea{width: 96%;height: 100%;padding: 0px 15px;border:none;outline: 0;resize: none;}
  .editor_toolbar{padding: 0px 20px;line-height: 36px;height: 36px;border-top: 1px solid #e7e7eb;}
  .editor_toolbar span{float: right;font-size: 14px;color: #8d8d8d;}
  .btn-box a{display: inline-block;width: 140px;
    cursor: pointer;background:#20a0ff;border-radius: 4px;color: #fff;text-align: center;margin-top: 20px;line-height: 30px;margin-bottom: 30px;margin-left: 30px }
  .ui-list .header-title{padding-bottom: 20px;padding-left: 30px;padding-right: 30px;border-bottom: 1px solid #e7e7eb}
  .ui-list .header-title .font-title{font-size: 14px; color: #8d8d8d;}
  .ui-list .header-title .send-title{float: right}
  .ui-list .header-title .sett-text{display: inline-block;text-align: right;}
  .ui-list .header-title .sett-text p{display: inline-block; color: #8d8d8d;}
  .ui-list .header-title .type-text{padding-left: 30px}
  .ui-list .header-title .type-text .num{color: #8d8d8d;font-size: 13px;margin-top: 10px}
  .ui-list .header-title .type-text .num span{width: 120px;font-size: 14px}
  .ui-list .header-title .state-text p{color: #459ae9;font-size: 14px;margin-top: 10px}
  .ui-list .header-title .state-text span{color: #8d8d8d;font-size: 14px;cursor: pointer;}
  .ui-list .header-title .sett-text p{margin-top: 10px;
    color: #8d8d8d;font-size: 14px}
  .ui-list ul{margin: 0px;padding: 0px}
  .header-title{line-height:normal !important;}
  .input-box .el-tabs__content{height: auto}
</style>
<template>

  <div>
    <div class="mass-content">
      <div class="main-hd">
        <el-tabs v-model="activeName" >
          <el-tab-pane label="新建群发消息" name="first">
            <div class="line-height-box">
              <p>为保障用户体验，微信公众平台严禁恶意营销以及诱导分享朋友圈，严禁发布色情低俗、暴力血腥、政治谣言等各类违反法律法规及相关政策规定的信息。一旦发现，我们将严厉打击和处理。
              </p>
            </div>

            <div class="choice-box">
              <div class="select-small">
                <span>群发对象</span>
                <el-select v-model="value1" placeholder="请选择">
                  <el-option
                    v-for="item in options1"
                    :label="item.label"
                    :value="item.value"
                    :disabled="item.disabled">
                  </el-option>
                </el-select>
              </div>
              <div class="select-small sex">
                <span>性别</span>
                <el-select v-model="value2" placeholder="请选择">
                  <el-option
                    v-for="item in options2"
                    :label="item.label"
                    :value="item.value"
                    :disabled="item.disabled">
                  </el-option>
                </el-select>
              </div>
              <div class="select-small area">
                <span>群发地区</span>
                <el-select v-model="value3" placeholder="请选择">
                  <el-option
                    v-for="item in options3"
                    :label="item.label"
                    :value="item.value"
                    :disabled="item.disabled">
                  </el-option>
                </el-select>
              </div>



            </div>

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

            </div>

            <div class="btn-box">
              <a>发送</a>
            </div>
          </el-tab-pane>
          <el-tab-pane label="已发送" name="second">
            <div class="ui-list">
              <div >
                <ul>
                  <li class="header-title">
                    <el-row>
                      <el-col :span="14"><span class="font-title">消息类型</span></el-col>
                      <el-col :span="6"><span class="font-title">发送状态</span></el-col>
                      <el-col :span="4"><span class=" font-title send-title">发送设置</span></el-col>
                    </el-row>
                  </li>

                  <li class="header-title">
                    <el-row>
                      <el-col :span="14">
                        <el-row>
                          <el-col :span="4">
                            <img src="../../assets/weixin.png">
                          </el-col>
                          <el-col :span="20">
                            <div class="type-text">
                              <span> [图文1]前端小只公众号今天正式开始了  </span>
                              <p class="num">
                                <span>阅读 2</span>
                                <span class="dz-text">点赞 0</span>
                              </p>
                            </div>
                          </el-col>
                        </el-row>
                      </el-col>
                      <el-col :span="6">
                        <div class="state-text">
                          <span >发送完毕</span>
                          <p>删除</p>
                        </div>
                      </el-col>
                      <el-col :span="4">
                        <div class="sett-text">
                          <span>星期六 11:45</span>
                          <p>全部用户</p>
                        </div>
                      </el-col>
                    </el-row>
                  </li>

                  <li class="header-title">
                    <el-row>
                      <el-col :span="14">
                        <el-row>
                          <el-col :span="4">
                            <img src="../../assets/weixin.png">
                          </el-col>
                          <el-col :span="20">
                            <div class="type-text">
                              <span> [图文1]前端小只公众号今天正式开始了  </span>
                              <p class="num">
                                <span>阅读 2</span>
                                <span class="dz-text">点赞 0</span>
                              </p>
                            </div>
                          </el-col>
                        </el-row>
                      </el-col>
                      <el-col :span="6">
                        <div class="state-text">
                          <span >发送完毕</span>
                          <p>删除</p>
                        </div>
                      </el-col>
                      <el-col :span="4">
                        <div class="sett-text">
                          <span>星期六 11:45</span>
                          <p>全部用户</p>
                        </div>
                      </el-col>
                    </el-row>
                  </li>


                  <li class="header-title">
                    <el-row>
                      <el-col :span="14">
                        <el-row>
                          <el-col :span="4">
                            <img src="../../assets/weixin.png">
                          </el-col>
                          <el-col :span="20">
                            <div class="type-text">
                              <span> [图文1]前端小只公众号今天正式开始了  </span>
                              <p class="num">
                                <span>阅读 2</span>
                                <span class="dz-text">点赞 0</span>
                              </p>
                            </div>
                          </el-col>
                        </el-row>
                      </el-col>
                      <el-col :span="6">
                        <div class="state-text">
                          <span >发送完毕</span>
                          <p>删除</p>
                        </div>
                      </el-col>
                      <el-col :span="4">
                        <div class="sett-text">
                          <span>星期六 11:45</span>
                          <p>全部用户</p>
                        </div>
                      </el-col>
                    </el-row>
                  </li>
                  <li class="header-title">
                    <el-row>
                      <el-col :span="14">
                        <el-row>
                          <el-col :span="4">
                            <img src="../../assets/weixin.png">
                          </el-col>
                          <el-col :span="20">
                            <div class="type-text">
                              <span> [图文1]前端小只公众号今天正式开始了  </span>
                              <p class="num">
                                <span>阅读 2</span>
                                <span class="dz-text">点赞 0</span>
                              </p>
                            </div>
                          </el-col>
                        </el-row>
                      </el-col>
                      <el-col :span="6">
                        <div class="state-text">
                          <span >发送完毕</span>
                          <p>删除</p>
                        </div>
                      </el-col>
                      <el-col :span="4">
                        <div class="sett-text">
                          <span>星期六 11:45</span>
                          <p>全部用户</p>
                        </div>
                      </el-col>
                    </el-row>
                  </li>
                  <li class="header-title">
                    <el-row>
                      <el-col :span="14">
                        <el-row>
                          <el-col :span="4">
                            <img src="../../assets/weixin.png">
                          </el-col>
                          <el-col :span="20">
                            <div class="type-text">
                              <span> [图文1]前端小只公众号今天正式开始了  </span>
                              <p class="num">
                                <span>阅读 2</span>
                                <span class="dz-text">点赞 0</span>
                              </p>
                            </div>
                          </el-col>
                        </el-row>
                      </el-col>
                      <el-col :span="6">
                        <div class="state-text">
                          <span >发送完毕</span>
                          <p>删除</p>
                        </div>
                      </el-col>
                      <el-col :span="4">
                        <div class="sett-text">
                          <span>星期六 11:45</span>
                          <p>全部用户</p>
                        </div>
                      </el-col>
                    </el-row>
                  </li>
                  <li class="header-title">
                    <el-row>
                      <el-col :span="14">
                        <el-row>
                          <el-col :span="4">
                            <img src="../../assets/weixin.png">
                          </el-col>
                          <el-col :span="20">
                            <div class="type-text">
                              <span> [图文1]前端小只公众号今天正式开始了  </span>
                              <p class="num">
                                <span>阅读 2</span>
                                <span class="dz-text">点赞 0</span>
                              </p>
                            </div>
                          </el-col>
                        </el-row>
                      </el-col>
                      <el-col :span="6">
                        <div class="state-text">
                          <span >发送完毕</span>
                          <p>删除</p>
                        </div>
                      </el-col>
                      <el-col :span="4">
                        <div class="sett-text">
                          <span>星期六 11:45</span>
                          <p>全部用户</p>
                        </div>
                      </el-col>
                    </el-row>
                  </li>
                </ul>

              </div>



            </div>

          </el-tab-pane>

        </el-tabs>


      </div>


    </div>



  </div>
</template>

<script>
  export default {
    data () {
      return {
        options1: [{
          value: '选项1',
          label: '全部用户'
        }, {
          value: '选项2',
          label: '全部标签'
        }],
        value1: '',
        options2: [{
          value: '选项1',
          label: '男'
        }, {
          value: '选项2',
          label: '女'
        }],
        value2: '',
        options3: [{
          value: '选项1',
          label: '中国'
        }, {
          value: '选项2',
          label: '丹麦'
        }, {
          value: '选项3',
          label: '美国'
        }, {
          value: '选项4',
          label: '澳大利亚'
        }, {
          value: '选项5',
          label: '意大利'
        }],
        value3: ''
      }
    }
  }

</script>
