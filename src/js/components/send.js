const init = () => {
  var formFooter = document.getElementById("form-footer");

  formFooter.addEventListener("submit", function(evt) {
    evt.preventDefault();

    formFooter.classList.add("form-submit");

    var name = document.getElementById("adres1");
    var email = document.getElementById("adres2");
    var telephone = document.getElementById("phoneid");
    //var cellphone = document.getElementById("cellphone");
    //var message = document.getElementById("message");

    var xhr = new XMLHttpRequest();

    xhr.open('POST', 'mail.php');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
      if(xhr.status !== 200)
      {
        return alert("Aconteceu algo errado!");
      }

      // var response = JSON.parse(xhr.responseText);
      //
      // if(response.message === 0)
      // {
      //   return alert(response.error);
      // }
      //
      // return alert("Mensagem enviada com sucesso!");
    };

    var data = 'name=' + name.value +
      '&email=' + email.value +
      '&telephone=' + telephone.value;

    console.log(data)
    xhr.send(encodeURI(data));

    formFooter.classList.remove("form-submit");
  });
}

export default {
  init,
};

//   $(document).ready(function(){
//   $("#order").submit(function() { //устанавливаем событие отправки для формы с id=form
//     var form_data = $(this).serialize(); //собераем все данные из формы
//     $.ajax({
//       type: "POST", //Метод отправки
//       url: "mail.php", //путь до php фаила отправителя
//       data: form_data,
//       success: function() {
//         //код в этом блоке выполняется при успешной отправке сообщения
//         $("#order").html("<div class='message'>Ваше сообщение принято. Скоро с вами свяжется наш сотрудник</div>");
//         //alert("Ваше сообщение принято. Скоро с вами свяжется наш сотрудник");
//       }
//     });
//
//     return false;
//   });
// });
