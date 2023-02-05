Highcharts.chart('graph', {
    chart: {
      type: 'areaspline'
    },
    title: {
      text: 'Health Curve',
      align: 'left'
    },
    subtitle: {
    //   text: 'Source: <a href="https://www.ssb.no/jord-skog-jakt-og-fiskeri/jakt" target="_blank">SSB</a>',
      align: 'left'
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: 120,
      y: 70,
      floating: true,
      borderWidth: 1,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
    },
    xAxis: {
      plotBands: [{ // Highlight the two last years
        from: 2019,
        to: 2020,
        color: 'rgba(68, 170, 213, .2)'
      }]
    },
    yAxis: {
      title: {
        text: 'Quality'
      }
    },
    tooltip: {
      shared: true,
      headerFormat: '<b>Patient Health Curve {point.x}</b><br>'
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      series: {
        pointStart: 2000
      },
      areaspline: {
        fillOpacity: 0.5
      }
    },
    series: [{
      name: 'Barney Cull',
      data:
        [
          22534,
          23599,
          24533,
          25195,
          25896,
          27635,
          29173,
          32646,
          35686,
          37709,
          39143,
          36829,
          35031,
          36202,
          35140,
          33718,
          37773,
          42556,
          43820,
          46445,
          50048
        ]
    }]
  });

  

// pie-chart start

Highcharts.chart('pie-chart', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false
    },
    title: {
      text: 'Patient Overview',
      align: 'center',
    //   verticalAlign: 'middle',
    //   y: 60
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    credits: {
        enabled: false
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          distance: -35,
          style: {
            fontWeight: 'bold',
            color: 'white'
          }
        },
        startAngle: -90,
        endAngle: 90,
        center: ['50%', '75%'],
        size: '110%'
      }
    },
    series: [{
      type: 'pie',
      name: 'Browser share',
      innerSize: '50%',
      data: [
        ['USA', 40.1],
        ['INDIA', 30.0],
        ['AUSTRALIA', 20.0],
        ['BRAZIL', 10.0],
        // ['Internet Explorer', 1.90],
        {
          name: 'Other',
          y: 3.77,
          dataLabels: {
            enabled: true
          }
        }
      ]
    }]
  });

// pie-chart end

// side bar menu start

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const sideBar = document.getElementById('sideBar');

if(bar){
    bar.addEventListener('click', ()=>{
        sideBar.classList.add('active')
    })
}

if(close){
    close.addEventListener('click', ()=>{
        sideBar.classList.remove('active')
    })
}

// side bar menu end