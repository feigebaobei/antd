<template>
  <div class="rebbitMQ">
    <!-- <h2>rebbitMQ</h2>
    <p>this message form data:</p>
    <p>{{message}}</p> -->
    <!-- <layout></layout> -->
    <a-button type="primary" @click="showModal">申请Vhost</a-button>
    <a-modal title="申请Vhost" v-model="visible" @ok="handleOk">
      <p>sss</p>
      <p>sss</p>
      <p>sss</p>
    </a-modal>
    <a-card title="Vhost列表" style="width: 100%;">
      <a-table :columns="columns" :dataSource="data">
        <a slot="name" slot-scope="text" :href="text">{{text}}</a>
      </a-table>
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
      data: [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York',
          status: '使用中'
        },
        {
          key: '2',
          name: 'John Brown',
          age: 32,
          address: 'New York',
          status: '创建中'
        },
        {
          key: '3',
          name: 'John Brown',
          age: 32,
          address: 'New York',
          status: '申请中'
        },
        {
          key: '4',
          name: 'John Brown',
          age: 32,
          address: 'New York',
          status: '使用中'
        },
        {
          key: '5',
          name: 'John Brown',
          age: 32,
          address: 'New York',
          status: '创建中'
        },
        {
          key: '6',
          name: 'John Brown',
          age: 32,
          address: 'New York',
          status: '申请中'
        },
        {
          key: '7',
          name: 'John Brown',
          age: 32,
          address: 'New York',
          status: '使用中'
        },
        {
          key: '8',
          name: 'John Brown',
          age: 32,
          address: 'New York',
          status: '使用中'
        }
      ],
      visible: false
    }
  },
  components: {
    layout: layout
  },
  methods: {
    showModal () {
      this.visible = true
    },
    handleOk (e) {
      console.log(e)
    }
  }
}
</script>

<style scoped>
  h2 {
    color: #927;
  }
</style>
