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


      context.setCountry(e.target.innerHTML)
    };

    Autofill.prototype.detectInput = function(){
      console.log("in detect input");
      var list = "";
      var self = this;
      var currValue = this.field.value;
      if(currValue.length >= this.minChar) {//min characters
         for(var i = 0; i < countryList.length; i++) {
           if(currValue.toLowerCase() === countryList[i].substr(0,currValue.length).toLowerCase()){
             if(countryList){
               list += '<li>' + countryList[i] + '</li>';
               this.help.innerHTML = list;
             }
           }
         }
        this.showHelp();
        console.log(list);
        this.help.childNodes.forEach(function(node){
           // console.log(self);
          node.addEventListener("click",self.updateAutofill.bind(this,self));
        });
        // console.log(this.help.childNodes);

          } 
          
      };
    Autofill.prototype.onFieldIn = function(){
      // console.log("what");
      auto.detectInput(this.field);

     // auto.autoFillHelper();
    };

    Autofill.prototype.onFieldOut = function(){
      console.log("");
    };



      
   
      
       Autofill.prototype.autoFillHelper = function(){
      
//          var userInput = document.getElementById("countryField");
           this.field.addEventListener("input",this.detectInput.bind(this),true);

         this.field.onfocus = this.onFieldIn;
         this.field.onblur = this.onFieldOut;


       };

    auto.autoFillHelper();
      
      


  
  }  
}());   