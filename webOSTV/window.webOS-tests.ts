(() => {
    function test_deviceInfo() {
        window.webOS.deviceInfo(deviceInfo => {
            console.log(deviceInfo.modelName);
            console.log(deviceInfo.modelNameAscii);
            console.log(deviceInfo.screenHeight);
            console.log(deviceInfo.screenWidth);
            console.log(deviceInfo.sdkVersion);
            console.log(deviceInfo.uhd);
            console.log(deviceInfo.version);
            console.log(deviceInfo.versionDot);
            console.log(deviceInfo.versionMajor);
            console.log(deviceInfo.versionMinor);
        });
    }

    function test_fetchAppId() {
        console.log(window.webOS.fetchAppId());
    }

    function test_fetchAppInfo() {
        window.webOS.fetchAppInfo(appInfo => {
            console.log(typeof appInfo);
            console.log(appInfo);
        });
    }

    function test_fetchAppRootPath() {
        console.log(window.webOS.fetchAppRootPath());
    }

    function test_keyboard_isShowing() {
        console.log(window.webOS.keyboard.isShowing());
    }

    function test_libVersion() {
        console.log(window.webOS.libVersion);
    }

    function test_platform_tv() {
        console.log(window.webOS.platform.tv);
    }

    function test_platformBack() {
        window.webOS.platformBack();
    }

    function test_systemInfo() {
        const systemInfo = window.webOS.systemInfo();
        console.log(systemInfo.country);
        console.log(systemInfo.smartServiceCountry);
        console.log(systemInfo.timezone);
    }

    function test_service_request() {
        window.webOS.service.request('luna://com.palm.systemservice', {
            method: 'time/getSystemTime',
            parameters: { subscribe: true },
            onSuccess(res) {
                console.log('system time suc', res);
            },
            onFailure(res) {
                console.log('system time fail', res);
            }
        });
    }
})();
