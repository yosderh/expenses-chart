import data from './data.json' assert {type: 'json'};
const week = document.querySelector('.graphic-week');
// console.log(data);



data.forEach(element=>{
    // console.log(element);
    week.innerHTML += `
    <div class="week-day-100">
    <div class="day-of-week">
    <div class="money-day">$${element.amount}</div>
        </div>
        <span>${element.day}</span>
    </div>`
    
});

const tamañoBarra= (moneyDay)=>{
    const money = [];
    for(let i=0;i<data.length; i++){
        money.push(data[i].amount);
    }
    
    const orden = money.sort((a,b)=>a>b? -1 : 1);
    const mayor = orden[0];

    const porcentaje= (moneyDay*70)/mayor;

    // console.log(money);
    // console.log(mayor);
    // console.log(porcentaje);

    return porcentaje;
}

const today= ()=>{
    let fecha = new Date().getDay();
    if(fecha===0){
        fecha = fecha+6
    }else {
        fecha= fecha-1;
    };

    return fecha;
}

    let bars = document.querySelectorAll('.day-of-week');
    bars= [...bars]; 

    console.log(bars)

    bars.forEach((bar,index)=>{

        // console.log(data[index].amount);
        bar.style.height=`${tamañoBarra(data[index].amount)}%`

        bar.addEventListener('mouseover',event=>{
            // console.log(event.path[0].childNodes[1]);
            const money= event.path[0].childNodes[1];
            money.style.display="block";
        })
        bar.addEventListener('mouseout',event=>{
            const money=  event.path[0].childNodes[1];
            money.style.display="none";
        })

    })

    bars[today()].style.background= 'var(--softBlue)';

//mayor --> 70%
// losdemas --> x%