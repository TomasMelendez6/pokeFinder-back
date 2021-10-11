class Pokemon {
    constructor(id, name, height, weight, sprites, types){
        this.id = id;
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.sprites = sprites;
        this.types = types;
    }

    jsonConverter(){
        let json = {
            id: this.id,
            name: this.name,
            height: this.height,
            weight: this.weight,
            sprites: this.sprites,
            types: this.types
        }
        return json
    }
}

export default {
        Pokemon
    }