export class Patient {
    private firstname: string;
    private lastname: string;

    public getFirstName(){
        return this.firstname;
    }
    public setFirstName(fName){
        this.firstname = fName;
    }

    public getLastName(){
        return this.lastname;
    }
    public setLastName(lName){
        this.lastname = lName;
    }
}