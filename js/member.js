function createMember(){
    var data=$("#createForm").serialize();
    $.ajax({
        type: "POST",
        url:   "php/member_create.php",
        data: data,
        success: function (result) {
          if(result){
            localStorage.setItem("message",result);
            window.location.href="member_list.html";
          }
        },
        error:function (){
          $("#error-message").text("エラーが発生しています!").addClass("alert alert-danger");
        }
  });
}
function getMember() {
  destroyDatatable("#tbl_member", "#tbl_member_body");
  $.ajax({
      type: "GET",
      url: "php/member_list.php",
      dataType:'json',
      success: function (result) {
          result.forEach(function (element) {
              var tr = "<tr>";
              tr += "<td >" + element.id + "</td>";
              tr += "<td >" + element.name + "</td>";
              tr += "<td >" + element.phone + "</td>";
              tr += "<td >" + element.email + "</td>";
              tr += "<td ><a href='member_detail.html?id=" + element.id +"' class='btn btn-link btn-xs' >詳細</a> </td>" ;
              tr += "<td><a href='member_edit.html?id=" + element.id +"' class='btn btn-link btn-xs' >編集</a ></td > ";
              tr += "</tr>";
              $("#tbl_member_body").append(tr);
              
          });
          createDataTable("#tbl_member");
      },
      error:function (re){
        $("#error-message").text("エラーが発生しています!").addClass("alert alert-danger");
      }
  });
}
function memberDetail(){
  destroyDatatable("#tbl_member_detail", "#tbl_member_detail_body");
  var currentUrl = window.location.href;
  var id=currentUrl.substr(currentUrl.lastIndexOf('=') + 1);
  $("#memberId").val(id);
  var data = "&id=" + id;
    $.ajax({
        type: "POST",
        url: "php/member_detail.php",
        data: data,
        dataType:'json',
        success: function (result) {
          var tr = "<tr><th class='col-3'>ID</th><td >" + result.id + "</td></tr>";
          tr += "<tr><th class='col-3'>名前</th><td >" + result.name + "</td></tr>";
          tr += "<tr><th class='col-3'>電話番号</th><td >" + result.phone + "</td></tr>";
          tr += "<tr><th class='col-3'>メールアドレス</th><td >" + result.email + "</td></tr>";
          tr += "<tr><th class='col-3'>郵便番号</th><td >" + result.zip + "</td></tr>";
          tr += "<tr><th class='col-3'>都道府県</th><td >" + result.pre_name + "</td></tr>";
          tr += "<tr><th class='col-3'>市区町村</th><td >" + result.city + "</td></tr>";
          tr += "<tr><th class='col-3'>町名・番地・ビル名</th><td >" + result.address + "</td></tr>";
          tr += "<tr><th class='col-3'>備考</th><td >" + result.note + "</td></tr>";
          $("#tbl_member_detail_body").append(tr);
          
          $("input[name='name']").val(result.name);
          $("input[name='phone']").val(result.phone);
          $("input[name='email']").val(result.email);
          $("input[name='zip']").val(result.zip);
          $('#preId').val(result.prefecture);
          $("#select_prefecture_id").val(result.prefecture);
          $("input[name='city']").val(result.city);
          $("input[name='address']").val(result.address);
          $("textarea[name='note']").val(result.note);
        },
        error:function (){
          $("#error-message").text("エラーが発生しています!").addClass("alert alert-danger");
        }
  });
}
function updateMember(){
 var data = "id=" + $("#memberId").val() + "&" + $("#updateForm").serialize();
  $.ajax({
    type: "POST",
    url: "php/member_update.php",
    data: data,
    success: function (result) {
        if(result){
          localStorage.setItem("message",result);
          window.location.href="member_list.html";
        }
    },
    error:function (){
      $("#error-message").text("エラーが発生しています!").addClass("alert alert-danger");
    }
  });
}
function memberDelete(){
  var result = confirm("WARNING: This will delete all related data! Press OK to proceed.");
    if (result) {
      var data = "id=" + $("#memberId").val();
        $.ajax({
            type: "POST",
            url: "php/member_delete.php",
            data: data,
            success: function (result) {
              if(result){
                localStorage.setItem("message",result);
                window.location.href="member_list.html";
              }
            },
            error:function (){
              $("#error-message").text("エラーが発生しています!").addClass("alert alert-danger");
            }
        });
    }
}
function memberEdit(){
  var currentUrl = window.location.href;
  var id=currentUrl.substr(currentUrl.lastIndexOf('=') + 1);
  window.location.href="member_edit.html?id=" + id;
}
function autoPrefecture(){
  var select = document.getElementById("select_prefecture_id");
  $.ajax({
        type: "GET",
        url: "php/prefecture.php",
        dataType:'json',
        success: function (result) {
                result.forEach(function(element){
                  var option = document.createElement('option');
                  option.text = element.name;
                  option.value = element.id;
                  if($('#preId').val()==element.id){
                    option.setAttribute ("selected", element.name);
                  }
                  select.add(option);
                });
              }
  });
}