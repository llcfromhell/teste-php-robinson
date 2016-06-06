$('#filtroForm').submit(function(event) {
    
    var formData = $('#filtroForm').serializeArray();
    
    $.ajax({
        
        method: "POST",
        url: "https://teste-robinson-llcfromhell.c9users.io/filtro.php",
        dataType: "html",
        data: formData, 
        success: function(result) {
            $("#resultados").html(result);
            console.log(result);
        }
        
    });
    
    event.preventDefault();
});