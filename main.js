(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', documentReady);
  function documentReady () {
    var countryList = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
      
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
        console.log(this.help.childNodes);
        for(var j = 0; j< this.help.childNodes.length; j++){
          // console.log(self);
          if(this.help.childNodes[j].addEventListener){
            this.help.childNodes[j].addEventListener("click",self.updateAutofill.bind(this,self));
          }
          else if(this.help.childNodes[j].attahEvent) {
            this.help.childNodes[j].attachEvent("onclick",self.updateAutofill.bind(this,self));
          }
        }
        // this.help.childNodes.forEach(function(node){
        //
        // });
        // console.log(this.help.childNodes);

          } 
          
      };
    Autofill.prototype.onFieldIn = function(){
      // console.log("what");
      auto.detectInput(this.field);

     
    };

//    Autofill.prototype.onFieldOut = function(){
//
//         auto.hideHelp();
//      console.log("jhgefjeh");
//    };





      
   
      
       Autofill.prototype.autoFillHelper = function(){

//          var userInput = document.getElementById("countryField");
           this.field.addEventListener("input",this.detectInput.bind(this),true);
         // this.field.addEventListener("keypress",this.updateAuto);

         this.field.onfocus = this.onFieldIn;
//         this.field.onblur = this.onFieldOut;


       };

    auto.autoFillHelper();
      
      


  
  }  
}());   