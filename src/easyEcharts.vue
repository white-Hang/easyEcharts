<template>
  <div class="chartBox" :style="'padding-bottom:' + paddingBottom">
    <div ref="dom" class="charts"></div>
  </div>
</template>
<script>
import echarts from 'echarts'
import tdTheme from './chartsColor.json'
export default {
  name: 'easyEcharts',
  components: {},
  data () {
    return {
      dom: null
    }
  },
  props: {
    /* paddingBottom */
    paddingBottom: String,
    /*
    * 数据是否发生变化，变化以后重新渲染图表
    * */
    isChange: {
      type: Boolean,
      default: false
    },
    /*
    * 是否不需要等待数据立即显示图表
    * */
    isItemEchart: {
      type: Boolean,
      default: false
    },
    /* title选项：方法参考echarts API */
    titleOption: {
      type: Object
    },
    /* legend选项：方法参考echarts API */
    legendOption: {
      type: Object | Array
    },
    /*
    * grid选项：方法参考echarts API
    * */
    gridOption: {
      type: Object | Array
    },
    /*
    * xAxis选项：方法参考echarts API
    * */
    xAxisOption: {
      type: Object | Array
    },
    /*
    * yAxis选项：方法参考echarts API
    * */
    yAxisOption: {
      type: Object | Array
    },
    /*
    * polar选项：方法参考echarts API
    * */
    polarOption: {
      type: Object | Array
    },
    /*
    * radiusAxis选项：方法参考echarts API
    * */
    radiusAxisOption: {
      type: Object | Array
    },
    /*
    * angleAxis选项：方法参考echarts API
    * */
    angleAxisOption: {
      type: Object | Array
    },
    /*
    * radar选项：方法参考echarts API
    * */
    radarOption: {
      type: Object | Array
    },
    /*
    * dataZoom选项：方法参考echarts API
    * */
    dataZoomOption: {
      type: Object | Array
    },
    /*
    * visualMap选项：方法参考echarts API
    * */
    visualMapOption: {
      type: Object | Array
    },
    /*
    * tooltip选项：方法参考echarts API
    * */
    tooltipOption: {
      type: Object | Array
    },
    /*
    * axisPointer选项：方法参考echarts API
    * */
    axisPointerOption: {
      type: Object | Array
    },
    /*
    * toolbox选项：方法参考echarts API
    * */
    toolboxOption: {
      type: Object | Array
    },
    /*
    * brush选项：方法参考echarts API
    * */
    brushOption: {
      type: Object | Array
    },
    /*
    * geo选项：方法参考echarts API
    * */
    geoOption: {
      type: Object | Array
    },
    /*
    * parallel选项：方法参考echarts API
    * */
    parallelOption: {
      type: Object | Array
    },
    /*
    * parallelAxis选项：方法参考echarts API
    * */
    parallelAxisOption: {
      type: Object | Array
    },
    /*
    * singleAxis选项：方法参考echarts API
    * */
    singleAxisOption: {
      type: Object | Array
    },
    /*
    * timeline选项：方法参考echarts API
    * */
    timelineOption: {
      type: Object | Array
    },
    /*
    * graphic选项：方法参考echarts API
    * */
    graphicOption: {
      type: Object | Array
    },
    /*
    * calendar选项：方法参考echarts API
    * */
    calendarOption: {
      type: Object | Array
    },
    /*
    * dataset选项：方法参考echarts API
    * */
    datasetOption: {
      type: Object | Array
    },
    /*
    * aria选项：方法参考echarts API
    * */
    ariaOption: {
      type: Object | Array
    },
    /*
    * color选项：方法参考echarts API
    * */
    colorOption: {
      type: Array,
      default: () => {
        return []
      }
    },
    /*
    * series选项：方法参考echarts API
    * */
    seriesOption: {
      type: Array,
      default: () => {
        return []
      }
    },
    /*
    * backgroundColor选项：方法参考echarts API
    * */
    backgroundColorOption: {
      type: String | Object | Array
    },
    /*
    * textStyle选项：方法参考echarts API
    * */
    textStyleOption: {
      type: String | Object | Array
    },
    /*
    * animation选项：方法参考echarts API
    * */
    animationOption: {
      type: String | Object | Array
    },
    /*
    * animationThreshold选项：方法参考echarts API
    * */
    animationThresholdOption: {
      type: String | Object | Array
    },
    /*
    * animationDuration选项：方法参考echarts API
    * */
    animationDurationOption: {
      type: String | Object | Array
    },
    /*
    * animationEasing选项：方法参考echarts API
    * */
    animationEasingOption: {
      type: String | Object | Array
    },
    /*
    * animationDelay选项：方法参考echarts API
    * */
    animationDelayOption: {
      type: String | Object | Array
    },
    /*
    * animationDurationUpdate选项：方法参考echarts API
    * */
    animationDurationUpdateOption: {
      type: String | Object | Array
    },
    /*
    * animationEasingUpdate选项：方法参考echarts API
    * */
    animationEasingUpdateOption: {
      type: String | Object | Array
    },
    /*
    * animationDelayUpdate选项：方法参考echarts API
    * */
    animationDelayUpdateOption: {
      type: String | Object | Array
    },
    /*
    * blendMode选项：方法参考echarts API
    * */
    blendModeOption: {
      type: String | Object | Array
    },
    /*
    * hoverLayerThreshold选项：方法参考echarts API
    * */
    hoverLayerThresholdOption: {
      type: String | Object | Array
    },
    /*
    * useUTC选项：方法参考echarts API
    * */
    useUTCOption: {
      type: String | Object | Array
    }
  },
  computed: {
  },
  watch: {
    isChange (now) {
      this.setOption()
    }
  },
  methods: {
    /* 颜色合并 */
    colorPush (data) {
      if (data && data.length) {
        const colorArr = data
        for (let i in tdTheme.color) {
          colorArr.push(tdTheme.color[i])
        }
        return colorArr
      } else {
        return tdTheme.color
      }
    },
    /* 绘制图表的方法 */
    setOption () {
      let that = this
      /* 颜色变量 */
      const colorOption = that.colorPush(that.colorOption)
      /* 图的object对象 */
      const option = {
        color: colorOption,
        xAxis: that.xAxisOption,
        yAxis: that.yAxisOption,
        series: that.seriesOption
      }
      /* title */
      if (that.titleOption !== undefined) {
        option.title = that.titleOption
      }
      /* grid */
      if (that.gridOption !== undefined) {
        option.grid = that.gridOption
      }
      /* tooltip */
      if (that.tooltipOption !== undefined) {
        option.tooltip = that.tooltipOption
      }
      /* dataZoom */
      if (that.dataZoomOption !== undefined) {
        option.dataZoom = that.dataZoomOption
      }
      /* toolbox */
      if (that.toolboxOption !== undefined) {
        option.toolbox = that.toolboxOption
      }
      /* toolbox */
      if (that.legendOption !== undefined) {
        option.legend = that.legendOption
      }
      /* backgroundColor */
      if (that.backgroundColorOption !== undefined) {
        option.backgroundColor = that.backgroundColorOption
      }
      /* polar */
      if (that.polarOption !== undefined) {
        option.polar = that.polarOption
      }
      /* radiusAxis */
      if (that.radiusAxisOption !== undefined) {
        option.radiusAxis = that.radiusAxisOption
      }
      /* angleAxis */
      if (that.angleAxisOption !== undefined) {
        option.angleAxis = that.angleAxisOption
      }
      /* radar */
      if (that.radarOption !== undefined) {
        option.radar = that.radarOption
      }
      /* visualMap */
      if (that.visualMapOption !== undefined) {
        option.visualMap = that.visualMapOption
      }
      /* axisPointer */
      if (that.axisPointerOption !== undefined) {
        option.axisPointer = that.axisPointerOption
      }
      /* brush */
      if (that.brushOption !== undefined) {
        option.brush = that.brushOption
      }
      /* geo */
      if (that.geoOption !== undefined) {
        option.geo = that.geoOption
      }
      /* parallel */
      if (that.parallelOption !== undefined) {
        option.parallel = that.parallelOption
      }
      /* parallelAxis */
      if (that.parallelAxisOption !== undefined) {
        option.parallelAxis = that.parallelAxisOption
      }
      /* singleAxis */
      if (that.singleAxisOption !== undefined) {
        option.singleAxis = that.singleAxisOption
      }
      /* timeline */
      if (that.timelineOption !== undefined) {
        option.timeline = that.timelineOption
      }
      /* graphic */
      if (that.graphicOption !== undefined) {
        option.graphic = that.graphicOption
      }
      /* calendar */
      if (that.calendarOption !== undefined) {
        option.calendar = that.calendarOption
      }
      /* dataset */
      if (that.datasetOption !== undefined) {
        option.dataset = that.datasetOption
      }
      /* aria */
      if (that.ariaOption !== undefined) {
        option.aria = that.ariaOption
      }
      /* textStyle */
      if (that.textStyleOption !== undefined) {
        option.textStyle = that.textStyleOption
      }
      /* animation */
      if (that.animationOption !== undefined) {
        option.animation = that.animationOption
      }
      /* animationThreshold */
      if (that.animationThresholdOption !== undefined) {
        option.animationThreshold = that.animationThresholdOption
      }
      /* animationDuration */
      if (that.animationDurationOption !== undefined) {
        option.animationDuration = that.animationDurationOption
      }
      /* animationEasing */
      if (that.animationEasingOption !== undefined) {
        option.animationEasing = that.animationEasingOption
      }
      /* animationDelay */
      if (that.animationDelayOption !== undefined) {
        option.animationDelay = that.animationDelayOption
      }
      /* animationDurationUpdate */
      if (that.animationDurationUpdateOption !== undefined) {
        option.animationDurationUpdate = that.animationDurationUpdateOption
      }
      /* animationEasingUpdate */
      if (that.animationEasingUpdateOption !== undefined) {
        option.animationEasingUpdate = that.animationEasingUpdateOption
      }
      /* animationDelayUpdate */
      if (that.animationDelayUpdateOption !== undefined) {
        option.animationDelayUpdate = that.animationDelayUpdateOption
      }
      /* blendMode */
      if (that.blendModeOption !== undefined) {
        option.blendMode = that.blendModeOption
      }
      /* hoverLayerThreshold */
      if (that.hoverLayerThresholdOption !== undefined) {
        option.hoverLayerThreshold = that.hoverLayerThresholdOption
      }
      /* useUTC */
      if (that.useUTCOption !== undefined) {
        option.useUTC = that.useUTCOption
      }

      that.dom.clear()
      that.dom.setOption(option)
    }
  },
  mounted () {
    let that = this
    that.dom = echarts.init(that.$refs.dom)
    that.$nextTick(() => {
      if (that.isItemEchart) {
        that.setOption()
      }
      that.dom.resize()
      window.addEventListener('resize', function () {
        that.dom&&that.dom.resize()
      })
    })
  },
  beforeDestroy () {
    const that = this
    try {
      window.removeEventListener('resize', () => {
        that.dom.resize()
      })
    } catch (error) {}
    try {
      that.dom.dispose();
    } catch (error) {}

    that.dom = null
  }
}
</script>
<style lang="scss" scoped>
  .chartBox {
    width: 100%;
    height: 0;
    position: relative;
    padding-bottom: 50%;
    .charts {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
</style>
