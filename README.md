# React Patterns Examples

## Compound Pattern

Both the Accordion and Modal components give example on how to build React Component that follow this pattern.

## Adapter Pattern

This example defines a "fake" comp-lib that implements a secure-list that uses a context with an authPort that can be used by an adapter defined by the consumer. The secure-item-list component consumes the secure-list from the comp-lib and defines a auth-adpater and a "fake" auth-client.

Read: https://medium.com/the-software-architecture-chronicles/ports-adapters-architecture-d19f2d476eca
