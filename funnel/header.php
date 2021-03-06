<!DOCTYPE html>
<html>
    <head>
        <title><?php bloginfo('title'); ?></title>

        <meta name="description" content="A comprehensive and curated list of 300+ online marketing tools, for businesses owners and entrepreneurs to grow their companies."/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta charset="utf8" />

        <link rel="stylesheet" type="text/css" href="<?php bloginfo( 'template_url' ); ?>/assets/css/bootstrap.min.css" media="screen" >
        <link rel="stylesheet" type="text/css" href="<?php bloginfo( 'template_url' ); ?>/assets/css/font-awesome.min.css" media="screen" >
        <link rel="stylesheet" type="text/css" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" media="screen, projection" />
        <link rel="stylesheet" type="text/css" href="<?php bloginfo( 'template_url' ); ?>/assets/css/custom.css" media="screen">
        <link rel="stylesheet" type="text/css" href="<?php bloginfo( 'template_url' ); ?>/assets/css/less/styles-04eae33576.css" media='all'  id='less-styles-css' />
        <link rel="stylesheet" type="text/css" href="<?php bloginfo( 'template_url' ); ?>/assets/css/owl.carousel.css" media='all' id='owl-carousel-css' />
        
        <!-- This site uses the Google Analytics by MonsterInsights plugin v7.0.9 - Using Analytics tracking - https://www.monsterinsights.com/ -->
    <script type="text/javascript" data-cfasync="false">
        var mi_track_user      = true;
        var mi_no_track_reason = '';
        
        var disableStr = 'ga-disable-UA-55382577-2';

        /* Function to detect opted out users */
        function __gaTrackerIsOptedOut() {
            return document.cookie.indexOf(disableStr + '=true') > -1;
        }

        /* Disable tracking if the opt-out cookie exists. */
        if ( __gaTrackerIsOptedOut() ) {
            window[disableStr] = true;
        }

        /* Opt-out function */
        function __gaTrackerOptout() {
        document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
        window[disableStr] = true;
        }
        
        if ( mi_track_user ) {
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','<?php bloginfo( 'template_url' ); ?>/assets/js/analytics.js','__gaTracker');

            __gaTracker('create', 'UA-55382577-2', 'auto');
            __gaTracker('set', 'forceSSL', true);
            __gaTracker('require', 'displayfeatures');
            __gaTracker('send','pageview');
        } else {
            console.log( "" );
            (function() {
                /* https://developers.google.com/analytics/devguides/collection/analyticsjs/ */
                var noopfn = function() {
                    return null;
                };
                var noopnullfn = function() {
                    return null;
                };
                var Tracker = function() {
                    return null;
                };
                var p = Tracker.prototype;
                p.get = noopfn;
                p.set = noopfn;
                p.send = noopfn;
                var __gaTracker = function() {
                    var len = arguments.length;
                    if ( len === 0 ) {
                        return;
                    }
                    var f = arguments[len-1];
                    if ( typeof f !== 'object' || f === null || typeof f.hitCallback !== 'function' ) {
                        console.log( 'Not running function __gaTracker(' + arguments[0] + " ....) because you are not being tracked. " + mi_no_track_reason );
                        return;
                    }
                    try {
                        f.hitCallback();
                    } catch (ex) {

                    }
                };
                __gaTracker.create = function() {
                    return new Tracker();
                };
                __gaTracker.getByName = noopnullfn;
                __gaTracker.getAll = function() {
                    return [];
                };
                __gaTracker.remove = noopfn;
                window['__gaTracker'] = __gaTracker;
                        })();
            }
    </script>
    <!-- / Google Analytics by MonsterInsights -->
    <script type="text/javascript">
        window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/11\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/11\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/localhost\/wp-includes\/js\/wp-emoji-release.min.js?ver=4.9.8"}};
        !function(a,b,c){function d(a,b){var c=String.fromCharCode;l.clearRect(0,0,k.width,k.height),l.fillText(c.apply(this,a),0,0);var d=k.toDataURL();l.clearRect(0,0,k.width,k.height),l.fillText(c.apply(this,b),0,0);var e=k.toDataURL();return d===e}function e(a){var b;if(!l||!l.fillText)return!1;switch(l.textBaseline="top",l.font="600 32px Arial",a){case"flag":return!(b=d([55356,56826,55356,56819],[55356,56826,8203,55356,56819]))&&(b=d([55356,57332,56128,56423,56128,56418,56128,56421,56128,56430,56128,56423,56128,56447],[55356,57332,8203,56128,56423,8203,56128,56418,8203,56128,56421,8203,56128,56430,8203,56128,56423,8203,56128,56447]),!b);case"emoji":return b=d([55358,56760,9792,65039],[55358,56760,8203,9792,65039]),!b}return!1}function f(a){var c=b.createElement("script");c.src=a,c.defer=c.type="text/javascript",b.getElementsByTagName("head")[0].appendChild(c)}var g,h,i,j,k=b.createElement("canvas"),l=k.getContext&&k.getContext("2d");for(j=Array("flag","emoji"),c.supports={everything:!0,everythingExceptFlag:!0},i=0;i<j.length;i++)c.supports[j[i]]=e(j[i]),c.supports.everything=c.supports.everything&&c.supports[j[i]],"flag"!==j[i]&&(c.supports.everythingExceptFlag=c.supports.everythingExceptFlag&&c.supports[j[i]]);c.supports.everythingExceptFlag=c.supports.everythingExceptFlag&&!c.supports.flag,c.DOMReady=!1,c.readyCallback=function(){c.DOMReady=!0},c.supports.everything||(h=function(){c.readyCallback()},b.addEventListener?(b.addEventListener("DOMContentLoaded",h,!1),a.addEventListener("load",h,!1)):(a.attachEvent("onload",h),b.attachEvent("onreadystatechange",function(){"complete"===b.readyState&&c.readyCallback()})),g=c.source||{},g.concatemoji?f(g.concatemoji):g.wpemoji&&g.twemoji&&(f(g.twemoji),f(g.wpemoji)))}(window,document,window._wpemojiSettings);
    </script>
    <!---->

        
        <?php wp_head(); ?>
    </head>

    <body>
