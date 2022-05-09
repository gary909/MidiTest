#include <MIDI.h>
MIDI_CREATE_DEFAULT_INSTANCE();

int button1pin = 2;


void setup() {
  MIDI.begin ();
  pinMode(button1pin, INPUT);
  Serial.begin(31250);
}

void loop() {
                                 
  static bool button1valueOld = LOW;
  bool button1valueNew = digitalRead(button1pin);
  ////////////////// Z //////////////    
    if (button1valueNew != button1valueOld){
      if (button1valueNew == HIGH){
      MIDI.sendNoteOn(50, 127, 1); // "Note 1 On"
      delay(100);
      }
      else {
      MIDI.sendNoteOff(50, 0, 1); // "Note 1 On"
      delay(60);
      }  
      button1valueOld = button1valueNew;
    }

}