$("#add-burger").on("click",(e)=>{
    e.preventDefault();
    const burgerName = $("#burger_name").val().trim();
    console.log("BURGER NAME",burgerName);
    $.post("/api/burger", burgerName,(data)=>{
      
        console.log(data);
    });
    $("#burger_name").val("");
});