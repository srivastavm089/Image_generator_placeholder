
let select = document.querySelector('select')
const inputAll = document.querySelectorAll('input');
const myImg = document.querySelector('img');
const textAra = document.querySelector('textarea');
urlObj = {}
const removeHashTag=(str)=>{
    return str.replace("#", "");
}
const addPlus =(str)=>{
  return str.split(" ").join("+");
}
function createPath(){
urlObj.size = select.value;
urlObj.text = addPlus(inputAll[0].value);
urlObj.bgClr = removeHashTag(inputAll[1].value);
urlObj.textClr = removeHashTag(inputAll[2].value)
  let urlPath = `http://via.placeholder.com/${parseInt(urlObj.size)}/${urlObj.bgClr}/${urlObj.textClr}?text=${urlObj.text}`;
   

  myImg.src = urlPath;
  textAra.value = urlPath
}
inputAll.forEach((item)=>{
    item.addEventListener('change', createPath)
})
select.addEventListener('change', createPath);
inputAll.addEventListener('change', createPath);