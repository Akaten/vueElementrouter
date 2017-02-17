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
              <a><i class="el-icon-plus"></i>新建图文消息</a>
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
                      <ul>
                        <li>
                          <el-row>
                            <el-col :span="2">
                                <div class="img-class"></div>
                            </el-col>
                            <el-col :span="18">
                                <div class="artical-title"></div>
                            </el-col>
                            <el-col :span="2">
                                <div class="time">11:27</div>
                            </el-col>
                            <el-col :span="2">
                              <div class="update-box">
                                  <a class="edit">编辑</a>
                                  <a class="del">删除</a>
                              </div>
                            </el-col>
                          </el-row>
                        </li>
                      </ul>

                    </div>
              </el-tab-pane>

            </el-tabs>


          </div>

        </el-tab-pane>
        <el-tab-pane label="图片" name="second">配置管理</el-tab-pane>

      </el-tabs>



    </div>
</template>
<style>
    .header-title{font-size: 16px; padding: 0 30px;line-height: 75px;}
    .search-box{width:372px;margin-top: 30px;margin-left: 15px}
   .list-box .list-title{height: 40px;clear: both;margin-top: 35px;padding: 0px 15px;}
  .list-box  .list-title span{float: left}
   .list-box .list-title a{float: right;background: #44b549;doverflow: visible;    padding: 0 22px;    height: 30px;    line-height: 30px;    *line-height: 28px;    vertical-align: middle;
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
    .module-box .small-module .edit-box{border-top: 1px solid #e7e7eb;margin-top: 15px;background: #F4F4F4}
    .module-box .small-module .small-title{padding:10px 15px}

    .artical-list-box .img-class{background: url("../../assets/youname.jpg") no-repeat center center;bac}
</style>
<script>

    export default{

    }
</script>
