import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { ConfigurationScreen } from "../configScreen/configScreen";

declare var Capacitor
const { WifiEapConfigurator } = Capacitor.Plugins;

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})

export class WelcomePage {

  constructor(private platform: Platform, public navCtrl: NavController, public navParams: NavParams) {

  }

  // async configure() {
  //  await WifiEapConfigurator.configureAP({ssid: "eduroam", username: "xxxx@alu.upo.es", password: "xxxx", eap: 21, servername: "", auth: 5, anonymous: "", 
  //   caCertificate: 
  //   "MIIDtzCCAp+gAwIBAgIQDOfg5RfYRv6P5WD8G/AwOTANBgkqhkiG9w0BAQUFADBlMQswCQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMRkwFwYDVQQLExB3d3cuZGlnaWNlcnQuY29tMSQwIgYDVQQDExtEaWdpQ2VydCBBc3N1cmVkIElEIFJvb3QgQ0EwHhcNMDYxMTEwMDAwMDAwWhcNMzExMTEwMDAwMDAwWjBlMQswCQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMRkwFwYDVQQLExB3d3cuZGlnaWNlcnQuY29tMSQwIgYDVQQDExtEaWdpQ2VydCBBc3N1cmVkIElEIFJvb3QgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCtDhXO5EOAXLGH87dg+XESpa7cJpSIqvTO9SA5KFhgDPiA2qkVlTJhPLWxKISKityfCgyDF3qPkKyK53lTXDGEKvYPmDI2dsze3Tyoou9q+yHyUmHfnyDXH+Kx2f4YZNISW1/5WBg1vEfNoTb5a3/UsDg+wRvDjDPZ2C8Y/igPs6eD1sNuRMBhNZYW/lmci3Zt1/GiSw0r/wty2p5g0I6QNcZ4VYcgoc/lbQrISXwxmDNsIumH0DJaoroTghHtORedmTpyoeb6pNnVFzF1roV9Iq4/AUaG9ih5yLHa5FcXxH4cDrC0kqZWs72yl+2qp/C3xag/lRbQ/6GW6whfGHdPAgMBAAGjYzBhMA4GA1UdDwEB/wQEAwIBhjAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBRF66Kv9JLLgjEtUYunpyGd823IDzAfBgNVHSMEGDAWgBRF66Kv9JLLgjEtUYunpyGd823IDzANBgkqhkiG9w0BAQUFAAOCAQEAog683+Lt8ONyc3pklL/3cmbYMuRCdWKuh+vy1dneVrOfzM4UKLkNl2BcEkxY5NM9g0lFWJc1aRqoR+pWxnmrEthngYTffwk8lOa4JiwgvT2zKIn3X/8i4peEH+ll74fg38FnSbNd67IJKusm7Xi+fT8r87cmNW1fiQG2SVufAQWbqz0lwcy2f8Lxb4bG+mRo64EtlOtCt/qMHt1i8b5QZ7dsvfPxH2sMNgcWfzd8qVttevESRmCD1ycEvkvOl77DZypoEd+A5wwzZr8TDRRu838fYxAe+o0bJW1sj6W3YQGx0qMmoRBxna3iw/nDmVG3KwcIzi7mULKn+gpFL6Lw8g=="})

  // }

  async configure() {
    await WifiEapConfigurator.configureAP({
      ssid: "eduroam", username: "xxxx@alu.upo.es", password: "xxxx", eap: 13, servername: "", auth: 5, anonymous: "f62f2169-d246-432d-90eb-743284a7bd83@demo.eduroam.no",
      passPhrase: "5e43b9bb2fbf9",
      caCertificate: "MIID6DCCAtCgAwIBAgIBADANBgkqhkiG9w0BAQsFADBWMQswCQYDVQQGEwJOTzESMBAGA1UEBwwJVHJvbmRoZWltMRMwEQYDVQQKDApVbmluZXR0IEFTMR4wHAYDVQQDDBVnZXRlZHVyb2FtLm5vIGRlbW8gQ0EwHhcNMTkxMDI4MjIzNzU5WhcNMjkxMDI1MjIzNzU5WjBWMQswCQYDVQQGEwJOTzESMBAGA1UEBwwJVHJvbmRoZWltMRMwEQYDVQQKDApVbmluZXR0IEFTMR4wHAYDVQQDDBVnZXRlZHVyb2FtLm5vIGRlbW8gQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCnk9ui7c00MjJt5nedAj0wdIOvTa3HtYdFeziE2a3i32TaxZEuB0ioYw9Od7rkdzo9IW3Q5aQbeSFSws/tPWmW36XtxTgZ9LEYkb9JzLxCLeeBzDtMHkk0hGpHRPqsHG9yKGNVg3tNv0BY81MzxQQNZybyWFCbkbE+9I67e48MonwlNVz6LMUMgi4P2os55JiRR0wvOETQmi2f/o60lxBsq4M6E9XMIPKQgoZ+La/Aov12dYlLEWdK7X17i6iLBIMGljrWXBDXkkYaxbIeoIt8EQr+z96WcLbwoCRfesCsJN2kEN4QZMzt79039xCyuZ1ah12muTIZSrMugE/EjrqVAgMBAAGjgcAwgb0wHQYDVR0OBBYEFOivI6HDBGDcOr7hCUEdQMXQ3lQ7MH4GA1UdIwR3MHWAFOivI6HDBGDcOr7hCUEdQMXQ3lQ7oVqkWDBWMQswCQYDVQQGEwJOTzESMBAGA1UEBwwJVHJvbmRoZWltMRMwEQYDVQQKDApVbmluZXR0IEFTMR4wHAYDVQQDDBVnZXRlZHVyb2FtLm5vIGRlbW8gQ0GCAQAwDwYDVR0TAQH/BAUwAwEB/zALBgNVHQ8EBAMCAYYwDQYJKoZIhvcNAQELBQADggEBADQk5KyfrOONYweGWPvCS+zkLsjtPW84NHu6MQCqZ4shG7JUgpU5Un9MZvLdu2EN9rHQN0koy/fJy7sdT1fJNNq8pN0M/s/+IC4qNebrDXqCHiP8iI+oM3xRNxUSdm85MO/Lswc7h/4h06X7amUv5LOzauhQSXDj6TVNcQfnxWvXGPBPil4bXdXpfs8WhJPvLXd88YV8lA/CzSqc7skJc/ARRTKr6QcIKEXBNiU+eJII33/ZRuYXMfHvdT/1M2k7UgFTU9igXxkXsnihRii+kT64934D/vXkvSJYZcCKV4BoysYUVPoQ1nijXJeCJh8XvFdeT0p6HXdba68o2XGL4HE=",
      clientCertificate: "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"
    })
  }

  //  async configure() { sername: "xxxx@alu.upo.es", password: "xxxx", eap: 13, servername: "", auth: 5, 
  //  anonymous: "f62f2169-d246-432d-90eb-743284a7bd83@demo.eduroam.no"})

  // }

  async networkAssociated() {
    let res = await WifiEapConfigurator.isNetworkAssociated({ ssid: "GT-Internet" })
    console.log(res.message)
    console.log(res.success)
  }

  async removeNetwork() {
    let res = await WifiEapConfigurator.removeNetwork({ ssid: "GT-Internet" })
    console.log(res.message)
    console.log(res.success)
  }

  async isConnectedSSID() {
    let res = await WifiEapConfigurator.isConnectedSSID({ ssid: "eduroam" })
    console.log(res.message)
    console.log(res.success)
  }


  async enableWifi() {
    await WifiEapConfigurator.enableWifi()
  }

  async navigateTo() {
    await this.navCtrl.push(ConfigurationScreen);
  }

  exitApp() {
    this.platform.exitApp();
  }
}
