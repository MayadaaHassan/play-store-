<?php
$email = $_POST['email'];
$password = $_POST['password'];
$age = $_POST['age'];
$security_question = strtolower(trim($_POST['security_question']));

if ($security_question !== 'أزرق' && $security_question !== 'blue') {
    die('تحقق من إجابتك على السؤال الأمني.');
}

// أضف هنا منطق التحقق من البريد الإلكتروني وكلمة المرور




$company_name = $_POST['company_name'];
$company_id = $_POST['company_id'];
$password = $_POST['password'];
$city = $_POST['city'];
$security_question = trim($_POST['security_question']);

if ($security_question !== '8') {
    die('تحقق من إجابتك على السؤال الأمني.');
}

// أضف هنا منطق التحقق من اسم الشركة ورقمها وكلمة المرور




?>
