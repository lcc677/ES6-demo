function getData() {
  console.log("fetch...")
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('数据获取失败');
    }, 2000);
  });
}

const sendRequest = async () => {
  // try {
    await getData() //等待getData()的返回结果
    console.log("done")
  // } catch (message) {
  //   console.log(message)
  // }
}
sendRequest()