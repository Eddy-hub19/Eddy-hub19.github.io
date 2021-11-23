export const allTheSame = (x, y, z) => {
  if (x === true && y === true && z === true || x === false && y === false && z === false) {
    return true;  
  }else if(x,y,z !== true){
    return false;
  }else{
    return false;
  }
}


/* вернуть true, если x, y и z одинаковые (все true или все false)
вернуть false, если хотя бы один из параметров отличается от других
Функция allTheSame должна содержать не больше одного блока if */