const tempOptions = {
  title: {
    text: "未来一周气温图"
  },
  legend: {
    data: ["最高气温", "最低气温"]
  },
  xAxis: {
    data: ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"]
  },
  yAxis: {
    // data: [0, 20, 25, 30, 35, 36, 37, 38, 39, 40]
  },
  series: [
    {
      name: "最高气温",
      type: "line",
      data: [37, 38, 37, 36, 37, 38, 33]
    },
    {
      name: "最低气温",
      type: "line",
      data: [27, 27, 27, 27, 27, 26, 25]
    }
  ]
};

export { tempOptions };
