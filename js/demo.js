$(function(){

	// blocks and vars
	var $demo = $('.demo'),
	    $title = $('.title'),
	    $navbar = $('.navbar'),
	    $footer = $('.footer'),
	    $download = $('.download'),
	    $form = $demo.find('form'),
	    $sliders = $form.find('.slider'),
	    $body = $demo.find('.demo-body'),
	    $foot = $demo.find('.demo-footer'),
	    $footCount = $foot.find('.demo-footer__html__count'),
	    $footColumns = $foot.find('.demo-footer__html__columns'),
	    $footDirection = $foot.find('.demo-footer__html__direction'),
	    duration = 450;

	// form params
	var params = {
		columns: 0,
		items: 0,
		direction: 'horizontal'
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
		$footCount.text(params.items);
		$footColumns.text(params.columns);
		$footDirection.text(params.direction);
	};

	// init
	render();

	// wow-wow
	$navbar.find('> *').css({ opacity:0 });
	$title.delay(duration*1).fadeTo(duration*2, 1);
	$demo.delay(duration*0.5).fadeTo(duration*2, 1);
	$form.delay(duration*1.5).fadeTo(duration, 1);
	$body.delay(duration*2.0).fadeTo(duration, 1);
	$foot.delay(duration*2.5).fadeTo(duration, 1);
	$download.delay(duration*3).fadeTo(duration, 1);
	$navbar.css({top:-70}).delay(duration*3).animate({opacity:1, top:0}, duration*1.5, function(){
		$navbar.find('> *').each(function(index){
			$(this).delay(duration*index).fadeTo(duration, 1);
		});
	});
	$footer.css({bottom:-70}).delay(duration*3).animate({opacity:1, bottom:0}, duration*1.5);


});