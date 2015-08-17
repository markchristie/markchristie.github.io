/**
 * Created by Mark on 2015/8/10 0010.
 */
var trick_max = 30;

var ticks_date = [
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
];

var ticks_weeks = [
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
];

var report_gjxc = [];
report_gjxc.push([1, 0]);
report_gjxc.push([2, 3]);
report_gjxc.push([3, 7]);
report_gjxc.push([4, 2]);
report_gjxc.push([5, 3]);
report_gjxc.push([6, 0]);
report_gjxc.push([7, 5]);
report_gjxc.push([8, 1]);
report_gjxc.push([9, 3]);
report_gjxc.push([10, 0]);
report_gjxc.push([11, 1]);
report_gjxc.push([12, 2]);
report_gjxc.push([13, 1]);
report_gjxc.push([14, 4]);
report_gjxc.push([15, 2]);
report_gjxc.push([16, 3]);
report_gjxc.push([17, 6]);
report_gjxc.push([18, 14]);
report_gjxc.push([19, 11]);
report_gjxc.push([20, 12]);

var report_ykgc = [];
report_ykgc.push([1, 0]);
report_ykgc.push([2, 0]);
report_ykgc.push([3, 0]);
report_ykgc.push([4, 2]);
report_ykgc.push([5, 2]);
report_ykgc.push([6, 9]);
report_ykgc.push([7, 3]);
report_ykgc.push([8, 5]);
report_ykgc.push([9, 9]);
report_ykgc.push([10, 3]);
report_ykgc.push([11, 6]);
report_ykgc.push([12, 6]);
report_ykgc.push([13, 3]);
report_ykgc.push([14, 5]);
report_ykgc.push([15, 1]);
report_ykgc.push([16, 3]);
report_ykgc.push([17, 5]);
report_ykgc.push([18, 13]);
report_ykgc.push([19, 16]);
report_ykgc.push([20, 10]);

var report_hdhy = [];
report_hdhy.push([1, 0]);
report_hdhy.push([2, 0]);
report_hdhy.push([3, 0]);
report_hdhy.push([4, 0]);
report_hdhy.push([5, 0]);
report_hdhy.push([6, 0]);
report_hdhy.push([7, 0]);
report_hdhy.push([8, 0]);
report_hdhy.push([9, 7]);
report_hdhy.push([10, 6]);
report_hdhy.push([11, 11]);
report_hdhy.push([12, 7]);
report_hdhy.push([13, 8]);
report_hdhy.push([14, 4]);
report_hdhy.push([15, 4]);
report_hdhy.push([16, 4]);
report_hdhy.push([17, 12]);
report_hdhy.push([18, 13]);
report_hdhy.push([19, 13]);
report_hdhy.push([20, 6]);

var report_sum = [];
for(var i=0;i<report_gjxc.length;i++){
    report_sum.push([i+1, report_gjxc[i][1] + report_ykgc[i][1] + report_hdhy[i][1]]);
}

var visit_gjxc = [];
visit_gjxc.push([1, 0]);
visit_gjxc.push([2, 1]);
visit_gjxc.push([3, 1]);
visit_gjxc.push([4, 1]);
visit_gjxc.push([5, 1]);
visit_gjxc.push([6, 0]);
visit_gjxc.push([7, 1]);
visit_gjxc.push([8, 1]);
visit_gjxc.push([9, 0]);
visit_gjxc.push([10, 0]);
visit_gjxc.push([11, 0]);
visit_gjxc.push([12, 0]);
visit_gjxc.push([13, 1]);
visit_gjxc.push([14, 0]);
visit_gjxc.push([15, 1]);
visit_gjxc.push([16, 0]);
visit_gjxc.push([17, 1]);
visit_gjxc.push([18, 3]);
visit_gjxc.push([19, 3]);
visit_gjxc.push([20, 0]);

var visit_ykgc = [];
visit_ykgc.push([1, 0]);
visit_ykgc.push([2, 0]);
visit_ykgc.push([3, 0]);
visit_ykgc.push([4, 0]);
visit_ykgc.push([5, 0]);
visit_ykgc.push([6, 0]);
visit_ykgc.push([7, 0]);
visit_ykgc.push([8, 5]);
visit_ykgc.push([9, 2]);
visit_ykgc.push([10, 1]);
visit_ykgc.push([11, 2]);
visit_ykgc.push([12, 5]);
visit_ykgc.push([13, 0]);
visit_ykgc.push([14, 0]);
visit_ykgc.push([15, 0]);
visit_ykgc.push([16, 0]);
visit_ykgc.push([17, 0]);
visit_ykgc.push([18, 0]);
visit_ykgc.push([19, 5]);
visit_ykgc.push([20, 5]);

var visit_hdhy = [];
visit_hdhy.push([1, 0]);
visit_hdhy.push([2, 0]);
visit_hdhy.push([3, 0]);
visit_hdhy.push([4, 0]);
visit_hdhy.push([5, 0]);
visit_hdhy.push([6, 0]);
visit_hdhy.push([7, 0]);
visit_hdhy.push([8, 0]);
visit_hdhy.push([9, 0]);
visit_hdhy.push([10, 2]);
visit_hdhy.push([11, 6]);
visit_hdhy.push([12, 3]);
visit_hdhy.push([13, 2]);
visit_hdhy.push([14, 1]);
visit_hdhy.push([15, 1]);
visit_hdhy.push([16, 0]);
visit_hdhy.push([17, 2]);
visit_hdhy.push([18, 2]);
visit_hdhy.push([19, 3]);
visit_hdhy.push([20, 3]);

var visit_sum = [];
for(var j=0;j<visit_gjxc.length;j++){
    visit_sum.push([j+1, visit_gjxc[j][1] + visit_ykgc[j][1] + visit_hdhy[j][1]]);
}

var deal_gjxc = [];
deal_gjxc.push([1, 0]);
deal_gjxc.push([2, 0]);
deal_gjxc.push([3, 0]);
deal_gjxc.push([4, 0]);
deal_gjxc.push([5, 0]);
deal_gjxc.push([6, 0]);
deal_gjxc.push([7, 0]);
deal_gjxc.push([8, 0]);
deal_gjxc.push([9, 0]);
deal_gjxc.push([10, 0]);
deal_gjxc.push([11, 0]);
deal_gjxc.push([12, 0]);
deal_gjxc.push([13, 0]);
deal_gjxc.push([14, 0]);
deal_gjxc.push([15, 0]);
deal_gjxc.push([16, 0]);
deal_gjxc.push([17, 1]);
deal_gjxc.push([18, 1]);
deal_gjxc.push([19, 0]);
deal_gjxc.push([20, 0]);

var deal_ykgc = [];
deal_ykgc.push([1, 0]);
deal_ykgc.push([2, 0]);
deal_ykgc.push([3, 0]);
deal_ykgc.push([4, 0]);
deal_ykgc.push([5, 0]);
deal_ykgc.push([6, 0]);
deal_ykgc.push([7, 0]);
deal_ykgc.push([8, 0]);
deal_ykgc.push([9, 0]);
deal_ykgc.push([10, 1]);
deal_ykgc.push([11, 0]);
deal_ykgc.push([12, 0]);
deal_ykgc.push([13, 0]);
deal_ykgc.push([14, 0]);
deal_ykgc.push([15, 0]);
deal_ykgc.push([16, 0]);
deal_ykgc.push([17, 0]);
deal_ykgc.push([18, 0]);
deal_ykgc.push([19, 0]);
deal_ykgc.push([20, 0]);

var deal_hdhy = [];
deal_hdhy.push([1, 0]);
deal_hdhy.push([2, 0]);
deal_hdhy.push([3, 0]);
deal_hdhy.push([4, 0]);
deal_hdhy.push([5, 0]);
deal_hdhy.push([6, 0]);
deal_hdhy.push([7, 0]);
deal_hdhy.push([8, 0]);
deal_hdhy.push([9, 0]);
deal_hdhy.push([10, 0]);
deal_hdhy.push([11, 0]);
deal_hdhy.push([12, 0]);
deal_hdhy.push([13, 0]);
deal_hdhy.push([14, 0]);
deal_hdhy.push([15, 0]);
deal_hdhy.push([16, 0]);
deal_hdhy.push([17, 0]);
deal_hdhy.push([18, 0]);
deal_hdhy.push([19, 0]);
deal_hdhy.push([20, 0]);

var deal_sum = [];
for(var k=0;k<deal_gjxc.length;k++){
    deal_sum.push([k+1, deal_gjxc[k][1] + deal_ykgc[k][1] + deal_hdhy[k][1]]);
}

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