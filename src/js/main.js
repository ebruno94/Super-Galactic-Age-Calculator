import $ from 'jquery';
import {Calculator} from './calculator.js';
import "../css/styles.css";
import "../css/bootstrap.css";

$(document).ready(function(){
    const newCalculator = new Calculator();
    $(".container").hide();
    $("#intro").show();
    $("#begin").click(function(){
        $("#intro").hide("ease");
        $("#optionsContainer").show("ease");
    });
    $("#ageBtn").click(function(){
        $("#optionsContainer").hide("ease");
        $("#ageContainer").show("ease");
    });
    $("#expectancyBtn").click(function(){
        $("#optionsContainer").hide("ease");
        $("#expectancyContainer").show("ease");
    });
    $("#dateBtn").click(function(){
        $("#optionsContainer").hide("ease");
        $("#dateContainer").show("ease");
    });
    $("#returnAge").click(function(){
        $("#ageResultContainer").hide("ease");
        $("#ageContainer").show("ease");
    });
    $("#returnExp").click(function(){
        $("#expResultContainer").hide("ease");
        $("#expectancyContainer").show("ease");
    });
    $("#returnDate").click(function(){
        $("#dateResultContainer").hide("ease");
        $("#dateContainer").show("ease");
    });
    $(".returnToOptions").click(function(){
        $("#ageContainer").hide("ease");
        $("#expectancyContainer").hide("ease");
        $("#dateContainer").hide("ease");
        $("#optionsContainer").show("ease");
    });
    let ageInSeconds;
    $("#ageForm").submit(function(event){
        event.preventDefault();
        $("#ageContainer").hide("ease");
        $("#ageResultContainer").show("ease");
        let age = $("#ageVal").val();
        ageInSeconds = newCalculator.ageSeconds(age);
        let planet = $("#planet").val();
        if (planet === "mercury"){
            $("#ageResult").text(newCalculator.ageMercury(age));
            $("#planetInput").text("Mercury");
        } else if (planet === "venus"){
            $("#ageResult").text(newCalculator.ageVenus(age));
            $("#planetInput").text("Venus");
        } else if (planet === "mars"){
            $("#ageResult").text(newCalculator.ageMars(age));
            $("#planetInput").text("Mars");
        } else if (planet === "venus"){
            $("#ageResult").text(newCalculator.ageJupiter(age));
            $("#planetInput").text("Jupiter");
        }
    });

    $("#formExpectancy").submit(function(event){
        event.preventDefault();
        $("#expectancyContainer").hide("ease");
        $("#expResultContainer").show("ease");
        let age = $("#ageValExp").val();
        let le = $("#expVal").val();
        let planet = $("#planetExp").val();
        if (planet === "mercury"){
            $("#expResult").text(newCalculator.ageMercury(age));
            $("#lifeExp").text(newCalculator.ageMercury(le));
            $("#expPlanetInput").text("Mercury");
        } else if (planet === "venus"){
            $("#expResult").text(newCalculator.ageVenus(age));
            $("#lifeExp").text(newCalculator.ageVenus(le));
            $("#expPlanetInput").text("Venus");
        } else if (planet === "mars"){
            $("#expResult").text(newCalculator.ageMars(age));
            $("#lifeExp").text(newCalculator.ageMars(le));
            $("#expPlanetInput").text("Mars");
        } else if (planet === "venus"){
            $("#expResult").text(newCalculator.ageJupiter(age));
            $("#lifeExp").text(newCalculator.ageJupiter(le));
            $("#expPlanetInput").text("Jupiter");
        }
        $("#yearsLeft").text(newCalculator.expectancy(planet, le, age));
    });

    $("#formDate").submit(function(event){
        event.preventDefault();
        $("#dateContainer").hide("ease");
        let y1 = $("#year1").val();
        let m1 = $("#month1").val();
        let d1 = $("#day1").val();
        let y2 = $("#year2").val();
        let m2 = $("#month2").val();
        let d2 = $("#day2").val();
        $("#dateResultContainer").show("ease");
        $("#dateResult").text(newCalculator.dateDifference(y1, m1, d1, y2, m2, d2));
    });

    let tempModal = document.getElementById('ageInSecondsContainer');
    let tempBtn = document.getElementById("modalAge");
    let tempSpan = document.getElementByClassName("close")[0];
    tempBtn.onclick = function(){
        tempModal.style.display = "block";
    };
    tempSpan.onclick = function(){
        tempModal.style.display = "none";
    };
    window.onclick = function(){
        if (event.target == tempModal){
            tempModal.style.display = "none";
        }
    };

});
