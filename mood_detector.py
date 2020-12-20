import cv2
import numpy as np
from tensorflow.keras.models import load_model


#------------------------------------------------------------
def extractor(img):
    img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    face = face_detector.detectMultiScale(img,
                                          scaleFactor=1.3,
                                          minNeighbors=1,
                                          minSize=(30, 30))
    if face == ():
        return None

    for (x, y, w, h) in face:
        x = x - 10
        y = y - 10
        cropped_face = img[y: y+h+50, x: x+w+50]
    
    return cropped_face

#--------------------------------------------------------------
def capture_images():
    capture = cv2.VideoCapture(0)
    img_count = 0
    input_images = []
    while True:
        _, frame = capture.read()
        frame = cv2.flip(frame, 1)
        face = extractor(frame)
        if face is not None:
            face = cv2.resize(face, (input_shape[0], input_shape[1]))
            face = np.reshape(face, input_shape)
            input_images.append(face)
            img_count += 1
        else:
            print("Face not found...")
            pass
        if img_count==60 or cv2.waitKey(1) & 0xFF == 27:
            break
    capture.release()
    cv2.destroyAllWindows()
    return np.array(input_images)

#-------------------------------------------------------------
def detect_mood(images):
    model = load_model(model_path)
    moods = model.predict(images)
    moods = np.argmax(moods, axis=-1)
    mood = np.bincount(moods)
    mood = np.argmax(mood)
    mood = num2mood[mood]
    return mood

#--------------------------------------------------------------    
if __name__=='__main__':
    labels = {'angry': 0, 'disgust': 1, 'fear': 2, 'happy': 3, 'neutral': 4, 'sad': 5, 'surprise': 6}
    num2mood = {val: key for key, val in labels.items()}
    input_shape = (44, 44, 1)
    model_path = 'C:/Users/Rithik/Desktop/EMOTION RECOGNITION/emotion_detector.h5'
    cascade_path = 'haarcascade_frontalface_default.xml'
    face_detector = cv2.CascadeClassifier(cascade_path)
    input_images = capture_images()
    mood = detect_mood(input_images[10:50])
