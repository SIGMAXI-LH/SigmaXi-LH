import speech_recognition as sr
r = sr.Recognizer()
def fun():
    with sr.Microphone() as source:
     print("say smtn")
     vd=''
     audio=r.listen(source)
     vd=r.recognize_google(audio)
     print(vd)
     return vd

vd=fun()
print(vd)
