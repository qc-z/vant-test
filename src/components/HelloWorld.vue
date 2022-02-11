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
      <van-button round block type="primary" native-type="submit"> 提交</van-button>
    </div>
  </van-form>

  <van-button type="primary" @click="open">打开弹窗</van-button>
  <van-button type="success" @click="open">成功按钮</van-button>
  <van-button type="warning" @click="open">警告按钮</van-button>
  <van-button type="danger" @click="open">危险按钮</van-button>
</template>

<script setup lang="ts">
import { AnyNaptrRecord } from 'dns'
import { Dialog, Toast } from 'vant'

const username = ref('')
const password = ref('')
const onSubmit = (values: AnyNaptrRecord) => {
  console.log('submit', values)
  Toast.success('success')
}
const open = () => {
  Dialog({ message: '手动弹窗' })
}
Dialog.confirm({
  title: '标题',
  message: '初始化弹窗'
})
  .then(() => {
    Toast('confirm')
  })
  .catch(() => {
    Toast('cancel')
  })
</script>
