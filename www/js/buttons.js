function initButtons() {
    $("#button_open_parcours").click(function() {
        loadParcours();
    });

    $("#button_ok_newparcours").click(function() {
        validNewParcours();
    });

    $("#button_cancel_newparcours").click(function() {
        cancelNewParcours();
    });

    $("#button_export_parcours").click(function() {
        exportParcours();
    });

    $("#button_delete_parcours").click(function() {
        deleteParcours();
    });

    $("#button_rename_parcours").click(function() {
        renameParcours();
    });

    $("#button_ok_renameparcours").click(function() {
        validRenameParcours();
    });

    $("#button_cancel_renameparcours").click(function() {
        cancelRenameParcours();
    });

    $("#button_clear_base").click(function() {
        clearBase();
    });

    $("#button_newparcours_close").click(function() {
        closePopupNew();
    });

    $("#button_close_parcours").click(function() {
        closeParcours(false);
    });

    $("#button_saveclose_parcours").click(function() {
        closeParcours(true);
    });

    $("#button_save_parcours").click(function() {
        saveParcours();
    });

    // $("#button_menu_cible").click(function() {
    //     openMenuCible();
    // });

    $("#button_menu_parcours").click(function() {
        openMenuParcours();
    });

    $("#button_cible_blason").click(function() {
        openPopupBlason();
    });

    $("#button_ok_blason").click(function() {
        validBlason();
    });

    $("#button_cancel_blason").click(function() {
        cancelBlason();
    });

    $("#button_prev_blason1").click(function() {
        prevBlason('1');
    });

    $("#button_next_blason1").click(function() {
        nextBlason('1');
    });

    $("#button_prev_blason2").click(function() {
        prevBlason('2');
    });

    $("#button_next_blason2").click(function() {
        nextBlason('2');
    });

    $("#button_new_parcours").click(function() {
        openPopupNewParcours();
    });

    $("#button_options").click(function() {
        openPanelOptions();
    });

    $("#button_import_parcours").click(function() {
        openPopupImport();
    });

    $("#button_ok_importparcours").click(function() {
        validImport();
    });

    $("#button_cancel_importparcours").click(function() {
        cancelImport();
    });

    $("#button_ok_geol").click(function() {
        validGeol();
    });

    $("#button_cancel_geol").click(function() {
        cancelGeol();
    });

    $("#button_cible_geol").click(function() {
        openPopupGeol();
    });

    $("#button_cible_ok").click(function() {
        validCible();
    });

    $("#button_cible_cancel").click(function() {
        cancelCible();
    });

    $("#button_cible_appliquer").click(function() {
        applyCible();
    });
}
