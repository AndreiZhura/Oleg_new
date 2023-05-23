<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$answerOne = $_POST['answer_1'];
$answerTwo = $_POST['answer_2'];
$answerThree = $_POST['answer_3'];
$answerFour = $_POST['answer_4'];
$answerFife = $_POST['answer_5'];


$token = "5618935755:AAFX4G8Ou3xCBoQqcd98ezPzs06iSdBD1Fo";
$chat_id = "-954869352";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Вопрос-1' => $answerOne, 
  'Вопрос-2' => $answerTwo,
  'Вопрос-3' => $answerThree,
  'Вопрос-4' => $answerFour,
  'Вопрос-5' => $answerFife

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