<template>
    <div>
        <div class="tleft">
            <div class="mart20 marb10"><b>按钮类型</b></div>
            <van-button type="default">默认按钮</van-button>
            <van-button type="primary">主要按钮</van-button>
            <van-button type="warning">警告按钮</van-button>
            <van-button type="danger">危险按钮</van-button>
        </div>
        <div class="tleft">
            <div class="mart20 marb10"><b>带边框的镂空按钮</b></div>
            <van-button plain type="primary">镂空按钮1</van-button>
            <van-button plain type="danger">镂空按钮</van-button>
        </div>
        <div class="tleft">
            <div class="mart20 marb10"><b>禁用状态</b></div>
            <van-button disabled type="primary">朴素按钮</van-button>
            <van-button disabled type="danger">朴素按钮</van-button>
        </div>
        <div class="tleft">
            <div class="mart20 marb10"><b>加载状态</b></div>
            <van-button loading type="primary">加载状态</van-button>
            <van-button loading type="danger">加载状态</van-button>
        </div>
        <div class="tleft">
            <div class="mart20 marb10"><b>按钮形状</b></div>
            <van-button square type="primary">方形按钮</van-button>
            <van-button round type="danger">圆形按钮</van-button>
        </div>
        <div class="tleft">
            <div class="mart20 marb10"><b>按钮尺寸</b></div>
            <van-button size="large" type="primary" native-type="submit">大形按钮，即通栏按钮</van-button>
            <van-button size="normal" type="warning">普通按钮</van-button>
            <van-button size="small" type="danger">小型按钮</van-button>
            <van-button size="mini" block>迷你按钮</van-button>
        </div>
    </div>
    
</template>
