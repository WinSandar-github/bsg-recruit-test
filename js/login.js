function login(){
    var data=$("#loginForm").serialize();
      $.ajax({
          type: "POST",
          url: "php/login.php",
          data: data,
          success: function (result) {
                if(result.length > 0){
                    localStorage.setItem('auth', result);
                    $('#login-messagge').text("認証 OK").removeClass('alert alert-danger ').addClass('alert alert-success');
                    setTimeout('window.location.href="member_list.html"',1000);
                }else{
                    $('#login-messagge').text("ログインに失敗しました!").addClass('alert alert-danger');
                    return false;
                }
          },
          error:function (){
            $("#error-message").text("エラーが発生しています!").addClass("alert alert-danger");
          }
      });
}