$(document).ready(function(){
    $(document).ready(function(){
        $('form').submit(function(e) {
            e.preventDefault();
            $.ajax({
                type: "POST",
                url: "mailer/smart.php",
                data: $(this).serialize()
            }).done(function() {
                $(this).find("input").val("");
                $('.overlay').fadeOut();
                $('form').trigger('reset');
            });
            return false;
        });
    });
});