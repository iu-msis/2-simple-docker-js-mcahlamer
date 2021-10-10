<?php

$num = 2;
$foo = $num ." be";
$bar = "or not " .$num. " be";

echo $foo .  ' ' . $bar. "\n";

echo $num * $num * $num;

$arr =[
    "first" => "Tom",
    "second" => "Bipin",
    "best" => "DS"
];

$arr2 = [1,1,2,3,5,8];

if (true) {
    echo "\nTRUE\n";
}

while (true) {
    break;
}

foreach($arr as $key=>$val) {
    echo "<li>".$key ." is ".$val."</li>";
}
