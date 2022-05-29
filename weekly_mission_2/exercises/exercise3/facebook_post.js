class FacebookPost{
    constructor(text, feeling, location, media){
        this.datePublished = new Date(),
        this.text = text,
        this.feeling = feeling,
        this.background = "plain-white",
        this.location = location,
        this.media = media
    }

    getPostSummary(){
        return `Posted on ${this.datePublished} with ${this.media.length} photos`
    }

    getMorePostDetails(){
        return `Feeling: ${this.feeling}\nLocation: ${this.location}`
    }

    set changeBackground(background){
        this.background = background
    }

    set changeLocation(location){
        this.location = location
    }
}

const ravenPost = new FacebookPost("Hi Charles!", "happy", "Xavier Institute", ["pic1", "pic2"])
ravenPost.changeBackground = "blue"
console.log(ravenPost.getPostSummary())
console.log(ravenPost.getMorePostDetails())