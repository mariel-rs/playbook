// repo object
const repo = {
    name: "MyRepo",
    author: "mariel-rs",
    language: "JavaScript",
    numberOfCommits: 26,
    stars: 1,
    forks: 1,
    issues_open: 0,
    issues_close: 2,
    getTotalIssues: function() { 
        return `Total issues: ${this.issues_close + this.issues_open}`
    },
    getGeneralInfo: function(){
        return `Repository ${this.name} was created by ${this.author}`
    }
}

// Issue object
const issue = {
    title: "Allocation is done even when airport is full",
    repositoryNameAssociated: "airport_allocation",
    status: "Open",
    numberOfComments: 2,
    labels: ["bug"],
    author: "mfa",
    dateCreated: new Date(2021, 11, 24, 10, 33, 30, 0),
    lastUpdated: new Date(),
    getTitleAndAuthor: function(){
        return `The issue ${this.title} was created by ${this.author}`
    },
    getGeneralInfo: function(){
        return `Issue: ${this.title}\n
        Status: ${this.status}\n
        Opened on: ${this.dateCreated}
        Last Updated: ${this.lastUpdated}`
    }
}

// pull request object
const pullRequest = {
    title: "Add new heuristic method to allocation",
    author: "mariel-rs",
    branchName: "experiments",
    dateCreated: new Date(),
    status: "open",
    repositoryNameAssociated: "airport_allocation",
    getStatus: function() {
        return this.repositoryNameAssociated
    },
    getTitleAndAuthor: function() {
        return `PR title:${this.title}\nPR author: ${this.author}`
    }
}