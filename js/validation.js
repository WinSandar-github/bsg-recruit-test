function validateEmail(email){
    const valid_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (valid_email.test(email)) {
      $("#invalid-email").html("").removeClass('alert alert-danger');
        return false;
    }else{
        $('#invalid-email').text("メールアドレスのフォーマットであること!").addClass('alert alert-danger');
        return true;
        }
}
function validatePassword(password){
    if (password.length >= 8){
      $('#invalid-password').html("").removeClass('alert alert-danger ');
      return true;
    }else{
      $('#invalid-password').text("半角英数字8〜12文字であること!").addClass('alert alert-danger');
      return false;
    }
}
function validatePhone(phone){
  const valid_phone=/^(?:\+?|0)[7-89][0](?:[-]?[0-9]){8}$/;
  if(valid_phone.test(phone)){
    $('#invalid-phone').html("").removeClass('alert alert-danger ');
    return true;
  }else{
    $('#invalid-phone').text('半角数字11桁であること,最初の3桁が070,080,090のいずれかであること と 11桁の入力値を3桁、4桁、4桁ずつ"-"（ハイフン）で区切った値!').addClass('alert alert-danger');
    return false;
  }
}
function validateZip(zip){
  if (zip.length == 7 && $.isNumeric(zip)==true){
    $('#invalid-feedback').html("").removeClass('alert alert-danger ');
    return true;
  }else{
    $('#invalid-feedback').text("半角数字7桁であること!").addClass('alert alert-danger');
    return false;
  }
}