$ ->
  $('.navbar-toggle').click ->
    $('.navbar-nav').toggleClass 'slide-in'
    $('.side-body').toggleClass 'body-slide-in'
    $('#search').removeClass('in').addClass('collapse').slideUp 200
    #/ uncomment code for absolute positioning tweek see top comment in css
    #$('.absolute-wrapper').toggleClass('slide-in');
    return
  # Remove menu for searching
  $('#search-trigger').click ->
    $('.navbar-nav').removeClass 'slide-in'
    $('.side-body').removeClass 'body-slide-in'
    #/ uncomment code for absolute positioning tweek see top comment in css
    #$('.absolute-wrapper').removeClass('slide-in');
    return
  return

  $('#sortable1, #sortable2, #sortable3').sortable(connectWith: [ '.connectedSortable' ]).disableSelection()
  $('#tabs').accordion()