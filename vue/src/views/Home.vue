<template>
  <div class="home">
    <div id="test"></div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {

    }
  },
  mounted () {
    var myChart = this.$echarts.init(document.getElementById('test'));
    var option = {
        series: [
            {
                name: '',
                type: 'pie',
                hoverAnimation: false,
                legendHoverLink: false,
                radius: ['28%', '45%'],
                center: ['15%', '40%'],
                z: 10,
                color: ['rgba(6,71,91,0.4)','rgba(6,238,255,0.4)'],
                label: {
                    normal: {
                        position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: false,
                    },

                },
                itemStyle: {
                    normal: {
                        borderColor: '#FFF',
                        borderWidth: '2',
                    }
                },
                tooltip: {
                    show: false,

                },
                data: [{
                    value: 55,
                    name: ''
                },
                {
                    value: 45,
                    name: ''
                }
                ]
            },
            {
                name: 'title',
                type: 'pie',
                radius: ['35%', '45%'],
                center: ['15%', '40%'],
                color: ['rgba(6,71,91,1.0)', 'rgba(6,238,255,1.0)'],
                label: {
                    show: false
                },
                itemStyle: {
                    normal: {
                        borderColor: '#FFF',
                        borderWidth: '2',
                    }
                },
                data: [{
                    value: 55,
                    name: 'A'
                },
                {
                    value: 45,
                    name: 'B'
                }
                ]
            },


            {
                name: '',
                type: 'pie',
                hoverAnimation: false,
                legendHoverLink: false,
                radius: ['28%', '45%'],
                center: ['50%', '40%'],
                z: 10,
                color: ['rgba(6,71,91,0.4)', 'rgba(6,238,255,0.4)'],
                label: {
                    normal: {
                        position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: false,
                    },

                },
                itemStyle: {
                    normal: {
                        borderColor: '#FFF',
                        borderWidth: '2',
                    }
                },
                tooltip: {
                    show: false,

                },
                data: [{
                    value: 38,
                    name: ''
                },
                {
                    value: 62,
                    name: ''
                }
                ]
            },
            {
                name: 'title',
                type: 'pie',
                radius: ['35%', '45%'],
                center: ['50%', '40%'],
                color: ['rgba(6,71,91,1.0)', 'rgba(6,238,255,1.0)'],
                label: {
                    show: false
                },
                itemStyle: {
                    normal: {
                        borderColor: '#FFF',
                        borderWidth: '2',
                    }
                },
                data: [{
                    value: 38,
                    name: 'A'
                },
                {
                    value: 62,
                    name: 'B'
                }
                ]
            },





            {
                name: '',
                type: 'pie',
                hoverAnimation: false,
                legendHoverLink: false,
                radius: ['28%', '45%'],
                center: ['85%', '40%'],
                z: 10,
                color: ['rgba(6,71,91,0.4)', 'rgba(255,255,38,0.4)', 'rgba(6,238,255,0.4)'],
                label: {
                  show: false
                },
                labelLine: {
                  show: false,
                },
                itemStyle: {
                    normal: {
                        borderColor: '#FFF',
                        borderWidth: '2',
                    }
                },
                tooltip: {
                    show: false,
                },
                data: [{
                    value: 38,
                    name: ''
                },
                {
                    value: 62,
                    name: ''
                },
                {
                    value: 24,
                    name: ''
                }
                ]
            },
            {
                name: 'title',
                type: 'pie',
                radius: ['35%', '45%'],
                center: ['85%', '40%'],
                color: ['rgba(6,71,91,1.0)', 'rgba(255,255,38,1.0)', 'rgba(6,238,255,1.0)'],
                label: {
                    show: false
                },
                itemStyle: {
                    normal: {
                        borderColor: '#FFF',
                        borderWidth: '2',
                    }
                },
                data: [{
                    value: 38,
                    name: 'A'
                },
                {
                    value: 62,
                    name: 'B'
                },
                {
                    value: 24,
                    name: 'C'
                }
                ]
            }
        ]
    };
    myChart.setOption(option);
  }
}
</script>
<style scoped>
  #test {
    width: 800px;
    height: 500px;
    border: 1px solid black;
  }
</style>
