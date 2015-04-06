$(document).ready(function() {

	$(".outfit-selection").click(function() {
		$("#body").hide();
		$(".outfit").hide();
	})

	/*
	$(".outfit-selection").hover(function() {
		$("#body").hide();
		$(".outfit").hide();
	})
	*/

	$("#s1").click(function() {
		$("#o1").show();
	})
	$("#s2").click(function() {
		$("#o2").show();
	})
	$("#s3").click(function() {
		$("#o3").show();
	})
	$("#s4").click(function() {
		$("#o4").show();
	})
	$("#s5").click(function() {
		$("#o5").show();
	})

	/*
	$("#s1").hover(function() {
		$("#o1").show();
	})
	$("#s2").hover(function() {
		$("#o2").show();
	})
	$("#s3").hover(function() {
		$("#o3").show();
	})
	$("#s4").hover(function() {
		$("#o4").show();
	})
	$("#s5").hover(function() {
		$("#o5").show();
	})
	*/
})