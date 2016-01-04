# introduction to Value Flows

## example flow

[![coffee grinding flow](./assets/coffee-grinding-flow.svg)](http://knsv.github.io/mermaid/live_editor/#/edit/Z3JhcGggTFIKICBpMShjb2ZmZWUgZ3JpbmRlciktLSB1c2UgLS0-ZgogIGkyKGNvZmZlZSBiZWFucyktLSBjb25zdW1lIC0tPmYKICBpMyhlbGVjdHJpY2l0eSktLSBjb25zdW1lIC0tPmYKICBpNChhZ2VudCktLSB1c2UgLS0-ZgogIGYoKGNvZmZlZSBncmluZGluZyBmbG93KSktLSBwcm9kdWNlIC0tPm8xCiAgbzEoZ3JvdW5kIGNvZmZlZSk)


```mermaid
%% coffee grinding flow
graph LR
  i1(coffee grinder)-- use -->f
  i2(coffee beans)-- consume -->f
  i3(electricity)-- consume -->f
  i4(person)-- use -->f
  f((coffee grinding flow))-- produce -->o1
  o1(ground coffee)
```
