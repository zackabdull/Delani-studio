$(document).ready(function () {
  $(".clickable").click(function () {
    $("#design-img").toggle("slow");
    $("#design-txt").toggle("slow");
  });
});
$(document).ready(function () {
  $(".clickable2").click(function () {
    $("#development-img").toggle("slow");
    $("#development-txt").toggle("slow");
  });
});
$(document).ready(function () {
  $(".clickable3").click(function () {
    $("#product-img").toggle("slow");
    $("#product-txt").toggle("slow");
  });
});
$(document).ready(function () {
  $("form#form1").on("submit", function (event) {
    event.preventDefault();
    var name = $("input#username").val();
    var email = $("input#email").val();
    var message = $("textarea#message").val();

    if (
      $("input#username").val() &&
      $("input#email").val() &&
      $("input#message").val()
    ) {
      alert(
        "Hi " +
          name +
          ", Thank you for reaching out, we'll get back to you shortly..."
      );
    } else if ($("input#username").val() && $("input#email").val()) {
      alert(
        "Thank you for reaching ou to us. If you wish to leave a message please type in on the message section.."
      );
    } else {
      alert("Please provide correct name or email");
    }
  });
});
