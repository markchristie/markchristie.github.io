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
    xaxes: [ {ticks: ticks_date, min: 1, max: trick_max},
        { ticks: ticks_weeks, min: 1, max: trick_max,position: "top" } ]
};

$(function() {
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