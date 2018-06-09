var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign ({}, object, {[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}

function deleteFromObjectByKey(object, key) {
  var clone = Object.assign ({}, object)
  delete clone[key]
  return clone
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return 
}
 describe('destructivelyDeleteFromObjectByKey(object, key)', function() {
    it('returns object without the delete key/value pair', function() {
      var obj = { prop: 1 }
      var newObj = destructivelyDeleteFromObjectByKey(obj, 'prop');

      expect(newObj['prop']).toBe(undefined)
    })
