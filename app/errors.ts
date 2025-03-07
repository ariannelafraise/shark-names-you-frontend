export class InvalidCredentialsError extends Error {
    constructor() {
        super("Nom d'utilisateur ou mot de passe invalide");
        this.name = "InvalidCredentialsError";
    }
}

export class ServerError extends Error {
    constructor() {
        super("Une erreur s'est produite");
        this.name = "ServerError";
    }
}

export class UnknownError extends Error {
    constructor() {
        super("Une erreur s'est produite");
        this.name = "UnknownError";
    }
}