function asd($str){
    console.log($str);
}

(function(_, $){
    $(document).ready(function(){

        function updateTrackingCode(step){
            $.post(
                ajaxurl,
                {
                    'action': 'funnel_update_tracking',
                    'data':   {step_id:step}
                },
                function(response){
                    $('#funnel_tracking_holder').html(response);
                }
            );
        }

        var progressBulletBar = $('.progress-bullet');

        $('.back_btn').click(function(e){
            e.preventDefault();
            var currentStepHolder = $(this).closest('.step-content');
            var stepId = parseInt(currentStepHolder.prop('id').split('-')[1]);

            updateFunnelBuilderCookie('step', (stepId-1));
            currentStepHolder.slideUp('slow');
            $('#step-' + (stepId-1)).slideDown('slow');

            var current_active = progressBulletBar.find('.active');
            current_active.removeClass('active').prev().removeClass('done').addClass('active');
        });

        $('.step-box').click(function(){
            var currentStepHolder = $(this).closest('.step-content');
            var stepId = parseInt(currentStepHolder.prop('id').split('-')[1]);

            if(stepId < 4) {
                currentStepHolder.find('.selected').removeClass('selected');
                $(this).addClass('selected');
            } else {
                $(this).toggleClass('selected');
                $(this).siblings().removeClass('selected');
            }

            $(this).find('.info-icon').removeClass('active');

            $(this).find('.info-content').hide();

            var elValue;
            var next_step = stepId + 1;
            if(stepId < 4){
            	var $next_step_el =  $('#step-' + next_step);
                currentStepHolder.slideUp('slow');
                $next_step_el.slideDown('slow');

                elValue = $(this).data('step_element');

                if(next_step == 2){
            		$next_step_el.find('.item').each(function(){
            			var $current_step_2_el = $(this);
            			if($current_step_2_el.data('corresponding_el') == elValue){
            				
            				$current_step_2_el.removeClass('no-hover');
            				$current_step_2_el.find('.step-box').addClass('selected');

            				var $closest_owl_wrapper = $current_step_2_el.closest('.owl-wrapper');
            				$current_step_2_el.parent().prependTo($closest_owl_wrapper);
            			} else {
            				$current_step_2_el.addClass('no-hover');
            				$current_step_2_el.find('.step-box').removeClass('selected');
            			}

            		})
            	}

                updateFunnelBuilderCookie('step_'+stepId, elValue);
                updateFunnelBuilderCookie('step', next_step);

                updateTrackingCode((stepId+1));

                var current_active = progressBulletBar.find('.active');
                current_active.removeClass('active').addClass('done').next().addClass('active');
            }

            if(stepId == 8){
                elValue = $(this).data('el_value');

                updateFunnelBuilderCookie('step_'+stepId, elValue);

                var leadOverlay = $('#lead_popup_overlay');
                var leadPopupWrapper = $('#lead_popup_wrapper');

                leadOverlay.fadeIn('slow');

                $('#lead_popup_close').click(function(e){
                    e.stopPropagation();
                    leadOverlay.fadeOut('slow');
                });


                leadOverlay.click(function(e){
                    e.stopPropagation();
                    $('#home_popup_overlay').fadeOut('slow');
                });

                var el_height = leadPopupWrapper.outerHeight();
                leadPopupWrapper.css('marginTop', - (el_height / 2));

                updateTrackingCode((stepId+1));

            }
        });

        $('.go-to-next-step').click(function(e){
            e.preventDefault();
            var currentStepHolder = $(this).closest('.step-content');

            var selectedElements = currentStepHolder.find('.selected');
            var selectedIds = [];
            selectedElements.each(function(){
                selectedIds.push($(this).data('step_element'));
            });

            var stepId = parseInt(currentStepHolder.prop('id').split('-')[1]);

            updateFunnelBuilderCookie('step_'+stepId, selectedIds);
            updateFunnelBuilderCookie('step', (stepId+1));

            currentStepHolder.slideUp('slow');
            $('#step-' + (stepId+1)).slideDown('slow');

                var current_active = progressBulletBar.find('.active');
                current_active.removeClass('active').addClass('done').next().addClass('active');
        });

        $('.yes-no-btn').click(function(e){
            e.preventDefault();
            var currentStepHolder = $(this).closest('.step-content');
            var stepId = parseInt(currentStepHolder.prop('id').split('-')[1]);

            updateFunnelBuilderCookie('step_'+stepId, $(this).data('el_value'));
            updateFunnelBuilderCookie('step', (stepId+1));

            currentStepHolder.slideUp('slow');
            $('#step-' + (stepId+1)).slideDown('slow');

            var current_active = progressBulletBar.find('.active');
            current_active.removeClass('active').addClass('done').next().addClass('active');
        });

        $('.info-icon').click(function(e){
            e.stopPropagation();
            $(this).toggleClass('active');
            $(this).siblings('.info-content').toggle();
        });

        $('.info-content').click(function(e){
            e.stopPropagation();
        });

        var $carousel = $(".owl-carousel");

        $carousel.owlCarousel({
            items : 4,
            itemsDesktop : [1200,3],
            itemsDesktopSmall : [992, 2],
            itemsMobile : [600, 1]
        });

        var carousel = $carousel.data('owlCarousel');

        $('.carousel-next').click(function(){
            $(this).siblings('.owl-carousel').data('owlCarousel').next();
        });
        $('.carousel-prev').click(function(){
            $(this).siblings('.owl-carousel').data('owlCarousel').prev();
        });

        var funnelBuilderCookieOld = Cookies.get('funnelBuilder');
        var funnelBuilderCookie = (funnelBuilderCookieOld)? JSON.parse(funnelBuilderCookieOld): {};

        if(!funnelBuilderCookie.step)
            updateFunnelBuilderCookie('step', 1);
        if(!funnelBuilderCookie.lastVisitTime || funnelBuilderCookie.lastVisitTime != todayTimestamp)
            updateFunnelBuilderCookie('lastVisitTime', todayTimestamp);

        function updateFunnelBuilderCookie(prop, val){
            funnelBuilderCookie[prop] = val;

            var funnelBuilderFinal = JSON.stringify(funnelBuilderCookie);
            Cookies.set('funnelBuilder', funnelBuilderFinal, { expires: 7 });
        }

        var $email = $('#email'),
            $fullname  = $('#fullname');

        $email.on('change', function(){
            if($(this).val() != '') $(this).closest('.form-group').removeClass('has-error');
        });

        $fullname.on('change', function(){
            if($(this).val() != '') $(this).closest('.form-group').removeClass('has-error');
        });

        var sent_once = false;

        $('#lead_popup_button').click(function(e){

            if(sent_once){
                sent_once = false;
                return;
            }

            e.preventDefault();

            $(this).attr('disabled', true);

            var error = 0;

            if($email.val() == '') {
                error = 1;
                $email.closest('.form-group').addClass('has-error');
            }

            if($fullname.val() == '') {
                error = 1;
                $fullname.closest('.form-group').addClass('has-error');
            }

            if(error == 0){
                var data = {
                    mail: $email.val(),
                    fullname: $fullname.val(),
                    cookieBuilder: Cookies.set('funnelBuilder')
                };

                $.ajax({
                    type: 'POST',
                    url: ajaxurl,
                    data: {
                        'action': 'ac_controller',
                        'data': data
                    },
                    success: function(result){
                        $('#leadpages-form').submit();
                    }
                });
                
            }

        })


    });
})(window, jQuery);