function StartClassification() {
    navigator.mediaDevices.getUserMedia({ audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/1nE00_yPz/"modelready);
}

function modelready() {
    classifyer.classy(gotresults);
}

function gotresults(error,results) {
    console.log["gotresults"];
}