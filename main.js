(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', documentReady);

  function documentReady () {
      var countryList = ['united states of america','india','chine','usa','pakistan','arab','germany','new zealand','poland','russia','south africa','great britian','indonasia','united arab emirates','mongloia','zimbawe','brazil','ukraine','iran','iraq','sri lanka','italy','france','spain','greece'];
      
      var Autofill = function() {
          this.minChar = 2;
          this.field = document.getElementById("countryField");
          this.help = document.getElementById("helper");
          
      };
        
      var auto = new Autofill();  
      
      Autofill.prototype.showHelp = function(){
//          console.log("rashmi");
          this.help.style.display = "block"
      };
       Autofill.prototype.hideHelp = function(){
          this.help.style.display = "none"
      };
      Autofill.prototype.setCountry = function(country){
          this.field.value = country;
          this.hideHelp();
      };
    Autofill.prototype.updateAutofill = function(context,e){
      console.log("wow");
      // var self = this;
      // context.setCountry(self.innerHTM);
      console.log(context);
      console.log(e);
      context.setCountry(e.target.innerHTML)
    };

    Autofill.prototype.detectInput = function(){
      var list = "";
      var self = this;
      var currValue = this.field.value;
      if(currValue.length >= 2) {//min characters
         for(var i = 0; i < countryList.length; i++) {
           if(currValue.toLowerCase() === countryList[i].substr(0,currValue.length).toLowerCase()){
             if(countryList){
               list += '<li>' + countryList[i] + '</li>'
               this.help.innerHTML = list;
             }
           }
         }
        this.help.childNodes.forEach(function(node){
          // console.log(this);
          node.addEventListener("click",self.updateAutofill.bind(this,self));
        });
        // console.log(this.help.childNodes);

          } 
          
      };
      
 
      
   
      
       Autofill.prototype.autoFillHelper = function(){
//          var userInput = document.getElementById("countryField");
          this.field.addEventListener("input",this.detectInput.bind(this));

      };
    
      auto.autoFillHelper();
      
      
// 
//    var Utility, AppState, LightBoxController;
//     
//  
//    AppState = require('./app.state'); 
//  
//  
//    Utility = require('./utility.service');
//    LightBoxController = require('./lightbox.controller');
//
//    var utility = new Utility();
//    utility.navButtonResponse();
//   var lightbox = new LightBoxController(utility);
//    var appstate = new AppState(utility,lightbox);  
//        
//
//    //lightbox.startListener();
//    appstate.start();       

  
  }  
}());   