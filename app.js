const form=document.getElementById('vehicleForm');
const list=document.getElementById('list');
let vehicles=JSON.parse(localStorage.getItem('vehicles')||'[]');
function render(){
list.innerHTML='';
vehicles.forEach(v=>{
list.innerHTML+=`<tr><td>${v.model}</td><td>${v.vin}</td><td>${v.fuel}</td><td>${v.status}</td></tr>`;
});
document.getElementById('count').textContent=vehicles.length;
document.getElementById('due').textContent=0;
localStorage.setItem('vehicles',JSON.stringify(vehicles));
}
form.onsubmit=e=>{
e.preventDefault();
vehicles.push({
model:model.value,
vin:vin.value,
fuel:fuel.value,
status:status.value
});
form.reset();
render();
};
render();