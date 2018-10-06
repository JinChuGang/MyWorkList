/*(function($) {
    setTimeout(function(){
        
        $('.page .entry-summary').find('*').each(function(){
            var $this = $(this);
            $this.html($this.html().replace(/&nbsp;/g, ''));
        });

        $('.single .entry-summary').find('*').each(function(){
            var $this = $(this);
            $this.html($this.html().replace(/&nbsp;/g, ''));
        });
    }, 15)
    
})(jQuery);
*/
var ajaxurl = 'https://localhost/wp-admin/admin-ajax.php';
var todayTimestamp = '1537660800';