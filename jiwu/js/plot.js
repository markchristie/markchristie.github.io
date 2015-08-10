/**
 * Created by Mark on 2015/8/10 0010.
 */
var options = {
    series: {
        lines: {
            show: true
        },
        points: {
            show: true
        }
    },
    legend: {
        position: "nw"
    },
    grid: {
        hoverable: true,
        clickable: true
    },
    yaxis: {
        min: 0,
        tickSize: 1,
        tickFormatter: function (val, axis) {
            return parseInt(val);
        }
    },
    xaxis: {
        //mode: "time",
        ticks: [
            [0, "7月20"],
            [1, "7月21"],
            [2, "7月22"],
            [3, "7月23"],
            [4, "7月24"],
            [5, "7月25"],
            [6, "7月26"],
            [7, "7月27"],
            [8, "7月28"],
            [9, "7月29"],
            [10, "7月30"],
            [11, "7月31"],
            [12, "8月1"],
            [13, "8月2"],
            [14, "8月3"],
            [15, "8月4"],
            [16, "8月5"],
            [17, "8月6"],
            [18, "8月7"],
            [19, "8月8"],
            [20, "8月9"],
            [21, "8月10"]
        ],
        min: 0,
        max: 21
    }
};
function hover(event, pos, item){
    //var str = "(" + pos.x.toFixed(2) + ", " + pos.y.toFixed(2) + ")";
    //$("#hoverdata").text(str);

    if (item) {
        var x = item.datapoint[0].toFixed(2),
            y = item.datapoint[1].toFixed(2);

        $("#tooltip").html(item.series.label + /*" " + x + */" " + parseInt(y))
            .css({top: item.pageY + 5, left: item.pageX + 5})
            .fadeIn(200);
    } else {
        $("#tooltip").hide();
    }
}
$(function() {
    var plot_report = $.plot("#placeholder_report", [
        {data: report_gjxc, label: "国际新城"},
        {data: report_ykgc, label: "永康广场"},
        {data: report_hdhy, label: "海德花园"},
        {data: report_sum, label: "总和"}
    ], options);

    var plot_visit = $.plot("#placeholder_visit", [
        {data: visit_gjxc, label: "国际新城"},
        {data: visit_ykgc, label: "永康广场"},
        {data: visit_hdhy, label: "海德花园"},
        {data: visit_sum, label: "总和"}
    ], options);

    var plot_deal = $.plot("#placeholder_deal", [
        {data: deal_gjxc, label: "国际新城"},
        {data: deal_ykgc, label: "永康广场"},
        {data: deal_hdhy, label: "海德花园"},
        {data: deal_sum, label: "总和"}
    ], options);

    $("<div id='tooltip'></div>").css({
        position: "absolute",
        display: "none",
        border: "1px solid #fdd",
        padding: "2px",
        "background-color": "#fee",
        opacity: 0.80
    }).appendTo("body");

    $("#placeholder_report").bind("plothover", function (event, pos, item) {
        hover(event, pos, item);
    });
    $("#placeholder_visit").bind("plothover", function (event, pos, item) {
        hover(event, pos, item);
    });
    $("#placeholder_deal").bind("plothover", function (event, pos, item) {
        hover(event, pos, item);
    });

    /*$("#placeholder").bind("plotclick", function (event, pos, item) {
     if (item) {
     $("#clickdata").text(" - click point " + item.dataIndex + " in " + item.series.label);
     plot.highlight(item.series, item.datapoint);
     }
     });*/

    $("#footer").prepend("Powered by <a href='http://www.flotcharts.org/'>Flot</a> " + $.plot.version + " &ndash; ");
});