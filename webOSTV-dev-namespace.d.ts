/// <reference path="main.d.ts" />
/// <reference path="drmAgent.d.ts" />

declare namespace WebOSTVLibrary.WebOSTVDev {
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
        drmAgent(type: DRMType[keyof DRMType]): DRMAgent.DRMAgent;
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
}

declare var webOSDev: WebOSTVLibrary.WebOSTVDev.WebOSDev;

