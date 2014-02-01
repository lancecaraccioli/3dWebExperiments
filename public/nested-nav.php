<?php

$items = array(
    '1'	=> array('text'=>'Home','title'=>'Return Home','uri'=>'/home'),
    '2'	=> array('text'=>'About Us','title'=>'About Our Company','uri'=>'/about'),
    '3' => array('text'=>'Learn More','title'=>'More Information','uri'=>'/more-info','children'=>
        array(
            '5' => array('text'=>'History','title'=>'Company History','uri'=>'/history'),
            '6' => array('text'=>'Products','title'=>'Company Products','uri'=>'/products'),
            '7' => array('text'=>'Services','title'=>'Company Services','uri'=>'/services'),
        ),
    ),
    '4'	=> array('text'=>'Contact Us','title'=>'Contact Our Company','uri'=>'/contact'),
);

function renderNestedList($children) {
    $html='';
    if (count($children)){
        $html.='<ul>';
        foreach($children as $child){
            list($text, $title, $href, $subChildren) = array_values($child);
            //var_dump($child);var_dump(array($text, $title, $href, $subChildren));die();
            $html .= "<li><a title=\"{$title}\" href=\"{$href}\">$text</a></li>";
            $html .= renderNestedList($subChildren);
        }
        $html.='</ul>';
    }
    return $html;
}

echo renderNestedList($items);
