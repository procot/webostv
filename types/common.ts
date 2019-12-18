import { DRMAgentPromised } from './DRMAgent';
import { WebOSPromised } from './WebOS';
import { WebOSDevPromised } from './WebOSDev';

/**
 *  Type of argument in scheme
 */
export type SchemeArgType = 'successCallback' | 'errorCallback' | 'value' | 'objectWithCallback';

export interface SchemeArg {
  type: SchemeArgType;
  successName?: string;
  errorName?: string;
}

export interface SchemeField<T> {
  type: 'field' | 'method';
  returnType?: 'object' | 'promise' | 'original';
  value?: Scheme<T>;
  args?: SchemeArg[];
  mapAfter?: Callback;
}

/**
 * Scheme of any object
 */
export type Scheme<T = any> = {
  [k in keyof T]: SchemeField<T[k]>;
};

export type WebOSScheme = Scheme<WebOSPromised>;
export type WebOSDevScheme = Scheme<WebOSDevPromised>;
export type DRMAgentScheme = Scheme<DRMAgentPromised>;

/**
 * Construct a type with a set of properties K of type T
 */
export interface ObjectValue {
  [k: string]: any;
}

export type Callback = (...args: any[]) => any;

export interface RequestParams<T> {
    onSuccess: (result: T) => any;
    onFailure: (error: RequestErrorObject) => any;
}

export interface RequestErrorObject {
    errorCode: string;
    errorText: string;
}
