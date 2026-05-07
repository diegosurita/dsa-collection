<?php

function twoPointer(array &$str): array
{
    $left = 0;
    $right = count($str)-1;

    while ($left < $right) {
        $temp = $str[$right];
        $str[$right] = $str[$left];
        $str[$left] = $temp;

        $left++;
        $right--;
    }

    return $str;
}

// TESTS
$string = str_split('hello world');

print(implode('', twoPointer($string)));
