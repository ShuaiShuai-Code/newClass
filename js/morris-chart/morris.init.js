Morris.Bar({
    element: 'graph-bar',
    data: [
        {x: 'Q1', y:0.5},
        {x: 'Q2', y:0.9},
        {x: 'Q3', y:0.85},
        {x: 'Q4', y:0.76},
        {x: 'Q5', y:0.76},
        {x: 'Q6', y:0.76}
    ],
    xkey: 'x',
    ykeys: ['y'],
    labels: ['比例'],
    barColors:['#6dc5a3']
});




// Use Morris.Area instead of Morris.Line
Morris.Donut({
    element: 'graph-donut',
    data: [
        {value: 70, label: '已提交', formatted: '70%' },
        {value: 30, label: '未提交', formatted: '15%' },
    ],
    backgroundColor: '#fff',
    labelColor: '#1fb5ac',
    colors: [
        '#414e62','#788ba0','#6dc5a3','#95D7BB'
    ],
    formatter: function (x, data) { return data.formatted; }
});

