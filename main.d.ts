/**
 * Make all properties in T optional
 */
type PartialObject<T> = {
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
