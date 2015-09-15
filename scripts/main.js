'use strict';

var redTab = $('#redTab');
var greenTab = $('#greenTab');
var blueTab = $('#blueTab');
var redText = $('#redText');
var greenText = $('#greenText');
var blueText = $('#blueText');

redTab.on('click', function() {
	redText.show(3000);
	greenText.hide(3000);
	blueText.hide(3000);
});
greenTab.on('click', function() {
	greenText.show(3000);
	redText.hide(3000);
	blueText.hide(3000);
});
blueTab.on('click', function() {
	blueText.show(3000);
	redText.hide(3000);
	greenText.hide(3000);
});