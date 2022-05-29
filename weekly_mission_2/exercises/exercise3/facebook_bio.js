/*
const bio = {
    intro: "There's much more than meets the eye",
    details: {
        work: null,
        education: "Xavier school for gifted youngsters",
        currentCity: "Salem",
        hometown: null,
        relationshipStatus: "It's complicated"
    },
    hobbies: ["music", "costumes", "fighting Magneto"],
    featured: []
}
*/

class FacebookBio{
    constructor(intro){
        this.intro = intro,
        this.details = {
            work: null,
            education: null,
            currentCity: null,
            hometown: null,
            relationshipStatus: null
        },
        this.hobbies = null,
        this.featured = null
    }

    set addDetails(details){
        this.details.work = details.work,
        this.details.education = details.education,
        this.details.currentCity = details.currentCity,
        this.details.hometown = details.hometown,
        this.details.relationshipStatus = details.relationshipStatus
    }

    set addHobbies(hobbies){
        this.hobbies = hobbies
    }

    set addFeaturedPics(featured){
        this.featured = featured
    }
}

const ravenBio = new FacebookBio("I love costumes")
ravenBio.addDetails = {
    work: "kicking bad people as$es",
    education: "Xavier Institute",
    currentCity: "Somewhere",
    hometown: "meh",
    relationshipStatus: "It's complicated"
}
ravenBio.addHobbies = ["trying new costumes", "thug life"]

console.log(ravenBio)