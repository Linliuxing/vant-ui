<template>
    <div id="index">
        <van-row>
            <a href="javascript:void(0)" @click="$router.push('/layout')">
                <van-col span="6">
                    <van-icon name="wap-nav"/>
                    <div>布局</div>
                </van-col>
            </a>
            <a href="javascript:void(0)" @click="$router.push('/button')">
                <van-col span="6">
                    <van-icon name="discount" />
                    <div>按钮</div>
                </van-col>
            </a>
            <a href="javascript:void(0)" @click="$router.push('/tag')">
                <van-col span="6" class="marb20">
                    <van-icon name="password-view" />
                    <div>Tag标记</div>
                </van-col>
            </a>
            <a href="javascript:void(0)" @click="$router.push('/cell')">
                <van-col span="6" class="marb20">
                    <van-icon name="records" />
                    <div>单元格</div>
                </van-col>
            </a>
            <van-col span="6"></van-col>
            <van-col span="6"></van-col>
            <van-col span="6"></van-col>
        </van-row>
    </div>
</template>
