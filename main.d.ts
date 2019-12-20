declare namespace WebOSTVLibrary {
    /**
     * Make all properties in T optional
     */
    type Partial<T> = {
        [P in keyof T]?: T[P];
    };

    interface RequestParams<T> {
        onSuccess: (result: T) => any;
        onFailure: (error: RequestErrorObject) => any;
    }

    interface RequestErrorObject {
        errorCode: string;
        errorText: string;
    }

    /**
     * Construct a type with a set of properties K of type T
     */
    interface ObjectValue {
        [k: string]: any;
    }
}