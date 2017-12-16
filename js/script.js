$(document).ready(function() {
  console.log('DOM loaded');

  // event handlers


  $(".addButton").click(function() {
    if ($("#firstname").val().length > 0) {
      var first = $("#firstname").val();
      var last = $("#lastname").val();
      var job = $("#jobtitle").val();
      var annual = $("#annualsalary").val();
      var data = "<tr><td><input type='checkbox' name='chkRemove'></td><td>"
      + first +
      "</td><td>"
      + last +
      "</td><td>"
      + job +
      "</td><td>"
      + annual +
      "</td></tr>";

      $("table tbody").append(data);

      $("#firstname").val('').focus();
      $("#lastname").val('');
      $("#jobtitle").val('');
      $("#annualsalary").val('');
    } else {
      alert('Please add employee');
    }
  });
  //$('#guess_input').val('').focus(); //clear input
  // Find and remove selected table rows
  $("#deleteRow").click(function() {
    $("table tbody").find('input[name="chkRemove"]').each(function() {
      if ($(this).is(":checked")) {
        $(this).parents("tr").remove();
      }
    });
  });
});
