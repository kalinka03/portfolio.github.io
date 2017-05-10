$("document").ready(function(){
$("input").click(function() {
var sum = 0;
$("input:checked").each(function(){
 sum+= +$(this).val();
});
$('button.info-buy').html('<p>'+sum+ 'p'+'</p>');
});
 });


$("a[href=#test]").fancybox();







// var inp=$('input[name=chek3]');
// inp.change(function() {
	// var x=($('input[data-re]'));
	// inp.each(function(){
		// if ($(this).is(':checked'))
			// {
				// x=$(this).val()}});
	// $('button.info-buy').html(x);
// });

// $('.info-buy').click(function (){
// var chk=$('.checkbox').find('input[type="checkbox"]:checked').attr('inputp[data]')


  // $('input[type="checkbox"]').each(function() {
    // if($('.checkbox').prop('checked')) {
   // $()closest()
// }
// $('.info-buy').html(x)
// })


// $(function () {
	// alert($('input:checked').length);
// });