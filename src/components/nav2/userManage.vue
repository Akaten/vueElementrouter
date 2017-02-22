<template>
    <div class="userManage-box">

      <el-tabs>
        <el-tab-pane label="已关注" name="first" >
          <div class="top-div-class">
            <div class="search-class">
                <el-input placeholder="用户昵称" v-model="input5">
                  <el-button slot="append" icon="search"></el-button>
                </el-input>
            </div>
            <div class="create-tag">
              <a href="">新建标签</a>
            </div>
          </div>

          <div class="user-list-box">
            <el-row>
              <el-col :span="20">
                <div class="left-list-box">
                  <div class="label-class">
                    <p>全部用户</p>

                  </div>

                    <ul>
                      <li >
                        <el-checkbox v-model="checked" checked>全选</el-checkbox>
                        <a class="tag-btn">打标签</a>
                        <a class="black-btn">加入黑名单</a>
                      </li>

                      <li class="each-li-class">
                        <div class="check-box">
                        <span>
                        <el-checkbox v-model="checked" checked></el-checkbox>
                          </span>
                          <a class="header-img"></a>
                        </div>
                        <div class="tag-class">
                          <p>/nick</p>
                          <span>
                          <a>大帅哥一枚</a>
                          <a>小鲜肉一枚</a>
                          <a>小老板一枚</a>
                        </span>
                        </div>
                        <div class="update-name">
                          <a>修改备注</a>
                        </div>

                      </li>
                      <li class="each-li-class">
                        <div class="check-box">
                        <span>
                        <el-checkbox v-model="checked" checked></el-checkbox>
                          </span>
                          <a class="header-img"></a>
                        </div>
                        <div class="tag-class">
                          <p>/nick</p>
                          <span>
                          <a>大帅哥一枚</a>
                          <a>小鲜肉一枚</a>
                          <a>小老板一枚</a>
                        </span>
                        </div>
                        <div class="update-name">
                          <a>修改备注</a>
                        </div>

                      </li>
                      <li class="each-li-class">
                        <div class="check-box">
                        <span>
                        <el-checkbox v-model="checked" checked></el-checkbox>
                          </span>
                          <a class="header-img"></a>
                        </div>
                        <div class="tag-class">
                          <p>/nick</p>
                          <span>
                          <a>大帅哥一枚</a>
                          <a>小鲜肉一枚</a>
                          <a>小老板一枚</a>
                        </span>
                        </div>
                        <div class="update-name">
                          <a>修改备注</a>
                        </div>

                      </li>
                      <li class="each-li-class">
                        <div class="check-box">
                        <span>
                        <el-checkbox v-model="checked" checked></el-checkbox>
                          </span>
                          <a class="header-img"></a>
                        </div>
                        <div class="tag-class">
                          <p>/nick</p>
                          <span>
                          <a>大帅哥一枚</a>
                          <a>小鲜肉一枚</a>
                          <a>小老板一枚</a>
                        </span>
                        </div>
                        <div class="update-name">
                          <a>修改备注</a>
                        </div>

                      </li>
                    </ul>


                </div>
              </el-col>
              <el-col :span="4">
                <div class="right-list-box">
                    <ul>
                      <li>全部用户 <em>(2)</em> </li>
                      <li>星标用户 <em>(2)</em></li>
                      <li>小鲜肉一枚 <em>(2)</em></li>
                      <li>小老板一枚 <em>(2)</em></li>
                    </ul>
                </div>
              </el-col>
            </el-row>



          </div>


        </el-tab-pane>
        <el-tab-pane label="黑名单" name="second">
          <div class="black-box">
            <div class="left-list-box">
              <div class="label-class">
                <p>黑名单</p>

              </div>

              <ul>
                <li >
                  <el-checkbox v-model="checked" checked>全选</el-checkbox>
                  <a class="tag-btn">移除黑名单</a>
                </li>

                <li class="each-li-class">
                  <div class="check-box">
                        <span>
                        <el-checkbox v-model="checked" checked></el-checkbox>
                          </span>
                    <a class="header-img"></a>
                  </div>
                  <div class="tag-class">
                    <p>/nick</p>
                    <span>
                          <a>大帅哥一枚</a>
                          <a>小鲜肉一枚</a>
                          <a>小老板一枚</a>
                        </span>
                  </div>
                  <div class="update-name">
                    <a>修改备注</a>
                  </div>

                </li>
                <li class="each-li-class">
                  <div class="check-box">
                        <span>
                        <el-checkbox v-model="checked" checked></el-checkbox>
                          </span>
                    <a class="header-img"></a>
                  </div>
                  <div class="tag-class">
                    <p>/nick</p>
                    <span>
                          <a>大帅哥一枚</a>
                          <a>小鲜肉一枚</a>
                          <a>小老板一枚</a>
                        </span>
                  </div>
                  <div class="update-name">
                    <a>修改备注</a>
                  </div>

                </li>
                <li class="each-li-class">
                  <div class="check-box">
                        <span>
                        <el-checkbox v-model="checked" checked></el-checkbox>
                          </span>
                    <a class="header-img"></a>
                  </div>
                  <div class="tag-class">
                    <p>/nick</p>
                    <span>
                          <a>大帅哥一枚</a>
                          <a>小鲜肉一枚</a>
                          <a>小老板一枚</a>
                        </span>
                  </div>
                  <div class="update-name">
                    <a>修改备注</a>
                  </div>

                </li>
                <li class="each-li-class">
                  <div class="check-box">
                        <span>
                        <el-checkbox v-model="checked" checked></el-checkbox>
                          </span>
                    <a class="header-img"></a>
                  </div>
                  <div class="tag-class">
                    <p>/nick</p>
                    <span>
                          <a>大帅哥一枚</a>
                          <a>小鲜肉一枚</a>
                          <a>小老板一枚</a>
                        </span>
                  </div>
                  <div class="update-name">
                    <a>修改备注</a>
                  </div>

                </li>
              </ul>


            </div>
          </div>


        </el-tab-pane>

      </el-tabs>

    </div>
</template>
<style>
   .user-list-box .left-list-box .each-li-class{position: relative;height: 90px;padding-left: 20px;padding-right: 20px;border-top: 1px solid #e7e7eb;
     border-right:1px solid #E7E7EB;}
  .userManage-box{margin-top: 30px}
  .top-div-class{height: 62px;margin-top: 40px;padding: 0px 20px}
  .top-div-class .search-class{width: 350px;float: left;}
    .top-div-class .create-tag a, .userManage-box .left-list-box  ul .each-li-class .update-name a{float: right;background: #44b549;doverflow: visible;padding: 0 22px;
      height: 30px;line-height: 30px;vertical-align: middle; text-align: center;text-decoration: none;border-radius: 3px;-moz-border-radius: 3px;color: #fff;-webkit-border-radius: 3px;      font-size: 14px;      border-width: 1px;      border-style: solid;cursor: pointer;}
    .top-div-class .create-tag a:hover, .userManage-box .left-list-box  ul .each-li-class .update-name a:hover {background: #2f9833;}
  .userManage-box ul li{list-style: none}
  .userManage-box ul{margin: 0px;padding: 0px}
  .userManage-box .left-list-box  ul .each-li-class div{display: inline-block}
  .userManage-box .left-list-box  ul .each-li-class .check-box{width:  120px;position: relative}
   .userManage-box .left-list-box  ul .each-li-class .check-box span{position: absolute;top: 0px}
  .userManage-box .left-list-box  ul .each-li-class .tag-class{width:  340px;padding-left: 10px}
  .userManage-box .left-list-box  ul .each-li-class .update-name{width:  230px;}
  .userManage-box .left-list-box  ul .each-li-class .tag-class a{display: inline-block;padding: 0px 10px;line-height: 20px; height: 20px;border: 1px solid #9e9e9e;
    color: #8d8d8d;text-align: center;font-size: 13px;border-radius: 4px;}
  .userManage-box .left-list-box  ul li:first-child{background: #f4f5f9;height: 60px;line-height: 60px;padding: 0px 20px}

  .userManage-box .left-list-box  ul .each-li-class .header-img{display: inline-block;position: relative;top: 14px;margin-left: 30px;
    background-repeat:no-repeat;background-size: cover;background-position: center center;background: url("../../assets/weixin.png");width:58px;height: 58px;}
  .userManage-box .list-box{padding: 0px 20px;}

  .userManage-box .right-list-box ul li:first-child{background: #f4f5f9;height:32px;line-height: 32px;padding-left: 20px;}
   .userManage-box .right-list-box ul li{padding-left: 40px;height: 30px;line-height: 30px}
   .userManage-box .right-list-box ul li em{font-style: normal;color:#8d8d8d}
  .userManage-box .label-class{padding: 0px 20px;border: 1px solid #E7E7EB;}
   .userManage-box .left-list-box  ul li:first-child a{display: inline-block;height: 26px;line-height: 26px;width: 80px;text-align: center;
   cursor: pointer;background: #e7e7eb;border-radius: 4px;border: 1px solid #8d8d8d;color:#a5a6aa;font-size: 13px;}
   .userManage-box .left-list-box  ul li:first-child a:hover{background: #fff;color: #222;}
   .userManage-box .left-list-box  ul li .tag-btn{margin-left: 40px;}
   .userManage-box .left-list-box  ul li .black-btn{margin-left: 20px}
  .black-box .tag-class{width: 500px !important;}
  .black-box ul li{padding: 15px 20px;border-top:1px solid rgb(231, 231, 235);}
</style>
<script>
    export default{

    }
</script>
