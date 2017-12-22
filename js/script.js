$(document).ready(function() {
  // event handlers
  $(".addButton").on('click', addEmp)
  $('#salaryBody').on('click', '.delete', deleteEmp);

  function addEmp() {
    counter = 0;
    if ($("#firstname").val().length > 0) {
      var id = $("#id").val();
      var first = $("#firstname").val();
      var last = $("#lastname").val();
      var job = $("#jobtitle").val();
      var annual = $("#annualsalary").val();
      var monthly = annual / 12;
      console.log(monthly);
      var data = "<tr><td>" +
        id +
        "</td><td>" +
        first +
        "</td><td>" +
        last +
        "</td><td>" +
        job +
        "</td><td>" +
        annual +
        "</td><td>" +
        monthly +
        "</td><td><button class='delete'>Delete</button></td></tr>";
      $("table tbody").append(data);

      $("#annualExpense").append(monthly);

      $("#id").val('').focus();
      $("#firstname").val('');
      $("#lastname").val('');
      $("#jobtitle").val('');
      $("#annualsalary").val('');
    } else {
      alert('Please add employee information');
    }
  };
  // Find and remove table rows
  function deleteEmp() {
    $(this).parent().parent().remove();
  }
});
