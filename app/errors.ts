export class InvalidCredentialsError extends Error {
    constructor() {
        super("Invalid email or password.");
        this.name = "InvalidCredentialsError";
    }
}

export class ServerError extends Error {
    constructor() {
        super("Something went wrong. Please try again later.");
        this.name = "ServerError";
    }
}

export class UnknownError extends Error {
    constructor() {
        super("Something went wrong. Please try again later.");
        this.name = "UnknownError";
    }
}