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
        hotelClass:"4*",
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
           {tV: true, //help me
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
                //help olen`y
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
    },
    //Comet2
    {
        name:"Comet2",
        image:"https://i.ytimg.com/vi/FOz49U47Ckc/maxresdefault.jpg",
        hotelClass:"3*",
        roomClass:[
            {type:"bugetary",
             cost:"200"},
            {type:"standart",
             cost:"300"},
            {type:"luxe",
             cost:"420"}],
        standardAmenities:[
           {tV:true ,
            airCondition:true ,  
            shower:"inRoom",
            wC:"inRoom",
            wiFi:true ,
            waterPool:false 
           }],
        opportunityToEat:["restoraunt","bar"],
        parkingPlace:"notPaid",
        aTM:["Nearby"],
        distanceToTheSea:"firstLane",
        waterPark:true ,
        dolphinarium:false ,
        link:"http://kometa2.com.ua/"
    },
    //Aquamarine
    {
        name:"Aquamarine",
        image:"http://www.bazi-otdiha.com.ua/uploads/1393631512.jpg",
        hotelClass:"4*",
        roomClass:[
            {type:"bugetary",
             cost:"210"},
            {type:"standart",
             cost:"330"},
            {type:"luxe",
             cost:"3000"}],
        standardAmenities:[
           {tV:true ,
            airCondition:true ,  
            shower:"inRoom",
            wC:"inRoom",
            wiFi:true ,
            waterPool:false 
           }],
        opportunityToEat:["diningRoom","restoraunt","bar"],
        parkingPlace:"notPaid",
        aTM:[],
        distanceToTheSea:"secondLane",
        waterPark:true ,
        dolphinarium:true ,
        link:"http://koblevo.com.ua/"
    },
    //Neptune2
    {
        name:"Neptune2",
        image:"http://www.bazi-otdiha.com.ua/uploads/1364799231.jpg",
        hotelClass:"5*",
        roomClass:[
            {type:"bugetary",
             cost:"580"},
            {type:"standart",
             cost:"720"},
            {type:"luxe",
             cost:"810"}],
        standardAmenities:[
           {tV:false ,
            airCondition:false ,  
            shower:"inRoom",
            wC:"inRoom",
            wiFi:false ,
            waterPool:false 
           }],
        opportunityToEat:["bar"],
        parkingPlace:"notPaid",
        aTM:[],
        distanceToTheSea:"firstLane",
        waterPark:true ,
        dolphinarium:false ,
        link:"https://neptun2.uaprom.net/"
    },
    //Dacha family hotel
    {
        name:"Dacha family hotel",
        image:"http://hotelmaps.com.ua/images/897_2009081722.jpg",
        hotelClass:"5*",
        roomClass:[
            {type:"bugetary",
             cost:"600"},
            {type:"standart",
             cost:"800"},
            {type:"luxe",
             cost:"1000"}],
        standardAmenities:[
           {tV:true ,
            airCondition:true ,  
            shower:"inRoom",
            wC:"inRoom",
            wiFi:true ,
            waterPool: false
           }],
        opportunityToEat:["diningRoom"],
        parkingPlace:"notPaid",
        aTM:[],
        distanceToTheSea:"false",
        waterPark:false ,
        dolphinarium:true ,
        link:"http://koblevo-info.com/baza-otdyxa-dacha-v-koblevo-turkompleks/ http://litomore.com.ua/hotels/koblevo-dacha#"
    },
    //Crystal Beach hotel
    {
        name:"Crystal Beach hotel",
        image:"http://crystal-koblevo.com/sites/default/files/Teritoty%20%288%29.jpg",
        hotelClass:"5*",
        roomClass:[
            {type:"bugetary",
             cost:"1600"},
            {type:"standart",
             cost:"2200"},
            {type:"luxe",
             cost:"4000"}],
        standardAmenities:[
           {tV:true ,
            airCondition:true ,  
            shower:"inRoom",
            wC:"inRoom",
            wiFi:true ,
            waterPool:true 
           }],
        opportunityToEat:["bar","restoraunt"],
        parkingPlace:"Paid",
        aTM:["Nearby"],
        distanceToTheSea:"firstLane",
        waterPark:false ,
        dolphinarium:false ,
        link:"http://crystal-koblevo.com/"
    },
    //Marine Beach hotel
    {
        name:"Marine Beach hotel",
        image:"https://cdn.ostrovok.ru/t/1024x768/second2/1430217298/e63272cd44b09315488aecb4fc6ec872.jpg",
        hotelClass:"4*",
        roomClass:[
            {type:"bugetary",
             cost:"1000"},
            {type:"standart",
             cost:"1500"},
            {type:"luxe",
             cost:"2000"}],
        standardAmenities:[
           {tV: true,
            airCondition: true,  
            shower:"inRoom",
            wC:"inRoom",
            wiFi:true ,
            waterPool:false 
           }],
        opportunityToEat:["bar","restoraunt"],
        parkingPlace:"Paid",
        aTM:[],
        distanceToTheSea:"firstLane",
        waterPark: false,
        dolphinarium: false,
        link:"http://www.planetofhotels.com/ukraina/koblevo/marine-beach-hotel"
    },
    //Victoria
    {
        name:"Victoria",
        image:"https://pp.userapi.com/c278/v278914/da/5KYTlJIIaMk.jpg",
        hotelClass:"3*",
        roomClass:[
            {type:"bugetary",
             cost:"465"},
            {type:"standart",
             cost:"1140"},
            {type:"luxe",
             cost:"1360"}],
        standardAmenities:[
           {tV:true ,
            airCondition:true ,  
            shower:"inRoom",
            wC:"inRoom",
            wiFi:false ,
            waterPool:false 
           }],
        opportunityToEat:["bar","diningRoom"],
        parkingPlace:"notPaid",
        aTM:[],
        distanceToTheSea:"secondLane",
        waterPark:false ,
        dolphinarium:true ,
        link:"http://www.doroga.ua/hotel/Nikolaevskaya/Koblevo/Viktoriya/3032"
    },
    //Chvyla prime hotel
    {
        name:"Chvyla prime hotel",
        image:"http://img.hotels24.ua/photos/partner_hotel/facility/94/9492/949242/Otel-Volna-Prim-Koblevo-snjat-949242z600.jpg",
        hotelClass:"4*",
        roomClass:[
            {type:"bugetary",
             cost:"500"},
            {type:"standart",
             cost:"1000"},
            {type:"luxe",
             cost:"2500"}],
        standardAmenities:[
           {tV:false ,
            airCondition:false ,  
            shower:"inTheTerritory",
            wC:"inTheTerritory",
            wiFi:false ,
            waterPool:false 
           }],
        opportunityToEat:["bar","diningRoom","restoraunt"],
        parkingPlace:"Paid",
        aTM:["Nearby"],
        distanceToTheSea:"firstLane",
        waterPark:false ,
        dolphinarium:true ,
        link:"http://volna-prim.com/"
    },
    //Orbit rest base
    {
        name:"Orbit rest base",
        image:"https://image.nyigde.com/photos/city/601/14_268_1024.jpg",
        hotelClass:"3",
        roomClass:[
            {type:"bugetary",
             cost:"130"},
            {type:"standart",
             cost:"180"},
            {type:"luxe",
             cost:"650"}],
        standardAmenities:[
           {tV: true,
            airCondition: true,  
            shower:"inRoom",
            wC:"inRoom",
            wiFi: false,
            waterPool: true
           }],
        opportunityToEat:["diningRoom"],
        parkingPlace:"",
        aTM:[],
        distanceToTheSea:"firstLane",
        waterPark: true,
        dolphinarium: false,
        link:"http://www.blacksea.magazine-rest.in.ua/en/objects/orbit....html#.WUl1YWjyi70"
    },
    {
        name:"Lidia pansion",
        image:"http://goodtime.click/components/com_djclassifieds/images/item/7723_1_thb.jpg",
        hotelClass:"2*",
        roomClass:[
            {type:"bugetary",
             cost:"510"},
            {type:"standart",
             cost:"750"},
            {type:"luxe",
             cost:"900"}],
        standardAmenities:[
           {tV:false ,
            airCondition:false ,  
            shower:"onTheFloor",
            wC:"onTheFloor",
            wiFi:false ,
            waterPool:false 
           }],
        opportunityToEat:["bar","restoraunt"],
        parkingPlace:"notPaid",
        aTM:[],
        distanceToTheSea:"secondLane",
        waterPark:true ,
        dolphinarium:true ,
        link:"https://dorogovkaz.com/pansionat_lidiya.php"
    }
];



