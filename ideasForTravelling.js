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
    },
    {
      
        name:"Энергостроитель",
        image:"http://www.energostroitel.com/assets/uploads/multimedia/images/5/images/koblevo_baza_otdyha_energostroitel%281%29.jpg",
        hotelClass:"2*",
        roomClass:[
            {type:"budgetary",
             cost:"630"},
            {type:"standart",
             cost:"880"},
            {type:"luxe",
             cost:"1320"}],
        standardAmenities:[
           {tV: true ,
            airCondition: true,  
            shower:"inRoom",
            wC:"inRoom",
            wiFi:  false,
            waterPool: false
           }],
        opportunityToEat:["diningRoom"],
        parkingPlace:"notPaid",
        aTM:["Nearby"],
        distanceToTheSea:" secondLane",
        waterPark: false,
        dolphinarium: false,
        link:"http://www.energostroitel.com"
    },
    {
       
        name:"Винница",
        image:"http://koblevo-vinnitsa.com.ua/sites/default/files/_MG_1452%20%28copy%29.JPG",
        hotelClass:"4*",
        roomClass:[
            {type:"budgetary",
             cost:"850"},
            {type:"standart",
             cost:"1290"},
            {type:"luxe",
             cost:"1690"}],
        standardAmenities:[
           {tV: true,
            airCondition: true,  
            shower:"inRoom",
            wC:"inRoom",
            wiFi: true,
            waterPool: true 
           }],
        opportunityToEat:["bar","restoraunt"],
        parkingPlace:"Paid",
        aTM:["Nearby"],
        distanceToTheSea:"secondLane",
        waterPark: true,
        dolphinarium: false,
        link:"http://koblevo-vinnitsa.com.ua/"
    },
    {
        
        name:"Ассоль", 
        image:"http://blacksea.nezabarom.ua/img/objects/timthumb.php?src=/img/objects/7a0a55b577.jpg&h=350&w=655&zc=1",
        hotelClass:"4*",
        roomClass:[
            {type:"budgetary",
             cost:"620"},
            {type:"standart",
             cost:"780"},
            {type:"luxe",
             cost:"840"}],
        standardAmenities:[
           {tV: true,
            airCondition: true,  
            shower:"inRoom",
            wC:"inRoom",
            wiFi: true,
            waterPool: false
           }],
        opportunityToEat:["restoraunt","diningRoom"], 
        parkingPlace:"notPaid",
        aTM:["Nearby"],
        distanceToTheSea:"secondLane",
        waterPark: false,
        dolphinarium: false,
        link:"http://www.koblevo.com/assol.html"
    },
    {
         
        name:"Голубая лагуна",
        image:"https://t-ec.bstatic.com/images/hotel/max1024x768/446/44659433.jpg",
        hotelClass:"4*",
        roomClass:[
            {type:"budgetary",
             cost:"650"},
            {type:"standart",
             cost:"840"},
            {type:"luxe",
             cost:"1290"}],
        standardAmenities:[
           {tV: true,
            airCondition: true,  
            shower:"inRoom",
            wC:"inRoom",
            wiFi: true,
            waterPool: true
           }],
        opportunityToEat:["diningRoom"],
        parkingPlace:"notPaid",
        aTM:["Nearby"],
        distanceToTheSea:"firstLane",
        waterPark: true,
        dolphinarium: true,
        link:"https://www.booking.com/hotel/ua/golubaya-laguna.ru.html"
    },
    {
        
        name:"Эдем",
        image:"http://magnolia.ck.ua/wp-content/gallery/edem/edem1.jpg",
        hotelClass:"5*",
        roomClass:[
            {type:"budgetary",
             cost:"1000"},
            {type:"standart",
             cost:"1600"},
            {type:"luxe",
             cost:"2400"}],
        standardAmenities:[
           {tV: true,
            airCondition: true,  
            shower:"inRoom",
            wC:"inRoom",
            wiFi: true,
            waterPool: false
           }],
        opportunityToEat:["bar","restoraunt"],
        parkingPlace:"notPaid",
        aTM:["Nearby"],
        distanceToTheSea:"false",
        waterPark: true,
        dolphinarium: true,
        link:"http://www.edem-koblevo.com/index.php"
    },
    {
        name:"V.I.P. отель",
        image:"https://s-ec.bstatic.com/images/hotel/max1024x768/574/57434553.jpg",
        hotelClass:"5*", 
        roomClass:[
            {type:"budgetary",
             cost:"1690"},
            {type:"standart",
             cost:"2045"},
            {type:"luxe",
             cost:"4800"}],
        standardAmenities:[
           {tV: true,
            airCondition: true,  
            shower:"inRoom",
            wC:"inRoom",
            wiFi: true,
            waterPool: true
           }],
        opportunityToEat:["bar","restoraunt","diningRoom"],  
        parkingPlace:"notPaid",
        aTM:["Nearby"],
        distanceToTheSea:"firstLane",
        waterPark: true,
        dolphinarium: true,
        link:"https://www.booking.com/hotel/ua/vip-otel.ru.html?aid=315714;label=vip-otel-iMjYMRgKb8BdFqZ_PVWppAS161689622878%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap1t1%3Aneg%3Afi%3Atikwd-37197756117%3Alp1030390%3Ali%3Adec%3Adm;sid=8592ae5d6ce91f78838bac041bc22f7c;checkin=2017-06-27;checkout=2017-06-28;dest_id=-1042266;dest_type=city;dist=0;group_adults=2;hpos=1;room1=A%2CA;sb_price_type=total;soh=1;soldout=0%2C0;srfid=f38765166851f95da9ad5f01d58be006a2850c3aX1;type=total;ucfs=1&#hotelTmpl"
    },
    {
        
        name:"Фортуна",
        image:"http://www.bazi-otdiha.com.ua/uploads/1459010893.jpg",
        hotelClass:"3*",
        roomClass:[
            {type:"budgetary",
             cost:"1800"},
            {type:"standart",
             cost:"2000"},
            {type:"luxe",
             cost:"2500"}],
        standardAmenities:[
           {tV: true,
            airCondition: true,  
            shower:"inRoom",
            wC:"inRoom",
            wiFi: true,
            waterPool: true
           }],
        opportunityToEat:["diningRoom"],
        parkingPlace:"notPaid",
        aTM:["Nearby"],
        distanceToTheSea:"firstLane",
        waterPark: true,
        dolphinarium: true,
        link:"http://4tuna.at.ua/index/0-2"
    },
    {
       
        name:"Южанка",
        image:"http://www.otdyhnamore.com/sites/default/files/imagecache/800px/DSC02708_0.jpg",
        hotelClass:"1*",  
        roomClass:[
            {type:"budgetary",
             cost:"60"},
            {type:"standart",
             cost:"70"},
            {type:"luxe",
             cost:"80"}],
        standardAmenities:[
           {tV: false,
            airCondition: true,  
            shower:"inTheTerritory",
            wC:"inTheTerritory",
            wiFi: false,
            waterPool: false
           }],
        opportunityToEat:["diningRoom"],
        parkingPlace:"notPaid",
        aTM:["Nearby"],
        distanceToTheSea:"firstLane",
        waterPark: false,
        dolphinarium: false,  
        link:"http://www.otdyhnamore.com/koblevo/baza-otdyha-yuzhanka.html"
    },
    {
        
        name:"Чeрнoе море",
        image:"http://chernoemore.mk.ua/images/image.jpg",
        hotelClass:"4*", 
        roomClass:[
            {type:"budgetary",
             cost:"1600"},
            {type:"standart",
             cost:"1850"},
            {type:"luxe",
             cost:"3100"}],
        standardAmenities:[
           {tV: true,
            airCondition: true,  
            shower:"inRoom",
            wC:"inRoom",
            wiFi: true,
            waterPool: false
           }],
        opportunityToEat:["bar","restoraunt"],
        parkingPlace:"notPaid",
        aTM:["Nearby"],
        distanceToTheSea:"firstLane/secondLane/thirdLane/false",
        waterPark: true,
        dolphinarium: true,
        link:"http://chernoemore.mk.ua/ru/"
    },
    {
        name:"Лазурный берег",
        image:"http://www.bazi-otdiha.com.ua/uploads/1427656194.jpg",
        hotelClass:"2*",
        roomClass:[
            {type:"budgetary",
             cost:"290"},
            {type:"standart",
             cost:"350"},
            {type:"luxe",
             cost:"400"}],
        standardAmenities:[
           {tV: true,
            airCondition: true,  
            shower:"inRoom",
            wC:"inRoom",
            wiFi: false,
            waterPool: false
           }],
        opportunityToEat:["diningRoom"],
        parkingPlace:"Paid",
        aTM:["Nearby"],
        distanceToTheSea:"firstLane",
        waterPark: false,
        dolphinarium: false,
        link:"http://www.koblevo.com/lazurnyi-bereg.html"
    },
    {
        name:"Днестр",
        image:"http://newimg.otpusk.com/3/730x0/00/00/14/98/149804.jpg",
        hotelClass:"3*",
        roomClass:[
            {type:"budgetary",
             cost:"370"},
            {type:"standart",
             cost:"450"},
            {type:"luxe",
             cost:"1000"}],
        standardAmenities:[
            {tV: true,
             airCondition: true,  
             shower:"inRoom",
             wC:"inRoom",
             wiFi: false,
             waterPool: true
            }],
        opportunityToEat:["bar","diningRoom"],
        parkingPlace:"notPaid",
        aTM:["Nearby"],
        distanceToTheSea:"firstLane",
        waterPark: false,
        dolphinarium: false,
        link:"http://www.turpravda.ua/ua/koblevo/Dnestr-h35166.html#reviews"
    },
    {
         
        name:"Полиграфист",
        image:"https://newimg.otpusk.com/3/730x0/00/00/66/93/669375.jpg",
        hotelClass:"2*",
        roomClass:[
            {type:"budgetary",
             cost:"400"},
            {type:"standart",
             cost:"900"},
            {type:"luxe",
             cost:"1600"}],
        standardAmenities:[
           {tV: true,
            airCondition: true,  
            shower:"inRoom",
            wC:"inRoom",
            wiFi: true,
            waterPool: false
           }],
        opportunityToEat:["diningRoom"],
        parkingPlace:"notPaid",  
        aTM:["Neaby"],
        distanceToTheSea:"secondLane",
        waterPark: true,
        dolphinarium: true,
        link:"http://ru.poligrafist.in.ua/"
    },
    { 
        name:"Девятка", 
        image:"https://s-ec.bstatic.com/images/hotel/max1024x768/892/89280031.jpg", 
        hotelClass:"2*",
        roomClass:[
            {type:"budgetary",
             cost:"320"},
            {type:"standart",
             cost:"540"},
            {type:"luxe",
             cost:"710"}],
        standardAmenities:[
           {tV: true,
            airCondition: true,  
            shower:"inRoom",
            wC:"inRoom",
            wiFi: true,
            waterPool: false
           }],
        opportunityToEat:["bar","restoraunt"], 
        parkingPlace:"notPaid",
        aTM:["Nearby"],
        distanceToTheSea:"firstLane",
        waterPark: false,
        dolphinarium: false,
        link:"https://www.booking.com/hotel/ua/mini-otiel-quot-dieviatka-quot.html?aid=335435&lang=ru&selected_currency=RUB&date_from=27.06&date_to=27.07&adults=2&children=2&label=checkAvailable-google-Adwords&no_rooms=1&req_adults=2&req_children=2&req_age=0&checkin_monthday=01&checkin_year_month=1970-1&checkout_monthday=01&checkout_year_month=1970-1"
    },
    {
        name:"The energetic",
        image:"http://energetik-koblevo.com.ua/img/b.jpg",
        hotelClass:"4*",
        roomClass:[
            {type:"bugetary",
             cost:"420"},
            {type:"standart",
             cost:"825"},
            {type:"luxe",
             cost:"1520"}],
        standardAmenities:[
           {tV:true ,
            airCondition:true ,  
            shower:"inRoom",
            wC:"inRoom",
            wiFi:false ,
            waterPool:false 
           }],
        opportunityToEat:["bar","restoraunt",""],
        parkingPlace:"",
        aTM:[],
        distanceToTheSea:"firstLane",
        waterPark:true ,
        dolphinarium:false ,
        link:"http://energetik-koblevo.com.ua/"
    },
{
        name:"Rodeo Inn",
        image:"http://www.nezabarom.ua/img/objects/67745775a0.jpg",
        hotelClass:"5*",
        roomClass:[
            {type:"bugetary",
             cost:"1050"},
            {type:"standart",
             cost:"1300"},
            {type:"luxe",
             cost:"1500"}],
        standardAmenities:[
           {tV:true ,
            airCondition:true ,  
            shower:"inRoom",
            wC:"inRoom",
            wiFi:true ,
            waterPool:true 
           }],
        opportunityToEat:["restoraunt","",""],
        parkingPlace:"notPaid",
        aTM:[],
        distanceToTheSea:"",
        waterPark:true ,
        dolphinarium:false ,
        link:"http://www.rodeo-koblevo.com"
    },
    {
        name:"White House",
        image:"http://www.bazi-otdiha.com.ua/uploads/1468337054.jpg",
        hotelClass:"4*",
        roomClass:[
            {type:"bugetary",
             cost:"2280"},
            {type:"standart",
             cost:"2500"},
            {type:"luxe",
             cost:"3000"}],
        standardAmenities:[
           {tV:true ,
            airCondition:true ,  
            shower:"inRoom",
            wC:"inRoom",
            wiFi:false ,
            waterPool:true 
           }],
        opportunityToEat:["restoraunt","",""],
        parkingPlace:"false",
        aTM:[],
        distanceToTheSea:"firstLane",
        waterPark:false ,
        dolphinarium:false ,
        link:"http://whitehouse.com.ua/"
    },
{
        name:"Valetta",
        image:"http://www.bazi-otdiha.com.ua/uploads/1459409547.jpg",
        hotelClass:"1*",
        roomClass:[
            {type:"bugetary",
             cost:"25"},
            {type:"standart",
             cost:"150"},
            {type:"luxe",
             cost:"200"}],
        standardAmenities:[
           {tV:true ,
            airCondition:true ,  
            shower:"inRoom",
            wC:"inRoom",
            wiFi:true ,
            waterPool:true 
           }],
        opportunityToEat:["restoraunt","bar","diningRoom"],
        parkingPlace:"false",
        aTM:["Nearby"],
        distanceToTheSea:"firstLane",
        waterPark:false ,
        dolphinarium:true ,
        link:"http://vallettakoblevo.com/#cottages"
    },
];



