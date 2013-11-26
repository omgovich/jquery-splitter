$(function(){

	// blocks and vars
	var $demo = $('.demo'),
	    $sliders = $demo.find('.slider'),
	    $body = $demo.find('.demo-body');

	// form params
	var params = {
		columns: 0,
		items: 0,
		direction: 'vertical'
	};

	// each sliders items
	$sliders.each(function(){
		var $slider = $(this),
		    name = $slider.attr('data-name'),
		    min = parseInt($slider.attr('data-min'),10),
		    max = parseInt($slider.attr('data-max'),10),
		    value = parseInt($slider.attr('data-value'),10);
		$slider.slider({
			min: min,
			max: max,
			value: value,
			slide: function(e,ui){
				decorate(ui.value);
				render();
			},
			change: function(e,ui){
				set(ui.value);
				render();
			}
		});
		var decorate = function(value){
			$slider.find('.ui-slider-handle').text(value);
		};
		var set = function(value){
			params[name] = value;
		};
		decorate(value);
		set(value);
	});

	// direction
	$demo.find('.btn-group input').change(function(){
		if ($(this).is(':checked')) params.direction = $(this).val();
		render();
	});

	// {fn} render
	var render = function(){
		var $list = $('<ul />');
		for (var i=0; i<params.items; i++) $list.append('<li>Item '+(i+1)+'</li>');
		$list.appendTo($body.empty());
		$list.splitter({ columns: params.columns, direction: params.direction });
	};

	// init
	render();

});