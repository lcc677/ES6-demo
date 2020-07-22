const RE_DATE = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;

const matchObj = RE_DATE.exec('1999-12-31');
const year = matchObj.groups.year; // 1999
const month = matchObj.groups.month; // 12
const day = matchObj.groups.day; // 31
console.log(matchObj) // 获取值
for (let key of matchObj){
  console.log(key)
} //获取数组中的值
console.log(Object.keys(matchObj)) // 获取所有的key
for(let kkk in matchObj){
  console.log(kkk)
}

console.log("year:",year,"month:",month,"day:",day)
const { groups: { year: newYear, month: newMonth, day: newDay } } = matchObj
console.log("newYear:", newYear, "newMonth:", newMonth, "newDay:", newDay)

const [patterStr, group1, group2, group3, index] = matchObj
console.log(patterStr, group1, group2, group3,index)


const RE_OPT_A = /^(?<as>a+)?$/;
const matchObj2 = RE_OPT_A.exec('');

console.log(matchObj2.groups)
console.log(matchObj2.groups.as) // undefined


// 替换
console.log('1999-12-31'.replace(RE_DATE,'$& ===> $<year>/$<month>/$<day>'))

// 引用
console.log(/(name)55name/.test("my name55name is"))
console.log(/(?<name>name)55\k<name>/.test("my name55name is"))
console.log(/(name)55\1/.test("my name55name is"))
console.log(/(?<name>name)55\1/.test("my name55name is"))