import Firebase from 'firebase';

export default function unstubFirebase() {
  ['set', 'update', 'remove'].forEach((method) => {
    if (Firebase.prototype[method].restore) {
      Firebase.prototype[method].restore();
    }
  });
}
