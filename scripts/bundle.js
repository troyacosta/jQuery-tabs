(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var redTab = $('#redTab');
var greenTab = $('#greenTab');
var blueTab = $('#blueTab');
var redText = $('#redText');
var greenText = $('#greenText');
var blueText = $('#blueText');

redTab.on('click', function () {
	redText.show();
	greenText.hide();
	blueText.hide();
});
greenTab.on('click', function () {
	greenText.show();
	redText.hide();
	blueText.hide();
});
blueTab.on('click', function () {
	blueText.show();
	redText.hide();
	greenText.hide();
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map