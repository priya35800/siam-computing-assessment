$(document).ready(function () {
    // Initialize Masonry
    $('.gallery').masonry({
        itemSelector: '.image-container',
        columnWidth: '.image-container',
        percentPosition: true
    });

    // Initialize Fancybox
    $('[data-fancybox="gallery"]').fancybox({
        loop: true,
        buttons: [
            "zoom",
            "slideShow",
            "thumbs",
            "close"
        ],
        caption: function(instance, item) {
            return $(this).data('caption') || '';
        }
    });

    // Handle download button click
    $('.btn.download').click(function(e) {
        e.preventDefault();
        e.stopPropagation(); // Prevent Fancybox from triggering
        const url = $(this).data('url');
        const link = document.createElement('a');
        link.href = url;
        link.download = url.substring(url.lastIndexOf('/') + 1);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    // Handle heart button click
    $('.btn.heart').click(function(e) {
        e.stopPropagation(); // Prevent Fancybox from triggering
        $(this).toggleClass('liked');
    });

    // Stop event propagation for plus button
    $('.btn.plus').click(function(e) {
        e.stopPropagation();
        alert('Plus button clicked!');
    });

    // Stop event propagation for overlay buttons to ensure Fancybox works
    $('.btn').on('click', function(e) {
        e.stopPropagation();
    });

    // Handle image click to open Fancybox
    $('.image-container a').on('click', function(e) {
        e.preventDefault();
        $.fancybox.open({
            src: $(this).attr('href'),
            type: 'image',
            opts: {
                caption: $(this).data('caption')
            }
        });
    });
});
