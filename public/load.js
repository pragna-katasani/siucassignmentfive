/* Multiple pages within a webpage JS code*/

$(document).ready(function () {
  $('a').click(function () {
    var selected = $(this);
    $('a').removeClass('active');
    $(selected).addClass('active');
  });
  var $a = $('.a'),
    $b = $('.b'),
    $c = $('.c'),
    $d = $('.d'),
    $e = $('.e'),
    $f = $('.f'),
    $g = $('.g'),
    $h = $('.h'),
    $i = $('.i')
  $home = $('.home'), $work = $('.work'), $study = $('.study'), $project = $('.project'), $table = $('.table'), $feedback = $('.feedback'), $game = $('.game'), $audio = $('.audio'), $timetable = $('.timetable');


  $work.fadeOut();
  $study.fadeOut();
  $project.fadeOut();
  $table.fadeOut();
  $audio.fadeOut();
  $feedback.fadeOut();
  $game.fadeOut();
  $timetable.fadeOut();


  $a.click(function () {
    $home.fadeIn();
    $work.fadeOut();
    $study.fadeOut();
    $project.fadeOut();
    $table.fadeOut();
    $audio.fadeOut();
    $feedback.fadeOut();
    $game.fadeOut();
    $timetable.fadeOut();
  });

  $b.click(function () {
    $home.fadeOut();
    $work.fadeIn();
    $study.fadeOut();
    $project.fadeOut();
    $table.fadeOut();
    $audio.fadeOut();
    $feedback.fadeOut();
    $game.fadeOut();
    $timetable.fadeOut();
  });

  $c.click(function () {
    $home.fadeOut();
    $work.fadeOut();
    $study.fadeIn();
    $project.fadeOut();
    $table.fadeOut();
    $audio.fadeOut();
    $feedback.fadeOut();
    $game.fadeOut();
    $timetable.fadeOut();
  });

  $d.click(function () {
    $home.fadeOut();
    $work.fadeOut();
    $study.fadeOut();
    $project.fadeIn();
    $table.fadeOut();
    $audio.fadeOut();
    $feedback.fadeOut();
    $game.fadeOut();
    $timetable.fadeOut();
  });

  $e.click(function () {
    $home.fadeOut();
    $work.fadeOut();
    $study.fadeOut();
    $project.fadeOut();
    $table.fadeIn();
    $audio.fadeOut();
    $feedback.fadeOut();
    $game.fadeOut();
    $timetable.fadeOut();
  });

  $h.click(function () {
    $home.fadeOut();
    $work.fadeOut();
    $study.fadeOut();
    $project.fadeOut();
    $table.fadeOut();
    $audio.fadeIn();
    $feedback.fadeOut();
    $game.fadeOut();
    $timetable.fadeOut();
  });

  $i.click(function () {
    $home.fadeOut();
    $work.fadeOut();
    $study.fadeOut();
    $project.fadeOut();
    $table.fadeOut();
    $audio.fadeOut();
    $feedback.fadeOut();
    $game.fadeOut();
    $timetable.fadeIn();
  });

  $g.click(function () {
    $home.fadeOut();
    $work.fadeOut();
    $study.fadeOut();
    $project.fadeOut();
    $table.fadeOut();
    $audio.fadeOut();
    $feedback.fadeOut();
    $timetable.fadeOut();
    $game.fadeIn();
    var error_game = document.getElementById("error_game");
    error_game.style.display = "none";
  });

  $f.click(function () {
    $home.fadeOut();
    $work.fadeOut();
    $study.fadeOut();
    $project.fadeOut();
    $table.fadeOut();
    $audio.fadeOut();
    $feedback.fadeIn();
    $timetable.fadeOut();
    $game.fadeOut();
    var error_message = document.getElementById("error_message");
    error_message.style.display = "none";

  });
});
