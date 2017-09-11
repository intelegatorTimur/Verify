$(document).ready(function(){
    $('input[name=f_phone]').focus(function(){
        $(this).val('+3(');
        
    });
    $('input[name=f_phone]').keyup(function(){
        
        var key = $(this).val();
        if(key.length == 6){
            $(this).val(key+')');
        }
        
    });
    
    $('#f_form').on('submit',function(event){
        event.preventDefault();
        var status = true;
        
        var f_name = $('input[name=f_name]').val();
        var fname = f_name.match(/\b[a-zA-Z]{2,15}\b/);
        if(fname){
            status = true;
            $('input[name=f_name]').css({'outline':'1px solid lightgreen'});
        }else {
            status = false;
            $('input[name=f_name]').css({'outline':'1px solid red'});
        }
        
        
        var f_email = $('input[name=f_email]').val();
        f_email.match(/\b[a-zA-Z0-9\_\.\-]{2,15}@{1}[a-z0-9]{1,15}\.{1}[a-z]{1,4}\.{0,1}[a-z]{0,4}\b/);
        
        var f_login = $('input[name=f_login]').val();
        f_login.match(/\b[a-zA-z0-9\_\-\.]{6,20}\b/);
        
        var f_phone = $('input[name=f_phone]').val();
        f_phone.match(/^\+{1}\d{1}\({1}\d{3}\){1}\d{7}$/);
        
        
        var serial = $(this).serialize();
        
        console.log(serial);
        
    });
    
    
    
});