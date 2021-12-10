<template>
  <div class="multiSignPanel">
    <div class="nav-panel">
      <div class="title">
        MultiSign Info
      </div>
      <div class="address">
        {{ mulAddress }}
      </div>
      <div class="nav-list">
        <div class="item" :class="{'active':index==0}" @click="index=0">
          <div class="icon">
            <svg t="1639033950888" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="2308" width="64" height="64">
              <path
                  d="M0 0h1024v1024H0V0z m438.857143 292.571429v146.285714h438.857143V292.571429H438.857143zM146.285714 585.142857v146.285714h438.857143V585.142857H146.285714z m292.571429-438.857143L146.285714 438.857143h292.571429V146.285714z m146.285714 731.428572l292.571429-292.571429H585.142857v292.571429z"
                  fill="#FF1F84" p-id="2309"></path>
            </svg>
          </div>
          <div class="name">
            TRANSACTIONS
          </div>
        </div>
        <div class="item" :class="{'active':index==1}" @click="index=1">
          <div class="icon">
            <svg t="1639034008297" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="3219" width="64" height="64">
              <path
                  d="M1008.352978 414.758078l-99.257796-25.726392c-7.615524-24.702456-17.406912-48.572964-29.310168-71.163552l51.900756-88.250484c4.7997-8.127492 3.455784-18.430848-3.135804-25.086432l-109.177176-109.241172c-6.71958-6.655584-17.022936-7.935504-25.150428-3.1998l-88.31448 51.900756c-22.526592-11.83926-46.333104-21.630648-71.099556-29.310168L609.209924 15.423036C606.842072 6.335604 598.586588 0 589.179176 0L434.756828 0C425.413412 0 417.157928 6.335604 414.790076 15.423036L388.999688 114.744828C364.297231 122.424348 340.554715 132.215737 318.092119 144.118993L229.777639 92.090244C221.586151 87.35454 211.218799 88.570464 204.691207 95.290044L95.386038 204.531217C88.730454 211.186801 87.386538 221.554153 92.250234 229.553653l51.964752 88.378476C132.311731 340.394725 122.584338 364.201237 114.840822 388.903694L15.51903 414.694082C6.367602 416.997938 0.031998 425.253422 0.031998 434.660834l0 154.422349c0 9.407412 6.335604 17.662896 15.487032 19.966752l99.257796 25.726392c7.67952 24.830448 17.534904 48.63696 29.310168 71.03556l-52.028748 88.31448c-4.735704 8.127492-3.455784 18.430848 3.1998 25.086432l109.177176 109.241172c6.71958 6.655584 17.022936 7.935504 25.150428 3.135804l88.31448-51.964752c22.526592 11.83926 46.333104 21.75864 71.03556 29.310168l25.662396 99.321792c2.495844 9.215424 10.751328 15.615024 20.15874 15.615024l154.422349 0c9.407412 0 17.5989-6.335604 19.966752-15.487032l25.790388-99.321792c24.766452-7.67952 48.572964-17.470908 71.099556-29.310168l88.186488 51.964752c8.191488 4.671708 18.430848 3.455784 25.086432-3.1998l109.241172-109.11318c6.71958-6.655584 7.9995-16.95894 3.1998-25.086432l-51.964752-88.31448c11.967252-22.526592 21.75864-46.333104 29.374164-71.03556l99.257796-25.726392C1017.632398 606.746078 1023.968002 598.490594 1023.968002 589.083182L1023.968002 434.660834C1023.84001 425.381414 1017.504406 417.061934 1008.352978 414.758078L1008.352978 414.758078 1008.352978 414.758078 1008.352978 414.758078zM512 738.513843c-124.984188 0-226.545841-101.625648-226.545841-226.545841S387.079808 285.358165 512 285.358165c124.920192 0 226.481845 101.625648 226.481845 226.545841S636.856196 738.513843 512 738.513843L512 738.513843 512 738.513843z"
                  p-id="3220" fill="#FF1F84"></path>
            </svg>
          </div>
          <div class="name">
            SETTINGS
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="transition" v-show="index==0">
        <div class="title">
          TRANSACTIONS
        </div>
        <div class="nav-list">
          <div class="item" :class="{'active':transitionIndex==0}" @click="transitionIndex=0">
            Transition List
          </div>
          <div class="item" :class="{'active':transitionIndex==1}" @click="transitionIndex=1">
            Create
          </div>
        </div>
        <div class="transition-panel">
          <div class="transition" v-show="transitionIndex==0">
            <div class="transition-list">
              <div class="no-data" v-show="transitionList.length==0">
                <img src="../../assets/img/no-data.png" alt="">
              </div>
              <div class="item" v-for="(item, index) in transitionList" :key="index">
                <div class="status">
                  {{ kindMap[item.kind] }}
                </div>
                <div class="amount">
                  {{ item.amount }}
                </div>
                <div class="token">
                  token address:{{ item.token }}
                </div>
                <div class="status-btn">
                  <el-button @click="signTransaction(index)">
                    {{ !item.status ? 'Sign' : 'Is Signed' }}
                  </el-button>
                </div>
              </div>
            </div>
          </div>
          <div class="create" v-show="transitionIndex==1">
            <div class="input-box">
              <div class="name">
                TOKEN
              </div>
              <input type="text" v-model="form.token">
            </div>
            <div class="input-box">
              <div class="name">
                TO
              </div>
              <input type="text" v-model="form.to">
            </div>
            <div class="input-box">
              <div class="name">
                AMOUNT
              </div>
              <input type="number" v-model="form.amount">
            </div>
            <el-button class="transitionCreate-btn" @click="creatTransaction">
              Create
            </el-button>
          </div>
        </div>
      </div>
      <div class="settings" v-show="index==1">
        <div class="title">
          SETTINGS
        </div>
        <div class="nav-list">
          <div class="item" :class="{'active':settingIndex==0}" @click="settingIndex=0">
            changeManage
          </div>
          <div class="item" :class="{'active':settingIndex==1}" @click="settingIndex=1">
            changeSignature
          </div>
        </div>
        <div class="setting-panel">
          <div class="changeManage" v-show="settingIndex==0">
            <div class="input-box">
              <div class="name">
                ADDRESS
              </div>
              <input type="text" v-model="form2.account">
            </div>
            <div class="input-box">
              <div class="name">
                REMOVE/ADD
              </div>
              <el-switch v-model="form2.tap" active-color="#13ce66" inactive-color="#ff4949"/>
            </div>

            <el-button class="transitionCreate-btn" @click="changeManage">
              Change
            </el-button>
          </div>
          <div class="changeSignature" v-show="settingIndex==1">
            <div class="input-box">
              <div class="name">
                NUMBER
              </div>
              <input type="text" v-model="mulNumber">
            </div>

            <el-button class="transitionCreate-btn" @click="changeSignature">
              Change
            </el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "multiSignPanel",
  data() {
    return {
      index: 0,
      settingIndex: 0,
      mulAddress: "",
      form: {},
      form2: {},
      mulNumber: 0,
      transitionList: [],
      transitionIndex: 0,
      kindMap: {
        4: "addLiquidity", 3: "manage", 2: "signature", 1: "transaction"
      }
    }
  },
  computed: {
    account() {
      return this.$store.state.app.account
    }
  },
  watch: {
    account() {
      this.getData()
    }
  },
  mounted() {
    this.mulAddress = this.$route.params.address
    if (this.account) {
      this.getData()
    }
  },
  methods: {
    getData() {
      this.transitionList = []
      this.$store.dispatch("multiSign/getPendingTransactions", {
        address: this.mulAddress,
      }).then((arr) => {
        console.log(arr)
        for (let i = 0; i < arr.length; i++) {
          this.$store.dispatch("multiSign/getPendingTransactionById", {
            address: this.mulAddress,
            idx: i,
          }).then(res => {
            this.transitionList.push(res)
          })
        }
        console.log(this.transitionList)

      })
    },
    managers() {

    },
    signTransaction(index) {
      let loading = this.$loading()
      this.$store.dispatch("multiSign/signTransaction", {
        address: this.mulAddress,
        transactionId: index,
      }).then(() => {
        this.$message({
          message: "signTransaction success",
          type: "success"
        })
        loading.close()
      }).catch(err=>{
        this.$message.error(err)
        loading.close()
      })
    },
    creatTransaction() {
      let loading = this.$loading()
      this.$store.dispatch("multiSign/creatTransaction", {
        address: this.mulAddress,
        token: this.form.token,
        to: this.form.to,
        amount: this.form.amount
      }).then(() => {
        this.$message({
          message: "creatTransaction success",
          type: "success"
        })
        this.getData()
        loading.close()
      }).catch(err=>{
        this.$message.error(err)
        loading.close()
      })
    },
    changeManage() {
      let loading = this.$loading()
      this.$store.dispatch("multiSign/changeManage", {
        address: this.mulAddress,
        account: this.form2.account,
        tap: this.form2.tap
      }).then(() => {
        this.$message.success("changeManage success")
        loading.close()
      }).catch(err=>{
        this.$message.error(err)
        loading.close()
      })
    },
    changeSignature() {
      let loading = this.$loading()
      this.$store.dispatch("multiSign/changeSignature", {
        address: this.mulAddress,
        num: this.mulNumber
      }).then(() => {
        this.$message.success("changeSignature success")
        loading.close()
      }).catch(err=>{
        this.$message.error(err)
        loading.close()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.multiSignPanel {
  display: flex;
  height: 100vh;
  overflow: auto;

  .nav-panel {
    height: 100vh;
    width: 260px;
    background: url("../../static/imgs/nav_bg.png") no-repeat;
    overflow: hidden;
    background-size: 100% 100%;

    .title {
      padding: 20px 30px 0;
      color: #2c32e2;
      font-size: 26px;
      font-weight: bold;
    }

    .address {
      padding: 30px;
      width: 260px;
      word-break: break-all;
      color: #7073C8;
      font-weight: bold;
    }

    .nav-list {
      padding: 20px 30px;
      border-top: 1px solid rgba(253, 109, 174, 0.6);

      .item {
        cursor: pointer;
        padding: 16px 0;
        font-size: 16px;
        color: #FF1F84;
        display: flex;
        align-items: center;

        .icon {
          font-size: 16px;
          width: 22px;
          height: 22px;
          opacity: 0.7;
        }

        .name {
          margin-left: 10px;
          opacity: 0.7;
        }

        &.active {
          font-weight: bold;

          .icon {
            opacity: 1;
          }

          .name {
            opacity: 1;
          }
        }
      }
    }
  }

  .content {
    padding: 20px 100px;

    .title {
      font-size: 16px;
      font-weight: 700;
      text-align: left;
      color: #ff1f84;
    }

    .nav-list {
      display: flex;
      margin: 10px 0;
      width: 1000px;
      border-bottom: 1px solid rgba(253, 109, 174, 0.6);

      .item {
        cursor: pointer;
        padding: 0 16px;
        line-height: 50px;
        font-size: 14px;
        font-weight: bold;
        margin-left: 10px;
        border-bottom: 1px solid #eee;
        color: #FF1F84;
        opacity: 0.7;

        &.active {
          opacity: 1;
          border-bottom: 2px solid #FF1F84;
        }
      }
    }

    .transition {

      .transition-panel {
        width: 1000px;
        margin-top: 30px;
        padding: 30px 20px;
        background: #fff;
        border-radius: 30px;

        .transition-list {
          .no-data{
            width: 100%;
            display: flex;
            justify-content: center;
            font-size: 30px;
            color: #999;
          }
          .item {
            padding: 0 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .status{
              font-weight: bold;
              font-size: 16px;
              text-transform: uppercase;
            }
            .amount{
              color: #8f92fc;
              font-size: 16px;
              font-weight: bold;
            }
          }
        }

        .input-box {
          display: flex;
          padding: 10px 0;
          align-items: center;

          .name {
            width: 100px;
            color: #999999;
            font-weight: bold;
          }

          input {
            width: 480px;
            height: 40px;
            background: #fafafa;
            border: 1px solid #eaeaea;
            padding: 0 30px;
            font-size: 18px;
            color: #999;
            border-radius: 10px;
          }
        }

        .transitionCreate-btn {
          margin-top: 20px;
          margin-left: 260px;
          color: #fff;
          background: linear-gradient(90deg, #12c2e9 0%, #c471ed 64%, #f64f59 100%);
        }
      }
    }

    .settings {
      .setting-panel {
        width: 1000px;
        margin-top: 30px;
        padding: 30px 20px;
        background: #fff;
        border-radius: 30px;

        .input-box {
          display: flex;
          padding: 10px 0;
          align-items: center;

          .name {
            width: 100px;
            color: #999999;
            font-weight: bold;
          }

          input {
            width: 480px;
            height: 40px;
            background: #fafafa;
            border: 1px solid #eaeaea;
            padding: 0 30px;
            font-size: 18px;
            color: #999;
            border-radius: 10px;
          }
        }

        .transitionCreate-btn {
          margin-top: 20px;
          margin-left: 260px;
          color: #fff;
          background: linear-gradient(90deg, #12c2e9 0%, #c471ed 64%, #f64f59 100%);
        }
      }
    }
  }
}
</style>
