$ (document).ready (function () {
    $ (document).delegate ('.open', 'mouseover', function (event) {
        $ (this).addClass ('oppenned');
        event.stopPropagation ();
    });
    $ (document).delegate ('body', 'mouseout', function () {
        $ ('.open').removeClass ('oppenned');
    });
});
