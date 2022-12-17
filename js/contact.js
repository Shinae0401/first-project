var fileTarget = $(".filebox .upload-hidden");

fileTarget.on("change", function () {
  if (window.FileReader) {
    var filename = $(this)[0].files[0].name;
  } else {
    var filename = $(this).val().split("/").pop().split("\\").pop();
  }

  $(this).siblings(".upload-name").val(filename);
});

function apply() {
  var form = $("#fAction");

  if ($.trim($("#name").val()) == "") {
    alert("이름을 입력해 주세요.");
    $("#name").focus();
    return;
  }

  if ($.trim($("#phone1").val()) == "") {
    alert("연락처를 입력해 주세요.");
    $("#phone1").focus();
    return;
  }

  if ($.trim($("#phone2").val()) == "") {
    alert("연락처를 입력해 주세요.");
    $("#phone2").focus();
    return;
  }

  if ($.trim($("#phone3").val()) == "") {
    alert("연락처를 입력해 주세요.");
    $("#phone3").focus();
    return;
  }

  if ($.trim($("#email1").val()) == "") {
    alert("이메일을 입력해 주세요.");
    $("#email1").focus();
    return;
  }

  if ($.trim($("#email2").val()) == "") {
    alert("이메일을 입력해 주세요.2");
    $("#email2").focus();
    return;
  }

  if ($.trim($("#subject").val()) == "") {
    alert("제목을 입력해 주세요.");
    $("#subject").focus();
    return;
  }

  if ($.trim($("#contents").val()) == "") {
    alert("내용을 입력해 주세요.");
    $("#contents").focus();
    return;
  }

  if (!$("#chk").prop("checked")) {
    alert("개인정보 수집 및 이용에 동의해 주세요.");
    $("#chk").focus();
    return;
  }

  if (confirm("1:1문의를 접수하시겠습니까?")) {
    form.attr("action", "/promotion/inquiryApply");
    form.submit();
  }
}
