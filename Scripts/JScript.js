var servicesButton = $("#servicesButton");
var contactButton = $("#contactButton");
var hamburgerButton = $("#hamburger-icon");
var logoAnchor = $("#logoLink");

$(document).ready(function(){
    servicesButton.click(function(){
        showDiv("services-div");
    });

    contactButton.click(function(){
        showDiv("contact-div");
    });

    logoAnchor.click(function(){
        showDiv("index-div");
    });

    hamburgerButton.click(function(){
        $("#mobileMenuDiv").slideToggle(200);
    });
});

function showDiv(divisionToOpen){
    console.log("event triggered");
    if(divisionToOpen === "index-div"){
        closeDiv(contactDiv);
        closeDiv(servicesDiv);
        openDiv(indexDiv);
        
    }
    else if(divisionToOpen === "contact-div"){
        closeDiv(indexDiv);
        closeDiv(servicesDiv);
        openDiv(contactDiv);
        
    }
    else if(divisionToOpen === "services-div"){
        closeDiv(contactDiv);
        closeDiv(indexDiv);
        openDiv(servicesDiv);
        
    }
}

function openDiv(division){
    division.css("display","block");
}

function closeDiv(division){
    division.animate({
           opacity: 0.5,
           height: "toggle",
           display: "none"
        },
        1000, function(){
        division.css("opacity", "1");
    });
}