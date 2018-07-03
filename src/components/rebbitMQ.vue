<template>
  <div class="rebbitMQ">
    <!-- <h2>rebbitMQ</h2>
    <p>this message form data:</p>
    <p>{{message}}</p> -->
    <!-- <layout></layout> -->
    <a-row class="row">
      <a-col :span="24">
        <a-button type="primary" @click="showModal">申请Vhost</a-button>
        <a-modal title="申请Vhost" v-model="visible" @ok="handleOk">
          <p>sss</p>
          <p>sss</p>
          <p>sss</p>
        </a-modal>
      </a-col>
    </a-row>
    <a-card title="Vhost列表" style="width: 100%;">
      <a-table :columns="columns" :dataSource="data">
        <!-- <a slot="name" slot-scope="text" :href="methodHref(text)">{{text}}</a> -->
        <a slot="name" slot-scope="text" href="/rebbitMQ/vhostDetail" @click="gotoVhostDetail">{{text}}</a>
      </a-table>
      <router-view></router-view>
    </a-card>
  </div>
</template>

<script>
import layout from './layoutvue.vue'
export default {
  name: 'rebbitMQ',
  data () {
    return {
      message: 'welcome to here! Friend',
      columns: [
        {
          title: 'Vhost',
          dataIndex: 'name',
          scopedSlots: {customRender: 'name'}
        },
        {
          title: '服务IP',
          dataIndex: 'age'
        },
        {
          title: '服务端口',
          dataIndex: 'address'
        },
        {
          title: '状态',
          dataIndex: 'status',
          filters: [
            {
              text: '使用中',
              value: '使用中'
            },
            {
              text: '创建中',
              value: '创建中'
            },
            {
              text: '申请中',
              value: '申请中'
            }
          ],
          filterMultiple: false,
          onFilter: (value, record) => record.status === value
        }
      ],
      // data: [
      //   {
      //     key: '1',
      //     name: 'John Brown',
      //     age: 32,
      //     address: 'New York',
      //     status: '使用中'
      //   },
      //   {
      //     key: '2',
      //     name: 'John Brown',
      //     age: 32,
      //     address: 'New York',
      //     status: '创建中'
      //   },
      //   {
      //     key: '3',
      //     name: 'John Brown',
      //     age: 32,
      //     address: 'New York',
      //     status: '申请中'
      //   },
      //   {
      //     key: '4',
      //     name: 'John Brown',
      //     age: 32,
      //     address: 'New York',
      //     status: '使用中'
      //   },
      //   {
      //     key: '5',
      //     name: 'John Brown',
      //     age: 32,
      //     address: 'New York',
      //     status: '创建中'
      //   },
      //   {
      //     key: '6',
      //     name: 'John Brown',
      //     age: 32,
      //     address: 'New York',
      //     status: '申请中'
      //   },
      //   {
      //     key: '7',
      //     name: 'John Brown',
      //     age: 32,
      //     address: 'New York',
      //     status: '使用中'
      //   },
      //   {
      //     key: '8',
      //     name: 'John Brown',
      //     age: 32,
      //     address: 'New York',
      //     status: '使用中'
      //   },
      //   {
      //     key: '9',
      //     name: 'John Brown',
      //     age: 32,
      //     address: 'New York',
      //     status: '申请中'
      //   },
      //   {
      //     key: '10',
      //     name: 'John Brown',
      //     age: 32,
      //     address: 'New York',
      //     status: '使用中'
      //   },
      //   {
      //     key: '11',
      //     name: 'John Brown',
      //     age: 32,
      //     address: 'New York',
      //     status: '创建中'
      //   },
      //   {
      //     key: '12',
      //     name: 'John Brown',
      //     age: 32,
      //     address: 'New York',
      //     status: '申请中'
      //   },
      //   {
      //     key: '13',
      //     name: 'John Brown',
      //     age: 32,
      //     address: 'New York',
      //     status: '使用中'
      //   }
      // ],
      visible: false
    }
  },
  components: {
    layout: layout
  },
  computed: {
    data: function () {
      let arr = []
      let statusArr = ['创建中', '申请中', '使用中']
      for (let i = 0; i < 15; i++) {
        arr.push({
          key: i,
          name: 'John Brown ' + i,
          age: 32 + i,
          address: 'New York ' + i,
          status: statusArr[Math.random() * 10 % 3]
        })
      }
      return arr
    },
    computeHref: function () {
      return 'b'
    }
  },
  methods: {
    computeStatus () {
      // let i = Math.random() * 10 % 3
      // switch (i) {
      //   case 0:
      //     return statusArr[i]
      // }
    },
    showModal () {
      this.visible = true
    },
    handleOk (e) {
      console.log(e)
    },
    methodHref (name) {
      let pattern = /\s\d+$/
      let ids = pattern.exec(name)
      let id = ids[0].slice(1, ids[0].length)
      return '/rebbitMQ/' + id
    },
    gotoVhostDetail (event) {
      event.preventDefault()
      // this.$router.push('/rebbitMQ/vhostDetail')
      this.$router.push('/vhostDetail')
      // this.$router.push('/kafkaTopic')
    }
  }
}
</script>

<style scoped>
  .row {
    margin-bottom: 15px;
  }
  h2 {
    color: #927;
  }
</style>
