function skillsMember() {
    var member = document.getElementById('member').value;
    var member = member.toLowerCase();
    if (member == "developer") {
        window.location.href = "developer.html";
    } else if (member == "designer") {
        window.location.href = "designer.html";
    } else if (member == "tester") {
        window.location.href = "tester.html";
    } else {
        alert("Please enter a valid member");
    }
}