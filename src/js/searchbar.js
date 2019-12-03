$(document).ready(function() {
  searchevent();
  $(".searchbar input")
    .on("focus", () => {
      $(".searchbar").off();
      $(".searchbar i").addClass("fa-spin");
    })
    .on("blur", () => {
      $(".searchbar input").hide("slide");
      $(".searchbar i").removeClass("fa-spin");
      searchevent();
    });
  $(".searchbar button").on({
    click: () => {
      dostartsearch();
    }
  });
  $(".searchbar input").on("keypress", e => {
    if (e.which == 13) {
      dostartsearch();
    }
  });
});

let dostartsearch = function() {
  $(".searchbar i")
    .removeClass("fa-spin")
    .removeClass("fa-search");
  $(".searchbar i").addClass("fa-spinner fa-pulse");
  $(".searchbar input").hide("slide");
  $(".searchbar").off();
};

let searchevent = function() {
  $(".searchbar")
    .on("mousedown", () => {
      $(".searchbar input").show("slide");
    })
    .on("mouseleave", () => {
      $(".searchbar input").hide("slide");
    });
};
