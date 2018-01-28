var parcours;
var scrollTop;
var compassWatchID;
var gpsWatchID;

function Cible(categorie ='', rouge='', bleu='', blanc='', blason='') {
    this.categorie = categorie;
    this.rouge = rouge;
    this.bleu = bleu;
    this.blanc = blanc;
    this.blason=blason;
}

function Categorie(code, nom, maxRouge, minRouge, maxBleu, maxBlanc) {
    this.code = code;
    this.nom = nom;
    this.maxRouge = maxRouge;
    this.minRouge = minRouge;
    this.maxBleu = maxBleu;
    this.maxBlanc = maxBlanc;
}

function TypeParcours(code, nom, nbCibles) {
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

function addParcours(nom, type) {
    var parcours = {
        'nom' : nom,
        'type' : type,
        'cibles' : []
    }
    var nbCibles = typeParcoursMap.get(type).nbCibles;
    for(var i=0;i<nbCibles;i++) {
        var cible = new Cible();
        parcours.cibles.push(cible);
    }
    var json = JSON.stringify(parcours);
    localStorage.setItem(nom, JSON.stringify(parcours));
}

function changeCible() {
    if(confirmChangeCible()) {
        var num = jQuery(this).attr("id").substring(11);
        scrollTop = $('body').scrollTop();
        if(scrollTop == 0) {
            scrollTop = $('html').scrollTop();
        }
        editCible(num);
        $.mobile.silentScroll(scrollTop);
    }
}

function confirmChangeCible() {
    if( $("#cible_panel").hasClass("ui-panel-open") == false ) {
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
    var blason = $("#blason").val();

    if(parcours.cibles[index].categorie != categorie || parcours.cibles[index].rouge != rouge || parcours.cibles[index].bleu != bleu || parcours.cibles[index].blanc != blanc || parcours.cibles[index].blason != blason) {
        return false;
    }
    return true;
}

function editCible(numCible) {
    var index = numCible - 1;
    $("#cible_num").html(numCible);
    $("#select_categorie").val(parcours.cibles[index].categorie);
    $("#dist_rouge").val(parcours.cibles[index].rouge);
    $("#dist_bleu").val(parcours.cibles[index].bleu);
    $("#dist_blanc").val(parcours.cibles[index].blanc);
    $("#blason").val(parcours.cibles[index].blason);
    $('#select_categorie').selectmenu('refresh');
    $('#info_cible').html( $("#info_"+numCible ).val());
    $("#cible_panel").panel("open");
    $("#cible_panel").trigger( "updatelayout" );
}

function exportParcours() {
    var nom = $('#select_parcours').val();
    var fileName = nom + ".json";
    var parcoursStr = localStorage.getItem(nom);
    $.getJSON('http://ummagumma.org/parcours/insert.php?id='+nom+'&json='+parcoursStr+'&callback=?', function(json) {
        alert("ok");
    });
}

function fillPage()
{
    $("#liste_cibles").html('');
    $("#liste_cibles").listview();
    var cibles = parcours.cibles;
    for(var i=0;i<cibles.length;i++) {
        var cible = cibles[i];
        var categorie = cible.categorie;
        var nomCategorie = '';
        if (categoriesMap.has(categorie)) {
            nomCategorie = categoriesMap.get(categorie).nom;
        }
        //if(categorie != null)
        var n=i+1;
        $("#liste_cibles").append("<li><a id='cible_link_"+n+"''>"
        +"<h2>"+n+"</h2>"
        +"<div style='width:100%;''>"
        +"<div style='float: left; width:100px;' ><ul id='liste_dist_"+n+"' style='list-style: none;'>"
        +"<li><span id='rouge_"+n+"' class='dist_rouge'>" + cible.rouge + "</span></li>"
        +"<li><span id='bleu_"+n+"' class='dist_bleu'>" + cible.bleu + "</span></li>"
        +"<li><span id='blanc_"+n+"' class='dist_blanc'>" + cible.blanc + "</span></li>"
        +"</ul></div>"
        +"<div style='float: left; width:60%;'><input type='hidden' id='info_"+n+"'></input>"
        +"<p class='ui-li-asideZ'><strong><span id='cat_"+n+"'>"+nomCategorie+"</span> <span id='numcat_"+n+"'></span><br>"
        +"<span id='blason_"+n+"'>"+cible.blason.replace(';','<br>')+"</span></strong></p>"
        +"</div></div>"
        +"<span class='ui-li-count'>"+n+"</span>"
        +"</a></li>");
    }
    $("[id^=cible_link_]").click(changeCible);
    $("#liste_cibles").listview( "refresh" );
    verifParcours();
}

function fillSelects() {
    for (key of categoriesMap.keys()) {
        var categorie = categoriesMap.get(key);
        $("#select_categorie").append("<option value='"+key+"'>"+categorie.nom+"</option>");
    }
    for (key of typeParcoursMap.keys()) {
        var typeParcours = typeParcoursMap.get(key);
        $("#select_newparcours_type").append("<option value='"+key+"'>"+typeParcours.nom+"</option>");
    }
}

function loadParcours() {
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

function loadParcoursList() {
    $('#select_parcours').html('');
    $('#select_parcours').selectmenu();

    for(var i=0;i<localStorage.length;i++) {
        var key = localStorage.key(i);
        var parcoursStr = localStorage.getItem(key);
        try {
            parcours = JSON.parse(parcoursStr);
            var name = parcours.nom;
            var type = parcours.type;
            var infoType = typeParcoursMap.get(type).nom;
            $('#select_parcours').append("<option value='"+key+"'>"+name + " (" +infoType+ ")"+"</option>");
        } catch (e) {
            console.error("Parsing error:", e);
        }
    }
    $('#select_parcours').selectmenu('refresh');
}

function saveCible() {
    var numCible = $("#cible_num").html();
    var index = numCible -1;
    var categorie = $("#select_categorie").val();
    var rouge = $("#dist_rouge").val();
    var bleu = $("#dist_bleu").val();
    var blanc = $("#dist_blanc").val();
    var long = $("#long").val();
    var lat = $("#lat").val();
    var axe = $("#axe").val();
    var blason = $("#blason").val();

    parcours.cibles[index].categorie = categorie;
    parcours.cibles[index].rouge = rouge;
    parcours.cibles[index].bleu = bleu;
    parcours.cibles[index].blanc = blanc;
    parcours.cibles[index].longitude = long;
    parcours.cibles[index].latitude = lat;
    parcours.cibles[index].axe = axe;
    parcours.cibles[index].blason = blason;

    $("#rouge_" + numCible).html(rouge);
    $("#bleu_" + numCible).html(bleu);
    $("#blanc_" + numCible).html(blanc);
    if(categorie != null) {
        $("#cat_" + numCible).html(categoriesMap.get(categorie).nom);
    }
    $("#blason_" + numCible).html(blason.replace(';','<br>'));
    $("#liste_cibles").listview( "refresh" );
}

function setValidators() {
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
            $("#popup_newparcours").popup("close");
        }}
    );

    $("#form_renameparcours").validate({
        rules: { newparcours_nom : "parcoursExists"},
        messages: {newparcours_nom: {required:"Saisir un nom pour le parcours."}},
        submitHandler: function (form) {
            var nom = $('#select_parcours').val();
            var newNom = $("#parcours_newnom").val().toUpperCase();
            parcoursRename(nom, newNom);
            loadParcoursList();
            $('#select_parcours').val(newNom);
            $('#select_parcours').selectmenu('refresh');
            $("#popup_renameparcours").popup("close");
        }}
    );
}

function verifCible(index) {
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

function verifParcours() {
    var countGG = 0;
    var countMG = 0;
    var countPG = 0;
    var countPA = 0;
    var totalRouge = 0;
    var totalBleu = 0;
    var totalBlanc = 0;
    for (var i = 0;i<21;i++) {
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


function closePopupNew() {
    window.location.hash=close;
}

function clearBase() {
    navigator.notification.confirm("Vider la base ?", function(buttonIndex) {
        if(buttonIndex==1) {
            localStorage.clear();
            loadParcoursList();
        }
    },
    "Confirmation", ["Oui", "Non"]);
}

function deleteParcours() {
    var nom = $('#select_parcours').val();
    if (nom != null) {
        navigator.notification.confirm("Effacer le parcours " + nom + " ?", function(buttonIndex) {
            if(buttonIndex==1) {
                localStorage.removeItem(nom);
                loadParcoursList();
            }
        },
        "Confirmation", ["Oui", "Non"]);
    }
}

function renameParcours() {
    $("#popup_renameparcours").popup("open");
}

function validRenameParcours() {
    $("#form_renameparcours").submit();
}

function cancelRenameParcours() {
    $("#popup_renameparcours").popup("close");
}

function parcoursRename(nom, newNom) {
    var parcoursStr = localStorage.getItem(nom);
    parcours = JSON.parse(parcoursStr);
    parcours.nom = newNom;
    var json = JSON.stringify(parcours);
    localStorage.setItem(newNom, JSON.stringify(parcours));
    localStorage.removeItem(nom);
}

function validNewParcours() {
    $("#form_newparcours").submit();
}

function cancelNewParcours() {
    $("#popup_newparcours").popup("close");
}

function validCible() {
    saveCible();
    verifParcours();
    //$("#cibleMenu").popup("close");
    $("#cible_panel").panel("close");
}

function cancelCible() {
    //$("#cibleMenu").popup("close");
    $("#cible_panel").panel("close");
}

function applyCible() {
    saveCible();
    verifParcours();
    editCible($("#cible_num").html());
}

function onSuccessCompass(heading) {
    $("#cibleAxe").html(Math.round(heading.magneticHeading));
};

function onErrorCompass(compassError) {
    alert('Compass error: ' + compassError.code);
};

function onSuccessGps(position) {
    $("#cibleLong").html(position.coords.longitude);
    $("#cibleLat").html(position.coords.latitude);
}

function onErrorGps(error) {
    alert('code: '    + error.code    + '\n' +
    'message: ' + error.message + '\n');
}

function openPopupGeol() {
    $("#cibleLong").html('');
    $("#cibleLat").html('');
    $("#cibleAxe").html('');
    $("#cibleGeol").popup("open");
    compassWatchID = navigator.compass.watchHeading(onSuccessCompass, onErrorCompass);
    gpsWatchID = navigator.geolocation.watchPosition(onSuccessGps, onErrorGps, { enableHighAccuracy: true });
}

function validGeol() {
    $("#long").val($("#cibleLong").html());
    $("#lat").val($("#cibleLat").html());
    $("#axe").val($("#cibleAxe").html());
    $("#cibleGeol").popup("close");
    navigator.geolocation.clearWatch(gpsWatchID);
    navigator.compass.clearWatch(compassWatchID);
}

function cancelGeol() {
    $("#cibleGeol").popup("close");
    navigator.geolocation.clearWatch(gpsWatchID);
    navigator.compass.clearWatch(compassWatchID);
}

function openPopupImport() {
    $("#select_importparcours").html('');
    $.getJSON('http://ummagumma.org/parcours/list.php?callback=?', function(json) {
        for(item of json) {
            var ar = item.split(":");
            var id = ar[0];
            var nom = ar[1];
            $("#select_importparcours").append("<option value='"+id+"'>"+nom+"</option>");
        }
        $("#popup_import_parcours").popup("open");
    });
}

function openPopupNewParcours() {
    $("#popup_newparcours").popup("open");
}

function openPanelOptions() {
    $("#option_panel").panel("open");
}

function validImport() {
    var nom = $("#select_importparcours").val();
    $.getJSON('http://ummagumma.org/parcours/get.php?id='+nom+'&callback=?', function(json) {
        localStorage.setItem(json.nom, JSON.stringify(json));
        loadParcoursList();
        $("#popup_import_parcours").popup("close");
    });
}

function cancelImport() {
    $("#popup_import_parcours").popup("close");
}

function getTab(categorie) {
  var tab = null;
  if(categorie == 'GG') {
      tab = TabGG;
  }
  if(categorie == 'MG') {
      tab = TabMG;
  }
  if(categorie == 'PG') {
      tab = TabPG;
  }
  if(categorie == 'PA') {
      tab = TabPA;
  }
  return tab;
}

function getTabDist(categorie) {
  var tabDist = null;
  if(categorie == 'GG') {
      tabDist = TabDistIdGG;
  }
  if(categorie == 'MG') {
      tabDist = TabDistIdMG;
  }
  if(categorie == 'PG') {
      tabDist = TabDistIdPG;
  }
  if(categorie == 'PA') {
      tabDist = TabDistIdPA;
  }
  return tabDist;
}

function openPopupBlason() {
    $("#select_blason1").html('');
    $("#select_blason1").val('');
    $('#select_blason1').selectmenu('refresh');
    $("#image_blason1").attr("src",'');
    $("#select_blason2").html('');
    $("#select_blason2").val('');
    $('#select_blason2').selectmenu('refresh');
    $("#image_blason2").attr("src",'');
    var categorie = $("#select_categorie").val();
    var tab = getTab(categorie);
    var tabDist = getTabDist(categorie);
    if(categorie == 'PA') {
        $("#group_blason2").show();
    } else  {
        $("#group_blason2").hide();
    }
    if(tab != null) {
        var blason = $("#blason").val();
        if(categorie == 'PA') {
            var blasonArray = blason.split(";");
            blason = blasonArray[0];
            var blason2 = blasonArray[1];
        }
        for(var i=0;i<tab.length;i++) {
            $("#select_blason1").append("<option value='"+tab[i]+"'>"+tab[i]+"</option>");
            if(categorie == 'PA') {
                $("#select_blason2").append("<option value='"+tab[i]+"'>"+tab[i]+"</option>");
            }
        }
        if (blason != null && tab.includes(blason)) {
            $("#select_blason1").val(blason);
            $('#select_blason1').selectmenu('refresh');
            src = "img/ams/" + categorie + "/mini/" + blason + ".jpg";
            $("#image_blason1").attr("src",src);
            var selectedIndex = $("#select_blason1").prop('selectedIndex');
            $("#distance_blason1").html(tabDist[selectedIndex]);
        }
        if (blason2 != null && tab.includes(blason2)) {
            $("#select_blason2").val(blason2);
            $('#select_blason2').selectmenu('refresh');
            src = "img/ams/" + categorie + "/mini/" + blason2 + ".jpg";
            $("#image_blason2").attr("src",src);
            var selectedIndex = $("#select_blason2").prop('selectedIndex');
            $("#distance_blason2").html(tabDist[selectedIndex]);
        }
        $("#select_blason1").change(function() {
            value = $("#select_blason1").val();
            src = "img/ams/" + categorie + "/mini/" + value + ".jpg";
            $("#image_blason1").attr("src",src);
            $("#distance_blason1").html(value);
            var selectedIndex = $("#select_blason1").prop('selectedIndex');
            $("#distance_blason1").html(tabDist[selectedIndex]);
        });
        $("#select_blason2").change(function() {
            value = $("#select_blason2").val();
            src = "img/ams/" + categorie + "/mini/" + value + ".jpg";
            $("#image_blason2").attr("src",src);
            $("#distance_blason2").html(value);
            var selectedIndex = $("#select_blason1").prop('selectedIndex');
            $("#distance_blason1").html(tabDist[selectedIndex]);
        });
        //$("#select_blason").val($("#blason").val());
        // $("#cibleBlason").popup({
        //     afteropen: function( event, ui ) {$("#cibleBlason").popup( 'reposition', 'positionTo: window' );}
        // });
        $("#cibleBlason").popup("open");
        //$("#cibleBlason").popup( 'reposition', 'positionTo: window' );
    }
}

function nextBlason(n) {
    var selectedIndex = $("#select_blason"+n).prop('selectedIndex');
    var categorie = $("#select_categorie").val();
    var tab = getTab(categorie);
    if(selectedIndex < tab.length -1) {
      var valToSelect = $('#select_blason' +n+'  :nth-child(' + (selectedIndex+2) + ')').val();
      var tabDist = getTabDist(categorie);
      src = "img/ams/" + categorie + "/mini/" + valToSelect + ".jpg";
      $("#image_blason"+n).attr("src",src);
      $("#select_blason"+n).val(valToSelect);
      $('#select_blason'+n).selectmenu('refresh');
      $("#distance_blason"+n).html(tabDist[selectedIndex+1]);
    }
}

function prevBlason(n) {
    var selectedIndex = $("#select_blason"+n).prop('selectedIndex');
    if(selectedIndex > 0) {
      var categorie = $("#select_categorie").val();
      var tab = getTab(categorie);
      var tabDist = getTabDist(categorie);
        var valToSelect = $('#select_blason'+n+' :nth-child(' + selectedIndex + ')').val();
        src = "img/ams/" + categorie + "/mini/" + valToSelect + ".jpg";
        $("#image_blason"+n).attr("src",src);
        $("#select_blason"+n).val(valToSelect);
        $('#select_blason'+n).selectmenu('refresh');
        $("#distance_blason"+n).html(tabDist[selectedIndex-1]);
    }
}

function validBlason() {
    var blason= $("#select_blason1").val();
    if($("#select_categorie").val() == 'PA') {
        blason+= ";" + $("#select_blason2").val();
    }
    $("#blason").val(blason);
    $("#cibleBlason").popup("close");
}

function cancelBlason() {
    $("#cibleBlason").popup("close");
}

function openMenuParcours() {
    var json = JSON.stringify(parcours);
    var saved = localStorage.getItem(parcours.nom);
    if (json == saved) {
        $("#button_save_parcours").closest('.ui-btn').hide();
        $("#button_saveclose_parcours").closest('.ui-btn').hide();
    } else {
        $("#button_save_parcours").closest('.ui-btn').show();
        $("#button_saveclose_parcours").closest('.ui-btn').show();
    }
    $("#saveMenu").css({position:'fixed',top:'40px',right:'0px'}).popup("open");
}

// function openMenuCible() {
//     $("#cibleMenu").popup("open", {positionTo: '#button_menu_cible'});
// }

function saveParcours() {
    localStorage.setItem(parcours.nom, JSON.stringify(parcours));
}

function closeParcours(save) {
    if(save) {
        saveParcours();
    }
    window.location.href = '#accueil';
}
