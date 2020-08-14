let moment= require('moment');
moment.locale('es')
// dias que tuvo febrero de 1998
// let feb= moment([1998,1,1]);
// console.log('dias de feb 98:', feb.daysInMonth());
// que dia fue 2018/01/13
// let dayfeb= moment([2018, 1 ,13])
// console.log(dayfeb. format('dddd DD MMMM YYYY'))
    
// let fechas = [
//     '2020-08-14',
//     '2019-08-11',
//     '2020-08-13',
//     '2020-06-19',
//     '2018-10-08',
//     '2020-05-11',
//     '2020-08-13',
//     '2020-08-12',
//     ] ;
//      const fechahoy=(fechas)=>{
//          let hoy = moment();
//          return fechas.filter( fecha=> moment(hoy).isSame(fecha, 'days'))
//      }
    // console.log(fechahoy(fechas))
    let fechas2 = [
        '2020-11-14',
        '2000-10-20',
        '2020-09-11',
        '2017-08-19',
        '2020-04-15',
        '2015-08-11',
        '1999-05-17',
        '1998-02-23',
    ];
    // 4.	De la siguiente lista de fechas, regresa aquellas que sean menores a la fecha de hoy
    // const fechasantes=(fechas2)=>{
    //     let hoy= moment()
    //     return fechas2.filter( fecha2 => moment(hoy).isAfter(fecha2,'days'))
    // }    
    // console.log('Fechas antes: ',fechasantes(fechas2))
    // 5.	De la siguiente lista de fechas, regresa aquellas que sean mayores a la fecha de hoy
    // const fechadespues=(fecha2)=>{
    //     let hoy = moment()
    //     return fechas2.filter(fecha2=> moment(hoy).isBefore(fecha2,'days'))
    // }
    // console.log('Fecha despues: ', fechadespues(fechas2))
    
    // 6. 	De la siguiente lista de fechas, regresa aquellas en las que su año sea bisiesto
     const Biciesto=(fechas2)=>{
            let hoy = moment()
            return fechas2.filter(fecha2=> moment(hoy).isLeapYear(fecha2,'days'))
        }
        console.log('es año biciesto:',Biciesto(fechas2))
   
