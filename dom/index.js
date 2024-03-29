// defines the function when button is clicked
$(".btn").on("click", checkPass);


// if users click on "Enter" it tries to verify the code
$(document).on("keydown", function(evt){
    if (evt.key === "Enter") {
        checkPass();
    }
});

// function to verify the code
function checkPass() {
    if ($("input").val() === "16252ninos") {
        //location.href="https://www.google.com";
        $(".main").slideUp();
        $(".middle").removeClass("d-none");
    } else {
        alert("Wrong code.");
    } 
};