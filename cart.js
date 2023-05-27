let qty = document.getElementById("input-qty");

let cur = Number(qty.value);

const max = 10, min = 0;

function increase()
{
   cur += cur < max ? 1 : 0;
   qty.value = cur.toString();
}


function decrease()
{
  cur -= cur > min ? 1 : 0;
  qty.value = cur.toString();
}