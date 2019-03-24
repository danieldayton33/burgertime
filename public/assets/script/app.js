$(document).on("ready",function(){
    // $.get("/burgers",(data)=>{
    //     console.log(data);
    // });
    
$("#add-burger").on("click",(e)=>{
    e.preventDefault();
    const burgerName = $("#burger_name").val().trim();
    console.log("BURGER NAME",burgerName);
    const burgerObj ={
        burger_name: burgerName
    };
    $.post("/api/burger", burgerObj,(data)=>{
      
        console.log(data);
    });
    $("#burger_name").val("");
    location.reload("/");
});
});
$(".devour").on("click", function(e) {
    console.log($(this))
    const burger = {
        id: $(this).attr("data-id"),
        // devour: $(this).attr("data-eaten"),
        };
    console.log("ID", burger);
    $.ajax("/api/burger", {
        type: "PUT",
        data: burger
    }).then((data) =>{
        console.log(data);
        location.reload("/")
    });
});