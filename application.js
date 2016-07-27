someImportantFunction:( thing ) {
  return someInterestingFunction( thing );
}

someInterestingFunction:( thing ) {
  return thing.somethingInteresting()
}

someOtherInterestingFunction:( thing ) {
 return thing.somethingElseInteresting()
}

anAditionalFeature:( thing ) {
  someOtherInterestingThing() ? weFoundSomeThings() : noThingsFound()
}

weFoundSomeThings:() {
  return true
}

noThingsFound:() {
  return false
}
