<?

/**
 * ajax.html
 * AJAX section example by Alain Ibrahim 
*/

error_reporting(0);


if ($_POST["i_want_text"]) {
    print "text received with value of " . $_POST["i_want_text"];
   
}



/**
if ($_POST["i_want_xml"]) {
    header ("Content-type: text/xml");
    print "<root>";
    print "<text>";
    print "text received with value of " . $_POST["xml"] . " and the output will be in xml";
    print "</text>";
    print "<text>";
    print "another text node";
    print "</text>";
    print "</root>";
}
*/



?>
