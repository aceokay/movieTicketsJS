function Movie(filmTitle) {
  this.filmTitle = filmTitle;
  this.showtimes = [];
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
});
