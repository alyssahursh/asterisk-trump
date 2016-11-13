walk(document.body);
setTimeout(function () {
	walk(document.body);
}, 1000);

function walk(node)
{
	// Source: http://is.gd/mwZp7E
	// Source: http://www.donaldjdrumpf.com
	var child, next;

	switch ( node.nodeType )
	{
		case Node.ELEMENT_NODE:
		case Node.DOCUMENT_NODE:
		case Node.DOCUMENT_FRAGMENT_NODE:
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case Node.TEXT_NODE:
			handleText(node);
			break;
	}
}


function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(/(Donald Trump)/gi, "****** *****"); // Replace "****** *****" with any text of your choice
	v = v.replace(/(Donald J\. Trump)/gi, "****** * *****"); // Replace "****** * *****" with any text of your choice
	v = v.replace(/(Trump)/gi, "*****"); // Replace the "*****" with any text of your choice



	textNode.nodeValue = v;
}



// Source: http://stoptonymeow.com/

var censor_re = /(trump|pence|president|election)/i;

var should_censor_image = function ($e) {
    var img_attributes, parent_link, link_attributes;
    img_attributes = (
        ''
        + $e.attr('src')
        + $e.attr('alt')
        + $e.attr('title')
        + $e.attr('data-mediaviewer-caption')
    );
    if (img_attributes.match(censor_re)) {
    	return true;
	}
    parent_link = $e.closest("a");
    if (parent_link.length) {
    	link_attributes = (
    		''
			+ parent_link.attr('url')
			+ parent_link.attr('href')
			+ parent_link.attr('title')
		);
		if (link_attributes.match(censor_re)) {
    		return true;
		}
	}
	return false;
};

var readyStateCheckInterval = setInterval(function () {
    if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);
        $('img').each(function (i, e) {
            var $e = $(e);
            if (should_censor_image($e)) {
                $e.attr('src', 'http://placehold.it/' + $e.width() + 'x' + $e.height());  // Replace placehold.it with any placeholder service of your choice.
            }
        });
    }
}, 10);
