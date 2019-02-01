
+ 组件名称 
    ```ViewClamp```

+ 组件注册
    ```javascript
    // main.js
    import ViewClamp from '@/components/view-clamp';
    Vue.use(ViewClamp)
    ```

+ 组件目录
    ```src/components/view-clamp```

+ 组件目的:
    ```使用组件处理过长的文字```
+ 如何使用:
     ```在父组件中使用
         <ViewClamp :text="some-text"></ViewClamp>
            Or
         <view-clamp :text="item.val.text"/>
     ```

+ Props说明:
    ```text: 要显示的文字
    readMore: 展开按钮的文案,默认为 '展开'
    readLess: 收起按钮的文案,默认为 '收起'
    maxLen: 收起状态下最大显示长度,作为开始截取显示不下的计算长度
    ```
    
  
+ 具体实例
    ```
    src\components\detailed-list\src\detailedList.vue
    ```

+ 更新日志
   1.0

2019/02/01 创建 by suzhen
