var $mainSearchWrapper;
var $predefinedTags;
var $predefinedTagElements;
var $searchInput;
var $dropdownOptions;
var t_type = [];
var t_pricing = [];
var t_platform = [];
var $container;
var $priceSlider;

(function($){

    function AddTag(elem) {
        var curr = $(elem);
        curr.hover(function(){
            curr.removeClass('btn-default').addClass('btn-primary');
        }, function(){
            curr.removeClass('btn-primary').addClass('btn-default');
        });

        curr.click(function(){
            $searchInput.tagsinput('add', curr.html());
            curr.remove();
        })
    }

    function updateToolsOptions(options){
        t_type = [];
        t_pricing = [];
        t_platform = [];

        options.forEach(function(option){
            if(option.indexOf('type-') == 0) t_type.push(option.replace('type-', ''));
            if(option.indexOf('pricing-') == 0) t_pricing.push(option.replace('pricing-', ''));
            if(option.indexOf('platform-') == 0) t_platform.push(option.replace('platform-', ''));
        });

        updateTools();

        setTimeout(function(){
            $container.masonry();
        },5);
    }

    function updateTools(){
        currentSearchTags = $searchInput.val().split(',');
        $allCategories.each(function(){
            var $currentCatLoop = $(this);
            var this_cat_name = $currentCatLoop.data('cat_item_name');
            var this_cat_name_lower = this_cat_name.toLowerCase();
            var $currentCatTools = $currentCatLoop.find('li');

            var hide_this_elem;

            if(currentSearchTags.length == 0 || (currentSearchTags.length == 1 && currentSearchTags[0] == "")){
                $(this).show();
                $(this).find('li').show();
            } else {
                if($.inArray( this_cat_name, currentSearchTags ) != -1){
                    $currentCatLoop.show().addClass('item');
                    $currentCatTools.show();
                } else {
                    hide_this_elem = true;

                    currentSearchTags.forEach(function(entry){
                        if(hide_this_elem){
                            var entry_lower = entry.toLowerCase();
                            if (this_cat_name_lower.indexOf(entry_lower) >= 0){
                                $currentCatLoop.show().addClass('item');
                                $currentCatTools.show();
                                hide_this_elem = false;
                            }
                        }
                    });

                    if(hide_this_elem)
                        $currentCatLoop.hide().removeClass('item');
                }
            }



            hide_this_elem = true;
            $currentCatTools.each(function(){
                var hide_this_tool = true;

                var $currentCatToolLoop = $(this);

                var this_tool_cat_name = $currentCatToolLoop.data('cat_item');
                var this_tool_item_name = $currentCatToolLoop.data('tool_item_name');
                var this_tool_cat_name_lower = this_tool_cat_name.toLowerCase();
                var this_tool_item_name_lower = this_tool_item_name.toLowerCase();

                var this_tool_type = $currentCatToolLoop.data('tool_type').split(',');
                var this_tool_pricing = $currentCatToolLoop.data('tool_pricing').split(',');
                var this_tool_platform = $currentCatToolLoop.data('tool_platform').split(',');

                var valid_type = false;
                var valid_pricing = false;
                var valid_platform = false;
                var valid_price = false;

                var this_tool_price = $currentCatToolLoop.data('tool_price').split(',');
                var price_slider_val = $priceSlider.val().split(',');

                if(t_type.length == 0) valid_type = true;
                else {
                    this_tool_type.forEach(function(type){
                        if(!valid_type)
                            if($.inArray( type, t_type ) != -1)  valid_type = true;
                    });
                }

                if(t_pricing.length == 0) valid_pricing = true;
                else {
                    this_tool_pricing.forEach(function(pricing){
                        if(!valid_pricing)
                            if(t_pricing.length == 0 || $.inArray( pricing, t_pricing ) != -1)  valid_pricing = true;
                    });
                }

                if(t_platform.length == 0) valid_platform = true;
                else {
                    this_tool_platform.forEach(function(platform){

                        if(!valid_platform)
                            if(t_platform.length == 0 || $.inArray( platform, t_platform ) != -1)  valid_platform = true;
                    });
                }

                if((this_tool_price[0] == '' || parseInt(price_slider_val[0]) <= parseInt(this_tool_price[0])) && (this_tool_price[1] == '' || parseInt(this_tool_price[1]) <= parseInt(price_slider_val[1])))
                    valid_price = true;

                if(currentSearchTags.length > 0){
                    currentSearchTags.forEach(function(tool_tag){
                        if(hide_this_tool){
                            var tool_name_lower = tool_tag.toLowerCase();
                            if ((this_tool_cat_name_lower.indexOf(tool_name_lower) >= 0 || this_tool_item_name_lower.indexOf(tool_name_lower) >= 0) && valid_platform && valid_pricing && valid_type && valid_price){
                                $currentCatLoop.show().addClass('item');
                                $currentCatToolLoop.show();
                                hide_this_tool = false;
                                hide_this_elem = false;
                            }
                        }
                    });
                } else {
                    if (valid_platform && valid_pricing && valid_type && valid_price){
                        hide_this_tool = false;
                        hide_this_elem = false;
                    }
                }

                if(hide_this_tool)
                    $currentCatToolLoop.hide();
            });

            if(hide_this_elem)
                $currentCatLoop.hide().removeClass('item');


        });

        setTimeout(function(){
            $container.masonry();
        },5);
    }

	$container = $('.tools-list');
    $dropdownOptions = $( '.dropdown-menu a' );

    $container.masonry({
        itemSelector: '.item',
        columnWidth: '.item',
        percentPosition: true
    });


    $mainSearchWrapper = $('.main-search-wrapper');
    $predefinedTags = $('.predefined-tags');
    $predefinedTagElements = $('.predefined-tag');
    $searchInput = $('#search-input');

    $priceSlider = $("#price-range-slider-el");

    $predefinedTagElements.each(function(){
        var curr = $(this);
        curr.hover(function(){
            curr.removeClass('btn-default').addClass('btn-primary');
        }, function(){
            curr.removeClass('btn-primary').addClass('btn-default');
        });

        curr.click(function(){
            $searchInput.tagsinput('add', curr.html());
            curr.remove();
        })
    });

    $searchInput.tagsinput({
        tagClass: 'label label-primary label-big',
        confirmKeys: [13, 44],
        trimValue: true,
        cancelConfirmKeysOnEmpty: true
    });

    $searchInput.on('beforeItemRemove', function(event) {
        var new_elem = $("<button type='button' class='btn btn-default btn-sm predefined-tag'>" + event.item + "</button>").appendTo($predefinedTags.find('div'));
        AddTag(new_elem);
    });


    var $allCategories = $('.item');

    var currentSearchTags = $searchInput.val().split(',');
    $allCategories.each(function(){
        if(currentSearchTags.length == 0 || (currentSearchTags.length == 1 && currentSearchTags[0] == "")) $(this).show();
        else {
            if($.inArray( $(this).data('cat_item_name'), currentSearchTags ) != -1){
                $(this).show().addClass('item');
            } else {
                $(this).hide().removeClass('item');
            }
        }
    });

    setTimeout(function(){
        $container.masonry();
    },1);

    $searchInput.on('itemAdded itemRemoved', function(event) {
        updateTools();
        setTimeout(function(){
            $container.masonry();
        },5);
    });

    $('#search-form').on('keyup keypress', function(e) {
        var code = e.keyCode || e.which;
        if (code == 13) {
            e.preventDefault();
            return false;
        }
    });

    var $optionsToggle = $('#options_toggle');
    var $dropdownElements = $('.dropdown-elements');
    var $moreOptions = $('#more-options');
    var $lessOptions = $('#less-options');

    $(document).mouseup(function (e){

        if (!$mainSearchWrapper.is(e.target) && $mainSearchWrapper.has(e.target).length === 0){
            $mainSearchWrapper.removeClass('focused');
            $predefinedTags.slideUp();
            $optionsToggle.slideUp();
            $('.dropdown-elements').slideUp();
            $moreOptions.show();
            $lessOptions.hide();
        } else {
            $mainSearchWrapper.addClass('focused');
            $predefinedTags.slideDown();
            $optionsToggle.slideDown();
        }
    });

    $moreOptions.click(function(){
        $dropdownElements.slideDown();
        $(this).hide();
        $(this).siblings().show();
    });

    $lessOptions.click(function(){
        $dropdownElements.slideUp();
        $(this).hide();
        $(this).siblings().show();
    });

    ///////////////////////

    var options = [];
    var $typesDropdown = $('#types_dropdown');
    var $pricingDropdown = $('#pricing_dropdown');
    var $sliderDropdown = $('#slider_dropdown');
    var $platformsDropdown = $('#platforms_dropdown');

    $dropdownOptions.on( 'click', function( event ) {

        var $target = $( event.currentTarget ),
            val = $target.attr( 'data-value' ),
            $inp = $target.find( 'input' ),
            idx;

        if ( ( idx = options.indexOf( val ) ) > -1 ) {
            options.splice( idx, 1 );
            setTimeout( function() { $inp.prop( 'checked', false ) }, 0);
        } else {
            options.push( val );
            setTimeout( function() { $inp.prop( 'checked', true ) }, 0);
        }

        $( event.target ).blur();

        console.log( options );


        // TODO: OPTIMIZE THIS

        if(($.inArray( "pricing-volume_based", options ) != -1 || $.inArray( "type-free", options ) != -1) && $.inArray( "pricing-once_off", options ) == -1 && $.inArray( "pricing-monthly", options ) == -1){
            $sliderDropdown.hide();
            $pricingDropdown.removeClass('col-sm-3').addClass('col-sm-4');
            $typesDropdown.removeClass('col-sm-3').addClass('col-sm-4');
            $platformsDropdown.removeClass('col-sm-3').addClass('col-sm-4');
        } else {
            $sliderDropdown.show();
            $pricingDropdown.removeClass('col-sm-4').addClass('col-sm-3');
            $typesDropdown.removeClass('col-sm-4').addClass('col-sm-3');
            $platformsDropdown.removeClass('col-sm-4').addClass('col-sm-3');
        }

        updateToolsOptions(options);

        return false;
    });


    maxPrice = Math.ceil(maxPrice/100) * 100;
    $priceSlider.slider({
        id: "price-range-slider",
        min: 0,
        max: maxPrice,
        range: true,
        value: [0, maxPrice],
        tooltip: 'always',
        tooltip_split: true,
        formatter: function(value) {
            return '$' + value;
        }
    });

    $priceSlider.slider().on('slideStop', function(){
        updateTools();
    });

    $('#dropdownMenu4').on('click', function(event){
        setTimeout(function(){$priceSlider.slider('relayout');},0);
    });

    $('.text-input-dropdown .dropdown-menu').on('click', function(event){

        return false;
    });

})(jQuery);