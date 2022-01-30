

//write a class to calculate uber price.

function cal(){
    var tmpText = "";
    var total = 0;
    $( ".price").each(function( index) {
        tmpText = $( this ).text();
        tmpText = tmpText.substr(1);;
        total+=Number(tmpText)
        console.log( index + ": " + $( this ).text() );

    });
    $("#result").text("$"+total);
}