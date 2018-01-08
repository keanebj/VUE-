<template>
    <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore">
       <!--  <div id="loading">{{msg}}</div> -->
        <!-- <ul>
            <li v-for="item in list">{{ item }}</li>
        </ul>
        <div slot="top" class="mint-loadmore-top">
          <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
          <span v-show="topStatus === 'loading'">Loading...</span>
        </div> -->
        
        <!-- <ul
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10">
          <li v-for="item in list">{{ item }}</li>
        </ul>

        <mt-actionsheet
          :actions="actions"
          v-model="sheetVisible">
        </mt-actionsheet>
 -->
        <div>
          <div class="nav">
            <mt-button size="small" @click.native.prevent="active = 'tab-container1'">tab 1</mt-button>
            <mt-button size="small" @click.native.prevent="active = 'tab-container2'">tab 2</mt-button>
            <mt-button size="small" @click.native.prevent="active = 'tab-container3'">tab 3</mt-button>
          </div>
          <div class="page-tab-container">
            <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
              <mt-tab-container-item id="tab-container1">
                <mt-cell v-for="(n ,index) in 20" title="tab-container 1">{{n}},{{index}}</mt-cell>
              </mt-tab-container-item>
              <mt-tab-container-item id="tab-container2">
                <mt-cell v-for="n in 10" title="tab-container 2"></mt-cell>
              </mt-tab-container-item>
              <mt-tab-container-item id="tab-container3">
                <mt-cell v-for="n in 10" title="tab-container 3"></mt-cell>
              </mt-tab-container-item>
            </mt-tab-container>
          </div>
        </div>

        <div class="page-datetime">
    <h1 class="page-title">Datetime Picker</h1>
    <div class="page-datetime-wrapper">
      <mt-button @click.native="open('picker1')" size="large">点击弹出 DateTime Picker</mt-button>
      <mt-button @click.native="open('picker2')" size="large">点击弹出 Date Picker</mt-button>
      <mt-button @click.native="open('picker3')" size="large">点击弹出 Time Picker</mt-button>
      <mt-button @click.native="open('picker4')" size="large">自定义模板</mt-button>
      <mt-button @click.native="open('picker5')" size="large">设定初始值</mt-button>
    </div>
    <mt-datetime-picker
      ref="picker1"
      v-model="value"
      @confirm="handleChange">
    </mt-datetime-picker>
    <mt-datetime-picker
      ref="picker2"
      type="date"
      v-model="value2"
      @confirm="handleChange">
    </mt-datetime-picker>
    <mt-datetime-picker
      ref="picker3"
      type="time"
      v-model="value3"
      @confirm="handleChange">
    </mt-datetime-picker>
    <mt-datetime-picker
      ref="picker4"
      type="date"
      v-model="value4"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleChange">
    </mt-datetime-picker>
    <mt-datetime-picker
      ref="picker5"
      type="time"
      v-model="value5"
      @confirm="handleChange">
    </mt-datetime-picker>
  </div>

   <div class="page-lazyload">
    <h1 class="page-title">Lazy Load</h1>
    <ul class="page-lazyload-list">
      <li class="page-lazyload-listitem" v-for="item in img">
        <img v-lazy="item" class="page-lazyload-image">
      </li>
    </ul>
  </div>

    </mt-loadmore>

</template>

<script>
import Vue from "vue"
import { Loadmore } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);

import { Actionsheet } from 'mint-ui';
Vue.component(Actionsheet.name, Actionsheet);

import { TabContainer, TabContainerItem } from 'mint-ui';

Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
import {Toast} from "mint-ui"
// import { DatetimePicker } from 'mint-ui';

// Vue.component(DatetimePicker.name, DatetimePicker);
export  default {
    name:"loading",
    data (){
        return {
            msg:"数据加载",
            list:[12,3,23,34,34,3,4,54,5,66,7,8,8,8,9,9,0],
            topStatus: 'loading',
            loading:"false",
            sheetVisible:"true",
            active: 'tab-container1',
             value: null,
            value2: null,
            value3: null,
            value4: null,
            value5: '04:32',
            visible: false,
            visible2: false,
            visible3: false,
            visible4: false,
            visible5: false,
            img: [
                'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg',
                'http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg',
                'http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg',
                'http://fuss10.elemecdn.com/7/85/e478e4b26af74f4539c79f31fde80jpeg.jpeg',
                'http://fuss10.elemecdn.com/b/df/b630636b444346e38cef6c59f6457jpeg.jpeg',
                'http://fuss10.elemecdn.com/7/a5/596ab03934612236f807b92906fd8jpeg.jpeg'
              ]
            }
    },
    methods:{
        handleTopChange(status) {
            this.topStatus = status;
          },

          loadTop(){
                this.$refs.loadmore.onTopLoaded();
          },
          loadBottom(){
                this.$refs.loadmore.onBottomLoaded();
          },
          allLoaded(){
                this.$refs.loadmore.onAllLoaded();
          },

          loadMore() {
              this.loading = true;
              setTimeout(() => {
                let last = this.list[this.list.length - 1];
                for (let i = 1; i <= 10; i++) {
                  this.list.push(last + i);
                }
                this.loading = false;
              }, 2500);
            },
            open(picker) {
              this.$refs[picker].open();
            },

            handleChange(value) {
              Toast({
                message: '已选择 ' + value.toString(),
                position: 'bottom'
              });
            }
    }
}
</script>

<style scoped>
     @component-namespace page {
        @component datetime {
          @descendent wrapper {
            padding: 0 20px;
            position: absolute 50% * * *;
            width: 100%;
            transform: translateY(-50%);

            button:not:(last-child) {
              margin-bottom: 20px;
            }
          }
        }

         @component lazyload {
            @descendent list {
              text-align: center;
            }

            @descendent listitem {
              width: 300px;
              margin: 0 auto;
              margin-bottom: 10px;
              background-color: #ddd;
            }

            @descendent image {
              display: block;
              width: 100%;
            }

            @descendent image[lazy=loading] {
              width: 40px;
              height: 300px;
              margin: auto;
            }
          }
      }

   /* ul li{
        height: 30px;
        line-height: 30px;
        font-size: 18px;
        list-style: none;
    }*/

    .item {
    display: inline-block;
  }

  .nav {
    padding: 10px;
  }

  .link {
    color: inherit;
    padding: 20px;
    display: block;
  }

</style>