import { User, UserData } from "./user";

interface Doc {
    index(): boolean;
}

class UserDocument implements Doc {
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

class ProxyUserDocument implements Doc {
    private userData: UserData;

    constructor(userData: UserData) {
        this.userData = userData;
    }
    
    public index(): boolean {
        if (!this.userData.isPublic()) {
            return false;
        }

        const realUserDocument = new UserDocument(this.userData);
        return realUserDocument.index();
    }
}

export { Doc, UserDocument, ProxyUserDocument }