# jQuery Splitter

Flexible plugin for easy and fast columnize lists.

[Demo](http://omgovich.github.io/jquery-splitter/)

## Installation

HTML:

	<ul class="example">
		<li>Item 1</li>
		<li>Item 2</li>
		<li>...</li>
		<li>Item N</li>
	</ul>

    <script src="path/to/jquery.js"></script>
    <script src="path/to/jquery.splitter.js"></script>

JavaScript:

	$('.example').splitter({
		columns: 5,
		direction: 'horizontal'
	});

## Options

* `columns` — number of columns (default: 2)
* `direction` — direction of splitting: 'vertical' or 'horizontal' (default: 'vertical')
* `itemsSelector` — selector to find list items (default: 'li')
* `containerTag` — tag of columns wrapper (default: 'div')
* `containerClass` — class of columns wrapper (default: 'list-container')
* `columnTag` — tag of columns (default: 'ul')
* `columnClass` — class of columns (default: 'list-column')
* `columnFirstClass` — class of first column (default: 'list-column_first')
* `columnLastClass` — class of last column (default: 'list-column_last')
* `columnAllowEmpty` — allow empty columns (default: false)