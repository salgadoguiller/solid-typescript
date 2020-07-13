import { User, UserData } from "./user";

class UserDocument {
    private user: User;

    constructor(userData: UserData) {
        this.user = userData.get();
    }

    public index(): boolean {
        console.log('Index user document here');
        console.log(this.user.profileId);

        return true;
    }
}

export { UserDocument }