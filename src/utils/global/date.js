//获取当前时间 yyyy-MM-dd hh:mm:ss 格式
function getYMDHMS() {
  let myDate = new Date();
  let moth = myDate.getMonth() + 1;
  let day = myDate.getDate();
  moth = moth < 10 ? "0" + moth : moth;
  day = day < 10 ? "0" + day : day;
  let ymd = myDate.getFullYear() + "-" + moth + "-" + day;
  let hours = myDate.getHours();
  let minute = myDate.getMinutes();
  let secend = myDate.getSeconds();
  hours = hours < 10 ? "0" + hours : hours;
  minute = minute < 10 ? "0" + minute : minute;
  secend = secend < 10 ? "0" + secend : secend;
  let hms = hours + ":" + minute + ":" + secend;
  let ymdhms = ymd + " " + hms;
  return ymdhms;
}

//获取当前时间 yyyy-MM-dd 格式
function getYMD() {
  let mydate = new Date();
  let year = mydate.getFullYear();
  let moth = mydate.getMonth() + 1;
  let day = mydate.getDate();
  moth = moth < 10 ? "0" + moth : moth;
  day = day < 10 ? "0" + day : day;
  let addTime = year + "-" + moth + "-" + day;
  return addTime;
}

export { getYMD, getYMDHMS };
