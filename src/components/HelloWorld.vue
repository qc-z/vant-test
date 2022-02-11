<template>
  <van-image width="100" height="100" lazy-load src="https://img.yzcdn.cn/vant/cat.jpeg" />
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit"> 提交 </van-button>
    </div>
  </van-form>
  <van-button type="primary">主要按钮</van-button>
  <van-button type="success">成功按钮</van-button>
  <van-button type="default">默认按钮</van-button>
  <van-button type="warning">警告按钮</van-button>
  <van-button type="danger">危险按钮</van-button>
</template>

<script setup lang="ts">
import { AnyNaptrRecord } from 'dns'
import { Toast } from 'vant'
// console.log(debounce)

const username = ref('')
const password = ref('')
const onSubmit = (values: AnyNaptrRecord) => {
  console.log('submit', values)
}
Toast('提示内容')
const test = ref(null)
</script>
<style scoped>
a {
  color: #42b983;
}
</style>
