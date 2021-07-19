export class Quote {
    showDescription: boolean;
    constructor(public quote:string,public author:string , public posted:string,  public genre:string,public PostDate:  Date ,public upvote:number){
        this.showDescription = false;
        
    }
} 
