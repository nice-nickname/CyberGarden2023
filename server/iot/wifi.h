#ifndef WIFI_H
#define WIFI_H

#include <ESP8266WiFi.h>

void connectToWiFi(const char* ssid, const char* passphrase) {
  Serial.begin(9600);
  WiFi.disconnect();
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, passphrase);
  Serial.printf("\nDevice is connecting to WiFi using SSID %s and Passphrase %s.\n", ssid, passphrase);
}

#endif
