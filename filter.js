/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var hotels = document.querySelector('#hotels');
var list = document.querySelector('#list');

document.querySelector('#filter-btn').addEventListener('click', function () {
    list.innerHTML = "";
    var hotels_filtered = filterHotels();
    hotels_filtered.forEach(function (element) {
        var block = hotels.innerHTML;
        block = block.replace("{{name}}", element.name)
                .replace("{{image}}", element.image)
                .replace("{{link}}", element.link)
                .replace("{{hotelClass}}", element.hotelClass)
                .replace("{{roomType}}", element.roomClass.reduce(function(previousValue, current){
                    //alert (current.type);
                    return (previousValue + current.type + " = " + current.cost + " uah" + ", " );
                },""))
                .replace("{{standardAmenitiesTV}}", (element.standardAmenities[0].tV)?"TV: is present":"TV: isn't present" )
                .replace("{{standardAmenitiesAirCondition}}", (element.standardAmenities[0].airCondition)?"Air condition: is present":"Air condition: isn't present" )
                .replace("{{standardAmenitiesWiFi}}", (element.standardAmenities[0].wiFi)?"Wi-Fi: is present":"Wi-Fi: isn't present" )
                .replace("{{standardAmenitiesWaterPool}}", (element.standardAmenities[0].waterPool)?"Water pool: is present":"Water pool: isn't present" )
                .replace("{{shower}}", element.standardAmenities[0].shower)
                .replace("{{wC}}", element.standardAmenities[0].wC)
                .replace("{{parkingPlace}}", element.parkingPlace)
                .replace("{{distanceToTheSea}}", element.distanceToTheSea);
        var temp = document.createElement('div');
        temp.innerHTML = block;
        temp.querySelector('.more_btn').addEventListener('click', function(){
            //alert(1);
            temp.querySelector('.hotel_description').style.display = 'block';
        });
        list.appendChild (temp);
    });
});

function filterHotels() {
    var filtered_hotels = recreationCenters.filter(function (element) {
        //класс отеля
        var hotelClass = document.querySelectorAll('.hotelClass:checked');
        if(!(hotelClass[0].value == element.hotelClass || hotelClass[0].value == "Does not matter")){
            return false;
        }
        //парковка
        var parkingPlace = document.querySelectorAll('.parkingPlace:checked');
        if(!(parkingPlace[0].value == element.parkingPlace || parkingPlace[0].value == "Does not matter")){
            return false;
        }
        //аквапарк или дельфинариум(часть аквапарка)
        var waterPark = document.querySelectorAll('.waterPark:checked');
        if (waterPark[0]!= undefined && waterPark[0].value == "waterPark"){
            if (!element.waterPark){
                return false;
            }
        }
        //аквапарк или дельфинариум(часть дельфинариума)
        var dolphinarium = document.querySelectorAll('.dolphinarium:checked');
        if (dolphinarium[0]!= undefined && dolphinarium[0].value == "dolphinarium"){
            if (!element.dolphinarium){
                return false;
            }
        }
        //стандартные удобства (часть телевизора-чекбокс)
        var tV = document.querySelectorAll('.tV:checked');
        if (tV[0]!= undefined && tV[0].value == "tV"){
            if (!element.standardAmenities[0].tV){
                return false;
            }
        }
        //стандартные удобства (часть кондиционера-чекбокс)
        var airCondition = document.querySelectorAll('.airCondition:checked');
        if (airCondition[0]!= undefined && airCondition[0].value == "airCondition"){
            if (!element.standardAmenities[0].airCondition){
                return false;
            }
        }
        //стандартные удобства (часть вай-фая-чекбокс)
        var wiFi = document.querySelectorAll('.wiFi:checked');
        if (wiFi[0]!= undefined && wiFi[0].value == "wiFi"){
            if (!element.standardAmenities[0].wiFi){
                return false;
            }
        }
        //стандартные удобства (часть бассейна-чекбокс)
        var waterPool = document.querySelectorAll('.waterPool:checked');
        if (waterPool[0]!= undefined && waterPool[0].value == "waterPool"){
            if (!element.standardAmenities[0].waterPool){
                return false;
            }
        }
        //стандартные удобства (часть душа-радио-кнопка)
        var shower = document.querySelectorAll('.shower:checked');
        if(!(shower[0].value == element.standardAmenities[0].shower || shower[0].value == "Does not matter")){
            return false;
        }
        //стандартные удобства (часть туалета-радио-кнопка)
        var wC = document.querySelectorAll('.wC:checked');
        if(!(wC[0].value == element.standardAmenities[0].wC || wC[0].value == "Does not matter")){
            return false;
        }
        //возможность покушать
        var opportunityToEat = document.querySelectorAll('.opportunityToEat:checked');
        if(!(opportunityToEat[0].value == "Does not matter" || element.opportunityToEat.indexOf(opportunityToEat[0].value)>=0)){
            return false;
        }
        //банкомат
        var aTM = document.querySelectorAll('.aTM:checked');
        if(!(aTM[0].value == "Does not matter" || element.aTM.indexOf(aTM[0].value)>=0)){
            return false;
        }
        //расстояние до моря
        var distanceToTheSea = document.querySelectorAll('.distanceToTheSea:checked');
        if(!(distanceToTheSea[0].value == element.distanceToTheSea || distanceToTheSea[0].value == "Does not matter")){
            return false;
        }
        //класс номера + его цена
        var roomClass = document.querySelectorAll('.roomClass:checked');
        var roomCostFrom = parseInt(document.querySelectorAll('.roomCostFrom')[0].value);
        var roomCostTo = parseInt(document.querySelectorAll('.roomCostTo')[0].value);
        if (roomCostFrom > roomCostTo){
            var tmpRoomCostFrom = roomCostFrom;
            roomCostFrom = roomCostTo;
            roomCostTo = tmpRoomCostFrom;
        }
        if (roomClass[0].value == "Does not matter" && roomCostFrom == 0 && roomCostTo == 0){
            //Isn't interesting
        }else {
            var tmpRes = false;
            element.roomClass.forEach (function (item, i, arr){
                var itemcost = parseInt(item.cost);
                if (roomClass[0].value == "Does not matter" && roomCostFrom <= itemcost && roomCostTo >= itemcost){
                    tmpRes = true;
                }  
                if (roomCostFrom == 0 && roomCostTo == 0 && roomClass[0].value == item.type){
                    tmpRes = true;
                }    
                if (roomCostFrom <= itemcost && roomCostTo >= itemcost && roomClass[0].value == item.type){
                    tmpRes = true;    
                }
            });
            if (!tmpRes){
                return false;
            }
        }
        return true;
    });
    return filtered_hotels;
}
