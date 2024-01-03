#include "WiFi.h"

const char* ssid = esp32;
const char* passphrase = esp323232;

const char * apiKey = tvhsd832gguj;
const char* token = 567431;
const char* deviceId = 1;

const int trigPin = 12;
const int echoPin = 14;

#define SOUND_VELOCITY 0.034

long duration;
float distanceCm;

void setup() {
  Serial.begin(115200); 
  pinMode(trigPin, OUTPUT); 
  pinMode(echoPin, INPUT); 
  connectToWiFi(ssid, passphrase);
  project = grandeur.init(apiKey, token);
}

void loop() {

  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);

  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  duration = pulseIn(echoPin, HIGH);
  distanceCm = duration * SOUND_VELOCITY/2;

  if(distanceCm<25)
   project.device(deviceId).data().set("volume", distanceCm);
   
  
  else
  project.device(deviceId).data().set("volume", "warning Empty!");

  delay(1000);
}
