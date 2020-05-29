declare namespace WebOSTV {
    interface RequestParams<TSuccessData = any, TErrorData = Record<string, any>> {
        /**
         * The callback function called when the method succeeds.
         */
        onSuccess?(result: TSuccessData): any;
        /**
         * The callback function called when the method fails.
         */
        onFailure?(error: TErrorData & RequestErrorObject): any;
    }

    interface RequestErrorObject {
        errorCode: string;
        errorText: string;
    }
}
