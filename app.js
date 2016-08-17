var countryList = ['india','china','usa','australia','canada','germany','taiwan','vennezuela','brazil','slovenia','slovakia','arabia','namibia']


var autoFill = function(selector) {
    this.minCharacters = 2,
    this.field = document.getElementById(selector);
    this.value = this.field.value;
}

autoFill.prototype.checkForCountry =function(){
    var val = this.value;
    var list = null;
    if(value >= this.minCharacters){
        for(var i=0; i< countryList.length; i++){
            if(val.toLowerCase() ===countries[i].substr(0))
        }
    }
    
}


