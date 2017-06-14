/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var recreationCenters = [
    //Парк-отель «Березка»
    {
        name:"Парк-отель «Березка»",
        image:"http://balansproekt.com.ua/sites/default/files/migrate/img_3632.jpg",
        hotelClass:"3*",
        roomClass:[
            {type:"budgetary",
             cost:"500"},
            {type:"standart",
             cost:"1000"},
            {type:"luxe",
             cost:"2000"}],
        standardAmenities:[
           {tV: true,
            airCondition: true,  
            shower:"inRoom",
            wC:"inRoom",
            wiFi: true,
            waterPool: true
           }],
        opportunityToEat:["bar","restoraunt","diningRoom"],
        parkingPlace:"Paid",
        aTM:[],
        distanceToTheSea:"firstLane",
        waterPark: false,
        dolphinarium: false,
        link:"http://berezka-koblevo.com/"
    },
    
    //Cottage in Sosnovom Boru
    {
        name:"Cottage in Sosnovom Boru",
        image:"https://s-ec.bstatic.com/images/hotel/max1024x768/993/99323990.jpg",
        hotelClass:"2*",
        roomClass:[
            {type:"budgetary",
             cost:"300"},
            {type:"standart",
             cost:"600"}],
        standardAmenities:[
           {tV: true,
            airCondition: true,
            shower:"inRoom",
            wC:"inRoom",
            wiFi: false,
            waterPool: false
           }],
        opportunityToEat:[],
        parkingPlace:"notPaid",
        aTM:[],
        distanceToTheSea:"false",
        waterPark: false,
        dolphinarium: false,
        link:"https://www.booking.com/hotel/ua/cottage-in-sosnovom-boru.uk.html?dest_type=city;dest_id=-1052790"
    },
    //California Hotel
    {
        name:"California Hotel",
        image:"https://t-ec.bstatic.com/images/hotel/max1024x768/991/99149393.jpg",
        hotelClass:"4*",
        roomClass:[
            {type:"standart",
             cost:"3000"},
            {type:"luxe",
             cost:"6000"}],
        standardAmenities:[
           {tV: true,
            airCondition: true,   
            shower:"inRoom",
            wC:"inRoom",
            wiFi: true,
            waterPool: false
           }],
        opportunityToEat:["bar"],
        parkingPlace:"notPaid",
        aTM:[],
        distanceToTheSea:"firstLane",
        waterPark: false,
        dolphinarium: false,
        link:"https://www.booking.com/hotel/ua/california.uk.html"
    }
];



