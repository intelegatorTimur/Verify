<?php
// форма регистрации на аяксе поля в ней имя эмейл логин телефон загрузка изображения
// поля должны проверятся на стороне пользователя и записыватся в бд


?>


<html>
    <head>
        <title></title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="style.css">
        <script src="jquery-3.1.1.min.js"></script>
        <script src="action.js"></script>
    </head>
    <body>
      <div class="forma">
       <ul>
        <form action="" method="post" id="f_form">
           
               
           
            <li><input type="text" name="f_name" placeholder="Имя"></li>
            <li><input type="email" name="f_email" placeholder="E-mail"></li>
            <li><input type="text" name="f_login" placeholder="Логин"></li>
            <li><input type="text" name="f_phone" placeholder="+3(123)1234541"></li>
            <li><input type="password" name="f_password" placeholder="Пароль"></li>
            <li><input type="file" name="f_image"></li>
            <li><input type="submit" name="f_submit" value="Зарегистрировать"></li>
            
        </form>
        </ul>
        </div>
    </body>
    
</html>
