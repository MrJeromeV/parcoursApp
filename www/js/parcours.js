var parcours;
var scrollTop;
var compassWatchID;
var gpsWatchID;

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
  $("#blason").val(parcours.cibles[index].blason);
  $('#select_categorie').selectmenu('refresh');
  $('#info_cible').html( $("#info_"+numCible ).val());
  $("#cible_panel").panel("open");
}

function exportParcours(nom)
{
  var fileName = nom + ".json";
  var parcoursStr = localStorage.getItem(nom);

  $.getJSON('http://ummagumma.org/parcours/insert.php?nom='+nom+'&json='+parcoursStr+'&callback=?', function(json) {

    //localStorage.setItem(json.nom, json);
    // $("#popup_import_parcours").popup("close");
  });


  //saveFile(fileName, parcoursStr);
  // var objJsonB64 = new Buffer(parcoursStr).toString("base64");
  //
  // cordova.plugins.email.open({
  //     subject: 'Parcours '+ nom,
  //     attachments: 'base64:' + fileName + '//' + objJsonB64
  // });
}

function exportParcoursKML(nom)
{
  var fileName = nom + ".kml";
  var parcoursStr = localStorage.getItem(nom);
  var kmlStr =
  '<?xml version="1.0" encoding="UTF-8"?>'
  + '<kml xmlns="http://www.opengis.net/kml/2.2" xmlns:gx="http://www.google.com/kml/ext/2.2" xmlns:kml="http://www.opengis.net/kml/2.2" xmlns:atom="http://www.w3.org/2005/Atom">'
  + '<Document> <name>' + fileName + '</name>'
  + '<open>1</open><Folder><name>' + nom + '</name><open>1</open>';

  parcours = JSON.parse(parcoursStr);
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
    var lat = cible.latitude;
    var long = cible.longitude;
    var axe = cible.axe;


    if(lat != null && long != null && axe != null)
    {
      var num = i+1;
      var longAxe = 0.000009 * 100;
      var lat2 = Number(lat) + longAxe * Math.cos(cible.axe* (Math.PI / 180));
      var long2 = Number(long) + longAxe * Math.sin(cible.axe* (Math.PI / 180));

      kmlStr +=
      '<Placemark><name>'
      + 'Cible ' + num
      + '</name><Point><coordinates>'
      + long + ',' + lat + ',0'
      + '</coordinates></Point></Placemark>'
      + '<Placemark><name>axe ' + num + '</name><LineString><coordinates>'
      + long + ',' + lat + ',0 ' + long2 + ',' + lat2 + ',0'
      + '</coordinates></LineString></Placemark>'
    }
  }
  kmlStr += '</Folder></Document></kml>';
  saveFile(fileName, kmlStr);

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
    +"<span class='ui-li-count'>"+n+"</span>"
    +"</a></li>");
  }
  $("[id^=cible_link_]").click(function(){
    if(confirmChangeCible()) {
      var num = jQuery(this).attr("id").substring(11);
      scrollTop = $('body').scrollTop();
      if(scrollTop == 0) {
        scrollTop = $('html').scrollTop();
      }
      editCible(num);
      $.mobile.silentScroll(scrollTop);
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

function importParcours()
{

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
  parcours.cibles[index].longitude = $("#long").val();
  parcours.cibles[index].latitude = $("#lat").val();
  parcours.cibles[index].axe = $("#axe").val();
  parcours.cibles[index].blason = $("#blason").val();

  $("#rouge_" + numCible).html(rouge);
  $("#bleu_" + numCible).html(bleu);
  $("#blanc_" + numCible).html(blanc);
  if(categorie != null) {
    $("#cat_" + numCible).html(categoriesMap.get(categorie).nom);
  }
  $("#liste_cibles").listview( "refresh" );
}

function saveFile(fileName, data)
{
  dir = cordova.file.externalRootDirectory;
  if (dir == null) {
    //dir = "file:///persistent";
    dir = "cdvfile://localhost/temporary";
  }
  window.resolveLocalFileSystemURL( dir, function( directoryEntry ) {
    saveFileD(directoryEntry, fileName, data);
  }, function( error ) {
    console.log( error );
  } );
}

function saveFileD(directoryEntry, fileName, data)
{
  directoryEntry.getFile(fileName, { create: true }, function( fileEntry ) {
    fileEntry.createWriter( function( fileWriter ) {
      fileWriter.onwriteend = function( result ) {
        console.log( 'done.' );
      };
      fileWriter.onerror = function( error ) {
        console.log( error );
      };
      fileWriter.write( data );
    }, function( error ) { console.log( error ); } );
  }, function( error ) { console.log( error ); } );
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
  navigator.notification.confirm("Vider la base ?", function(buttonIndex) {
    if(buttonIndex==1) {
      localStorage.clear();
      loadParcoursList();
    }
  },
  "Confirmation", ["Oui", "Non"]);
});

$("#edit_parcours").click(function(){
  loadParcours();
});

$("#button_delete_parcours").click(function(){
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
});

$("#button_export_parcours").click(function(){
  var nom = $('#select_parcours').val();
  exportParcours(nom);
});

$("#button_import_parcours").click(function(){
  importParcours();
});

$("#button_exportkml_parcours").click(function(){
  var nom = $('#select_parcours').val();
  exportParcoursKML(nom);
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

$("#button_cible_geol").click(function(){
  $("#cibleLong").html('');
  $("#cibleLat").html('');
  $("#cibleAxe").html('');
  $("#cibleGeol").popup("open");
  compassWatchID = navigator.compass.watchHeading(onSuccessCompass, onErrorCompass);
  gpsWatchID = navigator.geolocation.watchPosition(onSuccessGps, onErrorGps, { enableHighAccuracy: true });
});

$("#button_cible_blason").click(function(){
  $("#select_blason").html('');
  var categorie = $("#select_categorie").val();
  if(categorie == 'GG')
  {
    tab = TabGG;
  }
  if(categorie == 'MG')
  {
    tab = TabMG;
  }
  if(categorie == 'PG')
  {
    tab = TabPG;
  }
  if(categorie == 'PA')
  {
    tab = TabPA;
  }
  for(var i=0;i<tab.length;i++)
  {
    $("#select_blason").append("<option value='"+tab[i]+"'>"+tab[i]+"</option>");
  }
  $("#select_blason").change(function() {
    value = $("#select_blason").val();
    src = "img/ams/" + categorie + "/mini/" + value + ".jpg";
    $("#blason_image").attr("src",src);
  });
  $("#select_blason").val($("#blason").val());
  $("#cibleBlason").popup("open");
});

$("#button_ok_geol").click(function(){
  $("#long").val($("#cibleLong").html());
  $("#lat").val($("#cibleLat").html());
  $("#axe").val($("#cibleAxe").html());
  $("#cibleGeol").popup("close");
  navigator.geolocation.clearWatch(gpsWatchID);
  navigator.compass.clearWatch(compassWatchID);

});

// function jsonpCallback(json) {
//     var j = json;
//     var p = json;
//     $("#popup_import_parcours").popup("open");
// }

$("#import_parcours").click(function(){
  // $.ajax({
  //   type : "GET",
  //   url : 'http://ummagumma.org/parcours/json.json',
  //   dataType : 'jsonp',
  //   jsonpCallback : 'jsonpCallback',
  //   error : function() {
  //     alert("Errr is occured");
  //   }
  // });


  $.getJSON('http://ummagumma.org/parcours/list.php?callback=?', function(json) {

    for(item of json) {
      $("#select_importparcours").append("<option value='"+item+"'>"+item+"</option>");
    }

    $("#popup_import_parcours").popup("open");
  });

});

$("#close_importparcours_dialog").click(function() {
  var nom = $("#select_importparcours").val();
  $.getJSON('http://ummagumma.org/parcours/get.php?nom='+nom+'&callback=?', function(json) {

    localStorage.setItem(json.nom, JSON.stringify(json));
    loadParcoursList();
    $("#popup_import_parcours").popup("close");
  });
});

$("#button_ok_blason").click(function(){
  $("#blason").val($("#select_blason").val());
  $("#cibleBlason").popup("close");
});

$("#button_menu").click(function() {
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
});

$("#button_save_parcours").click(function() {
  localStorage.setItem(parcours.nom, JSON.stringify(parcours));
});

$("#button_saveclose_parcours").click(function() {
  localStorage.setItem(parcours.nom, JSON.stringify(parcours));
  window.location.href = '#accueil';
});

$("#button_close_parcours").click(function() {
  window.location.href = '#accueil';
});
