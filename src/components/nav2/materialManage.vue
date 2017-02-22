<template>
    <div class="manage-box">
        <h1 class="header-title">素材管理</h1>
      <el-tabs v-model="activeName" >
        <el-tab-pane label="图文消息" name="first">
          <div class="search-box">
            <el-input placeholder="标题/作者/摘要">
              <el-button slot="append" icon="search"></el-button>
            </el-input>
          </div>


          <div class="list-box">
            <div class="list-title">
              <span>图文消息(共5条)</span>
             <router-link to="/createMessage" target="_blank"> <a class="create-btn" target="_blank"><i class="el-icon-plus"></i>&nbsp;&nbsp;新建图文消息</a></router-link>
            </div>
            <el-tabs >
              <el-tab-pane label="模块" name="first">
                  <div class="module-box">
                      <div class="small-module">
                          <div class="time">11:26</div>
                        <a>
                          <div class="small-title">hello  world</div>
                          <div class="img"></div>
                        </a>
                          <div class="edit-box">
                            <a class="edit" title="编辑">
                              <i class="el-icon-edit"></i>
                            </a>
                            <a class="del" title="删除">
                              <i class="el-icon-delete "></i>
                            </a>
                          </div>
                      </div>

                    <div class="small-module">
                      <div class="time">11:26</div>
                      <a>
                        <div class="small-title">hello  world</div>
                        <div class="img"></div>
                      </a>
                      <div class="edit-box">
                        <a class="edit" title="编辑">
                          <i class="el-icon-edit"></i>
                        </a>
                        <a class="del" title="删除">
                          <i class="el-icon-delete "></i>
                        </a>
                      </div>
                    </div>


                    <div class="small-module">
                      <div class="time">11:26</div>
                      <a>
                        <div class="small-title">hello  world</div>
                        <div class="img"></div>
                      </a>
                      <div class="edit-box">
                        <a class="edit" title="编辑">
                          <i class="el-icon-edit"></i>
                        </a>
                        <a class="del" title="删除">
                          <i class="el-icon-delete "></i>
                        </a>
                      </div>
                    </div>

                    <div class="small-module">
                      <div class="time">11:26</div>
                      <a>
                        <div class="small-title">hello  world</div>
                        <div class="img"></div>
                      </a>
                      <div class="edit-box">
                        <a class="edit" title="编辑">
                          <i class="el-icon-edit"></i>
                        </a>
                        <a class="del" title="删除">
                          <i class="el-icon-delete "></i>
                        </a>
                      </div>
                    </div>
                    <div class="small-module">
                      <div class="time">11:26</div>
                      <a>
                        <div class="small-title">hello  world</div>
                        <div class="img"></div>
                      </a>
                      <div class="edit-box">
                        <a class="edit" title="编辑">
                          <i class="el-icon-edit"></i>
                        </a>
                        <a class="del" title="删除">
                          <i class="el-icon-delete "></i>
                        </a>
                      </div>
                    </div>

                    <div class="small-module">
                      <div class="time">11:26</div>
                      <a>
                        <div class="small-title">hello  world</div>
                        <div class="img"></div>
                      </a>
                      <div class="edit-box">
                        <a class="edit" title="编辑">
                          <i class="el-icon-edit"></i>
                        </a>
                        <a class="del" title="删除">
                          <i class="el-icon-delete "></i>
                        </a>
                      </div>
                    </div>
                    <div class="small-module">
                      <div class="time">11:26</div>
                      <a>
                        <div class="small-title">hello  world</div>
                        <div class="img"></div>
                      </a>
                      <div class="edit-box">
                        <a class="edit" title="编辑">
                          <i class="el-icon-edit"></i>
                        </a>
                        <a class="del" title="删除">
                          <i class="el-icon-delete "></i>
                        </a>
                      </div>
                    </div>

                    <div class="small-module">
                      <div class="time">11:26</div>
                      <a>
                        <div class="small-title">hello  world</div>
                        <div class="img"></div>
                      </a>
                      <div class="edit-box">
                        <a class="edit" title="编辑">
                          <i class="el-icon-edit"></i>
                        </a>
                        <a class="del" title="删除">
                          <i class="el-icon-delete "></i>
                        </a>
                      </div>
                    </div>
                    <div class="small-module">
                      <div class="time">11:26</div>
                      <a>
                        <div class="small-title">hello  world</div>
                        <div class="img"></div>
                      </a>
                      <div class="edit-box">
                        <a class="edit" title="编辑">
                          <i class="el-icon-edit"></i>
                        </a>
                        <a class="del" title="删除">
                          <i class="el-icon-delete "></i>
                        </a>
                      </div>
                    </div>

                    <div class="small-module">
                      <div class="time">11:26</div>
                      <a>
                        <div class="small-title">hello  world</div>
                        <div class="img"></div>
                      </a>
                      <div class="edit-box">
                        <a class="edit" title="编辑">
                          <i class="el-icon-edit"></i>
                        </a>
                        <a class="del" title="删除">
                          <i class="el-icon-delete "></i>
                        </a>
                      </div>
                    </div>
                    <div class="small-module">
                      <div class="time">11:26</div>
                      <a>
                        <div class="small-title">hello  world</div>
                        <div class="img"></div>
                      </a>
                      <div class="edit-box">
                        <a class="edit" title="编辑">
                          <i class="el-icon-edit"></i>
                        </a>
                        <a class="del" title="删除">
                          <i class="el-icon-delete "></i>
                        </a>
                      </div>
                    </div>

                    <div class="small-module">
                      <div class="time">11:26</div>
                      <a>
                        <div class="small-title">hello  world</div>
                        <div class="img"></div>
                      </a>
                      <div class="edit-box">
                        <a class="edit" title="编辑">
                          <i class="el-icon-edit"></i>
                        </a>
                        <a class="del" title="删除">
                          <i class="el-icon-delete "></i>
                        </a>
                      </div>
                    </div>

                  </div>
              </el-tab-pane>
              <el-tab-pane label="列表" name="second">
                    <div class="artical-list-box">

                      <div class="content-class">
                            <el-row>
                              <el-col :span="4">
                                <div class="img-class"></div>
                              </el-col>
                              <el-col :span="15">
                                <div class="artical-title">
                                  <a>你果然是熊孩子</a>
                                  <a>你果然是熊孩子</a>
                                  <a>你果然是熊孩子</a>
                                </div>
                              </el-col>
                              <el-col :span="2">
                                <div class="time">11:27</div>
                              </el-col>
                              <el-col :span="3">
                                <div class="update-box">
                                  <a class="edit">编辑</a>
                                  <a class="del">删除</a>
                                </div>
                              </el-col>
                            </el-row>
                          </div>
                      <div class="content-class">
                        <el-row>
                          <el-col :span="4">
                            <div class="img-class"></div>
                          </el-col>
                          <el-col :span="15">
                            <div class="artical-title">
                              <a>你果然是熊孩子</a>
                              <a>你果然是熊孩子</a>
                              <a>你果然是熊孩子</a>
                            </div>
                          </el-col>
                          <el-col :span="2">
                            <div class="time">11:27</div>
                          </el-col>
                          <el-col :span="3">
                            <div class="update-box">
                              <a class="edit">编辑</a>
                              <a class="del">删除</a>
                            </div>
                          </el-col>
                        </el-row>
                      </div>
                      <div class="content-class">
                        <el-row>
                          <el-col :span="4">
                            <div class="img-class"></div>
                          </el-col>
                          <el-col :span="15">
                            <div class="artical-title">
                              <a>你果然是熊孩子</a>
                              <a>你果然是熊孩子</a>
                              <a>你果然是熊孩子</a>
                            </div>
                          </el-col>
                          <el-col :span="2">
                            <div class="time">11:27</div>
                          </el-col>
                          <el-col :span="3">
                            <div class="update-box">
                              <a class="edit">编辑</a>
                              <a class="del">删除</a>
                            </div>
                          </el-col>
                        </el-row>
                      </div>
                      <div class="content-class">
                        <el-row>
                          <el-col :span="4">
                            <div class="img-class"></div>
                          </el-col>
                          <el-col :span="15">
                            <div class="artical-title">
                              <a>你果然是熊孩子</a>
                              <a>你果然是熊孩子</a>
                              <a>你果然是熊孩子</a>
                            </div>
                          </el-col>
                          <el-col :span="2">
                            <div class="time">11:27</div>
                          </el-col>
                          <el-col :span="3">
                            <div class="update-box">
                              <a class="edit">编辑</a>
                              <a class="del">删除</a>
                            </div>
                          </el-col>
                        </el-row>
                      </div>
                      <div class="content-class">
                        <el-row>
                          <el-col :span="4">
                            <div class="img-class"></div>
                          </el-col>
                          <el-col :span="15">
                            <div class="artical-title">
                              <a>你果然是熊孩子</a>
                              <a>你果然是熊孩子</a>
                              <a>你果然是熊孩子</a>
                            </div>
                          </el-col>
                          <el-col :span="2">
                            <div class="time">11:27</div>
                          </el-col>
                          <el-col :span="3">
                            <div class="update-box">
                              <a class="edit">编辑</a>
                              <a class="del">删除</a>
                            </div>
                          </el-col>
                        </el-row>
                      </div>


                    </div>
              </el-tab-pane>

            </el-tabs>


          </div>

        </el-tab-pane>
        <el-tab-pane label="图片" name="second">
          <div class="pic-head">
            <span class="labels">全部图片</span>
          <div class="mini_tips">
            <span class="">大小不超过5M，已开启图片水印</span>
          </div>

              <a class="btn-upload">本地上传</a>

          </div>

          <div class="oper_group ">
            <el-checkbox v-model="checked" checked>全选</el-checkbox>
            <a class="del-btn">删除</a>

          </div>

          <div class="imglist-box">
              <div class="small-img">
                  <div class="bg-img">

                  </div>
                <div class="check-img">
                  <el-checkbox v-model="checked" checked>weixin.png</el-checkbox>
                </div>

                <div class="small-img-div">
                  <a class="edit" title="编辑">
                    <i class="el-icon-edit"></i>
                  </a>
                  <a class="del" title="删除">
                    <i class="el-icon-delete "></i>
                  </a>
                </div>
              </div>

            <div class="small-img">
              <div class="bg-img">

              </div>
              <div class="check-img">
                <el-checkbox v-model="checked" checked>weixin.png</el-checkbox>
              </div>

              <div class="small-img-div">
                <a class="edit" title="编辑">
                  <i class="el-icon-edit"></i>
                </a>
                <a class="del" title="删除">
                  <i class="el-icon-delete "></i>
                </a>
              </div>
            </div>

            <div class="small-img">
              <div class="bg-img">

              </div>
              <div class="check-img">
                <el-checkbox v-model="checked" checked>weixin.png</el-checkbox>
              </div>

              <div class="small-img-div">
                <a class="edit" title="编辑">
                  <i class="el-icon-edit"></i>
                </a>
                <a class="del" title="删除">
                  <i class="el-icon-delete "></i>
                </a>
              </div>
            </div>

            <div class="small-img">
              <div class="bg-img">

              </div>
              <div class="check-img">
                <el-checkbox v-model="checked" checked>weixin.png</el-checkbox>
              </div>

              <div class="small-img-div">
                <a class="edit" title="编辑">
                  <i class="el-icon-edit"></i>
                </a>
                <a class="del" title="删除">
                  <i class="el-icon-delete "></i>
                </a>
              </div>
            </div>

            <div class="small-img">
              <div class="bg-img">

              </div>
              <div class="check-img">
                <el-checkbox v-model="checked" checked>weixin.png</el-checkbox>
              </div>

              <div class="small-img-div">
                <a class="edit" title="编辑">
                  <i class="el-icon-edit"></i>
                </a>
                <a class="del" title="删除">
                  <i class="el-icon-delete "></i>
                </a>
              </div>
            </div>

            <div class="small-img">
              <div class="bg-img">

              </div>
              <div class="check-img">
                <el-checkbox v-model="checked" checked>weixin.png</el-checkbox>
              </div>

              <div class="small-img-div">
                <a class="edit" title="编辑">
                  <i class="el-icon-edit"></i>
                </a>
                <a class="del" title="删除">
                  <i class="el-icon-delete "></i>
                </a>
              </div>
            </div>

            <div class="small-img">
              <div class="bg-img">

              </div>
              <div class="check-img">
                <el-checkbox v-model="checked" checked>weixin.png</el-checkbox>
              </div>

              <div class="small-img-div">
                <a class="edit" title="编辑">
                  <i class="el-icon-edit"></i>
                </a>
                <a class="del" title="删除">
                  <i class="el-icon-delete "></i>
                </a>
              </div>
            </div>

            <div class="small-img">
              <div class="bg-img">

              </div>
              <div class="check-img">
                <el-checkbox v-model="checked" checked>weixin.png</el-checkbox>
              </div>

              <div class="small-img-div">
                <a class="edit" title="编辑">
                  <i class="el-icon-edit"></i>
                </a>
                <a class="del" title="删除">
                  <i class="el-icon-delete "></i>
                </a>
              </div>
            </div>

            <div class="small-img">
              <div class="bg-img">

              </div>
              <div class="check-img">
                <el-checkbox v-model="checked" checked>weixin.png</el-checkbox>
              </div>

              <div class="small-img-div">
                <a class="edit" title="编辑">
                  <i class="el-icon-edit"></i>
                </a>
                <a class="del" title="删除">
                  <i class="el-icon-delete "></i>
                </a>
              </div>
            </div>
          </div>

        </el-tab-pane>

      </el-tabs>



    </div>
</template>
<style>
  .small-img  .check-img{text-align: center;border-right: 1px solid #E7E7EB;border-left: 1px solid #E7E7EB;line-height: 24px}
  .small-img .small-img-div{height: 30px;border: 1px solid #E7E7EB;line-height: 30px;}
   .small-img .small-img-div .edit:hover,  .small-img .small-img-div .del:hover{color: #373636;}
 .small-img  .small-img-div .del{cursor:pointer;display: inline-block;color:#B2B2B2 ;height: 30px;line-height: 30px;float: right;margin-right: 10px}
  .small-img .small-img-div .edit{cursor:pointer;display: inline-block;color:#B2B2B2 ;height: 30px;line-height: 30px;float: left;margin-left: 10px}
    .imglist-box .small-img{width: 169px;display: inline-block;margin-left: 20px;margin-top: 10px}
  .imglist-box .small-img .bg-img{width: 169px;height: 169px;background: url("../../assets/youname.jpg") no-repeat center center;
    background-size: cover;  }
  .imglist-box{padding: 20px 20px;}
  .oper_group{padding: 0px 15px;background:#F4F5F9;height: 50px;line-height:50px;}
  .oper_group .del-btn{display: inline-block;padding: 0px 30px;background: #E7E7EB;color: #AEAFC2;height: 30px;line-height: 30px;margin-left: 40px;cursor: pointer;}
  .oper_group .del-btn:hover{background: #fff;}
  .pic-head .mini_tips{ display: inline-block;  text-align: right;    width: 700px;}
      .pic-head .btn-upload{display: inline-block;background: #44b549;padding: 0 22px;    height: 30px;    line-height: 30px;  cursor: pointer;
        color: #ffffff;border-radius: 4px;margin-left: 5px}
.pic-head .btn-upload:hover{background: #2f9833}
    .header-title{font-size: 16px; padding: 0 30px;line-height: 75px;}
    .search-box{width:372px;margin-top: 30px;margin-left: 15px}
   .list-box .list-title{height: 40px;clear: both;margin-top: 35px;padding: 0px 15px;}
  .list-box  .list-title span{float: left}
   .list-box .list-title .create-btn{float: right;background: #44b549;doverflow: visible;    padding: 0 22px;    height: 30px;    line-height: 30px;    *line-height: 28px;    vertical-align: middle;
    text-align: center;    text-decoration: none;    border-radius: 3px;    -moz-border-radius: 3px;color: #fff;
    -webkit-border-radius: 3px;    font-size: 14px;    border-width: 1px;    border-style: solid;    cursor: pointer;}
    .list-box  .list-title a:hover{background:#2f9833 }
    .module-box{padding: 0px 15px}
    .module-box .small-module{width: 287px;border: 1px solid #e7e7eb;margin-top: 15px;cursor: pointer;display: inline-block}
    .module-box .small-module .time{font-size: 13px;      line-height: 20px;      margin: 0 14px;      padding: 12px 0;      border-bottom: 1px solid #e7e7eb; }
    .module-box .small-module .title{color: #222;padding: 14px;}
    .module-box .small-module .img{background: url("../../assets/youname.jpg") no-repeat center center;background-size: cover;
      -webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;width: 267px;height: 160px;
      margin: 0px 15px; }
  .module-box .small-module .edit-box .edit{display: inline-block;width: 48%;border-right: 1px solid #e7e7eb;cursor: pointer;background: #F4F4F4;
  color:#B2B2B2 ;height: 44px;line-height: 44px;text-align: center}
    .module-box .small-module .edit-box .edit:hover, .module-box .small-module .edit-box .del:hover{color: #373636;}
    .module-box .small-module .edit-box .del{display: inline-block;width: 48%;cursor: pointer;background: #F4F4F4;
      color:#B2B2B2 ;height: 44px;line-height: 44px;text-align: center}
    .module-box .small-module .edit-box{border-top: 1px solid #e7e7eb;margin-top: 15px;background: #F4F4F4;margin: 20px 0px 0px 0px}
    .module-box .small-module .small-title{padding:10px 15px}
    .artical-list-box .img-class{background: url("../../assets/youname.jpg") no-repeat center center;height:100px;width: 100px; }
    .artical-list-box ul{list-style: none;}
    .artical-list-box ul li{}
    .artical-list-box .content-class{ padding: 15px 15px;margin: 15px; border-top: 1px solid #e7e7eb;}
    .artical-list-box  .content-class .artical-title a{display: inherit;margin-top: 5px;cursor: pointer;}
    .artical-list-box  .content-class .update-box{float: right;cursor: pointer;color: #459ae9;}
    .pic-head{padding: 10px 20px;}




</style>
<script>
    export default{

    }
</script>
