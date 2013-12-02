/*
 * jQuery Splitter v1.1
 * Copyright (c) 2013 Shilov Vlad [Omgovich] (http://omgovich.ru/)
 */

(function($) {
	
	// Settings
	var defaults = {
		columns: 2,
		direction: 'vertical',
		itemsSelector: 'li',
		// container
		containerTag: 'div',
		containerClass: 'list-container',
		// column
		columnTag: 'ul',
		columnClass: 'list-column',
		columnFirstClass: 'list-column_first',
		columnLastClass: 'list-column_last',
		columnAllowEmpty: false
	};
	
	// Splitter function
	$.fn.splitter = function(options) {

		// Settings
		var settings = $.extend(defaults, options);
	
		// Install splitter for each items
		this.each(function(){

			// Variables and objects
			var $list = $(this),
			    $items = $list.find(settings.itemsSelector),
			    itemsNumber = $items.length,
			    $column = $('<'+settings.columnTag+'/>', {
			    	'class': settings.columnClass
			    }),
			    $container = $('<'+settings.containerTag+'/>', {
			    	'class': settings.containerClass
			    }),
			    $columns;

			// Find coolumns
			function findColumns(){
				$columns = $container.children();
			};

			// Vertical split
			function splitVertical(){
				var itemsInColumn = Math.ceil(itemsNumber/settings.columns),
				    column = 0;
				for (var i=0; i<itemsNumber; i+=itemsInColumn) {
					var $columnItems = $items.slice(i, i+itemsInColumn).clone();
					$columns.eq(column++).append($columnItems);
				};
			};

			// Horizontal split
			function splitHorizontal(){
				$items.each(function(index){
					$columns.eq(index%settings.columns).append($(this).clone());
				});
			};

			// Create columns
			for (var i=0; i<settings.columns; i++) $container.append($column.clone());
			findColumns();

			// Add items in columns
			if (settings.direction=='horizontal') splitHorizontal(); else splitVertical();

			// Remove empty columns
			if (!settings.columnAllowEmpty) {
				$columns.filter(':empty').remove();
				findColumns();
			};

			// Add classes to first and last columns
			$columns.first().addClass(settings.columnFirstClass);
			$columns.last().addClass(settings.columnLastClass);

			// Render splitted list
			$list.replaceWith($container);

		});

		return this;
	};

})(jQuery);