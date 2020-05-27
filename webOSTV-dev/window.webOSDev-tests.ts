(() => {
    function test_APP_BROWSER() {
        console.log(window.webOSDev.APP.BROWSER);
    }

    function test_DRM_Error() {
        console.log(window.webOSDev.DRM.Error.API_NOT_SUPPORTED);
        console.log(window.webOSDev.DRM.Error.CLIENT_NOT_LOADED);
        console.log(window.webOSDev.DRM.Error.DRM_TYPE_UNMATCHED);
        console.log(window.webOSDev.DRM.Error.INVALID_KEY_FORMAT);
        console.log(window.webOSDev.DRM.Error.INVALID_PARAMS);
        console.log(window.webOSDev.DRM.Error.INVALID_TIME_INFO);
        console.log(window.webOSDev.DRM.Error.KEY_NOT_FOUND);
        console.log(window.webOSDev.DRM.Error.NOT_ERROR);
        console.log(window.webOSDev.DRM.Error.UNKNOWN_ERROR);
        console.log(window.webOSDev.DRM.Error.UNSUPPORTED_DRM_TYPE);
        console.log(window.webOSDev.DRM.Error.VENDOR_ERROR);
        console.log(window.webOSDev.DRM.Error.WRONG_CLIENT_ID);
    }

    function test_DRM_Type() {
        console.log(window.webOSDev.DRM.Type.PLAYREADY);
        console.log(window.webOSDev.DRM.Type.WIDEVINE);
    }

    function test_LGUDID() {
        window.webOSDev.LGUDID({
            onSuccess(res) {
                console.log(res.id);
            },
            onFailure(err) {
                console.log(err.errorCode);
                console.log(err.errorText);
            }
        });
    }

    function test_connection_getStatus() {
        window.webOSDev.connection.getStatus({
            subscribe: true,
            onSuccess(res) {
                console.log(res.isInternetConnectionAvailable);
                test_connection_getStatus_wired(res.wired);
                test_connection_getStatus_wifi(res.wifi);
                test_connection_getStatus_wifiDirect(res.wifiDirect);
            },
            onFailure(err) {
                console.log(err.errorCode);
                console.log(err.errorText);
            }
        });
    }

    function test_drmAgent() {
        const drmAgent = window.webOSDev.drmAgent(window.webOSDev.DRM.Type.PLAYREADY);
        console.log(drmAgent.getClientId());
        console.log(drmAgent.getDrmType());
        console.log(drmAgent.getErrorCode());
        console.log(drmAgent.getErrorText());
        drmAgent.getRightsError({
            onSuccess(res) {
                console.log(res.subscribed);
            },
            onFailure(err) {
                console.log(err.errorCode);
                console.log(err.errorText);
            }
        });
        drmAgent.isLoaded({
            onSuccess(res) {
                console.log(res.clientId);
                console.log(res.drmType);
                console.log(res.loadStatus);
            },
            onFailure(err) {
                console.log(err.errorCode);
                console.log(err.errorText);
            }
        });
        drmAgent.load({
            onSuccess(res) {
                console.log(res.clientId);
            },
            onFailure(err) {
                console.log(err.errorCode);
                console.log(err.errorText);
            }
        });
        drmAgent.sendDrmMessage();
        drmAgent.sendDrmMessage({
            msg: 'some message',
            onSuccess(res) {
                console.log(res.msgId);
                console.log(res.resultCode);
                console.log(res.resultMsg);
            },
            onFailure(err) {
                console.log(err.errorCode);
                console.log(err.errorText);
            }
        });
        drmAgent.unload({
            onSuccess(res) {
                console.log(res);
            },
            onFailure(err) {
                console.log(err.errorCode);
                console.log(err.errorText);
            }
        });
    }

    function test_launch() {
        window.webOSDev.launch({
            id: 'some id',
            params: {},
            onSuccess(res) {
                console.log(res);
            },
            onFailure(err) {
                console.log(err.errorCode);
                console.log(err.errorText);
            }
        });
    }

    function test_launchParams() {
        console.log(window.webOSDev.launchParams());
    }

    function test_connection_getStatus_wired(wiredStatus: WiredStatus) {
        console.log(wiredStatus.dns1);
        console.log(wiredStatus.dns2);
        console.log(wiredStatus.dns3);
        console.log(wiredStatus.gateway);
        console.log(wiredStatus.interfaceName);
        console.log(wiredStatus.ipAddress);
        console.log(wiredStatus.method);
        console.log(wiredStatus.netmask);
        console.log(wiredStatus.onInternet);
        console.log(wiredStatus.state);
    }

    function test_connection_getStatus_wifi(wifiStatus: WifiStatus) {
        console.log(wifiStatus.dns1);
        console.log(wifiStatus.dns2);
        console.log(wifiStatus.dns3);
        console.log(wifiStatus.gateway);
        console.log(wifiStatus.interfaceName);
        console.log(wifiStatus.ipAddress);
        console.log(wifiStatus.isWakeOnWiFiEnabled);
        console.log(wifiStatus.method);
        console.log(wifiStatus.netmask);
        console.log(wifiStatus.onInternet);
        console.log(wifiStatus.ssid);
        console.log(wifiStatus.state);
    }

    function test_connection_getStatus_wifiDirect(wifiDirectStatus: WifiDirectStatus) {
        const { connectedPeers = [] } = wifiDirectStatus;
        connectedPeers.forEach(test_connection_getStatus_wifiDirect_WifiPeer);
        console.log(wifiDirectStatus.localIp);
        console.log(wifiDirectStatus.state);
    }

    function test_connection_getStatus_wifiDirect_WifiPeer(wifiPeerInfo: WifiPeerInfo) {
        console.log(wifiPeerInfo.configMethod);
        console.log(wifiPeerInfo.connected);
        console.log(wifiPeerInfo.deviceAddress);
        console.log(wifiPeerInfo.deviceName);
        console.log(wifiPeerInfo.groupOwner);
        console.log(wifiPeerInfo.invited);
        console.log(wifiPeerInfo.peerIp);
        console.log(wifiPeerInfo.serviceDiscoveryResponse);
        console.log(wifiPeerInfo.signalLevel);
        wifiPeerInfo.wfdInfo && test_connection_getStatus_wifiDirect_WifiPeer_wfdInfo(wifiPeerInfo.wfdInfo);
    }

    function test_connection_getStatus_wifiDirect_WifiPeer_wfdInfo(wfdInfo: WifiWfdInfo) {
        console.log(wfdInfo.wfdCpSupport);
        console.log(wfdInfo.wfdDeviceType);
        console.log(wfdInfo.wfdRtspPort);
        console.log(wfdInfo.wfdSessionAvail);
    }

    function test_drmAgent_getClientId(drmAgent: DRMAgent) {
        drmAgent.getClientId();
    }
})();
