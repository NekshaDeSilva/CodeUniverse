//WebCoders Group
//NCloud PLC.

window.onload = function () {

    var chart = new CanvasJS.Chart("wcchart_statics", {
        theme: "light2",
        exportFileName: "Doughnut Chart",
        exportEnabled: true,
        animationEnabled: true,
        title:{
            text: "WebCoders Statics"
        },
        legend:{
            cursor: "default",
            itemclick: explodePie
        },
        data: [{
            type: "doughnut",
            innerRadius: 90,
            showInLegend: true,
            toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
            indexLabel: "{name} - #percent%",
            dataPoints: [
                { y: 17, name: "Media Editors" },
                { y: 15, name: "Programmers" },
                { y: 15, name: "Mathematicians" },
                { y: 10, name: "Scientists" },
                { y: 9, name: "Entertainers" },
                { y: 8, name: "Arts And Crafts"},
                { y: 6, name: "Meme Industry" }
            ]
        }]
    });
    chart.render();
    
    function explodePie (e) {
        if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
            e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
        } else {
            e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
        }
        e.chart.render();
    }
    
    }