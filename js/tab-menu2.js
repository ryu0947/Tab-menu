$(function () {
  const tabItem = $(".tab-item");
  const tabInner = $(".tab-inner");

  tabItem.on("click", function () {
    tabItem.removeClass("active");
    $(this).addClass("active");

    tabInner.removeClass("active");

    $("#" + $(this).data("id")).addClass("active");
  });
});
