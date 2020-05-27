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
        callback: (appInfo?: AppInfo) => any,
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

interface AppInfo {
    /**
     * The small app icon displayed for your app, 80x80 pixels, in PNG format.
     *
     * The file path must be relative to the appinfo.json file.
     */
    icon: string;
    /**
     * The app ID, i.e., "com.newco.app.myapp".
     *
     * Every app MUST have a unique ID, formed from reverse DNS naming conventions.
     * The launcher uses the ID to uniquely identify your app and displays it with the title.
     * The app ID is set once and cannot be changed after publishing the app.
     *
     * - Must create the ID only with lowercase letters (a-z), digits (0-9), minus signs, and periods.
     * It must be at least two characters long and must start with an alphanumeric character.
     *
     * - Cannot start with the following reverse domain names:
     * com.palm, com.webos, com.lge, com.palmdts
     *
     * - Start the ID with a reverse domain of the company/institution. (Recommended)
     *
     * - Finish the ID with the subdomain app.app-name. (Recommended)
     */
    id: string;
    /**
     * The large app icon displayed for your app, 130x130 pixels and should be in PNG format.
     *
     * The file path must be relative to the appinfo.json file.
     */
    largeIcon: string;
    /**
     * The launch point for your app.
     *
     * The file path must be relative to the appinfo.json file and needs to point to an HTML file. The default is index.html.
     */
    main: string;
    /**
     * The background image path to be shown while your app is loading.
     *
     * The path must be relative to the appinfo.json file. The file must be in PNG format, and the resolution should be 1920 x 1080.
     */
    splashBackground: string;
    /**
     * The app title that is shown in the Launcher and the app window.
     */
    title: string;
    /**
     * The app type. Only "web" is allowed.
     */
    type: 'web';
    /**
     * The app owner that is used in the launcher and deviceinfo dialogs.
     */
    vendor: string;
    /**
     * The app version number, comprised of three non-negative integers in the format. The default value is "1.0.0"
     *
     * - DO NOT contain leading zeroes.
     * ```
     * ..
     * e.g. "2.1.0" (not "2.1")
     * ```
     *
     * - The major, minor, and revision numbers are all mandatory; otherwise, the app may not be installed.
     * Each number can have up to nine digits. For example, the maximum version is "999999999.999999999.999999999".
     *
     * - The major, minor, and revision numbers are discrete. For example, "1.5.3" is a lower version than "1.15.3".
     *
     * - After uploading your app on the LG Content Store, you cannot upload the same version of your app again.
     * To update and re-upload an app, you must increase the version number.
     */
    version: string;
    /**
     * The brief information about your app.
     *
     * Think of this as a short tagline for the app. It cannot exceed 60 characters.
     */
    appDescription?: string;
    /**
     * The color of the app background in the Launcher.
     *
     * It is displayed when the bgImage is not provided or unable to display.
     * You can specify the color as a hex value or as an HTML color name.
     * - `Example`: "bgColor":"#5e70a2, "bgColor":"#ffffff"
     *
     * This property is only available in webOS TV v1.x and v2.x. This property is ignored from webOS TV v3.0 or later.
     */
    bgColor?: string;
    /**
     * The background image displayed for your app when activated in the Launcher.
     *
     * The image must be in PNG format, and the image size must be 1920 x 1080 pixels. The file path must be relative to the appinfo.json file.
     * - `Example`: "image/myappbgimage.png"
     *
     * This property is only available in webOS TV v1.x and v2.x. This property is ignored in webOS TV v3.0 or later.
     */
    bgImage?: string;
    /**
     * Set whether your app needs to receive the back key event when the back button of the remote control unit is pressed.
     * For more information about this property, see Back Button.
     * - false (default) - Your app does not need to receive the back key event.
     * Instead, the webOS TV platform manages history using standard HTML history API such as history.pushState(), history.back(), and popState event.
     * - true - Your app needs to receive the back key event. You should implement the method of how to process the back key event in your app.
     */
    disableBackHistoryAPI?: boolean;
    /**
     * Determines how your web app handles the webOSRelaunch event.
     *
     * The webOSRelaunch event occurs whenever your web app is re-launched irrespective of handlesRelaunch property value.
     * webOS TV platform will pass the webOSRelaunch event to your app.
     * This value determines whether the app can take background action or not.
     *
     * If your app sets `handlesRelaunch` to:
     * - false (default) - Your app does not handle the webOSRelaunch event.
     * webOS TV platform will automatically display your app in the full-screen mode.
     * - true - Your app needs to handle the webOSRelaunch event in the background for a while.
     * Then, your app comes to the foreground by calling the PalmSystem.activate() method. See App Lifecycle for more details.
     */
    handlesRelaunch?: boolean;
    /**
     * The background color for your app tile.
     *
     * The app tile is displayed in the Home, the Launcher, and the Recent screen. The default value is white.
     */
    iconColor?: string;
    /**
     * The minimum amount of memory in megabytes required to run your app. This is not the same as the maximum memory usage while your app is running.
     */
    requiredMemory?: number;
    /**
     * The screen resolution of your app.
     *
     * webOS TV does not support UHD resolution for web apps. webOS TV supports the following resolutions:
     * - "1920x1080": FHD resolution (default)
     * - "1280x720": HD resolution
     */
    resolution?: string;
    /**
     * The app background that overlays the system background.
     *
     * This property configures the transparency of the app's background.
     * If you do not set the background color or background image, the system background (black color) is displayed.
     * - false (default) - The transparency rate of the app background is decreased and the system background is shown as a little grey color.
     * - true - The system background is displayed clearly.
     */
    transparent?: string;
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

interface Window {
    webOS: WebOS;
}

declare var webOS: WebOS;
