let Human = function (name,gender,weight) {
    this.name = name;
    this.gender = gender;
    this. weight = weight;

    this.humanSay = function () {
        console.log("Hello");
    }

    this.eatApple = function (apple) {
        if (apple.weight>0){
            apple.weight--;
            this.weight++;
            console.log(this.weight);
        }
    }
    this.checkWeightApple = function (apple) {
        console(apple.weight);
    }

    this.checkHuman = function (human) {
        console.log(human.name+","+human.gender+","+human.weight);
    }
}