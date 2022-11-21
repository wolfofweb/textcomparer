document.getElementById("inputfile")
    .addEventListener("change", function () {
        var fr1 = new FileReader();
        fr1.onload = function () {
            document.getElementById("text1").textContent = fr1.result;
        };
        fr1.readAsText(this.files[0]);
    });
document.getElementById("inputfile2")
    .addEventListener("change", function () {
        var fr2 = new FileReader();
        fr2.onload = function () {
            document.getElementById("text2").textContent = fr2.result;
        };
        fr2.readAsText(this.files[0]);
    });
function comparer() {
    document.querySelector(".output-container").style.display = "block"
    var dmp = new diff_match_patch();
    var text1 = document.getElementById("text1").textContent;
    var text2 = document.getElementById("text2").textContent;
    var d = dmp.diff_main(text1, text2);
    dmp.diff_cleanupEfficiency(d);
    var ds = dmp.diff_prettyHtml(d);
    document.querySelector(".output").innerHTML = ds;
}