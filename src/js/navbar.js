let navtoggler = function(item) {
  // let tabvalue = $(item).attr("tab-value");
  // $(".content").find();
  $(".content").hide();
  $(".content img").css("opacity", "0");
  $(".content img").css("right", "0");

  switch (item) {
    case "#home":
      $(".main section").css("border-radius", "0 0 33px 33px");
      $(".main section").css("width", "90vw");
      $(".main section").css("margin", "0 5vw");
      setTimeout(() => {
        $(".content:nth-of-type(1)").show("slide");
      }, 500);
      break;

    case "#about":
      $(".main section").css("border-radius", "0 100px 0% 100px");
      $(".main section p").css("opacity", "0");
      $(".main section p span").hide();
      $(".content:nth-of-type(2)").show("slide");
      setTimeout(() => {
        $(".content:nth-of-type(2) h2").css("opacity", "0");
      }, 500);
      setTimeout(() => {
        $(".content:nth-of-type(2)").show("slide");
        $(".content img").css("opacity", "1");
        $(".content img").css("right", "10vw");
        $(".main section p").css("opacity", "1");
        $(".main section p span").show("slide", 1000);
      }, 1000);
      setTimeout(() => {
        $(".content:nth-of-type(2) h2").css("opacity", "1");
      }, 1200);
      break;

    case "#projects":
      $(".main section").css("border-radius", "100px 0% 100px 0");
      setTimeout(() => {
        $(".content:nth-of-type(3)").show("slide");
      }, 500);
      break;

    case "#contact":
      $(".main section").css("border-radius", "3in 3in 3in 0");
      setTimeout(() => {
        $(".content:nth-of-type(4)").show("slide");
      }, 500);
      break;

    default:
      break;
  }
};