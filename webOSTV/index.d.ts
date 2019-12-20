/// <reference path="../main.d.ts" />

interface WebOS {
    /**
     * A member representing the build version of the webOSTV.js library
     */
    readonly libVersion: string;
    /**
     * A member representing the platform identification of webOS variants
     */
    readonly platform: {
        /**
         * Indicate whether the platform identification is webOS TV.
         * If the platform identification is not webOS TV, undefined is returned.
         */
        tv: true | undefined;
    };
    readonly keyboard: {
        /**
         * Checks whether the virtual keyboard is visible.
         *
         * @returns Indicates whether the virtual keyboard is displayed or hidden
         * - true: the virtual keyboard is displayed
         * - false: the virtual keyboard is hidden
         */
        isShowing(): boolean;
    };
    readonly service: {
        /**
         * Creates and sends a service request to the system of the webOS TV
         *
         * @param uri
         * The service URI.
         * It accepts the normal service URI format, as well as the extended format with the service method included.
         *
         * @param params
         * Service request options.
         *
         * @returns Resulting request object. This object can be used to cancel subscriptions.
         */
        request(uri: string, params?: ServiceRequestParams): any;
    };
    /**
     * Returns the device-specific information regarding the TV model,
     * OS version, SDK version, screen size, and resolution
     *
     * @returns JSON object containing the device information details
     */
    deviceInfo(callback: (deviceInfo: DeviceInfo) => any): void;
    /**
     * Returns an app ID of an app calling this method
     */
    fetchAppId(): string;
    /**
     * Returns the appinfo.json data of the caller app with a saved cache
     *
     * @param path An optional relative file path to read appinfo.json.
     * The file name (appinfo.json) must be included in the file path
     * - If your app is packaged into an IPK file, get the path using `fetchAppRootPath` method
     * - If your app is hosted by a server, the path will be the URL of the server
     * @returns The JSON object read from the app's appinfo.json file. If it is not found, undefined is returned.
     */
    fetchAppInfo(
        callback: (appInfo: ObjectValue | undefined) => any,
        path?: string
    ): void;
    /**
     * Returns the full URI path of the caller app
     *
     * @returns The app's URI path where the app is located
     */
    fetchAppRootPath(): string;
    /**
     * Emulates the back key of the remote controller to move backward 1 level
     */
    platformBack(): void;
    /**
     * Returns the system-specific information regarding country, service country, and timezone
     */
    systemInfo(): SystemInfo;
}

interface DeviceInfo {
    /**
     * The model name of the device in UTF-8 format.
     */
    modelName: string;
    /**
     * The model name of the device in ASCII format.
     */
    modelNameAscii: string;
    /**
     * The full name of OS firmware version.
     */
    version: string;
    /**
     * The subset of OS version: Major version number.
     */
    versionMajor: number;
    /**
     * The subset of OS version: Minor version number.
     */
    versionMinor: number;
    /**
     * The subset of OS version: Revision version number.
     */
    versionDot: number;
    /**
     * The webOS SDK version.
     */
    sdkVersion: string;
    /**
     * The screen width in pixels.
     */
    screenWidth: number;
    /**
     * The screen Height in pixels.
     */
    screenHeight: number;
    /**
     * Indicates whether the device supports Ultra HD resolution.
     * - true: The device supports Ultra HD resolution.
     * - false: The device does not support Ultra HD resolution.
     */
    uhd?: boolean;
}

interface ServiceRequestParams extends PartialObject<RequestParams<any>> {
    /**
     * The service method being called.
     */
    method?: string;
    /**
     * The JSON object of the request parameters to send.
     */
    parameters?: ObjectValue;
    /**
     * Indicates whether a subscription is desired for this request.
     * - true: Request the subscription.
     * - false: Not request the subscription.
     */
    subscribe?: boolean;
    /**
     * Indicates whether the request should resubscribe after a failure has occurred.
     * - true: Request the re-subscription.
     * - false: Not request the re-subscription.
     */
    resubscribe?: boolean;
}

interface ServiceRequestReturn {
    /**
     * The full-service request URI, including method name.
     */
    uri: string;
    /**
     * The JSON object of the request parameters to send.
     */
    params: ObjectValue;
    /**
     * Indicates whether a subscription is desired for this request.
     * - true: subscribed
     * - false: not subscribed
     */
    subscribe: boolean;
    /**
     * Indicates whether the request should resubscribe after a failure has occurred.
     * - true: resubscribed
     * - false: not resubscribed
     */
    resubscribe: boolean;
    /**
     * Cancels the service request and any associated subscription. No argument is required.
     */
    cancel(): void;
}

interface SystemInfo {
    /**
     * The country that TV broadcasts. If the value does not exist, undefined is returned
     */
    country?: string;
    /**
     * The country where the Smart service is provided. If the value does not exist, undefined is returned
     */
    smartServiceCountry?: string;
    /**
     * The time zone that TV broadcasts. If the value does not exist, undefined is returned
     */
    timezone?: string;
}

declare var webOS: WebOS;
