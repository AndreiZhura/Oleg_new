<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$token = "5618935755:AAFX4G8Ou3xCBoQqcd98ezPzs06iSdBD1Fo";
$chat_id = "-954869352";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thanks.html');
} else {
  echo "Error";
}

?>