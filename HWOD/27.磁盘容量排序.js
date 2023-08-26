/**
 * 磁盘的容量单位常用的有M G T
 *  他们之间的换算关系为1T =1024G 1G=1024M
 *  现在给定n块磁盘的容量，请对他们按从小到大的顺序进行稳定排序
 *  例如给定5块盘的容量
 * 1T 20M 3G 10G6T 3M12G9M
 *  排序后的结果为
 * 20M 3G 3M12G9M 1T 10G6T
 *  注意单位可以重复出现  上述3M12G9M表示的容量即为3M12G9M和12M12G相等
 */

function solveMethod(list) {
  list.sort((a, b) => convent(a) - convent(b))
  console.log(list, '---list')
}

function convent(item) {
  // debugger
  let size = 0, tmpIndex = 0;
  for(let i = 0; i < item.length; i++) {
    if(item[i] === 'M') {
      size += parseInt(item.substring(tmpIndex, i));
      tmpIndex = i + 1;
    } else if(item[i] === 'G') {
      size += parseInt(item.substring(tmpIndex, i)) * 1024;
      tmpIndex = i + 1
    } else if(item[i] === 'T') {
      size += parseInt(item.substring(tmpIndex, i)) * 1024 * 1024;
      tmpIndex = i + 1
    }
  }
  console.log(size, '--size')
  return size
}

  solveMethod(['2G4M','3M2G','1T'])