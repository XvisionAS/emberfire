import Firebase from 'firebase';

export default function unstubFirebase() {

  if (!Firebase.prototype.set.restore) {
    Firebase.prototype.set.restore();
    Firebase.prototype.update.restore();
    Firebase.prototype.remove.restore();
  }
}
