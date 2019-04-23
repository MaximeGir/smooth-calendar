export interface ILibraryError {
  /**
   * Error code, application specific
   */
  code?: string;

  /**
   * Error message to deliver
   */
  message?: string;

  /**
   * The element that failed
   */
  target?: string;

  /**
   * Including sub-errors
   */
  details?: Array<ILibraryError>;

  /**
   * Add a detail
   */
  addDetail(detail: ILibraryError): void;

  /**
   * Add details
   */
  addDetails(details: Array<ILibraryError>): void;
}