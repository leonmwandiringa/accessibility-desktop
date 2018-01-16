//import {AnalyticsController} from "Controllers/AnalyticsController.js";
const $ = require('jquery');
const fs = require("fs");
let filen = "storage/contacts.txt";

//let contrval = new AnalyticsController("Leon");
//console.log(contrval.getName);
"use strict";
        /**
        *i apologise wrote spaghetti code on  this one, refactoring and making use of es6 on the way, forgive me urs truly - "No need for talk lets do this"
         */

          var enteredUrl, testUrl, googleResults,  googleXhr, xhr, responseSource, linkreltag, theBodyContent,pageImages, pageLinksNumber, pageLinks, linkAriaLabel, framwt, framht, linkExternal, linkInternal, linkExternalMicrosoft, linkMicrosoftOcd, internalLinksdta;
          // var mwfjs = "http://assets.onestore.ms/cdnfiles/external/mwf/long/v1/v1.20.0/scripts/mwf-auto-init-main.var.min.js";
          // var mwfcss = "https://assets.onestore.ms/cdnfiles/external/mwf/long/v1/v1.20.0/css/mwf-west-european-green-default.min.css";
          // var btrpcss = "./assets/css/bootstrap.min.css";
          // var btrpjs = "./assets/js/bootstrap.min.js";
          var phone = document.getElementById("phone_1"),
              iframe = document.getElementById("frame_1");
          var dmUrl = "https://www.xbox.com";

          var thfn = $("phone_1");

        // listen to the show content event
          $(".showthepage").click(function(){
            $("#phone_1 iframe").attr("src", enteredUrl);
            $(".sitenavigation").hide();
            $(".showpage").hide(500);
            $("#codeExec, #controls, #controls2, #leftInsightsbtn").fadeIn(1000);

              //$(".theheader").hide(200);
              
              // $(".sourceCodeBlock").show(500, function(){

              //   $("link[rel='stylesheet']").attr("href", mwfcss);
              //   $("#intjs").attr("src", mwfjs);

              // });


          });
          $("#closeleftbtn").click(function(){

            closeLeftNav();

          });
          $("#leftInsightsbtn").click(function(){

            openLeftNav();
          });
//screen size events
          $("#iphone6").click(function(){

            $("#phone_1").css({"width":"375px","height":"667px"});

          });
          $("#galaxys5").click(function(){

            $("#phone_1").css({"width":"360px","height":"640px"});

          });

          $("#ipad1").click(function(){

            $("#phone_1").css({"width":"768px","height":"1024px"});

          });

          $("#ipadpro").click(function(){

            $("#phone_1").css({"width":"1024px","height":"1366px"});

          });

          $("#iframeWidth").blur(function(){

            framwt = $(this).val();
            if(framwt == "" || framwt == undefined){
               thfn.css("width", framwt);
               updateIframe();
            }
          });
          $("#iframeHeight").blur(function(){

            framht = $(this).val();
            if(framht == "" || framht == undefined){
              thfn.css("height", framht);
              updateIframe();
            }
          });

          $("#fetch-btn").click(function(e){

            enteredUrl = $("#fetch-url-link").val();
            //check validity
            if(enteredUrl == null || enteredUrl == ""){

              e.preventDefault();
              console.log("blocked");
            }else{

              execInput(enteredUrl);

            }
            
          });
          
                    //run the accessibilty test here
          function checkAccesibiltyAndPass(responseSource){

            //console.log(responseSource);
            
            $(".codeExec1").append(responseSource);
            // $(".codeExec1 script[src]").each(function(){
            //   var so = $(this).attr("src");
            //       if(so.search(/https:\/\//g) == -1){
                
            //     $(this).attr("src","https://xbox.com"+so);
            //       console.log($(this).attr("src"));  
            //           }
            //   });

            //   $(".codeExecBody").append($(".codeExec1"));
            $(".codeExec1 link, .codeExec1 script, .codeExec1 style").remove();
            //let theBodyOnly = $(".codeExec1");

            //$(".codeExecBody").append(theBodyOnly);
            //define the links
            pageLinks = $(".codeExec1 #BodyContent a");
            pageLinksNumber = pageLinks.length;

            //write to a file
            $("#numberoflinks").text(pageLinksNumber);

            //check each of the link for validation
            linkAriaLabel = [];
            linkExternal = [];
            linkInternal = [];
            linkMicrosoftOcd = [];
            linkExternalMicrosoft = [];
            pageLinks.each(function(){
              //check if there is are aria label tags
              
              if($(this).attr("href") != undefined){
                //linkAriaLabel.push($(this).attr("href"));
                //check for external links

                if($(this).attr("href").search(/xbox.com/) == -1){

                  linkExternal.push($(this).attr("href"));
                  $("#externallinks").text(linkExternal.length);
                  
                  

                }else{

                  linkInternal.push($(this));
                  $("#internallinks").text(linkInternal.length);

                }

              }


            });
            //console.log(responseSource);
            console.log(linkInternal);
            //console.log(pageLinksNumber);
            //console.log(linkAriaLabel);

              //check for microsoft trackable links
            if(linkExternal.length > 0){
              for(var goext=0; goext < linkExternal.length; goext++){

                if(linkExternal[goext].search(/microsoft.com/g) != -1){

                  linkExternalMicrosoft.push(linkExternal[goext]);

                }
              }
              $("#externallinkstomicrosoft").text(linkExternalMicrosoft.length);
            }
            if(linkExternalMicrosoft.length > 0){

              for(var mcrocd=0; mcrocd < linkExternalMicrosoft.length; mcrocd++){

                if(linkExternalMicrosoft[mcrocd].search(/\?icid=/) != -1){

                  linkMicrosoftOcd.push(linkExternalMicrosoft[mcrocd]);

                }

              }
              $("#externaltrackedtomicrosoft").text(linkMicrosoftOcd.length);

            }

            checkMetaTags();
          }
          //run the meta tags checker
          function checkMetaTags(){
                var metaTitle, metaDescription, metaKeywords;
                var headerHolder = $(".codeExec1");
                metaDescription = $(".codeExec1 meta[name='description']").attr("content");
                metaKeywords = $(".codeExec1 meta[name='keywords']").attr("content");
                metaTitle = $(".codeExec1 title").text();
                //console.log(metaDescription+" "+ metaKeywords +" "+metaTitle);

                $("#meta-title-txt").text(metaTitle);
                $("#meta-desc-txt").text(metaDescription);
                $("#meta-keywords-txt").text(metaKeywords);
                //meta status
                if(metaTitle.length > 60){
                  $("#meta-title-status").text("Title is too long. its "+(metaTitle.length-60)+" Long. Must be Between 50 - 60")
                  }else if(metaTitle.length > 50 && metaTitle.length < 60){

                    $("#meta-title-status").text("Its all Good. Title is in the right standards");
                  }else if(metaTitle.length < 50){

                    $("#meta-title-status").text("Title is Set But 50 - 60 chars is the best");
                }

                if(metaDescription.length > 160){

                  $("#meta-desc-status").text("The Description is "+metaDescription.length - 160+" Long. It should be less than 160 chars");

                }else{

                  $("#meta-desc-status").text("The Description is in the right range of characters");
                }

                if(metaKeywords.length > 160){

                  $("#meta-keywords-status").text("The Keywords is "+metaKeywords.length - 160+" Long. It should be less than 160 chars");

                }else{

                  $("#meta-keywords-status").text("The Keywords are the right range of characters");
                }

              }

              // function asyncScrapeTry(tryUrl){

              //   let scrapeTry = new XMLHttpRequest();

                
              //   scrapeTry.open("GET", tryUrl, true);
              //   scrapeTry.setRequestHeader("Referer",tryUrl);

              //   scrapeTry.onerror = function(){

              //     console.log("error bro");
              //   }

              //   scrapeTry.onload = function(){
              //     if(this.status == 200){

              //       cosnole.log(this.repsonseText);

              //     }

              //   }

              //   scrapeTry.send();

              // }

          //search for microsoft external links
          function runGoogleAnalytics(enteredUrl){
            testUrl = "https://www.googleapis.com/pagespeedonline/v2/runPagespeed?url="+enteredUrl+"&strategy=mobile&key=AIzaSyB_9OpSpNIFlv6VEQjRzkeOTjxKPOdErqU";
            googleXhr = new XMLHttpRequest();
            googleXhr.open("GET", testUrl, true);

            googleXhr.onerror = function(){

              console.log("error bro");

            }
            googleXhr.onload = function(){
              $(".loaddd").fadeIn(500);
              $(".loaddd").show(500);
              if(this.status == 200){
                $(".loaddd").fadeOut(500);
                var jsval, htmlval, cssval, imgval, pgsize, htmll, pgspeed, pgusability;

                googleResults = JSON.parse(this.responseText);
                console.log(googleResults);

                $("#pagetitle").text(googleResults.title);
                
                jsval = Number(googleResults.pageStats.javascriptResponseBytes);
                htmlval = Number(googleResults.pageStats.htmlResponseBytes);
                cssval = Number(googleResults.pageStats.cssResponseBytes);
                imgval = Number(googleResults.pageStats.imageResponseBytes);
                pgspeed = googleResults.ruleGroups.SPEED.score;
                pgusability = googleResults.ruleGroups.USABILITY.score;

                pgsize = (jsval + htmlval + cssval + imgval)/1048576;
                //console.log(pgsize);
                $("#pgspeed").text(pgspeed+"%");
                $("#pgusability").text(pgusability+"%");
                $("#jsval").text((jsval/1048576).toPrecision(3)+"mb ");
                //$("#htmlval").text((htmlval/1048576).toPrecision(3)+"mb ");
                $("#cssval").text((cssval/1048576).toPrecision(3)+"mb ");
                $("#imgval").text((imgval/1048576).toPrecision(3)+"mb ");
                htmll = (((htmlval/1048576)/pgsize)/3)*100;

                $("#pgsize").text(" "+pgsize.toPrecision(3)+" mb ");

                $("#jsval").parent().css("width",((jsval/1048576)/pgsize)*100+htmll+"%");
                
                $("#cssval").parent().css("width",((cssval/1048576)/pgsize)*100+htmll+"%");
                $("#imgval").parent().css("width",((imgval/1048576)/pgsize)*100+htmll+"%");
              }

            }
            googleXhr.send();

          }

          //execute the request
          function execInput(enteredUrl){

            //asyncScrapeTry(enteredUrl);
            $(".theloader").show(500);

              xhr = new XMLHttpRequest();

              xhr.open("POST", "http://localhost/mwfbuster/execfetch.php", true);

              xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");

              xhr.onerror = function(){

                console.log("error");

              }
              //run the code when everything is set
              xhr.onload = function(){
                if(this.status==200){
                  $(".theloader").hide(1000); 

                    $(".showpage").fadeIn(700).delay(400);
                    $(".theheader").fadeOut(600);
                    $(".url-extract").addClass("url-extract-hammertime");

                  responseSource = this.responseText;
                  console.log(responseSource);
                  // run the func
                  runGoogleAnalytics(enteredUrl);
                  checkAccesibiltyAndPass(responseSource);


                }
              
              }

              xhr.send("theurl="+enteredUrl);

          }

          // iframing code
          /*Only needed for the controls*/


/*View*/
function updateView(view) {
  if (view) {
    phone.className = "phone view_" + view;
    
  }
}

/*Controls*/
function updateIframe() {
  iframe.src = document.getElementById("fetch-url-link").value;

  phone.style.width = document.getElementById("iframeWidth").value + "px";
  phone.style.height = document.getElementById("iframeHeight").value + "px";

  /*Idea by /u/aerosole*/
  document.getElementById("wrapper").style.perspective = (
    document.getElementById("iframePerspective").checked ? "1000px" : "none"
  );
}
updateIframe();

/*Events*/
document.getElementById("controls").addEventListener("change", function() {
  updateIframe();
});

//insights tab from left
function openLeftNav() {
    document.getElementById("insightsleft").style.width = "100%";
}

function closeLeftNav() {
    document.getElementById("insightsleft").style.width = "0%";
}


