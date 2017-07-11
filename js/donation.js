'use strict';
	var me = this;
	var currency = 'PEN';
	var amount = 0;
	var customamount = 0;
		var template =  document.createElement('div');
		template.id='donation-box';
		template.innerHTML = '<div class="donation-hidden">'+
            '<a class="donation-close-widget" id="donation-close-widget">&times;</a>'+
            '<a href="https://www.joinnus.com/donacion/fpc" target="_blank" class="donation" style="">'+
                '<div class="donation-block"><img class="donation-image" src="https://www.joinnus.com/inc/donation/images/img-latav2.png">'+
                '</div><span class="donation-block donation-message">DONA AQUÍ</span><img class="powered_joinnus" src="https://www.joinnus.com/inc/donation/images/powered.png" alt="">'+
            '</a>'+
        '</div>'
		document.body.appendChild(template);


    var closewidget     = document.getElementById('donation-close-widget');
 	var currencyclass	= document.getElementsByClassName('donate-currency');
 	var amountclass 	= document.getElementsByClassName('donate-amount');

    closewidget.onclick = function() {
        document.getElementById('donation-box').remove();
    }

    for(var i =0; i < currencyclass.length; i++) {
        currencyclass[i].onclick = function() { 
        	if((this.innerText) == 'Soles') {
        		currency = 'PEN';
                for(var j = 0; j<currencyclass.length; j++) {
                    currencyclass[j].classList.remove('donation-active');
                }
                this.classList.add('donation-active');
        	} else {
        		currency = 'USD';
                for(var j = 0; j<currencyclass.length; j++) {
                    currencyclass[j].classList.remove('donation-active');
                }
                this.classList.add('donation-active');
        	}
        };
    }

    for (var i = 0; i< amountclass.length; i++) {
    	amountclass[i].onclick = function() {
    		amount = parseInt(this.innerText);
            for(var j = 0; j<amountclass.length; j++) {
                amountclass[j].classList.remove('donation-active');
            }
            this.classList.add('donation-active');
    	}
    }

    //  isNaN(textamount) == false <- es numero
	/*var donate = document.getElementById('donate').onclick = function() {
		var textamount = document.getElementById('customamount').value;
		if(amount != 0 && textamount == '') {
			if(isNaN(amount) == false) {
                window.open('https://www.joinnus.com/donacion/fpc?amount='+ amount +'&currency=' + currency, '_blank');
			} 
		} else if(amount == 0 && textamount=='' || textamount<21){
                alert('Por favor elige un monto mayor a 20 para tu donación');
                return false;
            } else {
                var redirect = 'https://www.joinnus.com/donacion/fpc?amount='+ textamount +'&currency=' + currency;
                alert('link');
                alert(redirect)
                alert(textamount);
                alert(currency);
                if(isNaN(textamount) == false) {
                    window.open(redirect, '_blank');
                } else {
                    alert('Por favor ingresa un monto válido');
                    return false;
                }

        }
	};*/
