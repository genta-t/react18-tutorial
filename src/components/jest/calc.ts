function removeDuplicates(arr: number[]):number[] {
  let result:number[] = [];

  arr.forEach((num, i) => {
      let count = 0;

      arr.forEach((num2) => {
          if(num === num2) count ++;
      });
      // 配列中に同じ値が1つだけ出現したやつをresult配列に
      if(count === 1) result.push(num);
  });

  return result;
}

module.exports = removeDuplicates;
