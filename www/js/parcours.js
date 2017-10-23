var parcours;

function Cible(categorie, rouge, bleu, blanc) {
    this.categorie = categorie;
    this.rouge = rouge;
    this.bleu = bleu;
    this.blanc = blanc;
}

function Categorie(code, nom, maxRouge, minRouge, maxBleu, maxBlanc)
{
    this.code = code;
    this.nom = nom;
    this.maxRouge = maxRouge;
    this.minRouge = minRouge;
    this.maxBleu = maxBleu;
    this.maxBlanc = maxBlanc;
}

function TypeParcours(code, nom, nbCibles)
{
    this.code = code;
    this.nom = nom;
    this.nbCibles = nbCibles;
}

var categoriesMap = new Map();
categoriesMap.set('GG',new Categorie('GG', 'Gros Gibier',40,30,35,30));
categoriesMap.set('MG',new Categorie('MG', 'Moyen Gibier',35,20,30,25));
categoriesMap.set('PG',new Categorie('PG', 'Petit Gibier',25,15,20,15));
categoriesMap.set('PA',new Categorie('PA', 'Petit Animal',15,5,15,15));

var typeParcoursMap = new Map();
typeParcoursMap.set('nat21', new TypeParcours('nat21', 'Nature 21 cibles', 21));
typeParcoursMap.set('nat42', new TypeParcours('nat42', 'Nature 42 cibles', 42));

function addParcours(nom, type)
{
    var parcours = {
        'nom' : nom,
        'type' : type,
        'cibles' : []
    }
    var nbCibles = typeParcoursMap.get(type).nbCibles;
    for(var i=0;i<nbCibles;i++)
    {
        var cible = new Cible('GG', 35, 25, 15);
        parcours.cibles.push(cible);
    }
    var json = JSON.stringify(parcours);
    localStorage.setItem(nom, JSON.stringify(parcours));
}

function confirmChangeCible()
{
    if( $("#cible_panel").hasClass("ui-panel-open") == false ){
        return true;
    }
    var numCible = $("#cible_num").html();
    var index = numCible -1;
    var categorie = $("#select_categorie").val();
    var rouge = $("#dist_rouge").val();
    var bleu = $("#dist_bleu").val();
    var blanc = $("#dist_blanc").val();

    if(parcours.cibles[index].categorie != categorie || parcours.cibles[index].rouge != rouge || parcours.cibles[index].bleu != bleu || parcours.cibles[index].blanc != blanc )
    {
        return false;
    }
    return true;
}

function editCible(numCible)
{
    var index = numCible - 1;
    $("#cible_num").html(numCible);
    $("#select_categorie").val(parcours.cibles[index].categorie);
    $("#dist_rouge").val(parcours.cibles[index].rouge);
    $("#dist_bleu").val(parcours.cibles[index].bleu);
    $("#dist_blanc").val(parcours.cibles[index].blanc);
    $('#select_categorie').selectmenu('refresh');
    $("#cible_panel").panel("open");
}

function fillPage()
{
    $("#liste_cibles").html('');
    $("#liste_cibles").listview();
    var cibles = parcours.cibles;
    for(var i=0;i<cibles.length;i++)
    {
        var cible = cibles[i];
        var n=i+1;
        $("#liste_cibles").append("<li><a id='cible_link_"+n+"''>"
        +"<h2>"+n+"</h2>"
        +"<div><ul id='liste_dist_"+n+"'>"
        +"<li class='reddot'><span id='rouge_"+n+"'>" + cible.rouge + "</span></li>"
        +"<li class='bluedot'><span id='bleu_"+n+"'>" + cible.bleu + "</span></li>"
        +"<li class='whitedot'><span id='blanc_"+n+"'>" + cible.blanc + "</span></li>"
        +"</ul></div>"
        +"<p class='ui-li-aside'><strong><span id='cat_"+n+"'>"+categoriesMap.get(cible.categorie).nom+"</span> "+n+"</strong></p>"
        +"</a></li>");
    }
    $("[id^=cible_link_]").click(function(){
        if(confirmChangeCible()) {
            var num = jQuery(this).attr("id").substring(11);
            editCible(num);
        }
    });
    $("#liste_cibles").listview( "refresh" );
}

function fillSelects() {
    //for(var i = 0; i< categoriesMap.keys().length;i++)
    for (key of categoriesMap.keys())
    {
        //var key = categoriesMap.keys()[i];
        var categorie = categoriesMap.get(key);
        $("#select_categorie").append("<option value='"+key+"'>"+categorie.nom+"</option>");
    }
    //for(var i = 0; i< typeParcoursMap.keys().length;i++)
    for (key of typeParcoursMap.keys())
    {
        //var key = typeParcoursMap.keys()[i];
        var typeParcours = typeParcoursMap.get(key);
        $("#select_newparcours_type").append("<option value='"+key+"'>"+typeParcours.nom+"</option>");
    }
}


function loadParcours()
{
    var nom = $('#select_parcours').val();
    var parcoursStr = localStorage.getItem(nom);
    parcours = JSON.parse(parcoursStr);
    var name = parcours.nom;
    var type = parcours.type;
    var infoType = typeParcoursMap.get(type).nom;

    $("#edit_header").html(nom + " (" + infoType + ")");
    fillPage();
    window.location.href = '#parcours';
}

function loadParcoursList()
{
    $('#select_parcours').html('');
    $('#select_parcours').selectmenu();

    for(var i=0;i<localStorage.length;i++)
    {
        var key = localStorage.key(i);
        var parcoursStr = localStorage.getItem(key);
        parcours = JSON.parse(parcoursStr);
        var name = parcours.nom;
        var type = parcours.type;
        var infoType = typeParcoursMap.get(type).nom;
        $('#select_parcours').append("<option value='"+key+"'>"+name + " (" +infoType+ ")"+"</option>");
    }
    $('#select_parcours').selectmenu('refresh');
}

function saveCible()
{
    var numCible = $("#cible_num").html();
    var index = numCible -1;
    var categorie = $("#select_categorie").val();
    var rouge = $("#dist_rouge").val();
    var bleu = $("#dist_bleu").val();
    var blanc = $("#dist_blanc").val();

    parcours.cibles[index].categorie = categorie;
    parcours.cibles[index].rouge = rouge;
    parcours.cibles[index].bleu = bleu;
    parcours.cibles[index].blanc = blanc;

    $("#rouge_" + numCible).html(rouge);
    $("#bleu_" + numCible).html(bleu);
    $("#blanc_" + numCible).html(blanc);
    $("#cat_" + numCible).html(categoriesMap.get(categorie).nom);
    $("#liste_cibles").listview( "refresh" );
}

function setValidators()
{
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
            $('#select_parcours').val(nom);
            $('#select_parcours').selectmenu('refresh');
            $.mobile.back();
        }}
    );
}

fillSelects();
loadParcoursList();
setValidators();

$("#button_newparcours_close").click(function(){
    window.location.hash=close;
});

$("#button_clear_base").click(function(){
    localStorage.clear();
    loadParcoursList();
});

$("#edit_parcours").click(function(){
    loadParcours();
});

$("#button_delete_parcours").click(function(){
    var nom = $('#select_parcours').val();
    localStorage.removeItem(nom);
    loadParcoursList();
});

$("#close_newparcours_dialog").click(function(){
    $("#form_newparcours").submit();
});

$("#button_cible_ok").click(function(){
    saveCible()
    $("#cible_panel").panel("close");
});

$("#button_cible_appliquer").click(function(){
    saveCible();
});

$("#button_save_parcours").click(function() {
    localStorage.setItem(parcours.nom, JSON.stringify(parcours));
});
