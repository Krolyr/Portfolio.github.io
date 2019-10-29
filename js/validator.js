$(document).ready(function(){
    $('.modal__form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: "required",
            email: {
                required: true,
                email: true
            } 
        },
        messages: {
            name: {
                required: "Пожалуйста, введите свое имя",
                minlength: jQuery.validator.format("Минимум {0} символа!")
            },
            phone: "Пожалуйста, введите свой номер телефона",
            email: {
              required: "Пожалуйста, введите свою почту",
              email: "Неправильно введен адрес почты. Пример: example@gmail.com"
            }
          }
    });

    $('input[name=phone]').mask("+7 (999) 999-99-99");
});