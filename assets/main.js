// Griglia 6x6 (36 boxes), ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9 (scegliere API opportuna).
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato

$(document).ready(function () {
    var myApi = 'https://flynn.boolean.careers/exercises/api/random/int';
    var box = $('.box');

    box.click(function () { 

        var self = $(this);
        
        $.ajax({

            url: myApi,
            method: "GET",
            success: function (data) {

                var number = data.response;
    
                self.text(number);

                if (self.text() <= 5) {
                    self.removeClass('sup');
                    self.addClass('inf');

                } else {
                    self.removeClass('inf');
                    self.addClass('sup');
                }
            },
            error: function () {
                console.log('Errore');
    
            },
    
        });
        
    });
    
    
});