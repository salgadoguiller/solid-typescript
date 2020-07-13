interface User {
    about: string;
    app: string;
    badges: string[];
    collaborationInterests: string[];
    department: string;
    docId: string;
    email: string;
    englishProficiency: string;
    fieldOfStudy: string;
    firstName: string;
    followers: string[];
    following: string[];
    highestCredential: string;
    inLanguageBuddies: boolean;
    interests: number[];
    isOffice365: boolean;
    language: string;
    languageShort: string;
    lastName: string;
    locationEn: string;
    locationEs: string;
    locationPt: string;
    locationId: number;
    nativeLanguages: string[];
    passportActive: boolean;
    phone: string;
    picture: string;
    profileId: string;
    profilePrivacy: string;
    regionEn: string;
    regionEs: string;
    regionPt: string;
    role: string;
    skillsLanguages: string[];
    stamps: string[];
    university: string;
    universityAcronym: string;
    universityName: string;
    workExperience: string[];
}

interface UserData {
    get(): User;
}

class UserDataFromRequest implements UserData {
    private profileId: string;

    constructor(profileId: string) {
        this.profileId = profileId;
    }

    public get(): User {
        console.log(`Request user data <${this.profileId}> here`);
        return {
            'about': 'Hello',
            'app': 'PXA5IVtq9QRwWQKduJKTQSdI70EvhFj8w5ql3UgI',
            'badges': [],
            'collaborationInterests': [
                'TEACHING_PROJECTS',
                'RESEARCH_PROJECTS',
                'MENTOR'
            ],
            'department': 'Computer Science',
            'docId': '846eab98-0950-4da3-84c8-ff72d7fae97f',
            'email': 'cristian.turcios@laureate.net',
            'englishProficiency': '',
            'fieldOfStudy': 'Computer science',
            'firstName': 'Cristian',
            'followers': [
                '9651d769-4e32-413c-b19a-bd42d998bfc6',
                '65434b0f-14a6-434b-96f1-e490542b5160',
                '50911353-eee0-4ba8-b61d-b32fb846acbc',
                '23efc1ef-bc52-42bd-9a50-d21c9a82d067',
                '9f29b961-53d5-49ac-bc39-58fe95be270e',
                '8b22e54a-44d4-45a2-9217-db462501b64f',
                'cdb2cc6a-b87b-4f78-aff5-c3138021ffcc',
                'c28c37e0-8329-4d66-b83f-2da71f56ebc6',
                'f746b49b-3b89-4832-be3f-441e584c7a2a'
            ],
            'following': [
                'e4a7f311-69b8-42f4-b49a-78d17819b7aa',
                'e2cfb87f-13a6-4f5f-bf54-e52a2d9503f0',
                '5edad98f-4e39-4538-b49a-86b1f160dc21',
                '9959ef2d-1293-41fa-bf97-2b530dd8404c',
                '16e5a1bb-8344-462f-a68a-1eb7daa83218',
                'eaf745dc-d102-43f0-95f5-45f96ae784c5',
                '7eb4d5fb-c11f-4c7a-9e4b-27c3179b29c8',
                'ebde4466-cd2d-4f1c-95d1-7fbbce0af834',
                '65434b0f-14a6-434b-96f1-e490542b5160',
                '9f29b961-53d5-49ac-bc39-58fe95be270e',
                'c28c37e0-8329-4d66-b83f-2da71f56ebc6'
            ],
            'highestCredential': 'MASTER',
            'inLanguageBuddies': true,
            'interests': [
                36,
                34,
                9,
                10,
                124,
                121,
                116,
                49,
                141
            ],
            'isOffice365': true,
            'language': 'English',
            'languageShort': 'en',
            'lastName': 'Turcios',
            'locationEn': 'Italy',
            'locationEs': 'Italia',
            'locationPt': 'Itália',
            'locationId': 13,
            'nativeLanguages': [
                'Arabic_Egyptian_Spoken',
                'Arabic_North_Levantine_Spoken'
            ],
            'passportActive': true,
            'phone': '+504 97354332',
            'picture': 'https://lh3.googleusercontent.com/DuILWqjfsfM2ZI-azo2iUi2egt1Wac0CZvcROKEEcKlniG1kJ7BqFG1ao1fhZ9l0HYYaCkP42cK5Cou2zwnfo7_U3_wi91DvwxI',
            'profileId': '846eab98-0950-4da3-84c8-ff72d7fae97f',
            'profilePrivacy': 'private',
            'regionEn': 'Europe',
            'regionEs': 'Europa',
            'regionPt': 'Europa',
            'role': 'ALUMNI',
            'skillsLanguages': [
                'Arabic_Egyptian_Spoken',
                'Arabic_Moroccan_Spoken',
                'Arabic_Saidi_Spoken',
                'Arabic_Tunisian_Spoken',
                'Arabic_Najdi_Spoken',
                'Arabic_North_Levantine_Spoken',
                'Arabic_Mesopotamian_Spoken'
            ],
            'stamps': [
                'connections'
            ],
            'university': '13',
            'universityAcronym': 'Domus',
            'universityName': 'Domus Academy',
            'workExperience': [
                'Passport Created',
                'sdfg',
                'prueba'
            ]
        };
    }
}

class UserDataFromFile implements UserData {
    private profileId: string;

    constructor(profileId: string) {
        this.profileId = profileId;
    }

    public get(): User {
        console.log(`Load user data <${this.profileId}> here`);
        return {
            'about': 'Hello',
            'app': 'PXA5IVtq9QRwWQKduJKTQSdI70EvhFj8w5ql3UgI',
            'badges': [],
            'collaborationInterests': [
                'TEACHING_PROJECTS',
                'RESEARCH_PROJECTS',
                'MENTOR'
            ],
            'department': 'Computer Science',
            'docId': '846eab98-0950-4da3-84c8-ff72d7fae97f',
            'email': 'cristian.turcios@laureate.net',
            'englishProficiency': '',
            'fieldOfStudy': 'Computer science',
            'firstName': 'Cristian',
            'followers': [
                '9651d769-4e32-413c-b19a-bd42d998bfc6',
                '65434b0f-14a6-434b-96f1-e490542b5160',
                '50911353-eee0-4ba8-b61d-b32fb846acbc',
                '23efc1ef-bc52-42bd-9a50-d21c9a82d067',
                '9f29b961-53d5-49ac-bc39-58fe95be270e',
                '8b22e54a-44d4-45a2-9217-db462501b64f',
                'cdb2cc6a-b87b-4f78-aff5-c3138021ffcc',
                'c28c37e0-8329-4d66-b83f-2da71f56ebc6',
                'f746b49b-3b89-4832-be3f-441e584c7a2a'
            ],
            'following': [
                'e4a7f311-69b8-42f4-b49a-78d17819b7aa',
                'e2cfb87f-13a6-4f5f-bf54-e52a2d9503f0',
                '5edad98f-4e39-4538-b49a-86b1f160dc21',
                '9959ef2d-1293-41fa-bf97-2b530dd8404c',
                '16e5a1bb-8344-462f-a68a-1eb7daa83218',
                'eaf745dc-d102-43f0-95f5-45f96ae784c5',
                '7eb4d5fb-c11f-4c7a-9e4b-27c3179b29c8',
                'ebde4466-cd2d-4f1c-95d1-7fbbce0af834',
                '65434b0f-14a6-434b-96f1-e490542b5160',
                '9f29b961-53d5-49ac-bc39-58fe95be270e',
                'c28c37e0-8329-4d66-b83f-2da71f56ebc6'
            ],
            'highestCredential': 'MASTER',
            'inLanguageBuddies': true,
            'interests': [
                36,
                34,
                9,
                10,
                124,
                121,
                116,
                49,
                141
            ],
            'isOffice365': true,
            'language': 'English',
            'languageShort': 'en',
            'lastName': 'Turcios',
            'locationEn': 'Italy',
            'locationEs': 'Italia',
            'locationPt': 'Itália',
            'locationId': 13,
            'nativeLanguages': [
                'Arabic_Egyptian_Spoken',
                'Arabic_North_Levantine_Spoken'
            ],
            'passportActive': true,
            'phone': '+504 97354332',
            'picture': 'https://lh3.googleusercontent.com/DuILWqjfsfM2ZI-azo2iUi2egt1Wac0CZvcROKEEcKlniG1kJ7BqFG1ao1fhZ9l0HYYaCkP42cK5Cou2zwnfo7_U3_wi91DvwxI',
            'profileId': '846eab98-0950-4da3-84c8-ff72d7fae97f',
            'profilePrivacy': 'private',
            'regionEn': 'Europe',
            'regionEs': 'Europa',
            'regionPt': 'Europa',
            'role': 'ALUMNI',
            'skillsLanguages': [
                'Arabic_Egyptian_Spoken',
                'Arabic_Moroccan_Spoken',
                'Arabic_Saidi_Spoken',
                'Arabic_Tunisian_Spoken',
                'Arabic_Najdi_Spoken',
                'Arabic_North_Levantine_Spoken',
                'Arabic_Mesopotamian_Spoken'
            ],
            'stamps': [
                'connections'
            ],
            'university': '13',
            'universityAcronym': 'Domus',
            'universityName': 'Domus Academy',
            'workExperience': [
                'Passport Created',
                'sdfg',
                'prueba'
            ]
        };
    }
}

class UserDataFromDB implements UserData {
    private profileId: string;

    constructor(profileId: string) {
        this.profileId = profileId;
    }

    public get(): User {
        console.log(`Query user data <${this.profileId}> here`);
        return {
            'about': 'Hello',
            'app': 'PXA5IVtq9QRwWQKduJKTQSdI70EvhFj8w5ql3UgI',
            'badges': [],
            'collaborationInterests': [
                'TEACHING_PROJECTS',
                'RESEARCH_PROJECTS',
                'MENTOR'
            ],
            'department': 'Computer Science',
            'docId': '846eab98-0950-4da3-84c8-ff72d7fae97f',
            'email': 'cristian.turcios@laureate.net',
            'englishProficiency': '',
            'fieldOfStudy': 'Computer science',
            'firstName': 'Cristian',
            'followers': [
                '9651d769-4e32-413c-b19a-bd42d998bfc6',
                '65434b0f-14a6-434b-96f1-e490542b5160',
                '50911353-eee0-4ba8-b61d-b32fb846acbc',
                '23efc1ef-bc52-42bd-9a50-d21c9a82d067',
                '9f29b961-53d5-49ac-bc39-58fe95be270e',
                '8b22e54a-44d4-45a2-9217-db462501b64f',
                'cdb2cc6a-b87b-4f78-aff5-c3138021ffcc',
                'c28c37e0-8329-4d66-b83f-2da71f56ebc6',
                'f746b49b-3b89-4832-be3f-441e584c7a2a'
            ],
            'following': [
                'e4a7f311-69b8-42f4-b49a-78d17819b7aa',
                'e2cfb87f-13a6-4f5f-bf54-e52a2d9503f0',
                '5edad98f-4e39-4538-b49a-86b1f160dc21',
                '9959ef2d-1293-41fa-bf97-2b530dd8404c',
                '16e5a1bb-8344-462f-a68a-1eb7daa83218',
                'eaf745dc-d102-43f0-95f5-45f96ae784c5',
                '7eb4d5fb-c11f-4c7a-9e4b-27c3179b29c8',
                'ebde4466-cd2d-4f1c-95d1-7fbbce0af834',
                '65434b0f-14a6-434b-96f1-e490542b5160',
                '9f29b961-53d5-49ac-bc39-58fe95be270e',
                'c28c37e0-8329-4d66-b83f-2da71f56ebc6'
            ],
            'highestCredential': 'MASTER',
            'inLanguageBuddies': true,
            'interests': [
                36,
                34,
                9,
                10,
                124,
                121,
                116,
                49,
                141
            ],
            'isOffice365': true,
            'language': 'English',
            'languageShort': 'en',
            'lastName': 'Turcios',
            'locationEn': 'Italy',
            'locationEs': 'Italia',
            'locationPt': 'Itália',
            'locationId': 13,
            'nativeLanguages': [
                'Arabic_Egyptian_Spoken',
                'Arabic_North_Levantine_Spoken'
            ],
            'passportActive': true,
            'phone': '+504 97354332',
            'picture': 'https://lh3.googleusercontent.com/DuILWqjfsfM2ZI-azo2iUi2egt1Wac0CZvcROKEEcKlniG1kJ7BqFG1ao1fhZ9l0HYYaCkP42cK5Cou2zwnfo7_U3_wi91DvwxI',
            'profileId': '846eab98-0950-4da3-84c8-ff72d7fae97f',
            'profilePrivacy': 'private',
            'regionEn': 'Europe',
            'regionEs': 'Europa',
            'regionPt': 'Europa',
            'role': 'ALUMNI',
            'skillsLanguages': [
                'Arabic_Egyptian_Spoken',
                'Arabic_Moroccan_Spoken',
                'Arabic_Saidi_Spoken',
                'Arabic_Tunisian_Spoken',
                'Arabic_Najdi_Spoken',
                'Arabic_North_Levantine_Spoken',
                'Arabic_Mesopotamian_Spoken'
            ],
            'stamps': [
                'connections'
            ],
            'university': '13',
            'universityAcronym': 'Domus',
            'universityName': 'Domus Academy',
            'workExperience': [
                'Passport Created',
                'sdfg',
                'prueba'
            ]
        };
    }
}

class UserDataFactory {

    static getUserData(dataFrom: string, profileId: string): UserData | undefined {
        let userData: UserData | undefined;
        switch (dataFrom) {
            case 'request':
                userData = new UserDataFromRequest(profileId);
                break;
            case 'file':
                userData = new UserDataFromFile(profileId);
                break;
            case 'db':
                userData = new UserDataFromDB(profileId);
                break;
            default:
                userData = undefined;
                break;
        }

        return userData;
    }
}

export { User, UserData, UserDataFromRequest, UserDataFromFile, UserDataFromDB, UserDataFactory };