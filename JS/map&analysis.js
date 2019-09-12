console.log(['10','10','10','10','10'].map(parseInt));

// 等价于
['1','2','3'].map((item, index) => {
  return parseInt(item, index)
});
//return 1, NaN, NaN

console.log(['10','10','10','10','10'].map(Number));
