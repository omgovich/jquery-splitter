/*
 * jQuery Splitter
 *
 * Copyright (c) 2011 Shilov Vlad [Omgovich] (http://omgovich.ru/)
 * 
 */

(function($) {

	$.fn.splitter = function(options) {
	
		// Settings
		var settings = $.extend({
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
			columnLastClass: 'list-column_last'
		}, options);
	
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
			    });

			// Create columns
			for(var i=0; i<settings.columns; i++) $container.append( $column.clone() );
			var $columns = $container.children();
			$columns.first().addClass(settings.columnFirstClass);
			$columns.last().addClass(settings.columnLastClass);

			// Vertical split
			function splitVertical(){
				var itemsInColumn = Math.ceil(itemsNumber/settings.columns),
				    column = 0;
				for(var i=0; i<itemsNumber; i+=itemsInColumn) {
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

			// Add items in columns
			if (settings.direction=='horizontal') {
				splitHorizontal();
			} else {
				splitVertical();
			};

			// Render splitted list
			$list.replaceWith($container);

		});
	
		return this;
	};

})(jQuery);