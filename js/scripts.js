function Ticket(movie, price) {
  this.movie = movie;
  this.price = price;
}

function Movie(filmTitle) {
  this.filmTitle = filmTitle;
  this.showtimes = [];
}

function Showtime(showtime) {
  this.showtime = showtime;
}


function resetFields() {
  $('input#movie-title').val("");
  $('input#movie-time').val("");
}

$(document).ready(function() {
  $("#add-movie").click(function() {
    $("#new-movie").show();

    $("#add-showtime").click(function() {
      var newShowtime = ('<div class="new-showtime">' +
                          '<div class="form-group">' +
                            '<label for="movie-time">Show Time</label>' +
                            '<input type="time" id="movie-time" class="form-control" required="true">' +
                          '</div>' +
                        '</div>');
      $(newShowtime).appendTo("#new-showtimes");
    });
  });

  $('form#new-movie-form').submit(function(event) {
    event.preventDefault();

    var inputtedMovieTitle = $('input#movie-title').val();

    var newMovie = new Movie(inputtedMovieTitle);

    $('.new-showtime').each(function() {
      var inputtedShowtime = $(this).find('input#movie-time').val();
      var newShowtime = new Showtime(inputtedShowtime);
      newMovie.showtimes.push(newShowtime);

      $('#movie-dropdown').append("<option value='" + newMovie.filmTitle + "'>" + newMovie.filmTitle + " - " + newShowtime.showtime + "</option>");
    });

    resetFields();
  });

  $('form#purchase').submit(function(event) {
    event.preventDefault();

    var inputtedMovie = $(this).find('#movie-dropdown option:selected').val();
    var price = parseInt($(this).find('#customer-type option:selected').val());

    var newTicket = new Ticket(inputtedMovie, price);
    $('#price-due').append(newTicket.price);
    $('#movie-showtime').append(newTicket.movie);

  });
});
