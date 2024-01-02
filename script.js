$(document).ready(function () {
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));

  function updateTimeBlocks(){
    var currentHour = dayjs().hour();

  $('.time-block').each(function() {
    var blockHour = parseInt($(this).attr('id').replace('hour-', ''), 10);

    $(this).removeClass( 'past present future');

    if (blockHour < currentHour) {
      $(this).addClass('past');
    } else if (blockHour === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  });
  }

  updateTimeBlocks();
  setInterval(updateTimeBlocks, 60 * 1000);


  $('.saveBtn').click(function() {
    var hourId = $(this).parent().attr('id')
    var eventText = $(this).siblings('.description').val();
  
  localStorage.setItem(hourId, eventText)

  var confirmationMessage = $('<div class="confirmation-message">Appointment Added to localStorage ✔️ </div>');
  $(this).parent().append(confirmationMessage)
  setTimeout(function(){
    confirmationMessage.fadeOut('slow', function() {
      $(this).remove();
    });
  }, 3000);
}); 

$('.time-block').each(function() {
  var hourId = $(this).attr('id');
  var savedEvent = localStorage.getItem(hourId);

  if (savedEvent) {
    $(this).find('.description').val(savedEvent);
  }
});
});
