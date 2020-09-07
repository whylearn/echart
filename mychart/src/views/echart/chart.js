export function chart(box){
  var odiv = box;
  var echarts = require('echarts');
  
  var myChart = echarts.init(odiv);
  // 绘制图表
  var options1 = {
  	title: {
          text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
      }]
  }
  myChart.setOption(options1);
}