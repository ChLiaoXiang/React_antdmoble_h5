/*
 * @Description: 日历时间处理方法
 * @FilePath: \zslh_bet\src\basic\dateProcessing.js
 * @auto: LiaoXiang
 * @Date: 2020-02-20 15:15:17
 * @LastEditTime: 2020-02-22 18:52:47
 */
// 数据处理
let fillterAttr = function(PitchOn, mou, day) {
    var typeData = [];
    for (var i = 0; i < PitchOn.length; i++) {
        // console.log(mou,'传入的mou',PitchOn[i].themonth,'匹配的mou');
        if (mou === PitchOn[i].themonth && day === PitchOn[i].theday) {
            // console.log(PitchOn[i])
            typeData = {
                issue: PitchOn[i].issue,
                qishu: PitchOn[i].qishu
            }
            return typeData;
        }
    }
}
// 时间处理属性处理方法
function everyMouthInit(year, month, params) {
    year = year || new Date().getFullYear();
    month = month || new Date().getMonth() + 1;
    params = params || [];
    if(month > 12){
        year = year + Math.floor(month/12);
        month = month % 12;
    }    
    var nowDate = new Date();
    //当前是哪一年
    year = year ? year : nowDate.getFullYear();
    //当前是哪个月，注意这里的月是从0开始计数的
    month = month ? month - 1 : nowDate.getMonth();
    // console.log(year, month);
    let daysArr = [];
    //当前月的第一天的日期
    var firstDay = new Date(year, month, 1);
    //第一天是星期几
    var weekday = firstDay.getDay();
    //求当前月一共有多少天
    //new Date(year,month+1,0) ： month+1是下一个月，day为0代表的是上一个月的最后一天，即我们所需的当前月的最后一天。
    //getDate（）则返回这个日期对象是一个月中的第几天，我们由最后一天得知这个月一共有多少天
    var days = new Date(year, month + 1, 0).getDate();
    let arr = [];
    //输出第一天之前的空格
    for (var i = 0; i < weekday; i++) {
        arr.push({
            currentMonth: false //是否当前月
        });
        if (arr.length === 7) {
            daysArr.push(arr);
            arr = [];
        }
    }
    for (var j = 1; j <= days; j++) {
        let date = year + "-" + (month + 1 < 10 ? "0" + (month + 1) : month + 1) + "-" + (j < 10 ? "0" + j : j);
        //返回当月今天之后（包含今天），有数据并且在售的日期
        arr.push({
            currentMonth: true, //是否当前月
            nowday: year === nowDate.getFullYear() && month === nowDate.getMonth() && j === nowDate.getDate(),
            date: date, //年-月-日
            day: j,
            drawUp: fillterAttr(params, month + 1, j)
        });
        if (arr.length === 7) {
            daysArr.push(arr);
            arr = [];
        }
    }
    if (arr.length) {
        daysArr.push(arr);
    }
    return daysArr;
}

export default everyMouthInit;