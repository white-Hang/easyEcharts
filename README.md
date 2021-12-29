# easy-echarts

> 一个简单的 echarts 使用插件，使用方法特别简单。

## 使用方法

文件里引入

```javascript
import { easyEcharts } from 'easy-echarts'
```

components 里注册

```javascript
components: { easyEcharts },
```

这里同样可以全局注册，在main.js里注册,注册以后就不需要在单独的文件引入注册
```javascript
import {easyEcharts}  from "easy-echarts"
Vue.use(easyEcharts)
```


代码里，以饼图为例：

```javascript
<easy-echarts :isChange="isChange"
              :isItemEchart="true"
              :legendOption="legend"
              :tooltipOption="tooltip"
              :seriesOption="series"></easy-echarts>
```

data 里定义数据,这里的配置项和 echarts 里的配置项是对应的，这里以饼图为例：

```javascript
tooltip: {
        trigger: 'item'
},
legend: {
    top: '5%',
    left: 'center'
},
series: [
    {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
        show: false,
        position: 'center'
        },
        emphasis: {
        label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold'
        }
        },
        labelLine: {
        show: false
        },
        data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
        ]
    }
],
isChange: true,//监听数据是否发生变化，然后重新渲染图表，这个每次echarts数据改变，修改isChange的布尔值就行。
```
