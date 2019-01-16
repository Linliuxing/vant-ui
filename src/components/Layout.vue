<template>
    <div class="layout">
        <div class="arrow-left">
            <van-icon name="arrow-left" @click="goback" />
        </div>
        <van-row type="flex">
            <van-col span="8" class="left" tag="a">span: 8</van-col>
            <van-col span="8" class="center">span: 8</van-col>
            <van-col span="8" class="right">span: 8</van-col>
        </van-row>
    </div>
</template>


<script>

export default {
  components: {
  },
  methods: {
    goback() {
        this.$router.go(-1)
        }
    }
}
</script>

<style>
.left {
 background-color: #9dcff9;
}
.center {
 background-color: #5fb3fa;
}
.right {
 background-color: #2197fb;
}
.arrow-left {
 margin: 20px;
 text-align: left;
}
</style>