'use strict';

var redTab = $('#redTab');
var greenTab = $('#greenTab');
var blueTab = $('#blueTab');
var redText = $('#redText');
var greenText = $('#greenText');
var blueText = $('#blueText');

redTab.on('click', function() {
	redText.show();
	greenText.hide();
	blueText.hide();
});
greenTab.on('click', function() {
	greenText.show();
	redText.hide();
	blueText.hide();
});
blueTab.on('click', function() {
	blueText.show();
	redText.hide();
	greenText.hide();
});