import { ILibraryError } from "../interface/ILibraryError";

export class BaseError extends Error implements ILibraryError {
    code: string;
    message: string;
    target: string;
    details: Array<ILibraryError>;
    constructor(code: string, message: string, target: string, details: Array<ILibraryError>) {

        super();
        this.code = code;
        this.message = message;
        this.target = target;
        this.details = details;

    }

    public addDetail(detail: ILibraryError): void {
        this.details.push(detail);
    }

    public addDetails(details: Array<ILibraryError>): void {
        this.details.push(...details);
    }
}