import Firebase from 'firebase';
import sinon from 'sinon';

/**
 * When a reference is in offline mode it will not call any callbacks
 * until it goes online and resyncs. The ref will have already
 * updated its internal cache with the changed values so we shortcut
 * the process and call the supplied callbacks immediately (asynchronously).
 */
export default function stubFirebase() {

  // check for existing stubbing
  if (!Firebase.prototype.set.restore) {

    var originalSet = Firebase.prototype.set;
    sinon.stub(Firebase.prototype, 'set', function(data, cb) {
      originalSet.call(this, data);
      if (typeof cb === 'function') {
        setTimeout(cb, 0);
      }
    });

    var originalUpdate = Firebase.prototype.update;
    sinon.stub(Firebase.prototype, 'update', function(data, cb) {
      originalUpdate.call(this, data);
      if (typeof cb === 'function') {
        setTimeout(cb, 0);
      }
    });

    var originalRemove = Firebase.prototype.remove;
    sinon.stub(Firebase.prototype, 'remove', function(cb) {
      originalRemove.call(this);
      if (typeof cb === 'function') {
        setTimeout(cb, 0);
      }
    });

  }
}
