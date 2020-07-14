abstract class ErrorObserver {
    protected subject: ErrorSubject;

    constructor(subject: ErrorSubject) {
        this.subject = subject;
        this.subject.attach(this);
    }

    public abstract error(): void;
}

class ErrorByEmailObserver extends ErrorObserver {
    constructor(subject: ErrorSubject) {
        super(subject);
    }

    public error(): void {
        console.log('Send email here');
        console.log(this.subject.error);
    }
}

class WriteErrorObserver extends ErrorObserver {
    constructor(subject: ErrorSubject) {
        super(subject);
    }

    public error(): void {
        console.log('Write error here');
        console.log(this.subject.error);
    }
}

class ErrorSubject {
    private _observers: ErrorObserver[];
    private _error: string;

    constructor() {
        this._observers = [];
        this._error = ''
    }

    get error(): string {
        return this._error;
    }

    set error(error: string) {
        this._error = error;
        this.notifyAllObservers();
    }

    public attach(observer: ErrorObserver): void {
        this._observers.push(observer);
    }

    private notifyAllObservers(): void {
        for (let index = 0; index < this._observers.length; index++) {
            const element = this._observers[index];
            element.error();          
        }
    }
}

export { ErrorObserver, ErrorSubject, ErrorByEmailObserver, WriteErrorObserver }