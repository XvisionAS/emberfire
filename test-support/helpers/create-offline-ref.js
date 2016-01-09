import Firebase from 'firebase';

function noop() {}

/**
 * Creates an offline Firebase reference with optional initial data and url.
 *
 * Be sure to `stubFirebase()` and `unstubFirebase()` in your tests!
 *
 * @param  {Object} [initialData]
 * @param  {String} [url]
 * @return {Firebase}
 */
export default function createOfflineRef(initialData, url = 'https://emberfire-tests.firebaseio.com') {
  var ref = new Firebase(url);
  Firebase.goOffline(); // must be called after the ref is created
  ref.on('value', noop);
  ref.off('value', noop);

  if (initialData) {
    ref.set(initialData);
  }

  return ref;
}
