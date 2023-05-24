<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$answerOne = $_POST['answer_1'];
$answerTwo = $_POST['answer_2'];
$answerThree = $_POST['answer_3'];
$answerFour = $_POST['answer_4'];



$token = "5618935755:AAFX4G8Ou3xCBoQqcd98ezPzs06iSdBD1Fo";
$chat_id = "-954869352";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Какая площадь комнаты, в которой будет располагаться кондиционер?' => $answerOne, 
  'Где будет располагаться кондиционер?' => $answerTwo,
  'В какой ценовой категории Вы хотели бы приобрести кондиционер?' => $answerThree,
  'На какую дату планируете покупку?' => $answerFour,
 

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