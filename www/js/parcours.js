function loadParcoursList()
{
    $('#select_parcours').html('');
    $('#select_parcours').selectmenu();

    for(var i=0;i<localStorage.length;i++)
    {
        var key = localStorage.key(i);
        var parcoursStr = localStorage.getItem(key);
        var parcours = JSON.parse(parcoursStr);
        var name = parcours.nom;
        var type = parcours.type;
        var infoType;

        if(type == "Nature21") {
            infoType = "Nature 21 cibles";
        }
        else if(type == "Nature42") {
            infoType = "Nature 42 cibles";
        }
        $('#select_parcours').append("<option value='"+key+"'>"+name + " (" +type+ ")"+"</option>");
    }
    $('#select_parcours').selectmenu('refresh');
}

loadParcoursList();
$("#button_newparcours_close").click(function(){
    window.location.hash=close;
});

$("#button_clear_base").click(function(){
    localStorage.clear();
    loadParcoursList();
});

$("#edit_parcours").click(function(){
    var nom = $('#select_parcours').val();
    var parcoursStr = localStorage.getItem(nom);
    var parcours = JSON.parse(parcoursStr);
    var name = parcours.nom;
    var type = parcours.type;
    var infoType;

    if(type == "Nature21") {
        infoType = "Nature 21 cibles";
    }
    else if(type == "Nature42") {
        infoType = "Nature 42 cibles";
    }

    $("#edit_header").html(nom + " (" + infoType + ")");
    fillPage();
    window.location.href = '#parcours';
});

function fillPage()
{
    $("#liste_cibles").html('');
    $("#liste_cibles").listview();
    for(var i=1;i<=21;i++)
    {
        $("#liste_cibles").append(
        "<li><a id='cible_link_"+i+"''>"
        +"<h2>"+i+"</h2>"
        +"<div><ul>"
        +"<li class='reddot'><span id='rouge_"+i+"''></span><//li>"
        +"<li class='bluedot'><span id='bleu_"+i+"''</li>"
        +"<li class='whitedot'><span id='blanc_"+i+"''</li>"
        +"</ul></div>"
        +"<p class='ui-li-aside' id='cat_'"+i+"><strong>Gros Gibier</strong> 1</p>"
        +"</a></li>");
    }
    $("[id^=cible_link_]").click(function(){
        //window.location.href = '#cible_panel';
        var linkId = jQuery(this).attr("id");
        var num = linkId.substring(11);
        var numH = $("#cible_num");
        $("#cible_num").html('Cible '+num);
        $("#cible_panel").panel("open");
    });

    $("#liste_cibles").listview( "refresh" );
}

$("#button_delete_parcours").click(function(){
    var nom = $('#select_parcours').val();
    localStorage.removeItem(nom);
    loadParcoursList();
});

function addParcours(nom, type)
{
    var parcours = {
        'nom' : nom,
        'type' : type
    }
    localStorage.setItem(nom, JSON.stringify(parcours));
}

$("#close_newparcours_dialog").click(function(){
    $("#form_newparcours").submit();
});

$.validator.addMethod("parcoursExists", function(value){
    return ! localStorage[value.toUpperCase()];

},'Ce nom parcours existe déjà.');

$("#form_newparcours").validate({
    rules: { newparcours_nom : "parcoursExists"},
    messages: {newparcours_nom: {required:"Saisir un nom pour le parcours."}},
    submitHandler: function (form) {
        var nom = $("#newparcours_nom").val().toUpperCase();
        var type = $("#select_newparcours_type").val();
        addParcours(nom, type);
        loadParcoursList();
        $("#newparcours_nom").val('');
        $('#select_parcours').val(nom);
        $('#select_parcours').selectmenu('refresh');
        $.mobile.back();
    }}
);
