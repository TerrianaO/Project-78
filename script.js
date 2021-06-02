$(".click").click(function() {
    $(".results *").hide();
    $(".results").show();
    $("h2").show();
    let first = $(".one").val();
    let second = $(".two").val();
    console.log(first);
    console.log(second);
    whatSnacker(first, second);
});

$(".two").change(function() {
    let calories = $(".two").val();
    if (calories >= 1000) {
        $(".two").val(1000);
    } else if (calories <= 100) {
        $(".two").val(100);
    }
});

function whatSnacker(flavor, calories) {
    console.log(flavor, calories);
    if (flavor === "" || calories === "") {
        $(".results").text("Oops! There Was An Error. Try Again :/");
        $("h2").hide("");
        console.log("ok");
        
    } else if (flavor === "spicy" && calories <= 300) {
        $(".chap").show();
        $("h2").text("You are an odd one since you chose " + flavor + " and " + calories + " calories. " + "You are chapulines!");

    } else if (flavor === "spicy" && calories >= 300) {
        $(".chips-apple").show();
        $(".chips").show();
        $(".apple").show();
        $("h2").text("You are an odd one since you chose " + flavor + " and " + calories + " calories. " + "You are hot chapplesauce!");

    } else if (flavor === "sweet" && calories <= 300) {
        $(".cookies").show();
        $("h2").text("You are like a baby one since you chose " + flavor + " and " + calories + " calories. " + "You are Gerber Puff!");

    } else if (flavor === "sweet" && calories >= 300) {
        $(".soda-gum").show();
        $(".gum").show();
        $(".soda").show();
        $("h2").text("You are a sugar rush since you chose " + flavor + " and " + calories + " calories. " + "You are Gumda!");
        
    } else {
        $(".results").text("An Error Occured. You have to choose Spicy Or Sweet!");
    }
}