function test_webOSDev() {
    window.webOSDev = webOSDev;
}

function test_APP_BROWSER() {
    // $ExpectType string
    webOSDev.APP.BROWSER;
}

function test_DRM_Error() {
    // $ExpectType number
    webOSDev.DRM.Error.API_NOT_SUPPORTED;
    // $ExpectType number
    webOSDev.DRM.Error.CLIENT_NOT_LOADED;
    // $ExpectType number
    webOSDev.DRM.Error.DRM_TYPE_UNMATCHED;
    // $ExpectType number
    webOSDev.DRM.Error.INVALID_KEY_FORMAT;
    // $ExpectType number
    webOSDev.DRM.Error.INVALID_PARAMS;
    // $ExpectType number
    webOSDev.DRM.Error.INVALID_TIME_INFO;
    // $ExpectType number
    webOSDev.DRM.Error.KEY_NOT_FOUND;
    // $ExpectType number
    webOSDev.DRM.Error.NOT_ERROR;
    // $ExpectType number
    webOSDev.DRM.Error.UNKNOWN_ERROR;
    // $ExpectType number
    webOSDev.DRM.Error.UNSUPPORTED_DRM_TYPE;
    // $ExpectType number
    webOSDev.DRM.Error.VENDOR_ERROR;
    // $ExpectType number
    webOSDev.DRM.Error.WRONG_CLIENT_ID;
}

function test_DRM_Type() {
    // $ExpectType DRMTypePlayready
    webOSDev.DRM.Type.PLAYREADY;
    // $ExpectType DRMTypeWidevine
    webOSDev.DRM.Type.WIDEVINE;
}

function test_LGUDID() {
    // $ExpectType void
    webOSDev.LGUDID({
        onSuccess(res) {
            res; // $ExpectType LGUDIDResponse
            res.id; // $ExpectType string
        },
        onFailure(err) {
            err; // $ExpectType RequestErrorObject
            err.errorCode; // $ExpectType string
            err.errorText; // $ExpectType string
        }
    });
}

function test_connection_getStatus() {
    // $ExpectType void
    webOSDev.connection.getStatus({
        subscribe: true,
        onSuccess(res) {
            res.isInternetConnectionAvailable; // $ExpectType boolean
            test_connection_getStatus_wired(res.wired);
            test_connection_getStatus_wifi(res.wifi);
            test_connection_getStatus_wifiDirect(res.wifiDirect);
        },
        onFailure(err) {
            err; // $ExpectType RequestErrorObject
            err.errorCode; // $ExpectType string
            err.errorText; // $ExpectType string
        }
    });
}

function test_drmAgent() {
    // $ExpectType DRMAgent<DRMTypePlayready>
    const drmAgent = webOSDev.drmAgent(webOSDev.DRM.Type.PLAYREADY);
    // $ExpectType string
    drmAgent.getClientId();
    // $ExpectType DRMTypePlayready
    drmAgent.getDrmType();
    // $ExpectType number
    drmAgent.getErrorCode();
    // $ExpectType string
    drmAgent.getErrorText();
    // $ExpectType void
    drmAgent.getRightsError({
        onSuccess(res) {
            res; // $ExpectType GetRightsErrorResponse
            res.subscribed; // $ExpectType boolean
        },
        onFailure(err) {
            err; // $ExpectType RequestErrorObject
            err.errorCode; // $ExpectType string
            err.errorText; // $ExpectType string
        }
    });
    // $ExpectType void
    drmAgent.isLoaded({
        onSuccess(res) {
            res; // $ExpectType IsLoadedResponse<DRMTypePlayready>
            res.clientId; // $ExpectType string
            res.drmType; // $ExpectType DRMTypePlayready
            res.loadStatus; // $ExpectType boolean
        },
        onFailure(err) {
            err; // $ExpectType RequestErrorObject
            err.errorCode; // $ExpectType string
            err.errorText; // $ExpectType string
        }
    });
    // $ExpectType void
    drmAgent.load({
        onSuccess(res) {
            res; // $ExpectType LoadResponse
            res.clientId; // $ExpectType string
        },
        onFailure(err) {
            err; // $ExpectType RequestErrorObject
            err.errorCode; // $ExpectType string
            err.errorText; // $ExpectType string
        }
    });
    // $ExpectType void
    drmAgent.sendDrmMessage();
    // $ExpectType void
    drmAgent.sendDrmMessage({
        msg: 'some message',
        onSuccess(res) {
            res; // $ExpectType SendDrmMessageResponse
            res.msgId; // $ExpectType string | undefined
            res.resultCode; // $ExpectType number | undefined
            res.resultMsg; // $ExpectType string | undefined
        },
        onFailure(err) {
            err; // $ExpectType RequestErrorObject
            err.errorCode; // $ExpectType string
            err.errorText; // $ExpectType string
        }
    });
    drmAgent.unload({
        onSuccess(res) {
            res; // $ExpectType {}
        },
        onFailure(err) {
            err; // $ExpectType RequestErrorObject
            err.errorCode; // $ExpectType string
            err.errorText; // $ExpectType string
        }
    });
}

function test_launch() {
    // $ExpectType void
    webOSDev.launch({
        id: 'some id',
        params: {},
        onSuccess(res) {
            res; // $ExpectType void
        },
        onFailure(err) {
            err; // $ExpectType RequestErrorObject
            err.errorCode; // $ExpectType string
            err.errorText; // $ExpectType string
        }
    });
}

function test_launchParams() {
    // $ExpectType Record<string, any>
    webOSDev.launchParams();
}

function test_connection_getStatus_wired(wiredStatus: WebOSTV.WiredStatus) {
    // $ExpectType string | undefined
    wiredStatus.dns1;
    // $ExpectType string | undefined
    wiredStatus.dns2;
    // $ExpectType string | undefined
    wiredStatus.dns3;
    // $ExpectType string | undefined
    wiredStatus.gateway;
    // $ExpectType string | undefined
    wiredStatus.interfaceName;
    // $ExpectType string | undefined
    wiredStatus.ipAddress;
    // $ExpectType "Manual" | "dhcp" | undefined
    wiredStatus.method;
    // $ExpectType string | undefined
    wiredStatus.netmask;
    // $ExpectType "yes" | "no" | undefined
    wiredStatus.onInternet;
    // $ExpectType ConnectionState
    wiredStatus.state;
}

function test_connection_getStatus_wifi(wifiStatus: WebOSTV.WifiStatus) {
    // $ExpectType string | undefined
    wifiStatus.dns1;
    // $ExpectType string | undefined
    wifiStatus.dns2;
    // $ExpectType string | undefined
    wifiStatus.dns3;
    // $ExpectType string | undefined
    wifiStatus.gateway;
    // $ExpectType string | undefined
    wifiStatus.interfaceName;
    // $ExpectType string | undefined
    wifiStatus.ipAddress;
    // $ExpectType boolean | undefined
    wifiStatus.isWakeOnWiFiEnabled;
    // $ExpectType "Manual" | "dhcp" | undefined
    wifiStatus.method;
    // $ExpectType string | undefined
    wifiStatus.netmask;
    // $ExpectType "yes" | "no" | undefined
    wifiStatus.onInternet;
    // $ExpectType string | undefined
    wifiStatus.ssid;
    // $ExpectType ConnectionState
    wifiStatus.state;
}

function test_connection_getStatus_wifiDirect(wifiDirectStatus: WebOSTV.WifiDirectStatus) {
    (wifiDirectStatus.connectedPeers as WebOSTV.WifiPeerInfo[]).forEach(test_connection_getStatus_wifiDirect_WifiPeer);
    // $ExpectType string | undefined
    wifiDirectStatus.localIp;
    // $ExpectType ConnectionState
    wifiDirectStatus.state;
}

function test_connection_getStatus_wifiDirect_WifiPeer(wifiPeerInfo: WebOSTV.WifiPeerInfo) {
    // $ExpectType number | undefined
    wifiPeerInfo.configMethod;
    // $ExpectType boolean
    wifiPeerInfo.connected;
    // $ExpectType string | undefined
    wifiPeerInfo.deviceAddress;
    // $ExpectType string
    wifiPeerInfo.deviceName;
    // $ExpectType boolean
    wifiPeerInfo.groupOwner;
    // $ExpectType "true" | "false" | undefined
    wifiPeerInfo.invited;
    // $ExpectType string | undefined
    wifiPeerInfo.peerIp;
    // $ExpectType string | undefined
    wifiPeerInfo.serviceDiscoveryResponse;
    // $ExpectType number | undefined
    wifiPeerInfo.signalLevel;
    // $ExpectType WifiWfdInfo | undefined
    wifiPeerInfo.wfdInfo
    wifiPeerInfo.wfdInfo && test_connection_getStatus_wifiDirect_WifiPeer_wfdInfo(wifiPeerInfo.wfdInfo);
}

function test_connection_getStatus_wifiDirect_WifiPeer_wfdInfo(wfdInfo: WebOSTV.WifiWfdInfo) {
    // $ExpectType boolean
    wfdInfo.wfdCpSupport;
    // $ExpectType WfdDeviceType
    wfdInfo.wfdDeviceType;
    // $ExpectType number
    wfdInfo.wfdRtspPort;
    // $ExpectType boolean
    wfdInfo.wfdSessionAvail;
}

function test_drmAgent_getClientId(drmAgent: WebOSTV.DRMAgent) {
    // $ExpectType string
    drmAgent.getClientId();
}
