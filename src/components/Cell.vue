<template>
    <div>
        <van-cell-group style="text-align: left;">
            <van-cell title="程序员喜欢去酒吧吗" label="左侧内容签" 
            icon="location" is-link arrow-direction="up" value="你猜" 
            required url="https://www.baidu.com" /> 
        </van-cell-group>
        <van-cell-group>
            <van-cell icon="point-gift" value="礼物" is-link>
                <div slot="title"> <!--选择在什么位置插入插槽，从而自定义单元格-->
                    <span>如何里程序员送礼物</span><!--在相应位置自定义内容-->
                    <van-tag type="danger">品种</van-tag>
                    </div>
            </van-cell>
        </van-cell-group>
    </div>
</template>
