# React Patterns Examples

## Compound Pattern

Both the Accordion and Modal components give example on how to build React Component that follow this pattern.

## Adapter Pattern

This example defines a "fake" comp-lib that implements a secure-list that uses a context with an authPort that can be used by an adapter defined by the consumer. The secure-item-list component consumes the secure-list from the comp-lib and defines a auth-adpater and a "fake" auth-client.

Read: https://medium.com/the-software-architecture-chronicles/ports-adapters-architecture-d19f2d476eca

## Singleton Pattern

The socket-manager shows a simple implementation of a Singleton Class using the getInstance.
MessageBus and the components SendMessage and MessageListener displays a message bus that uses a singleton and a hook, useMessageBus, to use it. This Singleton implementation uses the Module Singleton Implementation (exports the instance of the class).
The ThemeProvider shows a combination of using context state handling, local storage and a hook to handle Theme in an application.

Read: https://medium.com/@ignatovich.dm/singletons-in-react-applications-when-and-how-to-use-them-effectively-2a943691949d
