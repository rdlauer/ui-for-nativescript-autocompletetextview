var Observable = require("data/observable").Observable;
var ObservableArray = require("data/observable-array").ObservableArray;
var autocompleteModule = require("nativescript-telerik-ui-pro/autocomplete");

var page;
var pageData = new Observable();
var items = new ObservableArray([]);

exports.pageLoaded = function(args) {
	page = args.object;
	page.bindingContext = pageData;

	//var artists = ["Arcade Fire", "Bon Iver", "Daft Punk", "Elbow"];

	var artists = [
		{
			text: "Arcade Fire",
			image: "~/images/arcade-fire.png"
		},
		{
			text: "Bon Iver",
			image: "~/images/bon-iver.png"
		},
		{
			text: "Daft Punk",
			image: "~/images/daft-punk.png"
		},
		{
			text: "Elbow",
			image: "~/images/elbow.png"
		}
	];

	// for (var i = 0; i < artists.length; i++) {
	// 	items.push(new autocompleteModule.TokenModel(artists[i]));
	// };

	for (var i = 0; i < artists.length; i++) {
		items.push(new autocompleteModule.TokenModel(artists[i].text, artists[i].image));
	};

	pageData.set("items", items);
};