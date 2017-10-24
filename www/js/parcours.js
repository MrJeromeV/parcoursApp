var parcours;

function Cible(categorie ='', rouge='', bleu='', blanc='') {
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
        var cible = new Cible();
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
    if(categorie == null) {
        categorie = "";
    }
    var rouge = $("#dist_rouge").val();
    var bleu = $("#dist_bleu").val();
    var blanc = $("#dist_blanc").val();

    //var diffCat = !(parcours.cibles[index].categorie == categorie);
    //var diffRouge = parcours.cibles[index].rouge != rouge;

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
    $('#info_cible').html( $("#info_"+numCible ).val());
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
        var categorie = cible.categorie;
        var nomCategorie = '';
        if (categoriesMap.has(categorie))
        {
            nomCategorie = categoriesMap.get(categorie).nom;
        }
        //if(categorie != null)
        var n=i+1;
        $("#liste_cibles").append("<li><a id='cible_link_"+n+"''>"
        +"<h2>"+n+"</h2>"
        +"<div><ul id='liste_dist_"+n+"' style='list-style: none;'>"
        +"<li><span id='rouge_"+n+"' class='dist_rouge'>" + cible.rouge + "</span></li>"
        +"<li><span id='bleu_"+n+"' class='dist_bleu'>" + cible.bleu + "</span></li>"
        +"<li><span id='blanc_"+n+"' class='dist_blanc'>" + cible.blanc + "</span></li>"
        +"</ul></div>"
        +"<input type='hidden' id='info_"+n+"'></input>"
        +"<p class='ui-li-aside'><strong><span id='cat_"+n+"'>"+nomCategorie+"</span> <span id='numcat_"+n+"'></span></strong></p>"
        +"</a></li>");
    }
    $("[id^=cible_link_]").click(function(){
        if(confirmChangeCible()) {
            var num = jQuery(this).attr("id").substring(11);
            editCible(num);
        }
    });
    $("#liste_cibles").listview( "refresh" );
    verifParcours();
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
    if(categorie != null) {
        $("#cat_" + numCible).html(categoriesMap.get(categorie).nom);
    }
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

function verifCible(index)
{
    var categorie = parcours.cibles[index].categorie;
    if(categorie == '' || categorie == null) return;
    var rouge = parcours.cibles[index].rouge;
    var bleu = parcours.cibles[index].bleu;
    var blanc = parcours.cibles[index].blanc;

    var message = "";

    var maxRouge = categoriesMap.get(categorie).maxRouge;
    var minRouge = categoriesMap.get(categorie).minRouge;
    var maxBleu = categoriesMap.get(categorie).maxBleu;
    var maxBlanc = categoriesMap.get(categorie).maxBlanc;

    if(rouge > maxRouge) {
        message += "Distance au pas rouge > "+maxRouge+"m !<br>";
    }
    if(rouge < minRouge) {
        message += "Distance au pas rouge < "+minRouge+"m !<br>";
    }
    if(bleu > maxBleu) {
        message += "Distance au pas bleu > "+maxBleu+"m !<br>";
    }
    if(blanc > maxBlanc) {
        message += "Distance au pas blanc > "+maxBlanc+"m !<br>";
    }
    if((rouge - bleu) > 7 ) {
        message += "Pas rouge à plus de 7m du pas bleu !<br>";
    }
    if((bleu - blanc) > 7 ) {
        message += "Pas bleu à plus de 7m du pas blanc !<br>";
    }
    if((rouge - bleu) < 0 ) {
        message += "Pas bleu derriere le pas rouge !<br>";
    }
    if((bleu - blanc) < 0 ) {
        message += "Pas blanc derrière le pas bleu !<br>";
    }
    var i = index + 1;
    $("#info_"+i).val(message);
    if(message.length > 0) {
        $("#cible_link_"+i).buttonMarkup({ icon: "alert" });
    } else {
        $("#cible_link_"+i).buttonMarkup({ icon: "carat-r" });
    }
}

function verifParcours()
{
    var countGG = 0;
    var countMG = 0;
    var countPG = 0;
    var countPA = 0;
    var totalRouge = 0;
    var totalBleu = 0;
    var totalBlanc = 0;
    for (var i = 0;i<21;i++)
    {
        var categorie = parcours.cibles[i].categorie;
        //if(categorie == '') return;
        var rouge = parcours.cibles[i].rouge;
        var bleu = parcours.cibles[i].bleu;
        var blanc = parcours.cibles[i].blanc;
        totalRouge += Number(rouge);
        totalBleu += Number(bleu);
        totalBlanc += Number(blanc);
        var num = i+1;
        if(categorie == 'GG')
        {
            countGG ++;
            $("#numcat_"+num).html(countGG);
        }
        if(categorie == 'MG')
        {
            countMG ++;
            $("#numcat_"+num).html(countMG);
        }
        if(categorie == 'PG')
        {
            countPG ++;
            $("#numcat_"+num).html(countPG);
        }
        if(categorie == 'PA')
        {
            countPA ++;
            $("#numcat_"+num).html(countPA);
        }
        verifCible(i);
    }
    var message = "";
    if(countGG > 4) {
        message += "Plus de 4 Gros Gibiers !<br>";
    }
    if(countMG > 7) {
        message += "Plus de 7 Moyens Gibiers !<br>";
    }
    if(countPG > 6) {
        message += "Plus de 6 Petits Gibiers !<br>";
    }
    if(countPA > 4) {
        message += "Plus de 4 Petits Animaux !<br>";
    }
    if (totalRouge > 550)
    {
        message += "Total au pas rouge > 550m !<br>";
    }
    if (totalRouge < 525)
    {
        message += "Total au pas rouge < 525m !<br>";
    }
    $("#info_types").html(message);
    $("#total_rouge").html(totalRouge);
    $("#total_bleu").html(totalBleu);
    $("#total_blanc").html(totalBlanc);
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
    saveCible();
    verifParcours();
    $("#cible_panel").panel("close");
});

$("#button_cible_appliquer").click(function(){
    saveCible();
    verifParcours();
    editCible($("#cible_num").html());
});

$("#button_save_parcours").click(function() {
    localStorage.setItem(parcours.nom, JSON.stringify(parcours));
});
