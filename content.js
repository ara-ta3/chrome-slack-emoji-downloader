(function(doc) {
    var rows = document.getElementsByClassName('emoji_row');
    [].forEach.call(rows, function(row) {
        var emojiSpanTag    = row.firstElementChild.firstElementChild;
        var name            = row.firstElementChild.nextElementSibling.innerText.replace(/:/g, '');
        var url             = emojiSpanTag.dataset.original;
        emojiSpanTag.addEventListener('click', function(event) {
            // originが異なるのでdownloadが効かない・・・
            var anchor = doc.createElement('a');
            anchor.download = name + '.png';
            anchor.href = url;
            anchor.click();
        });
    })
})(document);
