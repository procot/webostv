declare namespace WebOSTV {
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

    interface GetConnectionStatusParameters extends RequestParams<ConnectionStatus> {
        /**
         * Indicates whether to subscribe the network connection status.
         * - true: Subscribe the network connection status.
         * - false: Not subscribe the network connection status.
         */
        subscribe: boolean;
    }

    interface ConnectionStatus {
        /**
         * Indicates whether the internet connection is available.
         * - true: The internet connection is available.
         * - false: The internet connection is unavailable.
         */
        isInternetConnectionAvailable: boolean;
        /**
         * The object that contains information about the state of the wired connection.
         */
        wired: WiredStatus;
        /**
         * The object that contains information about the state of the WiFi connection.
         */
        wifi: WifiStatus;
        /**
         * The object that contains information about the state of the WiFi direct connection.
         */
        wifiDirect: WifiDirectStatus;
    }

    /**
     * The wired object provides details on the status of the wired connections.
     * Only if the wired connection is available will all the fields of this object contain the relevant information.
     * If the wired connection is not available, the state field of this object will be set to disconnected
     * and is the only value that is returned to the calling app.
     */
    interface WiredStatus {
        /**
         * If the wired connection is available it will be set to connected.
         * If the wired connection is not available, it will be set to disconnected .
         */
        state: 'connected' | 'disconnected';
        /**
         * Name of the wired Interface name in use. For example, ppp0.
         */
        interfaceName?: string;
        /**
         * The IP address associated with the wired connection.
         */
        ipAddress?: string;
        /**
         * The netmask value for the wired connection.
         */
        netmask?: string;
        /**
         * The IP address of the network gateway.
         */
        gateway?: string;
        /**
         * Primary DNS address for the wired connection.
         */
        dns1?: string;
        /**
         * Secondary DNS address for the wired connection.
         */
        dns2?: string;
        /**
         * Tertiary DNS address for the wired connection.
         */
        dns3?: string;
        /**
         * If the IP address was assigned using the manual mode, method will contain 'Manual'.
         * If the IP Address was assigned through DHCP, method will contain 'dhcp'.
         */
        method?: 'Manual' | 'dhcp';
        /**
         * The captive portal technique forces an HTTP client on a network to see a special web page
         * (usually for authentication purposes) before using the Internet normally.
         * Captive portals are used at most Wi-Fi hotspots.
         * The onInternet will contain one of the following values:
         * - 'yes' - indicating the WiFi connection is connected to the Internet.
         * - 'no' - indicating the WiFi connection is not connected to the Internet.
         */
        onInternet?: 'yes' | 'no';
    }

    /**
     * The wifi object provides details on the status of the WiFi connection.
     * Only if the WiFi connection is available all the fields of this object will contain the relevant information.
     * If the WiFi connection is not available, only the state field of this object will be set to disconnected,
     * and is the only value that is returned to the calling app.
     */
    interface WifiStatus {
        /**
         * If the Wi-Fi connection is available it will be set to 'connected'.
         * If the Wi-Fi connection is not available, it will be set to 'disconnected' .
         */
        state: 'connected' | 'disconnected';
        /**
         * Name of the Wi-Fi Interface name in use. For example, eth0.
         */
        interfaceName?: string;
        /**
         * The IP address associated with the Wi-Fi connection.
         */
        ipAddress?: string;
        /**
         * The netmask value for the Wi-Fi connection.
         */
        netmask?: string;
        /**
         * The IP address of the network gateway.
         */
        gateway?: string;
        /**
         * Primary DNS address for the Wi-Fi connection.
         */
        dns1?: string;
        /**
         * Secondary DNS address for the Wi-Fi connection.
         */
        dns2?: string;
        /**
         * Tertiary DNS address for the Wi-Fi connection.
         */
        dns3?: string;
        /**
         * If the IP address was assigned using the manual mode, method will contain 'Manual'.
         * If the IP Address was assigned through DHCP, method will contain 'dhcp'.
         */
        method?: 'Manual' | 'dhcp';
        /**
         * The SSID of the connected service (if known).
         */
        ssid?: string;
        /**
         * If the Wi-Fi interface was set to stay up even when suspended, isWakeOnWiFiEnabled will contain true.
         * If the Wi-Fi interface was not set to stay up when suspended, isWakeOnWiFiEnabled will contain false.
         */
        isWakeOnWiFiEnabled?: boolean;
        /**
         * The captive portal technique forces an HTTP client on a network to see a special web page
         * (usually for authentication purposes) before using the Internet normally.
         * Captive portals are used at most Wi-Fi hotspots.
         * The onInternet will contain one of the following values:
         * - yes - indicating the Wi-Fi connection is connected to the Internet.
         * - no - indicating the Wi-Fi connection is not connected to the Internet.
         */
        onInternet?: 'yes' | 'no';
    }

    /**
     * The wifidirect object provides details on the status of the Wi-Fi direct connection.
     * Only if the Wi-Fi direct connection is available all the fields of this object will contain the relevant information.
     * If the Wi-Fi direct connection is not available, only the state field of this object will be set to disconnected,
     * and is the only value that is returned to the calling app.
     */
    interface WifiDirectStatus {
        /**
         * If the Wi-Fi connection is available it will be set to 'connected'.
         * If the Wi-Fi connection is not available, it will be set to 'disconnected'.
         */
        state: 'connected' | 'disconnected';
        /**
         * The IP address of the local connection endpoint.
         */
        localIp?: string;
        /**
         * A list of objects that provides information about connected peers.
         */
        connectedPeers?: WifiPeerInfo[];
    }

    /**
     * This object contains information on a peer-to-peer client.
     */
    interface WifiPeerInfo {
        /**
         * Device name.
         */
        deviceName: string;
        /**
         * Device address.
         */
        deviceAddress?: string;
        /**
         * Group owner.
         */
        groupOwner: boolean;
        /**
         * Configuration method.
         */
        configMethod?: number;
        /**
         * Signal level.
         */
        signalLevel?: number;
        /**
         * WFD information.
         */
        wfdInfo?: WifiWfdInfo;
        /**
         * Connection status.
         */
        connected: boolean;
        /**
         * IPv4 address.
         */
        peerIp?: string;
        /**
         * If the connection is available, this property will be set to 'true'.
         * if the connection is not available, this property will be set to 'false'.
         */
        invited?: 'true' | 'false';
        /**
         * Service discovery response. Only sent on the first inquiry and never again.
         */
        serviceDiscoveryResponse?: string;
    }

    /**
     * WifiWfdInfo Object (Wi-Fi Direct Info Object)
     *
     * This object contains information on the Wi-Fi Direct settings of a Wi-Fi Peer connection.
     * It is used in Wi-Fi Peer Info and is only present when the connection uses Wi-Fi Direct.
     */
    interface WifiWfdInfo {
        /**
         * The flag that indicates whether the Wi-Fi Direct content protection is supported:
         * - true: Supported.
         * - false: Not supported.
         */
        wfdCpSupport: boolean;
        /**
         * Wi-Fi Direct device type, one of:
         * - 'source'
         * - 'primary-sink'
         * - 'secondary-sink'
         */
        wfdDeviceType: 'source' | 'primary-sink' | 'secondary-sink';
        /**
         * Control port for Wi-Fi Direct session management.
         */
        wfdRtspPort: number;
        /**
         * The flag that indicates whether the session is available:
         * - true: Available.
         * - false: Not available.
         */
        wfdSessionAvail: boolean;
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

    interface DRMType {
        /** PlayReady */
        PLAYREADY: string;
        /** Widevine */
        WIDEVINE: string;
    }

    interface DRMError {
        /**
         * No error.
         */
        NOT_ERROR: number;
        /**
         * The DRM client is not loaded.
         */
        CLIENT_NOT_LOADED: number;
        /**
         * The vendor managed error.
         */
        VENDOR_ERROR: number;
        /**
         * This API is not supported in the activated DRM.
         */
        API_NOT_SUPPORTED: number;
        /**
         * There is no process matching to the client ID.
         */
        WRONG_CLIENT_ID: number;
        /**
         * It cannot find a key file in DRM store.
         */
        KEY_NOT_FOUND: number;
        /**
         * A part of parameters is not valid data or format.
         */
        INVALID_PARAMS: number;
        /**
         * It's not a supported DRM type.
         */
        UNSUPPORTED_DRM_TYPE: number;
        /**
         * The key file is not a valid format.
         */
        INVALID_KEY_FORMAT: number;
        /**
         * It cannot get the valid time information.
         */
        INVALID_TIME_INFO: number;
        /**
         * The DRM type of the currently loaded client is not matched with the DRM type
         * that was set when the DRM agent is created.
         */
        DRM_TYPE_UNMATCHED: number;
        /**
         * It's an unknown error.
         */
        UNKNOWN_ERROR: number;
    }

    interface GetRightsErrorResponse {
        /**
         * Flag that indicates whether the subscription is enabled or not.
         * - true: Enabled
         * - false: Not enabled
         */
        subscribed: boolean;
    }

    interface IsLoadedResponse {
        /**
         * Indicates the DRM client is loaded.
         * - true: the DRM client is loaded.
         * - false: the DRM client is not loaded.
         */
        loadStatus: boolean;
        /**
         * Returns the loaded client ID when the DRM client is loaded successfully.
         */
        clientId: string;
        /**
         * Returns the client type of DRM when the DRM client is loaded successfully.
         */
        drmType: DRMType[keyof DRMType];
    }

    interface LoadResponse {
        /**
         * If the DRM agent loaded the DRM client successfully, return its client ID.
         */
        clientId: string;
    }

    interface SendDrmMessageParams extends RequestParams<SendDrmMessageResponse> {
        /**
         * The message to be provided to the underlying DRM server, which is formatted according to the DRM type.
         */
        msg: string;
    }

    interface SendDrmMessageResponse {
        /**
         * The unique ID of message which has led to this resulting message.
         */
        msgId?: string;
        /**
         * The result code only for PlayReady.
         */
        resultCode?: number;
        /**
         * The DRM system specific result message only for PlayReady.
         */
        resultMsg?: string;
    }

    interface DRMAgent {
        /**
         * Returns a client ID of DRM.
         */
        getClientId(): string;
        /**
         * Returns a DRM type to be set.
         */
        getDrmType(): DRMType[keyof DRMType];
        /**
         * Returns an error code from the DRM service.
         */
        getErrorCode(): DRMError[keyof DRMError];
        /**
         * Returns a text represented by an error from the DRM service.
         */
        getErrorText(): string;
        /**
         * Returns error information when an error of the DRM license occurs during content playback.
         * This method is supported in the following DRM type only:
         * - PlayReady
         */
        getRightsError(params: RequestParams<GetRightsErrorResponse>): void;
        /**
         * Checks whether a DRM client that corresponds to given application ID exists.
         */
        isLoaded(params: RequestParams<IsLoadedResponse>): void;
        /**
         * Creates a client instance for a certain type of DRM.
         * The DRM type is specified when a DRM agent is created.
         */
        load(params: RequestParams<LoadResponse>): void;
        /**
         * Sends a DRM message to a DRM service.
         * After receiving the message, the DRM service starts to parse the message and perform the DRM operation.
         */
        sendDrmMessage(params?: SendDrmMessageParams): void;
        /**
         * Removes a DRM client instance and deallocates relevant resources.
         */
        unload(params: RequestParams<{}>): void;
    }

    interface LaunchParameters extends RequestParams<void> {
        /**
         * The app ID or webOSDev.APP
         */
        id: string;
        /**
         * The JSON data object to pass when launching an app
         */
        params: object;
    }

    interface LGUDIDResponse {
        /**
         * LG unique device ID.
         */
        id: string;
    }

    interface ServiceRequestParams extends Partial<RequestParams<any>> {
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

    interface WebOSDev {
        /**
         * A member representing the list of built-in apps on the webOS TV opened to external developers.
         */
        readonly APP: {
            /** The built-in browser on the webOS TV */
            BROWSER: string;
        };
        /**
         * An object containing properties that represent the DRM error number and the DRM type.
         */
        readonly DRM: {
            /** The error number from DRM service */
            Error: DRMError;
            /** The type of DRM */
            Type: DRMType;
        };
        readonly connection: {
            /**
             * Returns the network connection state.
             */
            getStatus(params: GetConnectionStatusParameters): void;
        };
        /**
         * Returns DRMAgent instance of a specific DRM type.
         * @param type The DRM type to be set to the DRMAgent instance.
         * The value of the DRM type must be taken from `DRM.Type` field (`DRM.Type.PLAYREADY` or `DRM.Type.WIDEVINE`)
         *
         * @example
         * const drmType = webOSDevPromised.DRM.Type;
         * const drmAgent = webOSDevPromised.drmAgent(drmType);
         */
        drmAgent(type: DRMType[keyof DRMType]): DRMAgent;
        /**
         * Launches an application with parameters.
         * @param parameters The JSON object containing an app ID, parameters
         */
        launch(params: LaunchParameters): void;
        /**
         * Passes parameters of an app launched by the webOSDev.launch method.
         */
        launchParams(): ObjectValue;
        /**
         * Returns a device ID provided by the webOS TV since webOS TV 3.0.
         */
        LGUDID(params: RequestParams<LGUDIDResponse>): void;
    }
}

declare var webOS: WebOSTV.WebOS;
declare var webOSDev: WebOSTV.WebOSDev;

declare module '@procot/webostv' {
    export = WebOSTV;
}
