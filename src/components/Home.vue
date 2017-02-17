<template>
  <el-row class="panel">
    <el-col :span="24" class="panel-top">
      <el-col :span="20" style="font-size:26px;">
        <img src="../assets/logo.png" class="logo">
        <span class="logoTxt">QH
					<i style="color:#20a0ff">后台管理</i>
				</span>
      </el-col>
      <el-col :span="4" class="rightbar">
        <el-dropdown trigger="click">
					<span class="el-dropdown-link" style="color:#c0ccda;cursor: pointer;">
						<img :src="sysUserAvatar" class="head"> {{sysUserName}}
					</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>我的消息</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-col>
    <el-col :span="24" class="panel-center">
      <aside style="width:230px;text-align:left;">
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select="handleSelect"
                 theme="dark" unique-opened router>
          <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
            <el-submenu :index="index+''" v-if="!item.leaf">

              <template slot="title">
                <i :class="item.iconCls" style="margin-right:10px"></i>{{item.name}}
              </template>

              <el-menu-item v-for="child in item.children" :index="child.path" v-if="!child.hidden">{{child.name}}
              </el-menu-item>

            </el-submenu>

            <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path">
              <i :class="item.iconCls"></i>{{item.children[0].name}}
            </el-menu-item>
          </template>
        </el-menu>
      </aside>


      <section class="panel-c-c">
        <div class="grid-content bg-purple-light">
          <el-col :span="24" style="margin-bottom:15px;">
            <strong style="width:200px;float:left;color: #475669;">{{$route.name}}</strong>
            <el-breadcrumb separator="/" style="float:right;">
              <el-breadcrumb-item v-for="item in $route.matched">
                {{ item.name }}
              </el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
          <el-col :span="24" style="background-color:#fff;box-sizing: border-box;">
            <!--<transition name="fade">-->
            <router-view></router-view>
            <!--</transition>-->
          </el-col>
        </div>
      </section>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      sysUserName: '',
      sysUserAvatar: ''
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    logout: function () {
      this.$confirm('确认退出吗？', '提示', {

      }).then(() => {
        sessionStorage.removeItem('user')
        this.$router.push('/login')
      }).catch(() => {
      })
    }
  },
  mounted () {
    var user = sessionStorage.getItem('user')
    if (user) {
      user = JSON.parse(user)
      this.sysUserName = user.name || ''
      this.sysUserAvatar = user.avatar || ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active,
	.fade-leave-active {
		transition: opacity .5s
	}

	.fade-enter,
	.fade-leave-active {
		opacity: 0
	}
.panel {
		width: 1200px;
		min-height:1080px;
		margin:0 auto;
	}

	.panel-top {
		height: 60px;
		line-height: 60px;
		background: #1F2D3D;
		color: #c0ccda;
	}

	.panel-top .rightbar {
		text-align: right;
		padding-right: 35px;
	}

	.panel-top .rightbar .head {
		width: 40px;
		height: 40px;
		border-radius: 20px;
		margin: 10px 0px 10px 10px;
		float: right;
	}
.logout {
		background: url(../assets/logout_36.png);
		background-size: contain;
		width: 20px;
		height: 20px;
		float: left;
	}

	.logo {
		width: 40px;
		float: left;
		margin: 10px 10px 10px 18px;
	}
	.logoTxt{
	float:left;
	}
	.panel-center {
		background: #324057;
		position: absolute;
		top: 60px;
		bottom: 0px;
		overflow: hidden;
	}

	.panel-c-c {
		background: #f1f2f7;
		position: absolute;
		right: 0px;
		top: 0px;
		bottom: 0px;
		left: 230px;
		overflow-y: scroll;
		padding: 20px;
	}


</style>
