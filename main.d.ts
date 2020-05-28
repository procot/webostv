interface RequestParams<T> {
    /**
     * The callback function called when the method succeeds.
     */
    onSuccess(result: T): any;
    /**
     * The callback function called when the method fails.
     */
    onFailure(error: RequestErrorObject): any;
}

interface RequestErrorObject {
    errorCode: string;
    errorText: string;
}
