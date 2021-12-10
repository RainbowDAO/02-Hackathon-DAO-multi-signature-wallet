<template>
  <div class="sidebar">
    <Logo v-if="showLogo" :collapse="isCollapse"></Logo>
    <el-menu router mode="vertical"
             class="menu"
             background-color="#141423"
             text-color="#999"
             style="text-align: left"
             :default-active="$route.path"
             :collapse="isCollapse"
             unique-opened
             @select="currentIndexChange"
    >
      <el-menu-item index="1" :route="'/home'">
        <i class="el-icon-s-data"></i>
        <span>Home</span>
      </el-menu-item>

      <el-submenu index="2" :route="'/'">
        <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span>Trade</span>
        </template>
        <el-menu-item index="/Exchange">Exchange</el-menu-item>
        <el-menu-item index="/Liquidity">Liquidity</el-menu-item>
      </el-submenu>
      <el-menu-item index="3" :route="'/Farms'">
          <i class="el-icon-office-building"></i>
          <span>Farms</span>
      </el-menu-item>
      <el-menu-item index="4" :route="'/Pools'">
          <i class="el-icon-box"></i>
          <span>Pool</span>
      </el-menu-item>
      <el-menu-item index="5" :route="'/Trading'">
          <i class="el-icon-medal"></i>
          <span>Trading</span>
      </el-menu-item>
      <el-menu-item index="6" :route="'/Info'">
          <i class="el-icon-chat-round"></i>
          <span>Info</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import variables from '@/style/variables.scss'
import Logo from './Logo'

export default {
  name: "sidebar",
  components: {Logo},
  data() {
    return {
      navArr: [[
        {
          path: '/issuePublicity',
          name: '发行公示'
        },
        {
          path: '/lockedAnnouncement',
          name: '锁仓公示'
        },
      ], [
        {
          path: '/seedSub',
          name: '种子轮交换矿池'
        },
        {
          path: '/seedExc',
          name: '种子轮兑换矿池'
        },
        {
          path: '/consensus',
          name: '共识挖矿矿池'
        },
        {
          path: '/contribution',
          name: '贡献挖矿矿池'
        },
        {
          path: '/invite',
          name: '邀请挖矿矿池'
        },
      ], [
        {
          path: '/RBTBank',
          name: 'RBT银行'
        },
        {
          path: '/mortgageMarket',
          name: '抵押借款市场'
        },
        {
          path: '/tokenTransfer',
          name: '令牌转让市场'
        },
      ], [
        {
          path: '/sourceOfIncome',
          name: '收入来源公示'
        },
        {
          path: '/incomeDistribution',
          name: '收入分配公示'
        },
        {
          path: '/incomeDividends',
          name: '收入分红公示'
        }
      ], [
        {
          path: '/myVip',
          name: '购买VIP'
        },
        {
          path: '/transferVip',
          name: 'VIP令牌转让'
        }
      ], [
        {
          path: '/communityToken',
          name: '社区治理令牌'
        },
        {
          path: '/cityNodeTokenMarket',
          name: '城市节点令牌'
        },
        {
          path: '/nodeList',
          name: '城市节点'
        },
        {
          path: '/globalGovernance',
          name: '全球治理体系'
        },
        {
          path: '/forum',
          name: '论坛'
        }
      ],
      ]
    }
  },
  methods: {
    currentIndexChange(e) {
      let indexName = ["Rainbow DAO", "市政大厅", "中央银行", "彩虹银行", "彩虹财政部", "VIP中心", "议会中心"]
      this.navArr.forEach((nav, index) => {
        nav.forEach((item) => {
          if (item.path == e) {
            console.log(index, indexName[index + 1])
            this.$store.commit('app/SET_NAVNAME', indexName[index + 1])
            this.$store.commit('app/SET_NAVARR', nav)
          }
        })
      })
    }
  },
  computed: {
    isCollapse() {
      return !this.$store.state.app.isCollapse
    },
    activeMenu() {
      const route = this.$route
      const {meta, path} = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return true
    },
    variables() {
      return variables
    },

  },
  created() {
    this.navArr.forEach(nav => {
      nav.forEach(item => {
        if (item.path == this.$route.path) {
          this.$store.commit('app/SET_NAVARR', nav)
        }
      })
    })
  }
}
</script>

<style lang="scss">

@import "~@/style/variables.scss";
.sidebar {
  user-select: none;
}

.el-menu {
  border-right: solid 0px #e6e6e6;
}
.el-submenu.is-opened{
  .el-submenu__title{
    background: rgba(255,255,255,0.03)!important;
  }
  .el-menu{
    background: rgba(0,0,0,0.4)!important;
    .el-menu-item{
      background: rgba(0,0,0,0.4)!important;
    }
  }
}
.el-submenu__title:hover{
  background: rgba(234,245,255,0.05)!important;
}
.el-menu-item.is-active{
  color:#DB1F7E!important;
}
.el-menu-item:hover{
  background: rgba(234,245,255,0.05)!important;
}
.el-menu-item:focus{
  background: rgba(234,245,255,0.05)!important;
}
.el-submenu.is-opened{
  background: rgba(234,245,255,0)!important;
}
.sidebar-container {
  transition: width 0.28s;
  width: $sideBarWidth !important;
  height: 100%;
  position: fixed;
  font-size: 0px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  overflow-x: hidden;


  .el-scrollbar {
    height: 100%;
  }

  &.has-logo {
    .el-scrollbar {
      height: calc(100% - 50px);
    }
  }

  .is-horizontal {
    display: none;
  }

  a {
    display: inline-block;
    width: 100%;
    overflow: hidden;
  }

  .svg-icon {
    margin-right: 16px;
  }

  .sub-el-icon {
    margin-right: 12px;
    margin-left: -2px;
  }


  & .nest-menu .el-submenu > .el-submenu__title,
  & .el-submenu .el-menu-item {
    min-width: $sideBarWidth !important;
    background-color: $subMenuBg !important;
  }
}

</style>
