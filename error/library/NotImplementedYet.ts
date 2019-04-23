import { BaseError } from "../BaseError";
import { ILibraryError } from "../../interface/ILibraryError";

export class NotIMplementedYet extends BaseError {
    constructor(code: string, message: string, target: string, details: Array<ILibraryError>) {
        super(code, message, target, details);
        this.code = code;
        this.message = message;
        this.target = target;
        this.details = details;
    }
}