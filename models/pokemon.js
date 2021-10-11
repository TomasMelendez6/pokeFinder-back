class Pokemon {
    constructor(id, name, height, weight, pic1, pic2){
        this.id = id;
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.pic1 = pic1;
        this.pic2 = pic2;
    }

    jsonConverter(){
        let json = {
            id: this.id,
            name: this.name,
            height: this.height,
            weight: this.weight,
            pic1: this.pic1,
            pic2: this.pic2
        }
        return json
    }
}

export default {
        Pokemon
    }