function logout() {
    (localStorage.getItem("auth")) && localStorage.removeItem("auth");
    location.href = "login.html";
}
function destroyDatatable(table, tableBody) {
    if ($.fn.DataTable.isDataTable(table)) {
        $(table).DataTable().destroy();
    }
    $(tableBody).empty();
}
function createDataTable(table) {
    $(table).DataTable({
        'destroy': true,
        'paging': true,
        'lengthChange': false,
        "pageLength": 5,
        'searching': false,
        'ordering': false,
        'info': false,
        'autoWidth': false,
        "scrollX": true,
        'select': true,
        "order": [[0, "asc"]],
        "language":{
            "paginate":{
                "previous":"前へ",
                "next":"次へ"
            }
        },
        "sDom":'<"H"ilr><"clear">t<"F"p>',
        
    });

}
function successMessageAlert(){
    var message=localStorage.getItem("message");
    if(message=="Register Successfully"){
        $("#success-message").text("会員を登録しました。").addClass("alert alert-success");//会員登録が終わった場合に表示する
        setTimeout('$("#success-message").html("").removeClass("alert alert-success")',2000); 
        localStorage.removeItem("message");
    }else if(message=="Updated Successfully"){
        $("#success-message").text("会員を編集しました。").addClass("alert alert-primary");//会員編集が終わった場合に表示する
        setTimeout('$("#success-message").html("").removeClass("alert alert-primary")',2000); 
        localStorage.removeItem("message");
    }else if(message=="Deleted Successfully"){
        $("#success-message").text("会員を削除しました。").addClass("alert alert-danger");//会員削除が終わった場合に表示する
        setTimeout('$("#success-message").html("").removeClass("alert alert-danger")',2000); 
        localStorage.removeItem("message");
    }
}