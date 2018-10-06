(function(_, $){
    $(document).ready(function(){
        if(typeof popup_settings !== 'undefined'){
            $('.quote_popup').on('click', save_click);

            function hide_popup(){
                var timeout = (popup_settings.continuous)? popup_settings.display_for : 0;
                setTimeout(function(){
                    $('.quote_popup').hide();
                    $('#mwt_quote_popup_wrapper').slideUp('fast', function(){
                        if(popup_settings.continuous) show_popup();
                    });
                }, timeout);
            }

            var flag = true;
            function show_popup(){
                if (flag) {
                    __gaTracker('send', 'event', {
                        eventCategory: 'popup',
                        eventAction: 'popup_show',
                        eventLabel: 'show'
                    });
                };

                flag = false;
                setTimeout(function(){
                   
                    $(".quote_popup").random().show();
                    var data = {
                        action: 'set_jsongraf',
                        pathname: window.location.pathname
                    };

                    // Ñ Ð²ÐµÑ€ÑÐ¸Ð¸ 2.8 'ajaxurl' Ð²ÑÐµÐ³Ð´Ð° Ð¾Ð¿Ñ€ÐµÐ´ÐµÐ»ÐµÐ½ Ð² Ð°Ð´Ð¼Ð¸Ð½ÐºÐµ
                    // // jQuery.post( '/wp-admin/admin-ajax.php', data, function(response) {

                    //               if (flag) {
                    //                   ga('send',{ 
                    //                   hitType: 'event',
                    //                   eventCategory: 'popup',
                    //                   action: 'popup_show'});
                    //               flag=false;
                    //           }
                      
                    //  console.log('ÐŸÐ¾Ð»ÑƒÑ‡ÐµÐ½Ð¾ Ñ ÑÐµÑ€Ð²ÐµÑ€Ð°: ' + response);
                    // });

                    $('#mwt_quote_popup_wrapper').slideDown('fast', function(){
                        hide_popup();
                    });

                }, popup_settings.display_pause);
            }

            function save_click(){
                ga('send', 'event', {
                    eventCategory: 'popap',
                    eventAction: 'popup_click',
                    eventLabel: 'click'
                });

                var data = {
                    action: 'set_savecounttotal',
                    pathname: window.location.pathname
                };

                /*jQuery.post( '/wp-admin/admin-ajax.php', data, function(response) {
                    alert('Ð•ÑÑ‚ÑŒ ÐºÐ»Ð¸Ðº');
                    ga('send',{ 
                        hitType: 'event',
                        eventCategory: 'popup',
                        action: 'popup_show'
                    });
                });*/
            }

            setTimeout(function(){
                show_popup();
            }, popup_settings.display_after);

            $.fn.random = function() {
                var ret = $();

                if(this.length > 0){
                    ret = ret.add(this[Math.floor((Math.random() * this.length))]);
                }

                return ret;
            };

            $('#mwt_close_quote_popup').click(function(){
                popup_settings.continuous = false;
                hide_popup();
                return false;
            });
        }
    });
})(window, jQuery);