$.getJSON('/data', function(d){
    alert(JSON.stringify(d));

    $('#name').text(d.name);
    $('#collage').text(d.collage);
    $('#recgno').text(d.recgno);

})