$(document).ready(function() {
  console.log('DOM loaded');

  $(".addButton").click(function() {
    var first = $("#firstname").val();
    var last = $("#lastname").val();
    var job = $("#jobtitle").val();
    var annual = $("#annualsalary").val();
    var data = "<tr><td><input type='checkbox' name='chkRemove'></td><td>" + first + "</td><td>" + last + "</td><td>" + job + "</td><td>" + annual + "</td></tr>";
    $("table tbody").append(data);
  });

  // Find and remove selected table rows
  $("#deleteRow").click(function() {
    $("table tbody").find('input[name="chkRemove"]').each(function() {
      if ($(this).is(":checked")) {
        $(this).parents("tr").remove();
      }
    });
  });
});
