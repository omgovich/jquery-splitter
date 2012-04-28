# jQuery Splitter

jQuery plugin to columnize lists.

## Installation

HTML:

    <script src="path/to/jquery.splitter.js"></script>

JavaScript:

    $(function(){
        $('selector').splitter();
    });

## Options

* columns — number of columns (default: 2)
* direction — direction of splitting: 'vertical' or 'horizontal' (default: 'vertical')
* itemsSelector — selector to find list items (default: 'li')
* containerTag — tag of columns wrapper (default: 'div')
* containerClass — class of columns wrapper (default: 'list-container')
* columnTag — tag of columns (default: 'ul')
* columnClass — class of columns (default: 'list-column')
* columnFirstClass — class of first column (default: 'list-column_first')
* columnLastClass — class of last column (default: 'list-column_last')