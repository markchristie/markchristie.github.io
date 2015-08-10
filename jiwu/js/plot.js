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
        position: "nw",
        backgroundOpacity: 0.2
    },
    grid: {
        hoverable: true,
        clickable: true
    },
    yaxes: [{
        min: 0,
        tickSize: 1,
        tickFormatter: function (val, axis) {
            return parseInt(val);
        }}],
    xaxes: [ {ticks: [
        [1, "7月21日"],
        [2, "7月22日"],
        [3, "7月23日"],
        [4, "7月24日"],
        [5, "7月25日"],
        [6, "7月26日"],
        [7, "7月27日"],
        [8, "7月28日"],
        [9, "7月29日"],
        [10, "7月30日"],
        [11, "7月31日"],
        [12, "8月1日"],
        [13, "8月2日"],
        [14, "8月3日"],
        [15, "8月4日"],
        [16, "8月5日"],
        [17, "8月6日"],
        [18, "8月7日"],
        [19, "8月8日"],
        [20, "8月9日"],
        [21, "8月10日"],
        [22, "8月11日"],
        [23, "8月12日"],
        [24, "8月13日"],
        [25, "8月14日"],
        [26, "8月15日"],
        [27, "8月16日"],
        [28, "8月17日"],
        [29, "8月18日"],
        [30, "8月19日"]
    ], min: 1, max: 30},
        { ticks: [
        [1, "星期二"],
        [2, "星期三"],
        [3, "星期四"],
        [4, "星期五"],
        [5, "星期六"],
        [6, "星期日"],
        [7, "星期一"],
        [8, "星期二"],
        [9, "星期三"],
        [10, "星期四"],
        [11, "星期五"],
        [12, "星期六"],
        [13, "星期日"],
        [14, "星期一"],
        [15, "星期二"],
        [16, "星期三"],
        [17, "星期四"],
        [18, "星期五"],
        [19, "星期六"],
        [20, "星期日"],
        [21, "星期一"],
        [22, "星期二"],
        [23, "星期三"],
        [24, "星期四"],
        [25, "星期五"],
        [26, "星期六"],
        [27, "星期日"],
        [28, "星期一"],
        [29, "星期二"],
        [30, "星期三"]
    ], min: 1, max: 30,position: "top" } ]
};

$(function() {
    var datasetsReport = {
        "report_gjxc": {
            label: "国际新城",
            data: report_gjxc,
            color: 0
        },
        "report_ykgc": {
            label: "永康广场",
            data: report_ykgc,
            color: 1
        },
        "report_hdhy": {
            label: "海德花园",
            data: report_hdhy,
            color: 2
        },
        "report_sum": {
            label: "总和",
            data: report_sum,
            color: 3,
            xaxis: 2
        }
    };

    var datasetsVisit = {
        "visit_gjxc": {
            label: "国际新城",
            data: visit_gjxc,
            color: 0
        },
        "visit_ykgc": {
            label: "永康广场",
            data: visit_ykgc,
            color: 1
        },
        "visit_hdhy": {
            label: "海德花园",
            data: visit_hdhy,
            color: 2
        },
        "visit_sum": {
            label: "总和",
            data: visit_sum,
            color: 3,
            xaxis: 2
        }
    };

    var datasetsDeal = {
        "deal_gjxc": {
            label: "国际新城",
            data: deal_gjxc,
            color: 0
        },
        "deal_ykgc": {
            label: "永康广场",
            data: deal_ykgc,
            color: 1
        },
        "deal_hdhy": {
            label: "海德花园",
            data: deal_hdhy,
            color: 2
        },
        "deal_sum": {
            label: "总和",
            data: deal_sum,
            color: 3,
            xaxis: 2
        }
    };

    // insert checkboxes
    var choiceContainerReport = $("#choices_report");
    $.each(datasetsReport, function(key, val) {
        choiceContainerReport.append("<br/><input type='checkbox' name='" + key +
            "' checked='checked' id='id" + key + "'></input>" +
            "<label for='id" + key + "'>"
            + val.label + "</label>");
    });
    choiceContainerReport.find("input").click(plotAccordingToChoicesReport);
    function plotAccordingToChoicesReport() {
        var data = [];
        choiceContainerReport.find("input:checked").each(function () {
            var key = $(this).attr("name");
            if (key && datasetsReport[key]) {
                data.push(datasetsReport[key]);
            }
        });
        if (data.length > 0) {
            $.plot("#placeholder_report", data, options);
        }
    }
    plotAccordingToChoicesReport();

    var choiceContainerVisit = $("#choices_visit");
    $.each(datasetsVisit, function(key, val) {
        choiceContainerVisit.append("<br/><input type='checkbox' name='" + key +
            "' checked='checked' id='id" + key + "'></input>" +
            "<label for='id" + key + "'>"
            + val.label + "</label>");
    });
    choiceContainerVisit.find("input").click(plotAccordingToChoicesVisit);
    function plotAccordingToChoicesVisit() {
        var data = [];
        choiceContainerVisit.find("input:checked").each(function () {
            var key = $(this).attr("name");
            if (key && datasetsVisit[key]) {
                data.push(datasetsVisit[key]);
            }
        });
        if (data.length > 0) {
            $.plot("#placeholder_visit", data, options);
        }
    }
    plotAccordingToChoicesVisit();

    var choiceContainerDeal = $("#choices_deal");
    $.each(datasetsDeal, function(key, val) {
        choiceContainerDeal.append("<br/><input type='checkbox' name='" + key +
            "' checked='checked' id='id" + key + "'></input>" +
            "<label for='id" + key + "'>"
            + val.label + "</label>");
    });
    choiceContainerDeal.find("input").click(plotAccordingToChoicesDeal);
    function plotAccordingToChoicesDeal() {
        var data = [];
        choiceContainerDeal.find("input:checked").each(function () {
            var key = $(this).attr("name");
            if (key && datasetsDeal[key]) {
                data.push(datasetsDeal[key]);
            }
        });
        if (data.length > 0) {
            $.plot("#placeholder_deal", data, options);
        }
    }
    plotAccordingToChoicesDeal();

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