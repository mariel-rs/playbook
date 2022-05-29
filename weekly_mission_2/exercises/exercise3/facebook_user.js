class FacebookUser{
    constructor(firstName, lastName){
        this.firstName = firstName,
        this.lastName = lastName,
        this.friends = 0,
        this.media = {
            photos: 0,
            videos: 0
        }
    }

    getUserSummary(){
        return `${this.firstName} ${this.lastName} has ${this.friends} friends`
    }

    getMediaSummary(){
        return `Photos: ${this.media.photos}\nVideos: ${this.media.videos}`
    }

    get username(){
        return this.firstName + this.lastName
    }

    set updateFriends(friends){
        // Update friend counter with the latest accepted friend requests
        this.friends += friends
    }

    set addMedia(newMedia){
        // Update the media with the latest uploads
       Object.keys(newMedia).forEach((key) => 
       this.media[key] += newMedia[key])
    }
}

const ravenFb = new FacebookUser("Raven", "Darkholme")
ravenFb.updateFriends = 10 // Add her Xmen pals
ravenFb.addMedia = {photos: 3, videos: 2} // Add a few pics and vids
console.log(ravenFb.getUserSummary())
console.log(ravenFb.getMediaSummary())