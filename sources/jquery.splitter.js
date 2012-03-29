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
			
			var $list = $(this),
			    $items = $list.find(settings.itemsSelector),
				itemsInColumn = Math.ceil($items.length/settings.columns),
			    $container = $('<'+settings.containerTag+'/>', {
					class: settings.containerClass
				});

			for(var i=0; i<$items.length; i+=itemsInColumn) {
				var $columnItems = $items.slice(i, i+itemsInColumn).clone(),
					$column = $('<'+settings.columnTag+'/>', {
						class: settings.columnClass
					});
				$column.append($columnItems);
				$container.append($column);
			};
			
			$container.find('> :first').addClass(settings.columnFirstClass);
			$container.find('> :last').addClass(settings.columnLastClass);
			
			$list.after($container);

			
		});
	
		return this;
	};

})(jQuery);