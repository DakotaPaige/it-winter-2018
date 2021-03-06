(function ($) {

  var showsGrid = $('.show-events-page').isotope({
    itemSelector: '.show-item',
    layoutMode: 'fitRows'
  });

  // Register filter buttons click event
  $('.filter-shows-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    showsGrid.isotope({ filter: filterValue });
  });

  //function to open a new smaller window to share the posts
  function socialWindow(url) {
    var left = (screen.width - 570) / 2;
    var top = (screen.height - 570) / 2;
    var params = "menubar=no,toolbar=no,status=no,width=570,height=570,top=" + top + ",left=" + left;
    window.open(url,"NewWindow",params);
  }


  // var pageUrl = $('.website-url-for-javascript-hidden').text();

  //initilizing share buttons on show page
  
  function setShareLinks() {
    var pageUrl = $('.website-url-for-javascript-hidden').text();
    
    $('.social-share.facebook').on('click', function() {
        var url = 'https://www.facebook.com/sharer.php?u=' + pageUrl;
        socialWindow(url);
    });

    $('.social-share.twitter').on('click', function() {
        var url = 'https://twitter.com/intent/tweet?url=' + pageUrl;
        socialWindow(url);
    });
  }

  setShareLinks();

  //mobile show list view functionality to show/hide filter areas

  $('.mobile-filter-button.date').on('click', function() {
    $('.mobile-shows-calendar-date-area').show();
  })

  $('.close-button').on('click', function() {
    $('.mobile-shows-calendar-date-area').hide();
  })

  $('.mobile-filter-button.genre').on('click', function() {
    $('.shows-taxonomy-filter-area').show();
  })

  $('.close-button').on('click', function() {
    $('.shows-taxonomy-filter-area').hide();
  })

  $('.done-button').on('click', function(event) {
    event.preventDefault();
    $('.shows-taxonomy-filter-area').hide();
  })

})(jQuery);