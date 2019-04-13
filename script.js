 var sum_first=0;
  $(document).ready(function(){
  $(".value1").each(function(){
   var value = $(this).val();
   sum_first = sum_first + parseInt(value);
    $("#value1_final").html(sum_first);
  });
});

  var sum=0;
    $(".value2").keyup(function(){
    var id = $(this).data('id');
    $(".value3[data-id='"+id+"']").val(parseInt($(".value1[data-id='"+id+"']").val())-parseInt($(this).val()));
  })
  
var sum=0;
var sum_final=0;
    $(".value2").blur(function(){
     var value= parseInt($(this).val()) || 0;
    sum = sum+value;
    $("#value2_final").html(sum);
    var id_new = $(this).data('id');
    console.log(id_new)
    var new_value =parseInt($(".value3[data-id='"+id_new+"']").val()) || 0;
    sum_final = sum_final+new_value;
    $("#final").html(sum_final);
    })
  
